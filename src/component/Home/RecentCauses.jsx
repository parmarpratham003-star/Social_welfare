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
  }, );

  return <motion.span className="text-xs font-semibold">{rounded}</motion.span>;
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
      img:  "https://images.unsplash.com/photo-1542810634-71277d95dcbb?w=800&q=80",
      progress: 70,
      title: "Donate For Homeless People",
    },
  ];

  return (
    <section className="pb-28 bg-gradient-to-b from-white to-gray-50">
      <motion.div
        className="max-w-7xl mx-auto px-6 md:px-12"
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        {/* ================= HEADING ================= */}
        <motion.div variants={cardVariant} className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-semibold text-black">
            Recent <span className="font-bold">Causes</span>
          </h2>
          <p className="mt-3 italic text-sm md:text-base text-gray-500">
            Our charity helps those people who have no hope
          </p>
          <div className="w-16 h-[3px] bg-yellow-400 mx-auto mt-4"></div>
        </motion.div>

        {/* ================= CARDS ================= */}
        <div className="py-5 grid grid-cols-1 md:grid-cols-3 gap-14">
          {causes.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariant}
              whileHover={{
                y: -6,
                boxShadow: "0px 30px 60px rgba(0,0,0,0.15)",
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="
                relative
                bg-white/70 backdrop-blur
                
                border border-gray-200
                pt-24 pb-12 px-8
                text-center
              "
            >
              {/* FLOATING IMAGE */}
              <div className="absolute -top-16 left-1/2 -translate-x-1/2">
                <div className="relative w-80 h-36  overflow-hidden shadow-xl">
                  <motion.img
                    src={item.img}
                    alt=""
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                  />
                  {/* PROCESSING RING */}
                  <div className="absolute top-2 right-3">
                    <div className="bg-white/90 px-2 py-1 
                                  text-[11px] font-semibold
                                  shadow-lg
                                 "
                    >
                    <ProgressCounter value={item.progress} />
                  </div>
                </div>
                </div>
              </div>

              {/* CONTENT */}
              <p className="text-sm text-gray-500 mb-3">
                Donation: <span className="font-semibold">$3,458</span> / $87,609
              </p>

              <h3 className="font-semibold text-lg mb-4 text-black">
                {item.title}
              </h3>

              <div className="w-10 h-[2px] bg-gray-300 mx-auto mb-5"></div>

              <p className="text-gray-500 text-sm mb-8 leading-relaxed">
                Totam rem aperiam, eaque ipsa quae ab illo inventore
                veritatis et quasi architecto beatae vitae dicta sunt.
              </p>

              <motion.button
                whileHover={{
                  scale: 1.08,
                  boxShadow: "0px 12px 30px rgba(234,179,8,0.45)",
                }}
                whileTap={{ scale: 0.95 }}
                className="
                  bg-yellow-400 text-black
                  px-8 py-3 font-semibold
                  
                  hover:bg-yellow-500
                  transition
                "
              >
                DONATE NOW
              </motion.button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default RecentCauses;