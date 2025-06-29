import { GraduationCap, RefreshCcw, Briefcase, Users } from 'lucide-react'

const cards = [
  {
    icon: <GraduationCap className="w-8 h-8 text-orange-500" />,
    title: 'College Students',
    desc: 'students fromm any discipline looking to build a career in politics and policy.',
  },
  {
    icon: <RefreshCcw className="w-8 h-8 text-orange-500" />,
    title: 'Career Switchers',
    desc: 'professionals from other fields wanting to transition into political consulting.',
  },
  {
    icon: <Briefcase className="w-8 h-8 text-orange-500" />,
    title: 'Young Professionals',
    desc: 'Early-career professionals seeking to specialize in government and policy work.',
  },
  {
    icon: <Users className="w-8 h-8 text-orange-500" />,
    title: 'Policy Enthusiasts',
    desc: 'Anyone passionate about public service and creating positive social impact.',
  },
]

export default function InitiativeFor() {
  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h2 className=" text-green-900 text-2xl md:text-3xl font-bold text-center mb-5">
          Who is this Initiative For?
        </h2>
        <p>perfect for Aspiring Political and Policy professionals from all Backgrounds</p>
        <br />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {cards.map((c, i) => (
            <div key={i} className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center gap-3">
              {c.icon}
              <h3 className="font-semibold text-lg">{c.title}</h3>
              <p className="text-gray-600 text-sm">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
