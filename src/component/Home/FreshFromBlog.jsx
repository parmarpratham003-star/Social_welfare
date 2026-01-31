const blogs = [
  {
    title: "The New Charity PSD Template Design",
    date: "May 14, 2015",
    author: "Admin",
    comments: "4 Comments",
    img: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
  },
  {
    title: "The New Charity PSD Template Design",
    date: "May 14, 2015",
    author: "Admin",
    comments: "4 Comments",
    img: "https://images.unsplash.com/photo-1509099836639-18ba1795216d",
  },
];

const FreshFromBlog = () => {
  return (
    <section className=" bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* ================= HEADING ================= */}
        <div className="text-center mb-16 animate-[fadeDown_1s_ease-out]">
          <h2 className="text-3xl md:text-5xl font-serif tracking-wide">
            Fresh From The <span className="font-bold">Blog</span>
          </h2>

          <p className="mt-4 italic text-sm md:text-base text-gray-500">
            Every charitable act is a stepping stone toward heaven
          </p>

          <div className="w-14 h-[3px] bg-yellow-400 mx-auto mt-5"></div>
        </div>

        {/* ================= GRID ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-stretch">

          {/* ========= FEATURED BLOG ========= */}
          <div className="lg:col-span-2">
            <div className="relative h-full rounded-2xl overflow-hidden shadow-xl group animate-[fadeUp_1s_ease-out]">

              <img
                src="https://images.unsplash.com/photo-1519682337058-a94d519337bc"
                alt="Featured Blog"
                className="w-full h-[320px] md:h-full object-cover
                           transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-black/70 via-black/40 to-transparent"></div>

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur
                                border border-white/40 flex items-center justify-center
                                text-white text-xl transition group-hover:scale-110">
                  ▶
                </div>
              </div>

              {/* Text */}
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <h3 className="font-serif text-xl md:text-2xl mb-3">
                  Education Is the Key to a Better Future
                </h3>

                <p className="text-sm text-gray-200 max-w-lg leading-relaxed">
                  Perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium.
                </p>
              </div>
            </div>
          </div>

          {/* ========= BLOG LIST ========= */}
          <div className="flex flex-col justify-between space-y-8">
            {blogs.map((blog, i) => (
              <div
                key={i}
                className="flex gap-5 p-5 rounded-2xl border bg-white shadow-sm
                           hover:shadow-md transition
                           animate-[fadeUp_1s_ease-out_forwards] opacity-0"
                style={{ animationDelay: `${i * 200}ms` }}
              >
                {/* Image */}
                <div className="w-24 h-24 md:w-28 md:h-50 rounded-xl
                                overflow-hidden flex-shrink-0">
                  <img
                    src={blog.img}
                    alt={blog.title}
                    className="w-full h-full object-cover
                               transition-transform duration-500 hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col justify-between">
                  <div>
                    <h4 className="font-serif text-base md:text-lg leading-snug
                                   hover:text-yellow-500 transition">
                      {blog.title}
                    </h4>

                    <p className="text-[11px] md:text-xs text-gray-400 mt-1 uppercase tracking-wide">
                      {blog.date} · {blog.author} · {blog.comments}
                    </p>

                    <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                      Perspiciatis unde omnis iste natus error sit voluptatem
                      accusantium doloremque laudantium...
                    </p>
                  </div>

                  <button className="mt-4 inline-flex items-center gap-2
                                     text-xs font-semibold tracking-widest
                                     text-yellow-500 hover:gap-3 transition-all">
                    READ MORE →
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* ================= ANIMATIONS ================= */}
      <style>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default FreshFromBlog;
