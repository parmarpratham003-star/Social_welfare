import { useState } from "react";

const filters = [
  "Show All",
  "Children",
  "Animal",
  "Nature",
  "Education",
  "Food",
];

const galleryItems = [
  {
    id: 1,
    category: "Children",
    img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c",
  },
  {
    id: 2,
    category: "Food",
    img: "https://images.unsplash.com/photo-1509099836639-18ba1795216d",
  },
  {
    id: 3,
    category: "Children",
    img: "https://images.unsplash.com/photo-1596870230751-ebdfce98ec42",
  },
  {
    id: 4,
    category: "Education",
    img: "https://images.unsplash.com/photo-1542060748-10c28b62716f",
  },
  {
    id: 5,
    category: "Nature",
    img: "https://images.unsplash.com/photo-1519682337058-a94d519337bc",
  },

  /* ================= ANIMAL IMAGES ================= */

  {
    id: 6,
    category: "Animal",
    img: "https://images.unsplash.com/photo-1517849845537-4d257902454a",
  },
  {
    id: 7,
    category: "Animal",
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  },
  {
    id: 8,
    category: "Animal",
    img: "https://images.unsplash.com/photo-1552410260-0fd9b577afa6",
  },
  {
    id: 9,
    category: "Animal",
    img: "https://images.unsplash.com/photo-1508672019048-805c876b67e2",
  },

  /* ================= MORE ================= */

  {
    id: 10,
    category: "Food",
    img: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
  },
  {
    id: 11,
    category: "Children",
    img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
  },
];


export default function GallerySection() {
  const [active, setActive] = useState("Show All");

  const filteredItems =
    active === "Show All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === active);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* ================= FILTER ================= */}
        <div className="flex flex-wrap justify-center gap-6 mb-14">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActive(filter)}
              className={`text-sm md:text-base transition-all
                ${
                  active === filter
                    ? "text-black font-semibold"
                    : "text-gray-400 hover:text-black"
                }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* ================= GALLERY GRID ================= */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="mb-6 break-inside-avoid 
                         group relative overflow-hidden 
                         animate-[fadeUp_0.8s_ease-out]"
            >
              <img
                src={`${item.img}?w=800&q=80`}
                alt=""
                className="w-full rounded-sm 
                           transition-transform duration-700 
                           group-hover:scale-110"
              />

              {/* Overlay */}
              <div
                className="absolute inset-0 bg-black/60 
                           opacity-0 group-hover:opacity-100 
                           transition flex items-center justify-center"
              >
                <div className="text-center text-white px-4">
                  <h4 className="text-lg font-semibold mb-2">
                    Image Title Here
                  </h4>
                  <div className="w-8 h-[2px] bg-yellow-400 mx-auto mb-3"></div>
                  <p className="text-sm italic text-gray-200">
                    Aspernatur aut odit aut fugit, sed quia
                    consequuntur magni dolores.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= ANIMATIONS ================= */}
      <style>{`
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
      `}</style>
    </section>
  );
}
