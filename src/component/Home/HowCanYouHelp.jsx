import {
  Megaphone,
  UserPlus,
  Gift,
  HandCoins,
  HeartHandshake,
} from "lucide-react";

function HowCanYouHelp() {
  const items = [
    { icon: Megaphone, label: "Spread Awareness" },
    { icon: UserPlus, label: "Become a Volunteer" },
    { icon: Gift, label: "Make a Gift" },
    { icon: HandCoins, label: "Send Donation" },
    { icon: HeartHandshake, label: "Give Helping Hand" },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-center">

          {/* ================= LEFT CONTENT ================= */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-serif font-bold leading-tight text-black">
              HOW <br />
              <span className="font-normal text-gray-700">
                CAN YOU HELP?
              </span>
            </h2>

            <div className="w-14 h-[3px] bg-yellow-400"></div>

            <p className="text-gray-600 leading-relaxed max-w-md text-sm md:text-base">
              Enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Together we can create
              real change.
            </p>

            <button
              className="inline-flex items-center gap-3
                         border-2 border-black px-7 py-3
                         font-semibold text-sm tracking-wide
                         rounded-full
                         transition-all duration-300
                         hover:bg-black hover:text-white
                         hover:gap-5"
            >
              LEARN MORE
              <span>→</span>
            </button>
          </div>

          {/* ================= RIGHT TIMELINE ================= */}
          <div className="relative pl-10">

            {/* Vertical line */}
            <div className="absolute left-[22px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-yellow-400/40 to-gray-200" />

            <ul className="space-y-8">
              {items.map((item, i) => {
                const Icon = item.icon;
                return (
                  <li
                    key={i}
                    className="group flex items-center gap-6
                               cursor-pointer transition-all duration-300"
                  >
                    {/* Icon */}
                    <div
                      className="relative z-10 w-11 h-11 flex items-center justify-center
                                 bg-yellow-400 text-black rounded-full
                                 shadow-md
                                 transition-all duration-300
                                 group-hover:scale-110
                                 group-hover:shadow-xl"
                    >
                      <Icon size={18} />
                    </div>

                    {/* Text */}
                    <span
                      className="text-base text-black font-medium
                                 transition-all duration-300
                                 group-hover:text-yellow-500
                                 group-hover:translate-x-1"
                    >
                      {item.label}
                    </span>
                  </li>
                );
              })}
            </ul>

          </div>

        </div>
      </div>
    </section>
  );
}

export default HowCanYouHelp;