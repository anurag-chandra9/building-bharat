import { Routes, Route } from 'react-router-dom'
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
        <Route path="courses" element={<div>Courses Page</div>} />
        <Route path="college" element={<div>For College Page</div>} />
        <Route path="internships" element={<div>Internships Page</div>} />
        <Route path="blogs" element={<div>Blogs Page</div>} />
        <Route path="start" element={<div>Start Learning Page</div>} />
        
      </Route>
    </Routes>
  )
}

export default App
// File: vite-project/src/App.jsx


