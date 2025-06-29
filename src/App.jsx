import { Routes, Route } from 'react-router-dom'
import './App.css'
import OrbitShowcase from './components/OrbitShowcase.jsx'
import Layout from './components/Layout'
import Home from './pages/Home'
import HeroSection from './components/HeroSection'
import Stories from './components/Stories'
import InitiativeFor from './components/InitiativeFor'
import LiveSessions from './components/LiveSessions'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="hero" element={<HeroSection />} />
        <Route path="stories" element={<Stories />} />
        <Route path="initiative-for" element={<InitiativeFor />} />
        <Route path="live-sessions" element={<LiveSessions />} />
        {/* Optionally, routes for Navbar and Footer for direct view */}
        <Route path="navbar" element={<Navbar />} />
        <Route path="footer" element={<Footer />} />
        {/* Add more routes here as needed */}
      </Route>
    </Routes>
  )
}

export default App
// File: vite-project/src/App.jsx


