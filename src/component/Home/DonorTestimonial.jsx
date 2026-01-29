import { useEffect, useState } from "react";

const DonorTestimonial = () => {
  const [count, setCount] = useState(0);
  const target = 27514;

  // Counter animation
  useEffect(() => {
    let start = 0;
    const step = Math.ceil(target / 120);

    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 20);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full overflow-hidden bg-white">
      {/* TOP TESTIMONIAL */}
      <div className="flex flex-col lg:flex-row min-h-[460px]">

        {/* LEFT CONTENT */}
        <div className="lg:w-1/2 bg-gradient-to-br from-gray-100 to-gray-200 px-10 md:px-20 py-20 flex items-center">
          <div className="max-w-xl animate-[fadeSlide_1.2s_ease-out]">

            <h3 className="text-sm tracking-widest font-semibold text-gray-700 uppercase">
              WHAT OUR DONATERS SAY
            </h3>

            {/* Quote icon */}
            <div className="mt-8 text-7xl font-serif text-gray-400 animate-[pulseSlow_3s_ease-in-out_infinite]">
              “
            </div>

            <p className="mt-6 italic text-gray-600 leading-relaxed text-lg">
              Cum sociis natoque penatibus et magnis dis. Morbi nunc
              odio gravida at cursus. Parturient sed montes nascetur
              ridiculus mus. Nulla dui. Fusce feugiat malesuada odio.
            </p>

            <p className="mt-8 font-serif text-sm tracking-wide text-gray-800">
              WILLIAM SMITH{" "}
              <span className="italic text-gray-500 ml-2">
                / New World Marketing Director
              </span>
            </p>

            {/* Animated dots */}
            <div className="flex gap-3 mt-10">
              <span className="w-2.5 h-2.5 rounded-full bg-gray-400 hover:bg-yellow-400 transition"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 scale-125"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-gray-300 hover:bg-yellow-400 transition"></span>
            </div>

          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="lg:w-1/2 relative overflow-hidden group">
          <img
            src="https://images.unsplash.com/photo-1509099836639-18ba1795216d"
            alt="children"
            className="w-full h-full object-cover grayscale 
                       transition-transform duration-[2000ms]
                       group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/10"></div>
        </div>
      </div>

      {/* BOTTOM COUNTER */}
      <div className="text-center py-24 bg-white animate-[fadeUp_1.2s_ease-out]">
        <h2 className="text-5xl md:text-6xl font-serif text-yellow-500 
                       drop-shadow-[0_0_12px_rgba(234,179,8,0.35)]
                       animate-[countGlow_2.5s_ease-in-out_infinite]">
          {count.toLocaleString()}
        </h2>

        <p className="mt-6 text-xl md:text-2xl font-serif text-gray-800">
          We are Really Proud of Our Kind{" "}
          <span className="text-yellow-500">♥</span>{" "}
          <span className="font-bold">Voluntaries</span>.
        </p>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes fadeSlide {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulseSlow {
          0%, 100% {
            opacity: 0.4;
          }
          50% {
            opacity: 1;
          }
        }

        @keyframes countGlow {
          0%, 100% {
            text-shadow: 0 0 10px rgba(234,179,8,0.3);
          }
          50% {
            text-shadow: 0 0 22px rgba(234,179,8,0.7);
          }
        }
      `}</style>
    </section>
  );
};

export default DonorTestimonial;
