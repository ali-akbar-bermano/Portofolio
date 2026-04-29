import { useState, useRef, useEffect } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import "./SkillsPage.css";

const skillCategories = [
  {
    id: "languages",
    label: "Languages",
    icon: "💻",
    skills: [
      { name: "Java", level: 80 },
      { name: "C++", level: 75 },
      { name: "JavaScript", level: 70 },
      { name: "Python", level: 65 },
      { name: "PHP", level: 60 },
    ],
  },
  {
    id: "web",
    label: "Web & Framework",
    icon: "🌐",
    skills: [
      { name: "HTML & CSS", level: 85 },
      { name: "React.js", level: 65 },
      { name: "Node.js", level: 60 },
      { name: "Bootstrap", level: 70 },
    ],
  },
  {
    id: "data",
    label: "Data & Database",
    icon: "🗃️",
    skills: [
      { name: "MySQL", level: 75 },
      { name: "Data Analysis", level: 65 },
      { name: "Excel / Spreadsheet", level: 70 },
      { name: "SQL Queries", level: 72 },
    ],
  },
  {
    id: "tools",
    label: "Tools",
    icon: "🛠️",
    skills: [
      { name: "Git & GitHub", level: 75 },
      { name: "VS Code", level: 90 },
      { name: "Figma", level: 55 },
      { name: "Linux / Terminal", level: 60 },
    ],
  },
];

const FLOAT_OFFSETS = [
  -8, -12, -6, -14, -10, -7, -13, -9, -11, -8, -14, -6, -10, -12, -7,
];
const FLOAT_DURATIONS = [
  3.2, 4.1, 3.7, 4.8, 3.4, 5.1, 3.9, 4.5, 3.6, 4.2, 5.3, 3.8, 4.6, 3.3, 4.9,
];

const techStackBubbles = [
  { name: "Python", icon: "🐍", color: "#3b82f6" },
  { name: "Flutter", icon: "💙", color: "#06b6d4" },
  { name: "SQL", icon: "🗃️", color: "#8b5cf6" },
  { name: "Java", icon: "☕", color: "#f59e0b" },
  { name: "React", icon: "⚛️", color: "#06d6a0" },
  { name: "JavaScript", icon: "✨", color: "#eab308" },
  { name: "HTML & CSS", icon: "🌐", color: "#f97316" },
  { name: "Git", icon: "🔀", color: "#ef4444" },
  { name: "MySQL", icon: "🐬", color: "#3b82f6" },
  { name: "Node.js", icon: "🟢", color: "#22c55e" },
  { name: "Figma", icon: "🎨", color: "#ec4899" },
  { name: "PHP", icon: "🐘", color: "#818cf8" },
  { name: "C++", icon: "⚙️", color: "#64748b" },
  { name: "Linux", icon: "🐧", color: "#f59e0b" },
  { name: "Excel", icon: "📊", color: "#16a34a" },
];

const STATS = [
  { number: "15+", label: "Technologies", icon: "⚡" },
  { number: "4", label: "Skill Categories", icon: "🎯" },
  { number: "5+", label: "Years Learning", icon: "📈" },
];

// Animated counter hook
function useCounter(target, duration = 1500, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    const num = parseInt(target);
    if (isNaN(num)) {
      setCount(target);
      return;
    }
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(ease * num));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

function StatCard({ number, label, icon, visible }) {
  const numPart = parseInt(number);
  const suffix = number.replace(String(numPart), "");
  const count = useCounter(numPart, 1400, visible);

  return (
    <div className="stat-card reveal">
      <div className="stat-icon">{icon}</div>
      <div className="stat-number">
        {isNaN(numPart) ? number : `${count}${suffix}`}
      </div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

export default function SkillsPage() {
  const headerRef = useScrollReveal();
  const skillsRef = useScrollReveal();
  const techRef = useScrollReveal();
  const statsRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState("languages");
  const [statsVisible, setStatsVisible] = useState(false);
  const [prevCategory, setPrevCategory] = useState("languages");

  const current = skillCategories.find((c) => c.id === activeCategory);

  // Stats counter trigger via IntersectionObserver
  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStatsVisible(true);
      },
      { threshold: 0.3 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const handleTabChange = (id) => {
    setPrevCategory(activeCategory);
    setActiveCategory(id);
  };

  return (
    <main className="skills-page">
      {/* ── Hero ── */}
      <section className="skills-hero">
        <div className="skills-hero-bg" aria-hidden="true">
          <div className="hero-orb hero-orb--1" />
          <div className="hero-orb hero-orb--2" />
          <div className="hero-grid" />
        </div>

        <div className="container">
          <div className="skills-hero-content" ref={headerRef}>
            <span className="skills-hero-eyebrow">
              <span className="eyebrow-dot" />
              Portfolio
            </span>
            <h1 className="skills-hero-title">
              Kemampuan &amp; <span className="title-highlight">Teknologi</span>
            </h1>
            <p className="skills-hero-subtitle">
              Teknologi dan tools yang saya kuasai dalam perjalanan belajar
              sebagai mahasiswa informatika. Explore skills saya dan lihat tech
              stack yang biasa saya gunakan.
            </p>
          </div>
        </div>
      </section>

      {/* ── Skills Detail ── */}
      <section className="skills-detailed-section" ref={skillsRef}>
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
              Skills
            </span>
            <h2 className="section-title">Kompetensi Teknis</h2>
            <p className="section-desc">
              Lihat tingkat penguasaan saya di setiap bidang teknologi.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="skills-tabs reveal reveal-delay-1">
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                className={`skills-tab${activeCategory === cat.id ? " active" : ""}`}
                onClick={() => handleTabChange(cat.id)}
              >
                <span className="tab-icon">{cat.icon}</span>
                <span className="tab-label">{cat.label}</span>
              </button>
            ))}
          </div>

          {/* Skills Grid */}
          {current && (
            <div
              className="skills-grid reveal reveal-delay-2"
              key={activeCategory}
            >
              {current.skills.map((skill, idx) => (
                <div
                  key={skill.name}
                  className="skill-card"
                  style={{ "--delay": `${idx * 0.09}s` }}
                >
                  <div className="skill-header">
                    <h3 className="skill-name">{skill.name}</h3>
                    <span className="skill-badge">{skill.level}%</span>
                  </div>
                  <div className="skill-bar-track">
                    {/* FIX: pass level as CSS var --skill-width */}
                    <div
                      className="skill-bar-fill"
                      style={{ "--skill-width": `${skill.level}%` }}
                    />
                  </div>
                  <div className="skill-footer">
                    <span className="skill-tier">
                      {skill.level >= 80
                        ? "Advanced"
                        : skill.level >= 65
                          ? "Intermediate"
                          : "Beginner"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── Tech Stack Bubbles ── */}
      <section className="tech-stack-section" ref={techRef}>
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8v4l3 3" />
              </svg>
              Tech Stack
            </span>
            <h2 className="section-title">Teknologi yang Saya Gunakan</h2>
          </div>

          <div className="bubbles-wrapper reveal reveal-delay-1">
            {techStackBubbles.map((tech, i) => (
              <div
                key={tech.name}
                className="tech-bubble"
                style={{
                  "--bubble-color": tech.color,
                  "--delay": `${i * 0.06}s`,
                  "--float-duration": `${FLOAT_DURATIONS[i]}s`,
                  "--float-offset": `${FLOAT_OFFSETS[i]}px`,
                }}
                title={tech.name}
              >
                <span className="bubble-icon">{tech.icon}</span>
                <span className="bubble-name">{tech.name}</span>
                <div className="bubble-glow" aria-hidden="true" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Statistics ── */}
      <section className="skills-stats-section" ref={statsRef}>
        <div className="container">
          <div className="stats-grid">
            {STATS.map((s) => (
              <StatCard key={s.label} {...s} visible={statsVisible} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
