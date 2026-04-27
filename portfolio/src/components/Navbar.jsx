import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="navbar-inner container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <span className="logo-initials">AA</span>
          <span className="logo-name">Ali Akbar</span>
        </Link>

        <nav className={`navbar-nav${menuOpen ? ' open' : ''}`}>
          <NavLink to="/" className="nav-link" onClick={closeMenu} end>Home</NavLink>
          <NavLink to="/portfolio" className="nav-link" onClick={closeMenu}>Portfolio</NavLink>
          <a
            href="/assets/CV-Ali-Akbar-Bermano.pdf"
            download="CV-Ali-Akbar-Bermano.pdf"
            className="btn btn-primary nav-cta"
            onClick={closeMenu}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Download CV
          </a>
        </nav>

        <button
          className={`hamburger${menuOpen ? ' active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          id="hamburger-btn"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {menuOpen && <div className="nav-overlay" onClick={closeMenu} />}
    </header>
  )
}
