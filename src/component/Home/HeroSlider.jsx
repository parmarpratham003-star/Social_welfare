import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a",
    title: "GIVE A HELPING",
    bold: "HAND",
    subtitle: "TO THOSE WHO NEED IT!",
    text: "Volunteers do not necessarily have the time, they just have the heart.",
  },
  {
    image: "https://images.unsplash.com/photo-1509099836639-18ba1795216d",
    title: "HELP THE",
    bold: "CHILDREN",
    subtitle: "AROUND THE WORLD",
    text: "Your small help can bring a big smile.",
  },
];

/* ===== IMAGE ANIMATION ===== */
const slideVariant = {
  hidden: { opacity: 0, x: 80, scale: 1.05 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 1.2, ease: "easeOut" },
  },
  exit: { opacity: 0, x: -80, scale: 1.05 },
};

function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () => setIndex((i) => (i + 1) % slides.length),
      5000
    );
    return () => clearInterval(t);
  }, []);

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative h-[95vh] w-full">
        <AnimatePresence>
          <motion.div
            key={index}
            variants={slideVariant}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[index].image})` }}
          >
            {/* overlay */}
            <div className="absolute inset-0 bg-black/30" />

            {/* hero text */}
            <div className="relative z-10 h-full flex items-center">
              <div className="max-w-7xl mx-auto px-12 w-full">
                <div className="text-white max-w-xl">
                  <h1 className="text-5xl font-light leading-tight">
                    {slides[index].title}{" "}
                    <span className="font-bold">{slides[index].bold}</span>
                    <br />
                    {slides[index].subtitle}
                  </h1>

                  <div className="w-16 h-[3px] bg-[#f0cd2f] my-6"></div>

                  <p className="italic text-white/90 mb-8">
                    {slides[index].text}
                  </p>

                  <button className="border border-white px-8 py-3 text-sm font-semibold tracking-wide hover:bg-[#f0cd2f] hover:border-[#f0cd2f] transition">
                    LEARN MORE →
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* arrows */}
        <button className="absolute left-6 top-1/2 -translate-y-1/2 bg-black/70 text-[#f0cd2f] w-10 h-10 flex items-center justify-center z-20">
          ❮
        </button>
        <button className="absolute right-6 top-1/2 -translate-y-1/2 bg-black/70 text-[#f0cd2f] w-10 h-10 flex items-center justify-center z-20">
          ❯
        </button>

        {/* ================= BOTTOM BOXES (VISIBLE & OVERLAY) ================= */}
        <div className="absolute left-0 -bottom-40 w-full z-40">
          <div className="max-w-7xl mx-auto px-12">
            <div className="grid grid-cols-12 bg-white shadow-2xl">

              {/* LEFT BOX */}
              <div className="col-span-12 lg:col-span-5 px-10 py-10 border-b-[6px] border-[#f0cd2f]">
                <h3 className="text-xs uppercase font-semibold tracking-widest mb-6">
                  Upcoming Events
                </h3>

                <div className="flex gap-6">
                  <img
                    src="https://images.unsplash.com/photo-1529107386315-e1a2ed48a620"
                    className="w-32 h-32 object-cover"
                    alt=""
                  />

                  <div>
                    <h4 className="font-semibold text-sm mb-2 uppercase">
                      Education For Every Children
                    </h4>

                    <p className="text-xs text-gray-500 mb-1">
                      MAY 14, 2015 · 3.00 PM
                    </p>
                    <p className="text-xs text-gray-500 mb-5">
                      Conference Hall, 12 Marc Street, Africa
                    </p>

                    <div className="flex gap-3">
                      {["DAYS", "HOURS", "MINUTES", "SECONDS"].map((t) => (
                        <div key={t} className="text-center">
                          <div className="bg-[#f0cd2f] text-white px-4 py-3 font-bold text-sm">
                            00
                          </div>
                          <div className="text-[10px] mt-1 uppercase">{t}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT BOX */}
              <div className="col-span-12 lg:col-span-7 px-12 py-12">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-4xl font-semibold">$25</h3>
                  <div className="text-xs tracking-widest uppercase">
                    <span className="text-[#f0cd2f] font-semibold">
                      Monthly Donation
                    </span>{" "}
                    | Single Donation
                  </div>
                </div>

                <p className="text-sm text-gray-500 mb-10 max-w-md">
                  Could pay for a day out for 4 young carers in need of a break.
                </p>

                <div className="relative mb-10">
                  <div className="h-2 bg-gray-200"></div>
                  <div className="absolute left-[32%] top-1/2 -translate-y-1/2 w-2 h-6 bg-[#f0cd2f]" />

                  <div className="flex justify-between text-xs mt-4 text-gray-500">
                    <span>$0</span>
                    <span>$10</span>
                    <span className="text-black font-semibold">$25</span>
                    <span>$50</span>
                    <span>$75</span>
                    <span>$100</span>
                  </div>
                </div>

                <button className="w-full bg-[#f0cd2f] py-4 text-sm font-semibold tracking-wide hover:bg-[#e5c228] transition">
                  DONATE NOW!
                </button>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* spacer so next section doesn't overlap */}
      <div className="h-72"></div>
    </>
  );
}

export default HeroSlider;
