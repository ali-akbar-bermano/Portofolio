import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import DownloadFab from './components/DownloadFab'
import HomePage from './pages/HomePage'
import PortfolioPage from './pages/PortfolioPage'

function App() {
  return (
    <BrowserRouter>
      <div className="page-wrapper">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
          </Routes>
        </main>
        <Footer />
        <DownloadFab />
      </div>
    </BrowserRouter>
  )
}

export default App
