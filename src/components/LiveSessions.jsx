import { Users } from "lucide-react";

const sessionImg = "https://as2.ftcdn.net/jpg/05/40/23/99/1000_F_540239926_4VPbVHUSfnMXiZ5L03YNlaVuwynrfMdP.jpg"; // Replace with actual image path

export default function LiveSessions() {
  return (
    <section className="py-16 px-4 sm:px-6 md:px-10 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col gap-14">
        <div className="text-center px-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-900 mb-2 leading-snug">
            Why Building Bharat Is Different
          </h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Experience the most comprehensive political and policy education platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <div className="mt-1 shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
                  <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"/>
                  <rect x="2" y="6" width="14" height="12" rx="2"/>
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-green-800">
                Live Interactive Sessions
              </h3>
            </div>

<p className="text-gray-700 text-base leading-relaxed mb-8 text-left px-3">           Learn directly from policy experts, former MPs, senior bureaucrats, and successful political consultants through live, interactive sessions that simulate real-world scenarios.
            </p>

            <ul className="space-y-3 text-sm sm:text-base">
              {[
                "Weekly live sessions with industry experts",
                "Q&A sessions with former parliamentarians",
                "Interactive policy workshops",
              ].map((point, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="mt-1">
                    <svg width="18" height="18" fill="none" className="text-green-500" viewBox="0 0 20 20">
                      <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M5 10.5l3.5 3.5 6-7"/>
                    </svg>
                  </span>
                  <span className="text-gray-700">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-center">
            <img
              src={sessionImg}
              alt="Live session"
              className="rounded-2xl shadow-xl w-full max-w-md sm:max-w-sm md:max-w-md lg:max-w-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
