/* =========================================================
   RATNESH RASTOGI — PORTFOLIO
   Content data + rendering + interactions
========================================================= */

(function () {
  "use strict";

  /* -------------------------------------------------------
     1. CONTENT DATA
     Edit these objects to personalize the site.
  ------------------------------------------------------- */

  const skillCategories = [
  {
    title: "Programming Languages",
    icon: iconCode(),
    skills: ["C", "C++", "Java", "Python", "JavaScript", "TypeScript"]
  },
  {
    title: "Frontend Development",
    icon: iconLayout(),
    skills: ["HTML", "CSS", "React", "Tailwind CSS", "Vite"]
  },
  {
    title: "AI & Tools",
    icon: iconChart(),
    skills: ["Prompt Engineering", "AI APIs", "Speech Recognition", "AI Coding Tools"]
  },
  {
    title: "Development Tools",
    icon: iconTool(),
    skills: ["Git", "GitHub", "VS Code", "Lemon Squeezy", "Gumroad"]
  },
  {
    title: "Computer Science Fundamentals",
    icon: iconCode(),
    skills: ["Object-Oriented Programming", "Data Structures", "Algorithms", "Debugging", "Problem Solving"]
  },
  {
    title: "Currently Learning",
    icon: iconCode(),
    skills: ["Advanced React", "Backend Development"]
  }
];

  const experience = [
  {
    role: "Independent Software Developer",
    org: "Self-Employed",
    period: "2026 - Present",
    points: [
      "Develop AI-powered applications and modern React web applications using Python, React, TypeScript, and JavaScript.",
      "Design and publish premium website templates on Lemon Squeezy and Gumroad.",
      "Build responsive user interfaces with reusable React components, Tailwind CSS, and Vite.",
      "Use Git and GitHub for version control while integrating AI tools to accelerate development workflows."
    ]
  }
];

  const education = [
  {
    role: "Bachelor of Computer Applications (BCA)",
    org: "National Post Graduate College",
    period: "2025 - 2028",
    points: [
      "Focused on programming, software development, and computer science fundamentals.",
      "Learning Data Structures, Web Development, AI, and modern technologies."
    ]
  }
];

  const projects = [
  {
    title: "VisionAI",
    icon: iconChart(),
    description:
      "Built an AI-powered image analysis application using Python and computer vision techniques to process images and generate intelligent visual insights.",
    tech: ["Python", "AI Tools", "Computer Vision Concepts"],
    github: "#",
    demo: "#"
  },

  {
    title: "SpeakAI",
    icon: iconMic(),
    description:
      "Developed a speech-enabled AI assistant using Python and speech recognition. Integrated AI APIs to process voice input and generate conversational responses.",
    tech: ["Python", "AI APIs", "Speech Technology"],
    github: "https://github.com/Ratnesh-08/SpeakAI",
    demo: "https://speakai-l066.onrender.com"
  },

  {
    title: "Iron Vault",
    icon: iconLayout(),
    description:
      "Developed a premium multi-page fitness website using React, TypeScript, Tailwind CSS, and Vite. Published as a commercial website template on Lemon Squeezy and Gumroad.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    github: "https://github.com/Ratnesh-08/Iron-Vault",
    demo: "https://iron-vault-h9el.onrender.com"
  },
];
  const certifications = [
  {
    title: "Google AI Essentials",
    issuer: "Google • Coursera",
    description:
      "Completed Google's AI Essentials program covering prompt engineering, AI-assisted workflows, productivity, and responsible AI.",
    link: "YOUR_GOOGLE_CERTIFICATE_LINK"
  },
  {
    title: "Data Structures and Algorithms in C",
    issuer: "AICTE • EduSkills Academy",
    description:
      "Completed an 8-week virtual internship focused on Data Structures, Algorithms, and practical problem solving using C.",
    link: "YOUR_AICTE_CERTIFICATE_LINK"
  }
];

  const achievements = [
  {
    title:"AI Project Development",
    description:"Built experimental AI applications including VisionAI and SpeechAI.",
    icon:iconStar()
  },

  {
    title:"Frontend Development",
    description:"Created responsive websites and modern UI experiences using React and web technologies.",
    icon:iconLayout()
  },

  {
    title:"Continuous Learning",
    description:"Actively improving programming, DSA, and software development skills.",
    icon:iconBadge()
  } 
];

const products = [

{
  title: "Iron Vault",
  icon: iconLayout(),

  description:
    "Premium React website template for gyms, fitness studios, personal trainers, and wellness brands. Built with reusable components, modern UI, and responsive design.",

  tech: [
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Vite"
  ],

  preview: "https://iron-vault-h6el.onrender.com",

  buy: "https://ratneshstudios.lemonsqueezy.com/buy/YOUR_PRODUCT",

  gumroad: "https://ratnesh57.gumroad.com/l/iron-vault-template"
},

];

  /* -------------------------------------------------------
     2. ICONS (inline SVG strings)
  ------------------------------------------------------- */
  function svg(paths, viewBox = "0 0 24 24") {
    return `<svg viewBox="${viewBox}" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${paths}</svg>`;
  }
  function iconCode() { return svg('<path d="M8 6L2 12l6 6M16 6l6 6-6 6"/>'); }
  function iconLayout() { return svg('<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>'); }
  function iconServer() { return svg('<rect x="2" y="3" width="20" height="7" rx="1.5"/><rect x="2" y="14" width="20" height="7" rx="1.5"/><path d="M6 6.5h.01M6 17.5h.01"/>'); }
  function iconDatabase() { return svg('<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14a9 3 0 0 0 18 0V5"/><path d="M3 12a9 3 0 0 0 18 0"/>'); }
  function iconChart() { return svg('<path d="M3 3v18h18"/><path d="M7 15l4-6 4 3 5-7"/>'); }
  function iconTool() { return svg('<path d="M14.7 6.3a4 4 0 1 0-5.4 5.4L2 19l3 3 7.3-7.3a4 4 0 0 0 5.4-5.4z"/>'); }
  function iconOS() { return svg('<rect x="3" y="4" width="18" height="12" rx="1.5"/><path d="M8 20h8M12 16v4"/>'); }
  function iconWallet() { return svg('<path d="M20 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/><path d="M22 10H16a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6"/><path d="M6 7V5a2 2 0 0 1 2-2h9"/>'); }
  function iconPulse() { return svg('<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>'); }
  function iconBadge() { return svg('<circle cx="12" cy="8" r="6"/><path d="M9 13.5L7 22l5-3 5 3-2-8.5"/>'); }
  function iconTrophy() { return svg('<path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0z"/><path d="M17 5h3a2 2 0 0 1-2 4M7 5H4a2 2 0 0 0 2 4"/>'); }
  function iconMic() { return svg('<rect x="9" y="2" width="6" height="12" rx="3"/><path d="M5 10a7 7 0 0 0 14 0M12 19v3"/>'); }
  function iconStar() { return svg('<path d="M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z"/>'); }
  function iconExternal() { return svg('<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><path d="M15 3h6v6M10 14L21 3"/>', "0 0 24 24"); }
  function iconGithub() { return svg('<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>'); }

  /* -------------------------------------------------------
     3. RENDER FUNCTIONS
  ------------------------------------------------------- */

  function renderSkills() {
    const grid = document.getElementById("skillsGrid");
    grid.innerHTML = skillCategories.map((cat, i) => `
      <div class="skill-category-card glass reveal" data-reveal-delay="${(i % 3) * 80}">
        <h3 class="skill-category-title">
          <span class="cat-icon">${cat.icon}</span>
          ${cat.title}
        </h3>
        <div class="skill-box-list">
          ${cat.skills.map((s, j) => `<span class="skill-box" style="transition-delay:${j * 45}ms">${s}</span>`).join("")}
        </div>
      </div>
    `).join("");
  }

  function renderTimeline(containerId, items) {
    const el = document.getElementById(containerId);
    el.innerHTML = items.map((item, i) => `
      <li class="timeline-item reveal" data-reveal-delay="${i * 90}">
        <span class="timeline-dot" aria-hidden="true"></span>
        <div class="timeline-card glass">
          <div class="tl-top">
            <h3 class="tl-role">${item.role}</h3>
            <span class="tl-period">${item.period}</span>
          </div>
          <p class="tl-org">${item.org}</p>
          <ul class="tl-points">
            ${item.points.map(p => `<li>${p}</li>`).join("")}
          </ul>
        </div>
      </li>
    `).join("");
  }

  function renderProducts() {
  const grid = document.getElementById("productsGrid");

  if (!grid) return;

  grid.innerHTML = products.map((p, i) => `
    <article class="project-card glass reveal" data-reveal-delay="${(i % 3) * 90}">
      <span class="project-icon">${p.icon}</span>

      <h3>${p.title}</h3>

      <p>${p.description}</p>

      <div class="project-tech">
        ${p.tech.map(t => `<span>${t}</span>`).join("")}
      </div>

      <div class="project-links">

        ${p.preview && p.preview !== "#"
          ? `<a href="${p.preview}" target="_blank" rel="noopener">
              ${iconExternal()} Live Preview
            </a>`
          : ""}

        ${p.buy && p.buy !== "#"
          ? `<a href="${p.buy}" target="_blank" rel="noopener">
              ${iconWallet()} Buy Template
            </a>`
          : ""}

      </div>
    </article>
  `).join("");
}

  function renderProjects() {
    const grid = document.getElementById("projectsGrid");
    grid.innerHTML = projects.map((p, i) => `
      <article class="project-card glass reveal" data-reveal-delay="${(i % 3) * 90}">
        <span class="project-icon">${p.icon}</span>
        <h3>${p.title}</h3>
        <p>${p.description}</p>
        <div class="project-tech">${p.tech.map(t => `<span>${t}</span>`).join("")}</div>
        <div class="project-links">

        ${p.github && p.github !== "#" 
        ? `<a href="${p.github}" target="_blank" rel="noopener">
        ${iconGithub()} Code
        </a>` 
        : ""}

        ${p.demo && p.demo !== "#" 
        ? `<a href="${p.demo}" target="_blank" rel="noopener">
        ${iconExternal()} Live Demo
        </a>`     
        : ""}

        </div>
      </article>
    `).join("");
  }

  function renderCerts() {
    const grid = document.getElementById("certGrid");
    grid.innerHTML = certifications.map((c, i) => `
      <div class="cert-card glass reveal" data-reveal-delay="${(i % 2) * 90}">
        <span class="cert-icon">${c.icon}</span>
        <div>
          <h3>${c.title}</h3>
          <p>${c.issuer}</p>
          <span class="cert-meta">${c.date}</span>
        </div>
      </div>
    `).join("");
  }

  function renderAchievements() {
    const grid = document.getElementById("achievementsGrid");
    grid.innerHTML = achievements.map((a, i) => `
      <div class="achievement-card glass reveal" data-reveal-delay="${i * 90}">
        <span class="ach-icon">${a.icon}</span>
        <div>
          <h3>${a.title}</h3>
          <p>${a.description}</p>
        </div>
      </div>
    `).join("");
  }

  /* -------------------------------------------------------
     4. NAVIGATION BEHAVIOR
  ------------------------------------------------------- */
  function initNav() {
    const navbar = document.getElementById("navbar");
    const toggle = document.getElementById("navToggle");
    const menu = document.getElementById("navMenu");
    const links = menu.querySelectorAll(".nav-link");

    const onScroll = () => {
      navbar.classList.toggle("scrolled", window.scrollY > 24);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    toggle.addEventListener("click", () => {
      const isOpen = menu.classList.toggle("open");
      toggle.classList.toggle("open", isOpen);
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    links.forEach(link => link.addEventListener("click", () => {
      menu.classList.remove("open");
      toggle.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    }));

    // active link highlighting on scroll
    const sections = Array.from(document.querySelectorAll("main section[id]"));
    const spy = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          links.forEach(l => l.classList.toggle("active", l.getAttribute("href") === `#${id}`));
        }
      });
    }, { rootMargin: "-40% 0px -50% 0px", threshold: 0 });
    sections.forEach(s => spy.observe(s));
  }

  /* -------------------------------------------------------
     5. SCROLL REVEAL
  ------------------------------------------------------- */
  function initReveal() {
    const items = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const delay = entry.target.getAttribute("data-reveal-delay") || 0;
          setTimeout(() => entry.target.classList.add("in-view"), Number(delay));
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: "0px 0px -60px 0px" });
    items.forEach(item => observer.observe(item));
  }

  function initSkillBoxes() {
    const boxes = document.querySelectorAll(".skill-box");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });
    boxes.forEach(box => observer.observe(box));
  }

  /* -------------------------------------------------------
     6. MISC
  ------------------------------------------------------- */
  function initFooterYear() {
    document.getElementById("year").textContent = new Date().getFullYear();
  }

  function initResumeDownload() {
    // Placeholder: replace href with a real résumé PDF path (e.g. "assets/Alex_Morgan_Resume.pdf")
    const buttons = document.querySelectorAll("#downloadResume, .btn-primary[download], .btn-ghost[download]");
    buttons.forEach(btn => {
      btn.addEventListener("click", (e) => {
        if (!btn.getAttribute("href") || btn.getAttribute("href") === "#") {
          e.preventDefault();
          alert("Add your résumé PDF and update the download link (e.g. assets/Alex_Morgan_Resume.pdf) to enable this button.");
        }
      });
    });
  }

  /* -------------------------------------------------------
     7. INIT
  ------------------------------------------------------- */
  document.addEventListener("DOMContentLoaded", () => {
    renderSkills();
    renderTimeline("experienceTimeline", experience);
    renderTimeline("educationTimeline", education);
    renderProjects();
    renderProducts(); 
    renderCerts();
    renderAchievements();

    initNav();
    initReveal();
    initSkillBoxes();
    initFooterYear();
    initResumeDownload();
  });

})();