import { useScrollReveal } from '../hooks/useScrollReveal'
import './About.css'

const stats = [
  { value: '2024', label: 'Angkatan UNIB' },
  { value: '2+', label: 'Sertifikat' },
  { value: '6+', label: 'Proyek' },
  { value: '3+', label: 'Organisasi' },
]

export default function About() {
  const ref = useScrollReveal()

  return (
    <section className="section about-section" id="about" ref={ref}>
      <div className="container">
        <div className="about-grid">
          {/* Text */}
          <div className="about-text">
            <div className="reveal">
              <span className="section-label">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="8" r="4"/><path d="M20 21a8 8 0 1 0-16 0"/>
                </svg>
                Tentang Saya
              </span>
            </div>
            <h2 className="section-title reveal reveal-delay-1">
              Mengenal Lebih Dekat
            </h2>
            <p className="about-desc reveal reveal-delay-2">
              Halo! Saya <strong>Ali Akbar Bermano</strong>, mahasiswa Teknik Informatika di 
              Universitas Bengkulu angkatan 2024. Saya memiliki ketertarikan kuat di bidang 
              <strong> pengelolaan data, pemrograman</strong>, dan pengembangan solusi berbasis teknologi.
            </p>
            <p className="about-desc reveal reveal-delay-3">
              Selain aktif dalam kegiatan akademik, saya juga terlibat dalam berbagai proyek dan 
              organisasi kampus. Saya percaya bahwa setiap data memiliki cerita yang menunggu untuk 
              diungkap melalui kode dan analisis yang tepat.
            </p>

            <div className="about-info reveal reveal-delay-4">
              <div className="info-item">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.67 3.37 2 2 0 0 1 3.64 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.64a16 16 0 0 0 6 6l.94-.94a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16z"/>
                </svg>
                <span>NIM: G1A024041</span>
              </div>
              <div className="info-item">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                </svg>
                <span>Bengkulu, Indonesia</span>
              </div>
              <div className="info-item">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
                </svg>
                <span>Teknik Informatika · UNIB</span>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="about-stats">
            {stats.map((stat, i) => (
              <div key={i} className={`stat-card reveal reveal-delay-${i + 1}`}>
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
