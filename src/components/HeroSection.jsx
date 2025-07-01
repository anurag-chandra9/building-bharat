import { GraduationCap, Users, Briefcase, Landmark, BookOpen, Globe } from 'lucide-react'
import OrbitIconsWithCaptions from "./OrbitIconsWithCaptions"

export default function HeroSection() {
  return (
    <section className="bg-orange-50 py-12 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left: Hero Content */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left gap-6">
          <h1 className="text-3xl md:text-5xl font-bold mb-2">
            Crack Political and policies roles with Confidence!
          </h1>
          <p className="text-gray-700 max-w-2xl mb-4">
            We offer a world class curriculum and expert mentorship to help you break into politics and policy roles. No background needed—just your passion to lead and transform Bharat.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <button className="bg-orange-500 text-white px-6 py-3 rounded font-semibold hover:bg-orange-600 transition">
              Start Learning For Free
            </button>
            <button className="border border-orange-500 text-orange-500 px-6 py-3 rounded font-semibold hover:bg-orange-50 transition">
              Join premium
            </button>
          </div>
        </div>
        {/* Right: Rotating Orbit with Centered Building Bharat */}
        <div className="flex-1 flex justify-center">
          <div className="relative w-80 h-80">
            {/* Center: Building Bharat logo/text */}
            <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
              <span className="font-bold text-orange-600 text-2xl leading-tight text-center select-none">
                Building<br />BHARAT
              </span>
            </div>
            {/* Orbiting icons with captions */}
            <OrbitIconsWithCaptions />
          </div>
        </div>
      </div>
    </section>
  )
}



