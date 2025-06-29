const sessionImg = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80" // Replace with your image path or use a placeholder

export default function LiveSessions() {
  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Live Interactive Sessions</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>Weekly live sessions with industry experts</li>
            <li>Q&amp;A sessions with former parliamentarians</li>
            <li>Interactive policy workshops</li>
          </ul>
        </div>
        <div>
          <img
            src={sessionImg}
            alt="Live session"
            className="rounded-xl shadow-md w-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
