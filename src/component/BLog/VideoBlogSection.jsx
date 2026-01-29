export default function VideoBlogSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4">

        {/* ================= VIDEO POST ================= */}
        <article className="border-b pb-14">

          {/* VIDEO */}
          <div className="relative overflow-hidden rounded-md mb-8">
            <video
              controls
              className="w-full h-[420px] object-cover"
              poster="https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=1200&q=80"
            >
              <source
                src="https://www.w3schools.com/html/mov_bbb.mp4"
                type="video/mp4"
              />
            </video>
          </div>

          {/* CONTENT */}
          <h2 className="text-2xl font-serif text-gray-900">
            The New Social Welfare Psd Template Release on Today
          </h2>

          <p className="mt-3 text-xs uppercase tracking-wide text-gray-500">
            May 14, 2015 &nbsp; | &nbsp; By Admin &nbsp; | &nbsp;
            4 Comments &nbsp; | &nbsp; 10 Likes
          </p>

          <p className="mt-6 text-gray-600 leading-relaxed">
            Nolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
            sint occaecat cupidatat non proident.
          </p>

          <button className="mt-6 inline-flex items-center gap-3 
                             bg-yellow-400 px-6 py-3 text-sm font-semibold
                             hover:bg-yellow-500 transition">
            READ MORE
            <span className="w-6 h-6 bg-black text-white rounded-full 
                             flex items-center justify-center">
              →
            </span>
          </button>
        </article>

        {/* ================= PAGINATION ================= */}
        <div className="flex flex-col sm:flex-row 
                        items-center justify-between 
                        gap-6 mt-12 text-sm">

          {/* Previous */}
          <button className="flex items-center gap-2 text-gray-500 hover:text-black transition">
            ← Previous
          </button>

          {/* Page Numbers */}
          <div className="flex items-center gap-4">
            {[1, 2, 3, 4, 5].map((num) => (
              <button
                key={num}
                className={`relative px-2 transition
                  ${
                    num === 1
                      ? "text-black font-semibold after:absolute after:-bottom-2 after:left-0 after:w-full after:h-[2px] after:bg-yellow-400"
                      : "text-gray-500 hover:text-black"
                  }`}
              >
                {num}
              </button>
            ))}
          </div>

          {/* Next */}
          <button className="flex items-center gap-2 text-gray-500 hover:text-black transition">
            Next →
          </button>
        </div>

      </div>
    </section>
  );
}
