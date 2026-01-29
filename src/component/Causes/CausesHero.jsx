import { motion } from "framer-motion";

function CausesHero() {
  return (
    <section className="relative h-[300px] md:h-[360px] w-full overflow-hidden">

      {/* ===== BACKGROUND IMAGE ===== */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1509099836639-18ba1795216d)",
        }}
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.6, ease: "easeOut" }}
      />

      {/* ===== DARK OVERLAY ===== */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* ===== CONTENT ===== */}
      <div className="relative z-10 h-full flex items-center justify-center text-center">
        <div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="text-3xl md:text-4xl font-semibold text-white tracking-wide"
          >
            OUR <span className="text-yellow-400">CAUSES</span>
          </motion.h1>

          {/* Breadcrumb */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
            className="mt-3 text-sm text-gray-300 tracking-widest"
          >
            HOME <span className="mx-2">/</span> CAUSES
          </motion.p>

        </div>
      </div>
    </section>
  );
}

export default CausesHero;
