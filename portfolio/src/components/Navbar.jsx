import { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const navLinks = [
  { to: "/", label: "Home", end: true },
  { to: "/portfolio", label: "Portfolio", end: false },
  { to: "/skills", label: "Skills", end: false },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollPct, setScrollPct] = useState(0);
  const location = useLocation();

  // Close drawer on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Scroll effects: shrink header + progress bar
  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 20);

      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      setScrollPct(maxScroll > 0 ? (scrollY / maxScroll) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className={`navbar${scrolled ? " scrolled" : ""}`}>
        {/* Scroll progress bar */}
        <div
          className="scroll-progress"
          style={{ width: `${scrollPct}%` }}
          aria-hidden="true"
        />

        <div className="navbar-inner container">
          {/* Logo */}
          <Link to="/" className="navbar-logo" onClick={closeMenu}>
            <span className="logo-mark">AA</span>
            <span className="logo-text">Ali Akbar Bermano</span>
          </Link>

          {/* Desktop + Mobile nav */}
          <nav
            className={`navbar-nav${menuOpen ? " open" : ""}`}
            aria-label="Main navigation"
          >
            {navLinks.map(({ to, label, end }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                className={({ isActive }) =>
                  `nav-link${isActive ? " active" : ""}`
                }
                onClick={closeMenu}
              >
                {label}
              </NavLink>
            ))}

            <a
              href="/assets/CV-Ali-Akbar-Bermano.pdf"
              download="CV-Ali-Akbar-Bermano.pdf"
              className="btn btn-primary nav-cta"
              onClick={closeMenu}
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
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download CV
            </a>
          </nav>

          {/* Hamburger */}
          <button
            className={`hamburger${menuOpen ? " active" : ""}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* Backdrop */}
      {menuOpen && (
        <div
          className="nav-backdrop active"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}
    </>
  );
}
