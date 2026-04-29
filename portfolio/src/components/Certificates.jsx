import { useScrollReveal } from "../hooks/useScrollReveal";
import "./Certificates.css";

const certificates = [
  {
    id: "algo",
    title: "Algoritma dan Pemrograman Dasar",
    issuer: "Universitas Bengkulu",
    year: "2024",
    icon: "🏆",
    type: "Academic",
    desc: "Sertifikat kelulusan dan kompetensi dalam mata kuliah Algoritma dan Pemrograman Dasar.",
    pdf: "/assets/sertifikat-algoritma.pdf",
  },
  {
    id: "sololearn",
    title: "Coding for Data",
    issuer: "SoloLearn",
    year: "2026",
    icon: "📊",
    type: "Online Course",
    desc: "Sertifikat penyelesaian kursus Coding for Data dari platform belajar online SoloLearn.",
    pdf: "/assets/sertifikat-sololearn.pdf",
  },
  {
    id: "sololearn",
    title: "Python Developer",
    issuer: "SoloLearn",
    year: "2026",
    icon: "📊",
    type: "Online Course",
    desc: "Sertifikat penyelesaian kursus Python Developer dari platform belajar online SoloLearn.",
    pdf: "/assets/Sololearn_Python_Developer.pdf",
  },
];

export default function Certificates() {
  const ref = useScrollReveal();

  return (
    <section
      className="section certificates-section"
      id="certificates"
      ref={ref}
    >
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
              <circle cx="12" cy="8" r="6" />
              <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
            </svg>
            Sertifikat
          </span>
          <h2 className="section-title">Sertifikat & Pencapaian</h2>
        </div>

        <div className="certificates-grid">
          {certificates.map((cert, i) => (
            <div
              key={cert.id}
              className={`cert-card card reveal reveal-delay-${i + 1}`}
            >
              <div className="cert-top">
                <div className="cert-icon">{cert.icon}</div>
                <div className="cert-meta">
                  <span className="tag cert-type">{cert.type}</span>
                  <span className="cert-year">{cert.year}</span>
                </div>
              </div>
              <h3 className="cert-title">{cert.title}</h3>
              <p className="cert-issuer">
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
                {cert.issuer}
              </p>
              <p className="cert-desc">{cert.desc}</p>
              <a
                href={cert.pdf}
                target="_blank"
                rel="noreferrer"
                className="cert-link"
                id={`cert-view-${cert.id}`}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
                Lihat Sertifikat
              </a>
            </div>
          ))}
        </div>

        {/* Banner bawah */}
        <div className="cert-cta reveal reveal-delay-3">
          <div className="cert-cta-icon">🎯</div>
          <div>
            <h3>Terus Belajar & Berkembang</h3>
            <p>
              Saya selalu berusaha meningkatkan kemampuan melalui kursus,
              workshop, dan pengalaman nyata.
            </p>
          </div>
          <a
            href="/assets/CV-Ali-Akbar-Bermano.pdf"
            download="CV-Ali-Akbar-Bermano.pdf"
            className="btn btn-primary"
            id="certs-download-cv"
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}
