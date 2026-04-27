import { useScrollReveal } from '../hooks/useScrollReveal'
import './Experience.css'

const experiences = [
  {
    id: 'asisten',
    role: 'Asisten Dosen',
    org: 'Pemrograman Sistem & Data (PSDA)',
    institution: 'Universitas Bengkulu',
    period: '2025',
    type: 'Akademik',
    desc: 'Bertugas membantu dosen dalam proses pembelajaran mata kuliah Pemrograman Sistem & Data, membimbing mahasiswa dalam memahami konsep dan praktik pemrograman.',
    icon: '👨‍🏫',
    tags: ['Teaching', 'Pemrograman', 'Mentoring'],
  },
  {
    id: 'mostaneer',
    role: 'CO Kaderisasi (sebelumnya Sekretaris Umum)',
    org: 'Mostaneer',
    institution: 'Universitas Bengkulu',
    period: '2024 – Sekarang',
    type: 'Organisasi',
    desc: 'Pernah menjabat sebagai Sekretaris Umum (Sekum) dan kini dipercaya sebagai Coordinator Kaderisasi di Mostaneer. Aktif dalam pembinaan dan pengembangan anggota organisasi.',
    icon: '🌟',
    tags: ['Organisasi', 'Kaderisasi', 'Leadership', 'Sekretaris Umum'],
  },
  {
    id: 'benpat-p2pemira',
    role: 'Bendahara Panitia (Benpat)',
    org: 'P2Pemira FT KBM UNIB 2026',
    institution: 'Universitas Bengkulu',
    period: '2026',
    type: 'Kepanitiaan',
    desc: 'Dipercaya sebagai Bendahara Panitia pada kegiatan Pemilihan Pimpinan Mahasiswa (P2Pemira) Fakultas Teknik KBM Universitas Bengkulu 2026. Bertanggung jawab atas pengelolaan dan pelaporan keuangan kepanitiaan.',
    icon: '📊',
    tags: ['Kepanitiaan', 'Keuangan', 'P2Pemira', 'FT KBM UNIB'],
  },
]

export default function Experience() {
  const ref = useScrollReveal()

  return (
    <section className="section experience-section" id="experience" ref={ref}>
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
            </svg>
            Pengalaman
          </span>
          <h2 className="section-title">Pengalaman & Organisasi</h2>
          <p className="section-subtitle">
            Aktivitas dan keterlibatan di luar kegiatan akademik formal.
          </p>
        </div>

        <div className="experience-list">
          {experiences.map((exp, i) => (
            <div key={exp.id} className={`exp-card card reveal reveal-delay-${i + 1}`}>
              <div className="exp-left">
                <div className="exp-icon">{exp.icon}</div>
                <div className="exp-line" aria-hidden="true" />
              </div>
              <div className="exp-body">
                <div className="exp-header">
                  <div>
                    <span className="tag exp-type">{exp.type}</span>
                    <h3 className="exp-role">{exp.role}</h3>
                    <p className="exp-org">{exp.org}</p>
                    <p className="exp-institution">{exp.institution}</p>
                  </div>
                  <div className="exp-period">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
                    </svg>
                    {exp.period}
                  </div>
                </div>
                <p className="exp-desc">{exp.desc}</p>
                <div className="exp-tags">
                  {exp.tags.map((tag) => (
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
