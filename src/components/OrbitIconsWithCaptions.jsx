import { GraduationCap, Users, Briefcase, Landmark, BookOpen, Globe } from 'lucide-react'
import { useRef } from "react"
import { useAnimationFrame } from "framer-motion"

export default function OrbitIconsWithCaptions() {
  const icons = [
    { icon: <Globe className="w-8 h-8 text-orange-500" />, label: "Think Tanks" },
    { icon: <Briefcase className="w-8 h-8 text-orange-500" />, label: "Political consulting" },
    { icon: <BookOpen className="w-8 h-8 text-orange-500" />, label: "Research" },
    { icon: <Users className="w-8 h-8 text-orange-500" />, label: "Public Policy" },
    { icon: <GraduationCap className="w-8 h-8 text-orange-500" />, label: "Fellowships" },
    { icon: <Landmark className="w-8 h-8 text-orange-500" />, label: "MLA/MP Internships" },
  ];

  const itemRefs = [];
  for (let i = 0; i < icons.length; i++) {
    itemRefs.push(useRef(null));
  }
  const pulseDuration = 250; // ms
  const pulseInterval = 4000; // ms

  useAnimationFrame((t) => {
    const center = { x: 160, y: 160 };
    const ms = t % pulseInterval;
    let radius = 150;
    if (ms < pulseDuration) {
      const progress = ms / pulseDuration;
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
          <span className="font-semibold text-[15px] text-green-900">
            {item.label}
          </span>
        </div>
      ))}
    </>
  );
}
