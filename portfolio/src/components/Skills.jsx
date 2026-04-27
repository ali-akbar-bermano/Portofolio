import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './Skills.css'

const skillCategories = [
  {
    id: 'languages',
    label: 'Languages',
    icon: '💻',
    skills: [
      { name: 'Java', level: 80 },
      { name: 'C++', level: 75 },
      { name: 'JavaScript', level: 70 },
      { name: 'Python', level: 65 },
      { name: 'PHP', level: 60 },
    ],
  },
  {
    id: 'web',
    label: 'Web & Framework',
    icon: '🌐',
    skills: [
      { name: 'HTML & CSS', level: 85 },
      { name: 'React.js', level: 65 },
      { name: 'Node.js', level: 60 },
      { name: 'Bootstrap', level: 70 },
    ],
  },
  {
    id: 'data',
    label: 'Data & Database',
    icon: '🗃️',
    skills: [
      { name: 'MySQL', level: 75 },
      { name: 'Data Analysis', level: 65 },
      { name: 'Excel / Spreadsheet', level: 70 },
      { name: 'SQL Queries', level: 72 },
    ],
  },
  {
    id: 'tools',
    label: 'Tools',
    icon: '🛠️',
    skills: [
      { name: 'Git & GitHub', level: 75 },
      { name: 'VS Code', level: 90 },
      { name: 'Figma', level: 55 },
      { name: 'Linux / Terminal', level: 60 },
    ],
  },
]

export default function Skills() {
  const ref = useScrollReveal()
  const [activeCategory, setActiveCategory] = useState('languages')

  const current = skillCategories.find((c) => c.id === activeCategory)

  return (
    <section className="section skills-section" id="skills" ref={ref}>
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
            </svg>
            Skills
          </span>
          <h2 className="section-title">Kemampuan & Teknologi</h2>
          <p className="section-subtitle">
            Teknologi dan tools yang saya kuasai dalam perjalanan belajar sebagai mahasiswa informatika.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="skills-tabs reveal reveal-delay-1">
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              className={`skills-tab${activeCategory === cat.id ? ' active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
              id={`skills-tab-${cat.id}`}
            >
              <span>{cat.icon}</span>
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills */}
        <div className="skills-grid reveal reveal-delay-2" key={activeCategory}>
          {current.skills.map((skill, i) => (
            <div className="skill-item" key={skill.name} style={{ animationDelay: `${i * 0.08}s` }}>
              <div className="skill-info">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-percent">{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <div
                  className="skill-fill"
                  style={{ '--target-width': `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
