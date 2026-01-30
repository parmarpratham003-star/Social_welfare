import { useEffect, useState } from "react";

const testimonials = [
  {
    text: `Cum sociis natoque penatibus et magnis dis. Morbi nunc
           odio gravida at cursus. Parturient sed montes nascetur
           ridiculus mus. Nulla dui. Fusce feugiat malesuada odio.`,
    name: "WILLIAM SMITH",
    role: "New World Marketing Director",
  },
  {
    text: `Helping this charity has completely changed my perspective.
           Every donation truly reaches the people who need it most.`,
    name: "SARAH JOHNSON",
    role: "Social Activist",
  },
  {
    text: `Transparency, trust, and real impact. I am proud to be
           associated with such a meaningful cause.`,
    name: "DAVID MILLER",
    role: "Community Leader",
  },
];

const DonorTestimonial = () => {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);
  const [active, setActive] = useState(0);
  const target = 27514;

  /* ================= COUNTER ================= */
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

  /* ================= AUTO PLAY DOTS ================= */
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-15 w-full overflow-hidden bg-gradient-to-br from-[#faf7f2] via-white to-[#f4efe6]">

      {/* ================= TOP TESTIMONIAL ================= */}
      <div className="flex flex-col lg:flex-row min-h-[420px] md:min-h-[460px]">

        {/* ================= LEFT CONTENT ================= */}
        <div className="lg:w-1/2 bg-gradient-to-br from-gray-100 to-gray-200 
                        px-6 sm:px-10 md:px-20 py-16 md:py-20 
                        flex items-center">
          <div
            key={active}
            className="max-w-xl animate-[fadeSlide_0.6s_ease-out]"
          >
            <h3 className="text-xs sm:text-sm tracking-widest font-semibold 
                           text-gray-700 uppercase">
              WHAT OUR DONATERS SAY
            </h3>

            <p className="mt-6 italic text-gray-600 
                          leading-relaxed text-base md:text-lg">
              {testimonials[active].text}
            </p>

            <p className="mt-6 font-serif text-xs md:text-sm 
                          tracking-wide text-gray-800">
              {testimonials[active].name}
              <span className="italic text-gray-500 ml-2 block sm:inline">
                / {testimonials[active].role}
              </span>
            </p>

            {/* ================= DOTS ================= */}
            <div className="flex gap-3 mt-8">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`rounded-full transition-all duration-300
                    ${active === i
                      ? "w-4 h-4 bg-yellow-400"
                      : "w-3 h-3 bg-gray-400 hover:bg-gray-500"}
                  `}
                />
              ))}
            </div>
          </div>
        </div>

        {/* ================= RIGHT IMAGE (HOVER ONLY) ================= */}
        <div className="lg:w-1/2 relative overflow-hidden group h-[280px] sm:h-[340px] lg:h-auto">

          <img
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c"
            alt="Helping children"
            className="
              w-full h-full object-cover
              scale-[1.1]
              transition-all duration-[2500ms] ease-out
              group-hover:scale-[1.25]
              group-hover:rotate-[0.6deg]
            "
          />

          {/* MATTE OVERLAY */}
          <div
            className="absolute inset-0
                       bg-gradient-to-br
                       from-yellow-900/40
                       via-black/35
                       to-black/60
                       mix-blend-multiply"
          />

          {/* SOFT MATTE LIGHT (HOVER MOVE) */}
          <div
            className="absolute inset-0
                       bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.18),transparent_55%)]
                       transition-transform duration-[3000ms]
                       group-hover:translate-x-4 group-hover:translate-y-3"
          />
        </div>
      </div>

      {/* ================= BOTTOM COUNTER ================= */}
      <div className="text-center  md:py-15 bg-transparent px-6">
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
          <span className="px-3 py-1 rounded-full 
                           bg-yellow-400/15 text-yellow-600 
                           font-bold tracking-wide">
            Voluntaries
          </span>{" "}
          <span className="text-yellow-500">♥</span>
        </p>
      </div>

      {/* ================= TEXT ANIMATION ================= */}
      <style>{`
        @keyframes fadeSlide {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default DonorTestimonial;