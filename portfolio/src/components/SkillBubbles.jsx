import { useEffect, useRef } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './SkillBubbles.css'

const FLOAT_OFFSETS = [-8, -12, -6, -14, -10, -7, -13, -9, -11, -8, -14, -6, -10, -12, -7]
const FLOAT_DURATIONS = [3.2, 4.1, 3.7, 4.8, 3.4, 5.1, 3.9, 4.5, 3.6, 4.2, 5.3, 3.8, 4.6, 3.3, 4.9]

const skills = [
  { name: 'Python',      icon: '🐍', color: '#3b82f6' },
  { name: 'Flutter',     icon: '💙', color: '#06b6d4' },
  { name: 'SQL',         icon: '🗃️', color: '#8b5cf6' },
  { name: 'Java',        icon: '☕', color: '#f59e0b' },
  { name: 'React',       icon: '⚛️', color: '#06d6a0' },
  { name: 'JavaScript',  icon: '✨', color: '#eab308' },
  { name: 'HTML & CSS',  icon: '🌐', color: '#f97316' },
  { name: 'Git',         icon: '🔀', color: '#ef4444' },
  { name: 'MySQL',       icon: '🐬', color: '#3b82f6' },
  { name: 'Node.js',     icon: '🟢', color: '#22c55e' },
  { name: 'Figma',       icon: '🎨', color: '#ec4899' },
  { name: 'PHP',         icon: '🐘', color: '#818cf8' },
  { name: 'C++',         icon: '⚙️', color: '#64748b' },
  { name: 'Linux',       icon: '🐧', color: '#f59e0b' },
  { name: 'Excel',       icon: '📊', color: '#16a34a' },
]

export default function SkillBubbles() {
  const ref = useScrollReveal()
  const containerRef = useRef(null)

  return (
    <section className="section skill-bubbles-section" id="skill-bubbles" ref={ref}>
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <path d="M12 8v4l3 3"/>
            </svg>
            Tech Stack
          </span>
          <h2 className="section-title">Kemampuan Teknologi</h2>
          <p className="section-subtitle">
            Hover bubble untuk melihat detail teknologi yang saya kuasai.
          </p>
        </div>

        <div className="bubbles-wrapper reveal reveal-delay-1" ref={containerRef}>
          {skills.map((skill, i) => (
            <div
              key={skill.name}
              className="skill-bubble"
              style={{
                '--bubble-color': skill.color,
                '--delay': `${i * 0.07}s`,
                '--float-duration': `${FLOAT_DURATIONS[i]}s`,
                '--float-offset': `${FLOAT_OFFSETS[i]}px`,
              }}
              title={skill.name}
            >
              <span className="bubble-icon">{skill.icon}</span>
              <span className="bubble-name">{skill.name}</span>
              <div className="bubble-glow" aria-hidden="true" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
