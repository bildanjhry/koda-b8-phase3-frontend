import { IoFlashOutline } from "react-icons/io5";
import { PiBracketsCurly } from "react-icons/pi";
import { MdOutlineGroups } from "react-icons/md";

const features = [
  {
    icon: IoFlashOutline,
    title: "Easy Create",
    desc: "Instantly generate high-performance short links with a single click or through our surgical API endpoints.",
    iconBg: "bg-indigo-100",
    iconColor: "text-indigo-600",
    barColor: "bg-indigo-200",
  },
  {
    icon: PiBracketsCurly,
    title: "Custom Slugs",
    desc: "Maintain brand authority with readable, custom link endings that resonate with your digital audience.",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
    barColor: "bg-emerald-200",
  },
  {
    icon: MdOutlineGroups,
    title: "Team Ready",
    desc: "Collaborate across departments with shared workspaces, permissions, and unified analytics dashboards.",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-500",
    barColor: "bg-orange-200",
  },
];

export default function Features() {
  return (
    <section className="bg-slate-50 py-20 min-h-145 px-6">
      <div className="max-w-5xl mx-auto flex flex-col gap-2">
        <p className="text-xs font-bold tracking-wider text-(--primary) mb-2">
          ARCHITECTURAL FEATURES
        </p>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-10">
          Built for Enterprise Precision
        </h2>

        <div className="grid grid-cols-1 mt-2 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map(({ icon: Icon, title, desc, iconBg, iconColor, barColor }) => (
            <div
              key={title}
              className="bg-white text-left h-60 
              rounded-2xl shadow-sm p-6 transition-shadow duration-200 hover:shadow-md"
            >
              <span className={`w-10 h-10 rounded-xl ${iconBg} 
              flex items-center justify-center mb-4`}>
                <Icon className={`w-5 h-5 ${iconColor}`} />
              </span>
              <h3 className="font-bold text-base text-gray-900 mb-2">{title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-5">{desc}</p>
              <span className={`block w-10 mt-6 h-1 rounded-full ${barColor}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}