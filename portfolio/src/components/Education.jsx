import { useScrollReveal } from '../hooks/useScrollReveal'
import './Education.css'

const educations = [
  {
    id: 'unib',
    degree: 'S1 Teknik Informatika',
    institution: 'Universitas Bengkulu',
    period: '2024 – Sekarang',
    nim: 'G1A024041',
    icon: '🎓',
    type: 'Universitas',
    tags: ['Algoritma', 'Pemrograman', 'Database', 'Web Dev'],
  },
  {
    id: 'sma',
    degree: 'Sekolah Menengah Atas',
    institution: 'SMA Negeri 1 Kepahiang',
    period: '2021 – 2024',
    icon: '🏫',
    type: 'SMA',
    tags: ['IPA', 'Matematika', 'Fisika'],
  },
]

export default function Education() {
  const ref = useScrollReveal()

  return (
    <section className="section education-section" id="education" ref={ref}>
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
            </svg>
            Pendidikan
          </span>
          <h2 className="section-title">Riwayat Pendidikan</h2>
          <p className="section-subtitle">
            Perjalanan akademik yang membentuk fondasi pengetahuan dan keterampilan saya.
          </p>
        </div>

        <div className="education-timeline">
          {educations.map((edu, i) => (
            <div key={edu.id} className={`timeline-item reveal reveal-delay-${i + 1}`}>
              <div className="timeline-line" aria-hidden="true" />
              <div className="timeline-dot">
                <span>{edu.icon}</span>
              </div>
              <div className="timeline-card card">
                <div className="timeline-header">
                  <div>
                    <span className="edu-type tag">{edu.type}</span>
                    <h3 className="edu-degree">{edu.degree}</h3>
                    <p className="edu-institution">{edu.institution}</p>
                    {edu.nim && <p className="edu-nim">NIM: {edu.nim}</p>}
                  </div>
                  <div className="edu-period">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
                    </svg>
                    {edu.period}
                  </div>
                </div>
                <div className="edu-tags">
                  {edu.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
