import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { name: 'Home', to: '/' },
  { name: 'Courses', to: '/courses' },
  { name: 'For College', to: '/college' },
  { name: 'Internships', to: '/internships' },
  { name: 'Blogs', to: '/blogs' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="bg-white border-b shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img
            src="https://buildingbharat.onrender.com/static/images/logo.svg"
            alt="Building Bharat Logo"
            className="h-8 w-auto"
          />
          <span className="text-2xl font-bold flex items-center gap-1">
            <span className="text-orange-500">BUILDING</span>
            <span className="text-black">BHARAT</span>
          </span>
        </Link>
        <div className="hidden md:flex gap-6 items-center">
          {navLinks.map(link => (
            <NavLink
              key={link.name}
              to={link.to}
              className={({ isActive }) =>
                `text-sm font-medium hover:text-orange-500 transition ${
                  isActive ? 'text-orange-500' : 'text-gray-700'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <Link
            to="/start"
            className="border border-orange-500 text-orange-500 px-4 py-2 rounded hover:bg-orange-50 transition font-semibold text-sm"
          >
            Start Learning
          </Link>
        </div>
        <button
          className="md:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t">
          <div className="flex flex-col gap-2 px-4 py-2">
            {navLinks.map(link => (
              <NavLink
                key={link.name}
                to={link.to}
                className={({ isActive }) =>
                  `py-2 text-base font-medium hover:text-orange-500 transition ${
                    isActive ? 'text-orange-500' : 'text-gray-700'
                  }`
                }
                onClick={() => setOpen(false)}
              >
                {link.name}
              </NavLink>
            ))}
            <Link
              to="/start"
              className="border border-orange-500 text-orange-500 px-4 py-2 rounded hover:bg-orange-50 transition font-semibold text-base mt-2"
              onClick={() => setOpen(false)}
            >
              Start Learning
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
