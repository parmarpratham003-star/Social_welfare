import {
  Megaphone,
  UserPlus,
  Gift,
  HandCoins,
  HeartHandshake,
} from "lucide-react";

function HowCanYouHelp() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-14 lg:gap-24">

          {/* ================= LEFT CONTENT ================= */}
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight text-black">
              HOW <br />
              <span className="font-normal">CAN YOU HELP?</span>
            </h2>

            <div className="w-16 h-[3px] bg-[#f1cc2f] mt-6 mb-10"></div>

            <p className="text-[#6b6b6b] leading-relaxed max-w-md mb-10 text-sm md:text-base">
              Enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
              in reprehenderit in voluptate velit esse cillum.
            </p>

            <button className="inline-flex items-center bg-[#f1cc2f] px-7 py-3 font-semibold text-sm tracking-wide hover:bg-[#e6c11f] transition">
              LEARN MORE
              <span className="ml-4 bg-black text-white w-7 h-7 flex items-center justify-center rounded-full text-sm">
                →
              </span>
            </button>
          </div>

          {/* ================= RIGHT CONTENT ================= */}
          <div className="relative flex flex-col items-start lg:items-start">

            {/* IMAGE (TOP) */}
            <div className="relative ml-[-40px]">
              {/* Background Shape */}
              <div className="absolute -top-6 -right-6 w-[360px] h-[240px] 
                              bg-[#f8f6e8] rounded-[60px] -z-10" />

              <div className="rounded-[50px] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1527980965255-d3b416303d12"
                  alt="Donation"
                  className="w-60 sm:w-72 md:w-80 lg:w-[360px]"
                />
              </div>
            </div>

            {/* TEXT / LIST (BOTTOM) */}
            <div className="mt-10 ml-[-80px] bg-[#f8f6e8] 
                            rounded-2xl p-8 md:p-10 w-[320px] shadow-lg">

              <ul className="space-y-6 text-sm md:text-base text-black">
                <li className="flex items-center gap-4">
                  <Megaphone size={18} />
                  <span>Media</span>
                </li>
                <li className="flex items-center gap-4">
                  <UserPlus size={18} />
                  <span>Become Volunteer</span>
                </li>
                <li className="flex items-center gap-4">
                  <Gift size={18} />
                  <span>Make a Gift</span>
                </li>
                <li className="flex items-center gap-4">
                  <HandCoins size={18} />
                  <span>Send Donation</span>
                </li>
                <li className="flex items-center gap-4">
                  <HeartHandshake size={18} />
                  <span>Give Helping Hand</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default HowCanYouHelp;
