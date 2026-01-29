"use client";

import { motion } from "framer-motion";

const images = [
  "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=800&q=80",
  "https://images.unsplash.com/photo-1542810634-71277d95dcbb?w=800&q=80",
  "https://images.unsplash.com/photo-1504151932400-72d4384f04b3?w=800&q=80",
  "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80",
  "https://images.unsplash.com/photo-1503457574465-3aa2f0a3a1d0?w=800&q=80",
  "https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?w=800&q=80",
  "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=800&q=80",
  "https://images.unsplash.com/photo-1542810634-71277d95dcbb?w=800&q=80",
];

export default function ShopHero() {
  return (
    <section className="relative h-[260px] md:h-[360px] w-full overflow-hidden">

      {/* ===== IMAGE COLLAGE ===== */}
      <motion.div
        className="absolute inset-0 grid grid-cols-4 md:grid-cols-8"
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        {images.map((img, index) => (
          <div
            key={index}
            className="h-full w-full bg-cover bg-center"
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
      </motion.div>

      {/* ===== DARK OVERLAY ===== */}
      <div className="absolute inset-0 bg-black/75" />

      {/* ===== CONTENT ===== */}
      <div className="relative z-10 h-full flex items-center justify-center text-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-2xl md:text-4xl font-semibold text-white tracking-wide"
          >
            ONLINE <span className="text-yellow-400">SHOP</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-2 text-xs md:text-sm tracking-widest text-gray-300"
          >
            HOME <span className="mx-2">/</span> SHOP
          </motion.p>
        </div>
      </div>
    </section>
  );
}
