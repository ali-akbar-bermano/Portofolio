import { useScrollReveal } from '../hooks/useScrollReveal'
import './Projects.css'

const projects = [
  {
    id: 'tubes-pweb',
    title: 'Tubes PWEB Kelompok 2',
    description:
      'Aplikasi web kelompok sebagai tugas besar mata kuliah Pemrograman Web. Dibangun menggunakan React.js + Vite dengan fitur lengkap front-end modern, routing, komponen dinamis, dan sistem login.',
    tags: ['React.js', 'Vite', 'JavaScript', 'CSS'],
    github: 'https://github.com/ali-akbar-bermano/tubes-PWEB-kelompok-2',
    status: 'Completed',
    icon: '🌐',
    year: '2025',
  },
  {
    id: 'monitoring-keuangan',
    title: 'Monitoring Keuangan',
    description:
      'Aplikasi mobile yang dikembangkan menggunakan Flutter untuk memantau dan mencatat keuangan pribadi. Fitur meliputi pencatatan pemasukan & pengeluaran, kategori transaksi, serta ringkasan keuangan harian dan bulanan.',
    tags: ['Flutter', 'Dart', 'Mobile App', 'Firebase'],
    github: 'https://github.com/ali-akbar-bermano',
    status: 'Completed',
    icon: '📱',
    year: '2025',
  },
  {
    id: 'kamus-kbbi',
    title: 'Aplikasi Kamus Bahasa Indonesia (KBBI)',
    description:
      'Aplikasi kamus Bahasa Indonesia berbasis Flutter yang memudahkan pencarian definisi, sinonim, dan contoh penggunaan kata dari KBBI secara cepat dan mudah.',
    tags: ['Flutter', 'Dart', 'Mobile App', 'KBBI'],
    github: 'https://github.com/ali-akbar-bermano/project_kamus_kbbi',
    status: 'Completed',
    icon: '📖',
    year: '2025',
  },
  {
    id: 'scraping-wisata-enggano',
    title: 'Scraping Wisata Enggano',
    description:
      'Project web scraping untuk mengumpulkan data destinasi wisata di Pulau Enggano, Bengkulu. Menggunakan Python untuk mengekstrak informasi pariwisata sebagai bahan analisis pengembangan potensi wisata daerah.',
    tags: ['Python', 'Web Scraping', 'Data Analysis', 'Pariwisata'],
    github: 'https://github.com/ali-akbar-bermano/scraping_wisata_enggano',
    status: 'Completed',
    icon: '🏝️',
    year: '2025',
  },
  {
    id: 'monitoring-ibadah',
    title: 'Monitoring Ibadah',
    description:
      'Aplikasi mobile Flutter untuk membantu pengguna memantau dan mencatat rutinitas ibadah harian. Dilengkapi fitur pengingat, rekap ibadah harian dan mingguan, serta statistik konsistensi ibadah.',
    tags: ['Flutter', 'Dart', 'Mobile App'],
    github: 'https://github.com/ali-akbar-bermano/flutter_application_1',
    status: 'Completed',
    icon: '🕌',
    year: '2025',
  },
  {
    id: 'portfolio',
    title: 'Portfolio Website',
    description:
      'Website portfolio personal yang dibangun dengan React.js dan Vite. Menampilkan profil, skill, pendidikan, pengalaman organisasi, dan proyek-proyek yang pernah dikerjakan dengan desain modern dan animasi scroll-reveal.',
    tags: ['React.js', 'Vite', 'CSS', 'Node.js'],
    github: 'https://github.com/ali-akbar-bermano',
    status: 'Completed',
    icon: '💼',
    year: '2026',
  },
]

const statusColors = {
  Completed: { bg: '#dcfce7', color: '#16a34a', dot: '#22c55e' },
  'In Progress': { bg: '#fef3c7', color: '#d97706', dot: '#f59e0b' },
}

export default function Projects() {
  const ref = useScrollReveal()

  return (
    <section className="section projects-section" id="projects" ref={ref}>
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/>
              <rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/>
            </svg>
            Proyek
          </span>
          <h2 className="section-title">Proyek & Karya</h2>
          <p className="section-subtitle">
            Kumpulan proyek yang pernah saya kerjakan selama perjalanan belajar dan studi.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((proj, i) => {
            const status = statusColors[proj.status] || statusColors['Completed']
            return (
              <div key={proj.id} className={`project-card card reveal reveal-delay-${(i % 4) + 1}`}>
                <div className="project-header">
                  <div className="project-icon">{proj.icon}</div>
                  <div className="project-meta">
                    <span
                      className="project-status"
                      style={{ background: status.bg, color: status.color }}
                    >
                      <span className="status-dot" style={{ background: status.dot }} />
                      {proj.status}
                    </span>
                    <span className="project-year">{proj.year}</span>
                  </div>
                </div>

                <h3 className="project-title">{proj.title}</h3>
                <p className="project-desc">{proj.description}</p>

                <div className="project-tags">
                  {proj.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>

                <a
                  href={proj.github}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                  id={`project-link-${proj.id}`}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                  Lihat di GitHub
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                    <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
                  </svg>
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
