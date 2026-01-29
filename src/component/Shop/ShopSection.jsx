import { Search, Star } from "lucide-react";

const products = [
  {
    id: 1,
    title: "Boys Casual T-Shirt",
    price: "$45.00",
    image:
      "https://images.unsplash.com/photo-1602810316498-ab67cf68c8e1?w=600&q=80",
    rating: 4,
  },
  {
    id: 2,
    title: "Boys Blue Hoodie",
    price: "$65.00",
    image:
      "https://images.unsplash.com/photo-1542060748-10c28b62716f?w=600&q=80",
    rating: 5,
  },
  {
    id: 3,
    title: "Boys Casual Wear",
    price: "$55.00",
    image:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=600&q=80  ",
    rating: 4,
  },
  {
    id: 4,
    title: "Boys Street Outfit",
    price: "$70.00",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80",
    rating: 3,
  },
  {
    id: 5,
    title: "Boys Printed T-Shirt",
    price: "$40.00",
    image:
      "https://images.unsplash.com/photo-1588731247530-4076fc99173e?w=600&q=80",
    rating: 4,
  },
  {
    id: 6,
    title: "Boys Winter Hoodie",
    price: "$75.00",
    image:
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=600&q=80",
    rating: 5,
  },
]



export default function ShopSection() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-14">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-4 gap-10">

        {/* ================= SIDEBAR ================= */}
        <aside className="space-y-8">
          {/* Search */}
          <div className="bg-white rounded-xl shadow-sm p-4">
            <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
              <input
                placeholder="Search products..."
                className="w-full bg-transparent outline-none text-sm"
              />
              <Search size={18} className="text-gray-400" />
            </div>
          </div>

          {/* Categories */}
          <SidebarBox title="Categories">
            <SidebarItem text="Boys T-Shirts" />
            <SidebarItem text="Boys Hoodies" />
            <SidebarItem text="Casual Wear" />
            <SidebarItem text="Winter Collection" />
          </SidebarBox>

          {/* Price */}
          <SidebarBox title="Price Range">
            <input type="range" className="w-full accent-yellow-400" />
            <button className="mt-4 w-full bg-yellow-400 py-2 rounded-full font-semibold hover:bg-yellow-500 transition">
              Apply Filter
            </button>
          </SidebarBox>
        </aside>

        {/* ================= PRODUCTS ================= */}
        <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition overflow-hidden"
            >
              {/* Image */}
              <div className="relative bg-gray-100 h-64 flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-56 object-contain group-hover:scale-105 transition"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition" />
              </div>

              {/* Content */}
              <div className="p-5 text-center space-y-2">
                <h3 className="text-sm font-semibold tracking-wide">
                  {product.title}
                </h3>

                <p className="text-yellow-500 font-bold">
                  {product.price}
                </p>

                {/* Rating */}
                <div className="flex justify-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className={
                        i < product.rating
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-300"
                      }
                    />
                  ))}
                </div>

                <button className="mt-3 w-full rounded-full border border-yellow-400 py-2 text-sm font-semibold text-yellow-600 hover:bg-yellow-400 hover:text-black transition">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= COMPONENTS ================= */

function SidebarBox({ title, children }) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-5">
      <h4 className="font-semibold uppercase text-sm mb-4">{title}</h4>
      <div className="space-y-2">{children}</div>
    </div>
  );
}

function SidebarItem({ text }) {
  return (
    <p className="text-sm text-gray-600 hover:text-yellow-500 cursor-pointer transition">
      › {text}
    </p>
  );
}
