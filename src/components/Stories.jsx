const priyaImg = "https://randomuser.me/api/portraits/women/68.jpg";

export default function Stories() {
  return (
    <section className="bg-[#F8F9FA] py-16 px-4 w-full">
      <div className="w-full max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-green-900 mb-12 tracking-tight">
          Stories That Inspire
        </h2>

        
        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 flex flex-col md:flex-row  md:items-stretch p-0 overflow-hidden">
          <div className="md:w-2/3 w-full flex flex-col  px-2 py-10">
           <h3 className="text-2xl md:text-2xl font-semibold px-5 mb-4 text-gray-900 text-left">
  Student to Social Impact Leader
</h3>

            <p className="text-gray-700 text-base leading-relaxed mb-8 text-left px-5">
              Building Bharat transformed the way I learn and think. With hands-on projects, expert mentorship, and constant support, I discovered my leadership potential.
              
              I never imagined I’d lead initiatives in my own town while learning from top mentors across India. The journey wasn’t easy, but the Building Bharat team made it achievable—every step, every doubt, every win was celebrated. If you're serious about growing and giving back to India, this is where you start.
            </p>
            <div>
              <p className="text-orange-700 text-lg font-bold leading-relaxed  text-left px-5">Priya Sharma</p>
              <p className="text-black-700 leading-relaxed mb-8 text-left px-5 text-sm">Student Leader, Nagpur</p>
            </div>
          </div>
          <div className="md:w-1/3 w-full flex items-center justify-center bg-[#F3F4F6] p-8">
            <img
              src={priyaImg}
              alt="Priya Sharma"
              className="w-[220px] h-[280px] object-cover rounded-2xl shadow-md border-4 border-white"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
