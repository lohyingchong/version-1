import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import ServiceCategories from './components/ServiceCategories'
import FeaturedProviders from './components/FeaturedProviders'
import HowItWorks from './components/HowItWorks'
import Footer from './components/Footer'
import AuthModal from './components/AuthModal'
import AuthCallback from './components/AuthCallback'
import ServicesPage from './pages/ServicesPage'
import ServiceDetailsPage from './pages/ServiceDetailsPage'
import SavedItemsPage from './pages/SavedItemsPage'
import { useGoogleAuth } from './hooks/useGoogleAuth'

const HomePage = ({ onOpenAuth }: { onOpenAuth: (mode: 'login' | 'signup') => void }) => (
  <>
    <Hero onOpenAuth={onOpenAuth} />
    <ServiceCategories />
    <FeaturedProviders />
    <HowItWorks />
  </>
)

function App() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login')
  const { user } = useGoogleAuth()

  const openAuthModal = (mode: 'login' | 'signup') => {
    setAuthMode(mode)
    setIsAuthModalOpen(true)
  }

  // Close modal when user successfully authenticates
  useEffect(() => {
    if (user && isAuthModalOpen) {
      // Keep modal open to show user profile
      // User can manually close it
    }
  }, [user, isAuthModalOpen])

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 font-inter">
        <div className="fixed inset-0 bg-gradient-to-br from-blue-100/20 via-transparent to-cyan-100/20 pointer-events-none" />
        
        <Routes>
          <Route path="/auth/callback" element={<AuthCallback />} />
          <Route path="/saved" element={
            <>
              <Header onOpenAuth={openAuthModal} user={user} />
              <SavedItemsPage />
              <Footer />
            </>
          } />
          <Route path="/services/:id" element={
            <>
              <Header onOpenAuth={openAuthModal} user={user} />
              <ServiceDetailsPage />
              <Footer />
            </>
          } />
          <Route path="/services" element={
            <>
              <Header onOpenAuth={openAuthModal} user={user} />
              <ServicesPage />
              <Footer />
            </>
          } />
          <Route path="/" element={
            <>
              <Header onOpenAuth={openAuthModal} user={user} />
              <HomePage onOpenAuth={openAuthModal} />
              <Footer />
            </>
          } />
        </Routes>
        
        <AuthModal 
          isOpen={isAuthModalOpen}
          onClose={() => setIsAuthModalOpen(false)}
          mode={authMode}
          onSwitchMode={setAuthMode}
        />
      </div>
    </Router>
  )
}

export default App
