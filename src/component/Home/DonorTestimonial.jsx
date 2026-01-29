import { useEffect, useState } from "react";

const DonorTestimonial = () => {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);
  const target = 27514;

  /* ================= SMOOTH COUNTER ================= */
  useEffect(() => {
    
    const duration = 1800;
    const startTime = performance.now();

    const animateCount = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);

      const value = Math.floor(easeOut * target);
      setCount(value);

      if (progress < 1) {
        requestAnimationFrame(animateCount);
      } else {
        setCount(target);
        setDone(true);
      }
    };

    requestAnimationFrame(animateCount);
  }, []);

  return (
    <section className="w-full overflow-hidden bg-white">
      {/* ================= TOP TESTIMONIAL ================= */}
      <div className="flex flex-col lg:flex-row min-h-[420px] md:min-h-[460px]">

        {/* ================= LEFT CONTENT ================= */}
        <div className="lg:w-1/2 bg-gradient-to-br from-gray-100 to-gray-200 
                        px-6 sm:px-10 md:px-20 py-16 md:py-20 
                        flex items-center">
          <div className="max-w-xl animate-[fadeSlide_1.2s_ease-out]">

            <h3 className="text-xs sm:text-sm tracking-widest font-semibold 
                           text-gray-700 uppercase">
              WHAT OUR DONATERS SAY
            </h3>

            <div className="mt-6 md:mt-8 text-6xl md:text-7xl 
                            font-serif text-gray-400 
                            animate-[pulseSlow_3s_ease-in-out_infinite]">
              “
            </div>

            <p className="mt-4 md:mt-6 italic text-gray-600 
                          leading-relaxed text-base md:text-lg">
              Cum sociis natoque penatibus et magnis dis. Morbi nunc
              odio gravida at cursus. Parturient sed montes nascetur
              ridiculus mus. Nulla dui. Fusce feugiat malesuada odio.
            </p>

            <p className="mt-6 md:mt-8 font-serif text-xs md:text-sm 
                          tracking-wide text-gray-800">
              WILLIAM SMITH
              <span className="italic text-gray-500 ml-2 block sm:inline">
                / New World Marketing Director
              </span>
            </p>

            <div className="flex gap-3 mt-8 md:mt-10">
              <span className="w-2.5 h-2.5 rounded-full bg-gray-400"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-gray-300"></span>
            </div>
          </div>
        </div>

        {/* ================= RIGHT IMAGE ================= */}
        <div className="lg:w-1/2 relative overflow-hidden group h-[280px] sm:h-[340px] lg:h-auto">
          <img
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c"
            alt="Helping children"
            className="
              w-full h-full object-cover
              scale-110 opacity-0
              animate-[imageReveal_1.4s_ease-out_forwards]
              transition-transform duration-[2500ms]
              group-hover:scale-125
            "
          />

          <div className="absolute inset-0 bg-gradient-to-r 
                          from-black/50 via-black/25 to-transparent"></div>

          <div className="absolute inset-0 animate-[lightMove_6s_linear_infinite]
                          bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.15),transparent_60%)]">
          </div>
        </div>
      </div>

      {/* ================= BOTTOM COUNTER ================= */}
      <div className="text-center py-16 md:py-24 bg-white px-6">
        <h2
          className={`text-4xl sm:text-5xl md:text-6xl font-serif 
                      text-yellow-500
                      drop-shadow-[0_0_14px_rgba(234,179,8,0.45)]
                      transition-transform duration-700
                      ${done ? "scale-110" : ""}`}
        >
          {count.toLocaleString()}
        </h2>

        <p className="mt-6 text-lg sm:text-xl md:text-2xl 
                      font-serif text-gray-800">
          We are Really Proud of Our Kind{" "}
          <span className="relative inline-block mx-2">
            <span className="px-3 py-1 rounded-full 
                             bg-yellow-400/15 text-yellow-600 
                             font-bold tracking-wide">
              Voluntaries
            </span>
            <span className="absolute left-1/2 -bottom-2 
                             w-2/3 h-[2px] bg-yellow-400 
                             -translate-x-1/2"></span>
          </span>
          <span className="text-yellow-500 ml-1">♥</span>
        </p>
      </div>

      {/* ================= ANIMATIONS ================= */}
      <style>{`
        @keyframes fadeSlide {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes pulseSlow {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; }
        }

        @keyframes imageReveal {
          0% { opacity: 0; transform: scale(1.25) translateY(40px); }
          100% { opacity: 1; transform: scale(1.1) translateY(0); }
        }

        @keyframes lightMove {
          0% { transform: translate(-10%, -10%); }
          100% { transform: translate(10%, 10%); }
        }
      `}</style>
    </section>
  );
};

export default DonorTestimonial;
