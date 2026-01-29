const galleryImages = [
  "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c",
  "https://images.unsplash.com/photo-1509099836639-18ba1795216d",
  "https://images.unsplash.com/photo-1596870230751-ebdfce98ec42",
  "https://images.unsplash.com/photo-1542060748-10c28b62716f",
  "https://images.unsplash.com/photo-1519682337058-a94d519337bc",
  "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=800&q=80",
];

export default function ImageGalleryHero() {
  return (
    <section
      className="
        relative w-full
        h-[220px] sm:h-[260px] md:h-[320px] lg:h-[360px]
        overflow-hidden
      "
    >
      {/* ================= IMAGE GRID BACKGROUND ================= */}
      <div
        className="
          absolute inset-0
          grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6
          animate-[bgZoom_18s_linear_infinite]
        "
      >
        {galleryImages.map((img, i) => (
          <div
            key={i}
            className="relative overflow-hidden animate-[imgFade_1.2s_ease-out_forwards]"
            style={{ animationDelay: `${i * 120}ms` }}
          >
            <img
              src={`${img}?w=600&q=70`}
              alt=""
              className="
                w-full h-full object-cover grayscale
                transition-transform duration-[3000ms]
                hover:scale-110
              "
            />
          </div>
        ))}
      </div>

      {/* ================= DARK OVERLAY ================= */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 animate-[textFade_1.2s_ease-out]">
        <h1
          className="
            text-2xl sm:text-2xl md:text-4xl lg:text-4xl
            font-semibold text-white
            tracking-normal
          "
        >
          IMAGE <span className="text-yellow-400 font-semibold">GALLERY</span>
        </h1>

        <p
          className="
            mt-2 sm:mt-3
            text-xs sm:text-sm
            uppercase
            tracking-wide
            text-gray-300
          "
        >
          Home <span className="mx-2 text-yellow-400">/</span> Gallery
        </p>
      </div>

      {/* ================= ANIMATIONS ================= */}
      <style>{`
        @keyframes bgZoom {
          0% { transform: scale(1); }
          50% { transform: scale(1.08); }
          100% { transform: scale(1); }
        }

        @keyframes imgFade {
          from {
            opacity: 0;
            transform: scale(1.1) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        @keyframes textFade {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
