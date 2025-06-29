import { GraduationCap, Users, Briefcase, Landmark, BookOpen, Globe } from 'lucide-react'
import { motion, useAnimationFrame } from "framer-motion"
import { useState, useEffect, useRef } from "react"
import OrbitShowcase from "./OrbitShowcase"

const services = [
  { icon: <BookOpen className="w-6 h-6 text-orange-500" />, label: 'Research' },
  { icon: <Globe className="w-6 h-6 text-orange-500" />, label: 'Think Tanks' },
  { icon: <Landmark className="w-6 h-6 text-orange-500" />, label: 'MLA/MP Internships' },
  { icon: <Briefcase className="w-6 h-6 text-orange-500" />, label: 'Political Consulting' },
  { icon: <GraduationCap className="w-6 h-6 text-orange-500" />, label: 'Fellowships' },
  { icon: <Users className="w-6 h-6 text-orange-500" />, label: 'Public Policy' },
]

export default function HeroSection() {
  // Rotating services state
  const rotatingLabels = [
    'Research',
    'Think Tanks',
    'MLA/MP Internships',
    'Political Consulting',
    'Fellowships',
    'Public Policy'
  ];
  const rotatingIcons = [
    <BookOpen className="w-10 h-10 text-orange-500" />,
    <Globe className="w-10 h-10 text-orange-500" />,
    <Landmark className="w-10 h-10 text-orange-500" />,
    <Briefcase className="w-10 h-10 text-orange-500" />,
    <GraduationCap className="w-10 h-10 text-orange-500" />,
    <Users className="w-10 h-10 text-orange-500" />
  ];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % rotatingLabels.length);
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-orange-50 py-12 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left: Orbit Animation with icons only */}
        <div className="flex-1 flex justify-center">
          {/* Inline orbit animation with icons */}
          <OrbitIcons icons={rotatingIcons} />
        </div>
        {/* Right: Hero Content */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left gap-6">
          <h1 className="text-3xl md:text-5xl font-bold mb-2">
            Crack Political and policies roles with Confidence!
          </h1>
          <p className="text-gray-700 max-w-2xl mb-4">
            Join India’s most practical platform for aspiring political and policy professionals. Learn from experts, get real-world exposure, and build your career in public leadership.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <button className="bg-orange-500 text-white px-6 py-3 rounded font-semibold hover:bg-orange-600 transition">
              Start Learning For Free
            </button>
            <button className="border border-orange-500 text-orange-500 px-6 py-3 rounded font-semibold hover:bg-orange-50 transition">
              Join Premium
            </button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mt-4">
            {services.map((s, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                {s.icon}
                <span className="text-xs font-medium">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// OrbitIcons component for orbiting lucide-react icons
function OrbitIcons({ icons }) {
  const itemRefs = [];
  for (let i = 0; i < icons.length; i++) {
    itemRefs.push(useRef(null));
  }

  useAnimationFrame((t) => {
    const center = { x: 140, y: 140 };
    const radius = 100;
    itemRefs.forEach((ref, i) => {
      const angle = ((t / 1000) * 0.7) + (i * (2 * Math.PI / itemRefs.length));
      const x = center.x + radius * Math.cos(angle) - 24;
      const y = center.y + radius * Math.sin(angle) - 24;
      if (ref.current) {
        ref.current.style.transform = `translate(${x}px, ${y}px)`;
      }
    });
  });

  return (
    <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full border-2 border-orange-200 bg-white shadow-inner">
      <div className="absolute top-[50%] left-[50%] w-6 h-6 bg-orange-400 rounded-full -translate-x-1/2 -translate-y-1/2" />
      {icons.map((icon, index) => (
        <div
          key={index}
          ref={itemRefs[index]}
          className="absolute w-12 h-12 flex items-center justify-center bg-orange-500/10 rounded-full shadow"
        >
          {icon}
        </div>
      ))}
    </div>
  );
}
