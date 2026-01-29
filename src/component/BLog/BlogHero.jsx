const heroImages = [
  "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c",
  "https://images.unsplash.com/photo-1509099836639-18ba1795216d",
  "https://images.unsplash.com/photo-1596870230751-ebdfce98ec42",
  "https://images.unsplash.com/photo-1542060748-10c28b62716f",
  "https://images.unsplash.com/photo-1519682337058-a94d519337bc",
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  "https://images.unsplash.com/photo-1517849845537-4d257902454a",
];

export default function BlogHero() {
  return (
    <section
      className="
        relative w-full
        h-[200px] sm:h-[240px] md:h-[300px] lg:h-[360px]
        overflow-hidden
      "
    >
      {/* ================= IMAGE GRID BACKGROUND ================= */}
      <div className="absolute inset-0 grid grid-cols-4 md:grid-cols-8">
        {heroImages.map((img, i) => (
          <img
            key={i}
            src={`${img}?w=500&q=70`}
            alt=""
            className="w-full h-full object-cover grayscale"
          />
        ))}
      </div>

      {/* ================= DARK OVERLAY ================= */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        {/* Heading */}
        <h1
          className="
            text-2xl sm:text-3xl md:text-4xl lg:text-5xl
            font-serif font-bold text-white tracking-wide
            opacity-0 animate-[heroTitle_1s_ease-out_forwards]
          "
        >
          BLOG <span className="text-yellow-400">POST</span>
        </h1>

        {/* Breadcrumb */}
        <p
          className="
            mt-3 text-xs sm:text-sm uppercase tracking-widest text-gray-300
            opacity-0 animate-[heroSub_1s_ease-out_forwards]
          "
          style={{ animationDelay: "0.35s" }}
        >
          HOME <span className="mx-2 text-yellow-400">/</span> GALLERY
        </p>
      </div>

      {/* ================= ANIMATIONS ================= */}
      <style>{`
        @keyframes heroTitle {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes heroSub {
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
