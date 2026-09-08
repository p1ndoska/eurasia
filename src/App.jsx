import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CookieConsentProvider } from './context/CookieConsentContext'
import Header from './components/Header/Header'
import CookieConsent from './components/CookieConsent/CookieConsent'
import HomePage from './pages/HomePage'
import SponsorsPage from './pages/SponsorsPage'
import ParticipantsPage from './pages/ParticipantsPage'
import ContactsPage from './pages/ContactsPage'
import HotelPage from './pages/HotelPage'
import ProgramPage from './pages/ProgramPage'
import GalleryPage from './pages/GalleryPage'
import './App.css'

function App() {
  return (
    <CookieConsentProvider>
      <BrowserRouter>
        <div className="app">
          <Header />

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/participants" element={<ParticipantsPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
            <Route path="/hotel" element={<HotelPage />} />
            <Route path="/program" element={<ProgramPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/sponsors" element={<SponsorsPage />} />
          </Routes>

          <CookieConsent />
        </div>
      </BrowserRouter>
    </CookieConsentProvider>
  )
}

export default App
