import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="bg-white border-b shadow-sm sticky top-0 z-50 w-full">
      <div className="w-full max-w-screen-2xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img
            src="https://media.licdn.com/dms/image/v2/D4D0BAQHCWnVcpO5uhg/company-logo_200_200/B4DZc3OjixHwAI-/0/1748978252413/buildingbharat_logo?e=1756944000&v=beta&t=vw2Qb2wdsLvreYpTTaVV4UYQ8df8fnN-h1dpcTJMTJY"
            alt="Building Bharat Logo"
            className="h-8 w-auto"
          />
          <span className="text-2xl font-bold flex items-center gap-1">
            <span className="text-orange-500">BUILDING</span>
            <span className="text-black">BHARAT</span>
          </span>
        </Link>
        <div className="hidden md:flex gap-6 items-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-sm font-medium hover:text-orange-500 transition ${
                isActive ? 'text-orange-500' : 'text-gray-700'
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/courses"
            className={({ isActive }) =>
              `text-sm font-medium hover:text-orange-500 transition ${
                isActive ? 'text-orange-500' : 'text-gray-700'
              }`
            }
          >
            Courses
          </NavLink>
          <NavLink
            to="/college"
            className={({ isActive }) =>
              `text-sm font-medium hover:text-orange-500 transition ${
                isActive ? 'text-orange-500' : 'text-gray-700'
              }`
            }
          >
            For College
          </NavLink>
          <NavLink
            to="/internships"
            className={({ isActive }) =>
              `text-sm font-medium hover:text-orange-500 transition ${
                isActive ? 'text-orange-500' : 'text-gray-700'
              }`
            }
          >
            Internships
          </NavLink>
          <NavLink
            to="/blogs"
            className={({ isActive }) =>
              `text-sm font-medium hover:text-orange-500 transition ${
                isActive ? 'text-orange-500' : 'text-gray-700'
              }`
            }
          >
            Blogs
          </NavLink>
          <NavLink
            to="/start"
            className={({ isActive }) =>
              `text-sm font-medium border border-orange-500 text-orange-500 px-4 py-2 rounded hover:bg-orange-50 transition font-semibold ${
                isActive ? 'bg-orange-50' : ''
              }`
            }
          >
            Start Learning
          </NavLink>
        </div>
        <button
          className="md:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-white border-t">
          <div className="flex flex-col gap-2 px-4 py-2">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `py-2 text-base font-medium hover:text-orange-500 transition ${
                  isActive ? 'text-orange-500' : 'text-gray-700'
                }`
              }
              onClick={() => setOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/courses"
              className={({ isActive }) =>
                `py-2 text-base font-medium hover:text-orange-500 transition ${
                  isActive ? 'text-orange-500' : 'text-gray-700'
                }`
              }
              onClick={() => setOpen(false)}
            >
              Courses
            </NavLink>
            <NavLink
              to="/college"
              className={({ isActive }) =>
                `py-2 text-base font-medium hover:text-orange-500 transition ${
                  isActive ? 'text-orange-500' : 'text-gray-700'
                }`
              }
              onClick={() => setOpen(false)}
            >
              For College
            </NavLink>
            <NavLink
              to="/internships"
              className={({ isActive }) =>
                `py-2 text-base font-medium hover:text-orange-500 transition ${
                  isActive ? 'text-orange-500' : 'text-gray-700'
                }`
              }
              onClick={() => setOpen(false)}
            >
              Internships
            </NavLink>
            <NavLink
              to="/blogs"
              className={({ isActive }) =>
                `py-2 text-base font-medium hover:text-orange-500 transition ${
                  isActive ? 'text-orange-500' : 'text-gray-700'
                }`
              }
              onClick={() => setOpen(false)}
            >
              Blogs
            </NavLink>
            <NavLink
              to="/start"
              className={({ isActive }) =>
                `py-2 text-base font-medium border border-orange-500 text-orange-500 rounded hover:bg-orange-50 transition font-semibold ${
                  isActive ? 'bg-orange-50' : ''
                }`
              }
              onClick={() => setOpen(false)}
            >
              Start Learning
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  )
}
