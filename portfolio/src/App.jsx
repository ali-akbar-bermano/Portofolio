import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import DownloadFab from "./components/DownloadFab";
import HomePage from "./pages/HomePage";
import PortfolioPage from "./pages/PortfolioPage";
import SkillsPage from "./pages/SkillsPage";
import ParticleBackground from "./components/ParticleBackground";
import CustomCursor from "./components/CustomCursor";

function App() {
  return (
    <HashRouter>
      {/* Global decorative & UX layers */}
      <ParticleBackground />
      <CustomCursor />

      <div className="page-wrapper">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/skills" element={<SkillsPage />} />

            {/* fallback → selalu ke home */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
        <Footer />
        <DownloadFab />
      </div>
    </HashRouter>
  );
}

export default App;
