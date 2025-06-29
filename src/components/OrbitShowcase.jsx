import { useRef } from "react";
import { useAnimationFrame } from "framer-motion";

export default function OrbitShowcase() {
  const itemRefs = [useRef(null), useRef(null), useRef(null)];

  useAnimationFrame((t) => {
    const center = { x: 140, y: 140 }; // adjust for container size
    const radius = 100;

    itemRefs.forEach((ref, i) => {
      // Fix: angle must be in radians and update should be smooth
      const angle = ((t / 1000) * 0.7) + (i * (2 * Math.PI / itemRefs.length));
      const x = center.x + radius * Math.cos(angle) - 24; // -24 to center the item (w-12/2)
      const y = center.y + radius * Math.sin(angle) - 24; // -24 to center the item (h-12/2)
      if (ref.current) {
        ref.current.style.transform = `translate(${x}px, ${y}px)`;
      }
    });
  });

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gradient-to-br from-white to-blue-50 p-8">
      {/* Left: Orbit Area */}
      <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full border-2 border-blue-200 bg-white shadow-inner">
        {/* Center point (invisible or can put logo) */}
        <div className="absolute top-[50%] left-[50%] w-6 h-6 bg-gray-400 rounded-full -translate-x-1/2 -translate-y-1/2" />
        {/* Orbiting items */}
        {["🛰️", "🚀", "🪐"].map((icon, index) => (
          <div
            key={index}
            ref={itemRefs[index]}
            className="absolute w-12 h-12 flex items-center justify-center text-2xl bg-blue-500 text-white rounded-full shadow-md"
          >
            {icon}
          </div>
        ))}
      </div>
      {/* Right: Static Content */}
      <div className="mt-12 md:mt-0 md:ml-16 max-w-md text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
          Building the Future
        </h2>
        <p className="text-gray-700 mb-6">
          These elements orbit dynamically around the center. This could represent team members, planets, features, or service icons.
        </p>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
          Get Started
        </button>
      </div>
    </div>
  );
}
