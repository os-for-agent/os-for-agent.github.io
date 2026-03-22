---
marp: true
theme: gaia
paginate: true
backgroundColor: #fff
color: #1e293b
style: |
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
  section {
    font-family: 'Inter', 'Helvetica Neue', sans-serif;
    padding: 48px 64px;
    background-image: linear-gradient(to bottom right, #ffffff, #f8fafc);
  }
  section::after {
    font-size: 0.6em;
    color: #94a3b8;
  }
  h1 {
    color: #0c4a6e;
    font-size: 2.6em;
    font-weight: 700;
    letter-spacing: -0.02em;
  }
  h2 {
    color: #0c4a6e;
    font-size: 1.7em;
    font-weight: 700;
    border-bottom: 3px solid #0284c7;
    padding-bottom: 10px;
    margin-bottom: 28px;
  }
  h3 { color: #334155; font-weight: 600; }
  p, li { color: #475569; font-size: 0.95em; line-height: 1.7; }
  a { color: #0284c7; text-decoration: none; }
  strong { color: #0f172a; }
  blockquote {
    border-left: 4px solid #0284c7;
    background: #f0f9ff;
    padding: 16px 24px;
    border-radius: 0 8px 8px 0;
    font-style: normal;
    color: #334155;
  }
  blockquote p { color: #334155; }
  table {
    font-size: 0.82em;
    border-collapse: collapse;
    width: 100%;
  }
  th {
    background: linear-gradient(135deg, #0f172a, #1e293b);
    color: #fff;
    font-weight: 600;
    padding: 10px 14px;
    text-align: left;
  }
  td {
    padding: 7px 14px;
    vertical-align: top;
    border-bottom: 1px solid #e2e8f0;
  }
  tr:nth-child(even) td { background: #f8fafc; }
  img[alt~="center"] { display: block; margin: 0 auto; }
  .accent { color: #0284c7; }
  .emerald { color: #059669; font-weight: 700; }
  /* Title slide */
  section.title {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    background: linear-gradient(160deg, #f0f9ff 0%, #ffffff 40%, #f8fafc 100%);
  }
  section.title h1 { font-size: 3.2em; margin-bottom: 0; }
  section.title h3 { color: #64748b; font-weight: 400; font-size: 1.15em; }
  section.title .meta {
    display: flex; gap: 28px;
    font-size: 0.9em; color: #64748b;
    background: #fff; border: 1px solid #e2e8f0;
    border-radius: 12px; padding: 12px 32px;
    margin-top: 20px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.05);
  }
  /* Stats slide */
  .stat-row {
    display: flex; gap: 40px; justify-content: center; align-items: center;
    margin: 20px 0;
  }
  .stat-box {
    background: #fff; border: 2px solid #e2e8f0; border-radius: 16px;
    padding: 28px 48px; text-align: center;
    box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  }
  .stat-box.accepted { border-color: #059669; }
  .stat-num { font-size: 3.6em; font-weight: 700; color: #0c4a6e; line-height: 1; }
  .stat-num.green { color: #059669; }
  .stat-label { font-size: 0.9em; color: #64748b; margin-top: 4px; }
  .stat-arrow { font-size: 2.4em; color: #cbd5e1; }
  /* Sponsor slide */
  section.sponsor {
    display: flex; flex-direction: column;
    align-items: center; justify-content: center;
    text-align: center;
    background: linear-gradient(160deg, #f8fafc, #ffffff);
  }
  .sponsor-label {
    font-size: 0.85em; text-transform: uppercase; letter-spacing: 0.12em;
    color: #94a3b8; font-weight: 600; margin-bottom: 24px;
  }
  /* Small text */
  .small { font-size: 0.65em; color: #64748b; line-height: 1.6; }
  .medium { font-size: 0.78em; color: #475569; line-height: 1.7; }
  /* Next slide */
  section.next {
    display: flex; flex-direction: column;
    align-items: center; justify-content: center; text-align: center;
    background: linear-gradient(160deg, #f0f9ff, #ffffff);
  }
---

<!-- _paginate: false -->
<!-- _class: title -->

![w:110 center](icon.png)

# Agentic OS

### The 1st Workshop on Operating Systems Design for AI Agents

<div class="meta">
  <span>&#x1F4C5; March 23, 2026</span>
  <span>&#x1F4CD; Pittsburgh, PA</span>
  <span>&#x1F552; 1:30 – 6:00 PM EDT</span>
</div>

https://os-for-agent.github.io/

---

## About This Workshop

> AI agents are evolving from prototypes to always-on services that autonomously plan, invoke tools, and interact with their environment. **Operating systems must become _agentic_.**

**Topics:** OS abstractions for agents · sandboxing & runtimes · scheduling & resource management · agent state & memory · eBPF observability · GPU virtualization · security & isolation · agents managing systems

---

## Program Committee and Organizers

**Program Committee (Chair: Dong Li, UC Merced)**

<div class="small">Dan Williams (Virginia Tech) · Yiying Zhang (UCSD) · Wei Zhang (UConn) · Michael Swift (UW-Madison) · Dmitrii Ustiugov (NTU Singapore) · Mingxing Zhang (Tsinghua) · Mengwei Xu (BUPT) · Mingyu Li (CAS) · Gan Fang (Roblox) · Mark Wu (Roblox)</div>

**Organizers**

<div class="medium">

**Cong Wang**, Founder & CEO, Multikernel Technologies
**Dong Du**, Assistant Professor, Shanghai Jiao Tong University
**Huaizheng Zhang**, Staff Research Scientist, ByteDance
**Wenhui Zhang**, Senior Software Engineer, Roblox
**Yusheng Zheng**, PhD Student, UC Santa Cruz

</div>

---

## Submissions & Acceptance

<div class="stat-row">
  <div class="stat-box">
    <div class="stat-num">25</div>
    <div class="stat-label">Papers Received</div>
  </div>
  <div class="stat-arrow">→</div>
  <div class="stat-box accepted">
    <div class="stat-num green">12</div>
    <div class="stat-label">Papers Accepted</div>
  </div>
</div>

<p style="text-align:center"><span class="emerald">Acceptance rate: 48%</span></p>

- **7** research papers (up to 6 pages) &nbsp;&nbsp;·&nbsp;&nbsp; **5** vision papers (1–2 pages)
- Each submission received at least **two reviews**

---

## Talk Format & Q&A

- This workshop is being recorded
- **Research papers:** 15 min (12 min talk + 3 min Q&A)
- **Vision papers:** 10 min (8 min talk + 2 min Q&A)
- Please hold questions until the end of each talk
- Time signals: **2-min warning** before your time is up
- All accepted papers and presentation slides will be made available on the website

---

## Today's Schedule

| Time (EDT) | Session | Details |
|---|---|---|
| 1:30 – 1:35 | Opening | Opening Remarks |
| 1:35 – 2:00 | Keynote | Keynote by Prof. Dan Williams (25 min) |
| 2:00 – 3:30 | Papers | Session 1 - 7 papers (research + vision) |
| 3:30 – 4:00 | Break | Break (with snacks & beverages) (30 min) |
| 4:00 – 4:15 | Invited Talk | Guanlan Dai |
| 4:15 – 5:20 | Papers | Session 2 - 5 papers (research + vision) |
| 5:20 – 5:25 | Awards | Best Paper Awards + Closing |
| 5:25 – 6:00 | Social | Networking |
| 6:30 | Social | **Social Dinner** |

---

## Acknowledgments

- All authors for their submissions; we received many strong papers and wish our half-day format allowed us to accept more
- Our program committee for their thorough and timely reviews
- Workshop organizers for putting everything together
- The ASPLOS 2026 conference for hosting us
- Most importantly, all of you for joining the inaugural Agentic OS!

---

<!-- _class: next -->

![w:80 center](icon.png)

## 2nd Agentic OS Workshop Is Coming!

### Co-located with **SOSP 2026**

📅 **September 29, 2026** &nbsp;&nbsp;|&nbsp;&nbsp; 📍 **Prague, Czechia**

🔗 https://sigops.org/s/conferences/sosp/2026/workshops.html

### We look forward to your submissions!

---

<!-- _paginate: false -->
<!-- _class: sponsor -->

<div class="sponsor-label">Sponsored by</div>

![w:340 center](multikernel-logo.png)

<br>

*Thank you for your support.*
