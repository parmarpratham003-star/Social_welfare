import {
  motion,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import { useEffect } from "react";

/* ================= VARIANTS ================= */
const containerVariant = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

/* ================= PROGRESS COUNTER ================= */
function ProgressCounter({ value }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => `${Math.round(v)}%`);

  useEffect(() => {
    count.set(0);
    animate(count, value, {
      duration: 1.5,
      ease: "easeOut",
    });
  }, [value]);

  return (
    <motion.span className="text-sm font-semibold">
      {rounded}
    </motion.span>
  );
}

/* ================= MAIN COMPONENT ================= */
function RecentCauses() {
  const causes = [
    {
      img: "https://images.unsplash.com/photo-1544027993-37dbfe43562a",
      progress: 63,
      title: "Donate For Child Education",
    },
    {
      img: "https://images.unsplash.com/photo-1509099836639-18ba1795216d",
      progress: 42,
      title: "Donate For Drinking Water",
    },
    {
      img: "https://images.unsplash.com/photo-1509099836639-18ba1795216d",
      progress: 70,
      title: "Donate For Homeless People",
    },
  ];

  return (
    <section className="pt-12 pb-24 bg-white">
      <motion.div
        className="max-w-7xl mx-auto px-6 md:px-12"
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        {/* ================= HEADING ================= */}
        <motion.div
          variants={cardVariant}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-black">
            Recent <span className="font-bold">Causes</span>
          </h2>
          <p className="text-gray-500 mt-3">
            Our charity helps those people who have no hope
          </p>
          <div className="w-16 h-[3px] bg-yellow-400 mx-auto mt-4"></div>
        </motion.div>

        {/* ================= CARDS ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {causes.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariant}
              whileHover={{ y: -10 }}
              className="
                bg-white
                rounded-[28px]
                border border-gray-200
                shadow-md hover:shadow-2xl
                transition-all duration-300
                overflow-hidden
              "
            >
              {/* IMAGE + PROGRESS */}
              <div className="relative pb-10">
                <motion.img
                  src={item.img}
                  alt=""
                  className="w-full h-56 object-cover rounded-t-[28px]"
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                />

                {/* PROGRESS BAR */}
                <div className="absolute bottom-0 left-0 w-full h-3 bg-gray-200">
                  <motion.div
                    initial={{ width: "0%" }}
                    whileInView={{ width: `${item.progress}%` }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="h-full bg-yellow-400"
                  />
                </div>

                {/* PERCENTAGE BADGE */}
                <motion.div
                  initial={{ scale: 0.7, opacity: 0, rotate: 45 }}
                  whileInView={{ scale: 1, opacity: 1, rotate: 45 }}
                  transition={{ delay: 1.1, duration: 0.5, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="absolute left-1/2 bottom-[-30px]
                            -translate-x-1/2
                            w-14 h-14
                            bg-white border-4 border-yellow-400
                            shadow-lg
                            flex items-center justify-center"
                          >
                            <div className="-rotate-45 text-sm font-semibold">
                              <ProgressCounter value={item.progress} />
                            </div>
                          </motion.div>

              </div>

              {/* CONTENT */}
              <div className="pt-12 pb-10 px-8 text-center">
                <p className="text-sm text-gray-500 mb-3">
                  Donation:{" "}
                  <span className="font-semibold">$3,458</span> / $87,609
                </p>

                <h3 className="font-semibold text-lg mb-4 text-black">
                  {item.title}
                </h3>

                <div className="w-12 h-[2px] bg-gray-300 mx-auto mb-5"></div>

                <p className="text-gray-500 text-sm mb-8 leading-relaxed">
                  Totam rem aperiam, eaque ipsa quae ab illo inventore
                  veritatis et quasi architecto beatae vitae dicta sunt.
                </p>

                <motion.button
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  className="
                    bg-yellow-400 text-black
                    px-10 py-3 font-semibold
                    rounded-full
                    hover:bg-yellow-500
                    transition
                  "
                >
                  DONATE NOW
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default RecentCauses;
