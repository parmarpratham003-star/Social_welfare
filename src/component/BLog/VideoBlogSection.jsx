import { useRef, useState } from "react";

export default function VideoBlogSection() {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;

    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-5xl mx-auto px-4">

        {/* ================= CARD ================= */}
        <article className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-md">

          {/* ================= VIDEO ================= */}
          <div
            onClick={togglePlay}
            className="
              relative cursor-pointer overflow-hidden
              h-[220px] sm:h-[300px] md:h-[380px] lg:h-[420px]
              group
            "
          >
            <video
              ref={videoRef}
              poster="https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=1200&q=80"
              className="w-full h-full object-cover"
              controls={playing}
            >
              <source
                src="https://www.w3schools.com/html/mov_bbb.mp4"
                type="video/mp4"
              />
            </video>

            {/* Gradient overlay */}
            {!playing && (
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent flex items-center justify-center">
                <div
                  className="
                    w-16 h-16 rounded-full
                    border border-white/60
                    backdrop-blur-sm
                    flex items-center justify-center
                    text-white text-xl
                    group-hover:scale-110 transition
                  "
                >
                  ▶
                </div>
              </div>
            )}
          </div>

          {/* ================= CONTENT ================= */}
          <div className="px-6 sm:px-10 py-10">

            <span className="text-xs uppercase tracking-widest text-yellow-500 font-semibold">
              Video Story
            </span>

            <h2 className="mt-3 text-xl sm:text-2xl md:text-3xl font-serif text-gray-900 leading-snug">
              The New Social Welfare PSD Template Release Today
            </h2>

            <p className="mt-3 text-xs uppercase tracking-wide text-gray-400">
              May 14, 2015 • Admin • 4 Comments • 10 Likes
            </p>

            <p className="mt-6 text-gray-600 leading-relaxed text-sm sm:text-base max-w-3xl">
              Nolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur.
            </p>

            <div className="mt-8 flex items-center gap-6">
              <button
                className="
                  inline-flex items-center gap-3
                  text-sm font-semibold
                  text-gray-900
                  hover:text-yellow-500 transition
                "
              >
                READ FULL STORY
                <span className="text-lg">→</span>
              </button>

              <span className="text-xs text-gray-400">
                3 min read
              </span>
            </div>
          </div>
        </article>

        
      </div>
    </section>
  );
}
