const profileData = {
  experiences: [
    {
      role: "Sr. Data Engineer",
      company: "BITA CLOUD INFOTECH PVT. LTD.",
      project: "FIFA - Stagwell",
      period: "Sep 2025 - Present",
      points: [
        "Built Power BI and Databricks solutions for real-time social intelligence and event risk visibility.",
        "Processed 200M+ records with distributed PySpark pipelines and Medallion architecture.",
        "Integrated LLM-driven multi-agent validation workflows for pulse narrative quality.",
        "Reduced notebook runtime from 8-9 hours to 1-2 hours through performance tuning and workload optimization.",
        "Optimized notebook performance using pruning, repartitioning, adaptive query execution, and Pandas UDF tuning.",
        "Enabled on-demand report generation with parameterized APIs and Databricks job triggers for faster stakeholder turnaround.",
      ],
    },
    {
      role: "Sr. AI Data Engineer",
      company: "BITA CLOUD INFOTECH PVT. LTD.",
      project: "GEO - McSquared.ai",
      period: "Feb 2025 - Present",
      points: [
        "Designed AI agent and RAG workflows for brand visibility optimization in LLM ecosystems.",
        "Built FastAPI services for prompt, persona, topic, and competitor orchestration.",
        "Delivered citation-backed insights and automated gap analysis for explainable outputs.",
      ],
    },
    {
      role: "Sr. Data Analyst / Product Analyst",
      company: "BITA CLOUD INFOTECH PVT. LTD.",
      project: "DataVista BI/AI - MARS Veterinary Health",
      period: "Apr 2025 - Present",
      points: [
        "Owned end-to-end Power BI lifecycle from stakeholder requirements to deployment and support.",
        "Designed enterprise reporting models with Star and Snowflake schemas and advanced DAX KPIs.",
        "Improved dashboard responsiveness by around 40% via query and model optimization.",
        "Standardized dashboard layouts and semantic models to improve report reuse and reduce duplicate engineering effort.",
        "Implemented RLS governance and refresh orchestration for reliable near real-time dashboard performance.",
      ],
    },
    {
      role: "Data Engineer",
      company: "BITA CLOUD INFOTECH PVT. LTD.",
      project: "ID Graph - Stagwell",
      period: "Sep 2023 - Aug 2024",
      points: [
        "Implemented end-to-end identity resolution pipelines and UUID-based customer unification.",
        "Engineered Medallion architecture pipelines to process 500M+ records at scale.",
        "Created subscription-ready enriched datasets for targeted advertising and segmentation products.",
      ],
    },
    {
      role: "Data Analyst",
      company: "BITA CLOUD INFOTECH PVT. LTD.",
      project: "Formula One - Connplex Cinemas",
      period: "Jan 2021 - Aug 2023",
      points: [
        "Developed product KPI dashboards and analytics workflows across Azure, Databricks, and SQL sources.",
        "Automated refresh pipelines to improve data freshness and reduce manual reporting effort.",
      ],
    },
  ],
  certifications: [
    {
      code: "PL-300",
      title: "Power BI Data Analyst Associate",
      note: "Microsoft Certified",
    },
    {
      code: "AZ-900",
      title: "Azure Fundamentals",
      note: "Microsoft Certified",
    },
    {
      code: "DB-GENAI",
      title: "Gen AI Engineer Associate",
      note: "Databricks Certified",
    },
    {
      code: "DP-700",
      title: "Fabric Data Engineer Associate",
      note: "Microsoft Certified",
    },
    {
      code: "DB-DE-PRO",
      title: "Data Engineer Professional",
      note: "Preparing",
    },
    {
      code: "PALANTIR",
      title: "Foundry Aware",
      note: "Palantir Foundry Certification",
    },
  ],
  optimizationAreas: [
    {
      title: "Notebook Optimization",
      points: [
        "Refactored Databricks notebooks for modular execution and measurable stage-level performance visibility.",
        "Applied pruning, repartitioning, caching, and AQE to reduce long-running batch processing cycles.",
        "Introduced fail-safe retries and workflow guards for more stable production notebook runs.",
      ],
    },
    {
      title: "Report Optimization",
      points: [
        "Reworked SQL and semantic layers for lower-latency enterprise reporting pipelines.",
        "Automated report distribution and refresh orchestration for high-consistency delivery windows.",
        "Designed citation-backed AI reporting summaries to improve readability for business users.",
      ],
    },
    {
      title: "Dashboard Optimization",
      points: [
        "Improved dashboard responsiveness by resolving join-cardinality issues and optimizing DAX models.",
        "Designed reusable KPI frameworks for product and executive dashboards.",
        "Scaled dashboard data models for large datasets while maintaining interactive performance.",
      ],
    },
  ],
  skillGroups: [
    {
      title: "BI and Visualization",
      items: ["Power BI", "Paginated Reports", "Databricks SQL Warehouses", "DAX", "Streamlit"],
    },
    {
      title: "Data Engineering",
      items: ["Databricks", "PySpark", "Delta Lake", "ETL Pipelines", "SSIS", "SQL Server", "PostgreSQL"],
    },
    {
      title: "AI and Advanced Systems",
      items: ["LLMs", "RAG", "AI Agents", "Prompt Engineering", "GitHub Copilot"],
    },
    {
      title: "Platform and Delivery",
      items: ["Azure", "FastAPI", "CI/CD with GitHub Actions", "Docker", "K8s", "Databricks Workflows"],
    },
  ],
  contacts: [
    { label: "Email", href: "mailto:tushar_kashyap@outlook.com", text: "tushar_kashyap@outlook.com" },
    { label: "LinkedIn", href: "https://linkedin.com/in/tusharkz", text: "linkedin.com/in/tusharkz" },
  ],
};

function renderExperience(items) {
  const wrap = document.getElementById("experienceList");
  if (!wrap) return;

  wrap.innerHTML = items
    .map(
      (item) => `
        <article class="experience-item">
          <h3>${item.role}</h3>
          <p class="experience-meta">${item.company} | ${item.project} | ${item.period}</p>
          <ul class="experience-points">
            ${item.points.map((point) => `<li>${point}</li>`).join("")}
          </ul>
        </article>
      `
    )
    .join("");
}

function renderCertifications(items) {
  const wrap = document.getElementById("badgeWall");
  if (!wrap) return;

  wrap.innerHTML = items
    .map(
      (item) => `
        <article class="cert-badge tilt" data-tilt>
          <span class="badge-code">${item.code}</span>
          <p class="badge-title">${item.title}</p>
          <p class="badge-note">${item.note}</p>
        </article>
      `
    )
    .join("");
}

function renderOptimization(items) {
  const wrap = document.getElementById("optimizationCards");
  if (!wrap) return;

  wrap.innerHTML = items
    .map(
      (item) => `
        <article class="opt-card">
          <h3>${item.title}</h3>
          <ul class="opt-points">
            ${item.points.map((point) => `<li>${point}</li>`).join("")}
          </ul>
        </article>
      `
    )
    .join("");
}

function renderSkillGroups(groups) {
  const wrap = document.getElementById("skillColumns");
  if (!wrap) return;

  wrap.innerHTML = groups
    .map(
      (group) => `
        <article class="skill-column">
          <h3>${group.title}</h3>
          <div class="chip-wrap">
            ${group.items.map((item) => `<span class="chip">${item}</span>`).join("")}
          </div>
        </article>
      `
    )
    .join("");
}

function renderContacts(items) {
  const wrap = document.getElementById("contactLinks");
  if (!wrap) return;

  wrap.innerHTML = items
    .map((item) => `<a href="${item.href}" target="_blank" rel="noreferrer">${item.label}: ${item.text}</a>`)
    .join("");
}

function setupRevealAnimation() {
  const revealItems = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  revealItems.forEach((item, index) => {
    item.style.transitionDelay = `${index * 40}ms`;
    observer.observe(item);
  });
}

function setupMenu() {
  const toggle = document.getElementById("menuToggle");
  const nav = document.getElementById("siteNav");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => nav.classList.toggle("open"));
  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => nav.classList.remove("open"));
  });
}

function setupTiltCards() {
  const cards = document.querySelectorAll("[data-tilt]");
  cards.forEach((card) => {
    card.addEventListener("mousemove", (event) => {
      const rect = card.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const midX = rect.width / 2;
      const midY = rect.height / 2;
      const rotateY = ((x - midX) / midX) * 6;
      const rotateX = ((midY - y) / midY) * 6;
      card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "rotateX(0deg) rotateY(0deg)";
    });
  });
}

function setupCustomCursor() {
  const isFinePointer = window.matchMedia("(pointer: fine)").matches;
  if (!isFinePointer) return;

  const ring = document.getElementById("cursorRing");
  const dot = document.getElementById("cursorDot");
  if (!ring || !dot) return;

  document.body.classList.add("has-custom-cursor");

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let ringX = mouseX;
  let ringY = mouseY;

  const activateTargets = "a, button, .tilt, .opt-card, .metric-card, .experience-item, .skill-column";

  window.addEventListener("mousemove", (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
    dot.style.opacity = "1";
    ring.style.opacity = "1";
    dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
  });

  document.querySelectorAll(activateTargets).forEach((element) => {
    element.addEventListener("mouseenter", () => document.body.classList.add("cursor-active"));
    element.addEventListener("mouseleave", () => document.body.classList.remove("cursor-active"));
  });

  function animateRing() {
    ringX += (mouseX - ringX) * 0.2;
    ringY += (mouseY - ringY) * 0.2;
    ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
    requestAnimationFrame(animateRing);
  }

  animateRing();
}

function setupScrollEffects() {
  const header = document.querySelector(".site-header");
  if (!header) return;

  const onScroll = () => {
    const scrollY = window.scrollY || window.pageYOffset;
    if (scrollY > 24) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

function initPortfolio() {
  renderOptimization(profileData.optimizationAreas);
  renderExperience(profileData.experiences);
  renderCertifications(profileData.certifications);
  renderSkillGroups(profileData.skillGroups);
  renderContacts(profileData.contacts);

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  setupRevealAnimation();
  setupMenu();
  setupTiltCards();
  setupCustomCursor();
  setupScrollEffects();
}

initPortfolio();
