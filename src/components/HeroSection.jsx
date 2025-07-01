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

const serviceGrid = [
  {
    icon: <Globe className="w-8 h-8 text-orange-500" />,
    label: "Think Tanks",
    caption: "Work with top policy research organizations",
  },
  {
    icon: <Briefcase className="w-8 h-8 text-orange-500" />,
    label: "Political consulting",
    caption: "Real projects with political leaders",
  },
  {
    icon: <BookOpen className="w-8 h-8 text-orange-500" />,
    label: "Research",
    caption: "Hands-on research & analysis",
  },
  {
    icon: <Users className="w-8 h-8 text-orange-500" />,
    label: "Public Policy",
    caption: "Shape impactful policies",
  },
  {
    icon: <span className="font-bold text-orange-600 text-lg">Building<br />BHARAT</span>,
    label: "",
    caption: "",
    center: true,
  },
  {
    icon: <GraduationCap className="w-8 h-8 text-orange-500" />,
    label: "Fellowships",
    caption: "Get mentored by experts",
  },
  {
    icon: <Landmark className="w-8 h-8 text-orange-500" />,
    label: "MLA/MP Internships",
    caption: "Intern with parliamentarians",
  },
];

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

// OrbitIconsWithCaptions: Rotates icons+captions around a fixed center with proper margin and normal speed
function OrbitIconsWithCaptions() {
  const icons = [
    {
      icon: <Globe className="w-8 h-8 text-orange-500" />,
      label: "Think Tanks",
     
    },
    {
      icon: <Briefcase className="w-8 h-8 text-orange-500" />,
      label: "Political consulting",
    },
    {
      icon: <BookOpen className="w-8 h-8 text-orange-500" />,
      label: "Research",
    },
    {
      icon: <Users className="w-8 h-8 text-orange-500" />,
      label: "Public Policy",
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-orange-500" />,
      label: "Fellowships",
    },
    {
      icon: <Landmark className="w-8 h-8 text-orange-500" />,
      label: "MLA/MP Internships",
    },
  ];

  const itemRefs = icons.map(() => useRef(null));
  // Animation state for pulsing radius
  const pulseDuration = 250; // ms
  const pulseInterval = 4000; // ms (every 4s pulse)
  useAnimationFrame((t) => {
    const center = { x: 160, y: 160 };
    // Pulse logic: for 0.5s every 4s, radius shrinks
    const ms = t % pulseInterval;
    let radius = 150; // increased from 120 to 150
    if (ms < pulseDuration) {
      // Animate radius from 150 to 100 and back to 150 smoothly
      const progress = ms / pulseDuration;
      // Ease in-out for smoothness
      const eased = 0.5 - 0.5 * Math.cos(Math.PI * progress);
      radius = 150 - 50 * eased;
    }
    icons.forEach((_, i) => {
      const angle = ((t / 16000) * 2 * Math.PI) + (i * (2 * Math.PI / icons.length));
      const x = center.x + radius * Math.cos(angle) - 40;
      const y = center.y + radius * Math.sin(angle) - 32;
      if (itemRefs[i].current) {
        itemRefs[i].current.style.transform = `translate(${x}px, ${y}px)`;
      }
    });
  });

  return (
    <>
      {icons.map((item, i) => (
        <div
          key={i}
          ref={itemRefs[i]}
          className="absolute w-20 h-16 flex flex-col items-center justify-center pointer-events-none"
          style={{ transition: "transform 0.3s" }}
        >
          <div className="mb-1">{item.icon}</div>
          <span className="font-semibold text-[15px] text-orange-900">{item.label}</span>
          <span className="text-xs text-gray-500 text-center mt-0.5">{item.caption}</span>
        </div>
      ))}
    </>
  );
}

