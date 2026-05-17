import fs from "node:fs";
import path from "node:path";
import process from "node:process";

const rootDir = process.cwd();
const htmlFiles = fs
  .readdirSync(rootDir)
  .filter((file) => file.endsWith(".html"))
  .sort();

const htmlCache = new Map();
const idCache = new Map();
const problems = [];

function readHtml(relativeFile) {
  if (!htmlCache.has(relativeFile)) {
    htmlCache.set(
      relativeFile,
      fs.readFileSync(path.join(rootDir, relativeFile), "utf8"),
    );
  }
  return htmlCache.get(relativeFile);
}

function collectIds(relativeFile) {
  if (idCache.has(relativeFile)) {
    return idCache.get(relativeFile);
  }

  const html = readHtml(relativeFile);
  const ids = new Set();
  const idPattern = /\bid\s*=\s*(["'])([^"']+)\1/g;
  let match;

  while ((match = idPattern.exec(html)) !== null) {
    ids.add(match[2]);
  }

  idCache.set(relativeFile, ids);
  return ids;
}

function lineNumber(source, index) {
  return source.slice(0, index).split("\n").length;
}

function report(file, html, index, message) {
  problems.push(`${file}:${lineNumber(html, index)} ${message}`);
}

function isExternalOrSpecial(value) {
  return (
    value.startsWith("//") ||
    /^(https?:|mailto:|tel:|data:|javascript:)/i.test(value)
  );
}

function stripQueryAndHash(value) {
  return value.split("#", 1)[0].split("?", 1)[0];
}

function decodePathname(value) {
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
}

function resolveLocalPath(fromFile, value) {
  const pathname = decodePathname(stripQueryAndHash(value));

  if (!pathname) {
    return null;
  }

  if (pathname.startsWith("/")) {
    return path.join(rootDir, pathname.slice(1));
  }

  return path.join(rootDir, path.dirname(fromFile), pathname);
}

for (const file of htmlFiles) {
  const html = readHtml(file);
  const ids = collectIds(file);
  const attrPattern = /\b(href|src)\s*=\s*(["'])(.*?)\2/gms;
  let match;

  while ((match = attrPattern.exec(html)) !== null) {
    const [, attr, , value] = match;
    const trimmed = value.trim();

    if (!trimmed) {
      continue;
    }

    if (attr === "href" && trimmed === "#") {
      report(file, html, match.index, 'placeholder link href="#"');
      continue;
    }

    if (trimmed.startsWith("#")) {
      const targetId = trimmed.slice(1);
      if (targetId && !ids.has(targetId)) {
        report(
          file,
          html,
          match.index,
          `missing same-page anchor target "${trimmed}"`,
        );
      }
      continue;
    }

    if (isExternalOrSpecial(trimmed)) {
      continue;
    }

    const localPath = resolveLocalPath(file, trimmed);
    if (!localPath) {
      continue;
    }

    if (!fs.existsSync(localPath)) {
      report(
        file,
        html,
        match.index,
        `missing local ${attr} target "${trimmed}"`,
      );
      continue;
    }

    const hash = trimmed.includes("#")
      ? trimmed.split("#").slice(1).join("#")
      : "";
    if (hash && path.extname(localPath) === ".html") {
      const targetFile = path.relative(rootDir, localPath);
      const targetIds = collectIds(targetFile);
      if (!targetIds.has(hash)) {
        report(
          file,
          html,
          match.index,
          `missing anchor "#${hash}" in "${targetFile}"`,
        );
      }
    }
  }
}

if (problems.length > 0) {
  console.error(`Link check failed with ${problems.length} problem(s):`);
  for (const problem of problems) {
    console.error(`- ${problem}`);
  }
  process.exit(1);
}

console.log(
  `Checked ${htmlFiles.length} HTML file(s): local links and same-page anchors are valid.`,
);
