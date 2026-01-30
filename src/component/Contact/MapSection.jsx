export default function MapSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">

        {/* ===== GRID ROW ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

          {/* ================= VISIT OUR OFFICE ================= */}
          <div
            className="bg-white rounded-2xl shadow-sm h-full
                       transition-all duration-300
                       hover:shadow-xl hover:-translate-y-1"
          >
            <div className="p-8 md:p-10 h-full flex flex-col justify-center">
              <span className="inline-block mb-4 h-[3px] w-12 bg-yellow-400" />

              <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                Visit Our Office
              </h2>

              <p className="text-sm text-gray-600 max-w-md mb-6">
                We’d love to meet you in person.  
                Find our office location and feel free to visit during working hours.
              </p>

              <div className="text-sm text-gray-600 leading-relaxed space-y-1">
                <p><strong>Location:</strong> Melbourne, Australia</p>
                <p><strong>Office Hours:</strong> Mon – Fri, 9:00 AM – 6:00 PM</p>
              </div>

              <a
                href="https://www.google.com/maps?q=Melbourne%20Australia"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-8 w-fit
                           border border-gray-300 px-6 py-2.5
                           text-sm font-semibold rounded-full
                           transition-all
                           hover:bg-yellow-400 hover:border-yellow-400"
              >
                OPEN IN GOOGLE MAPS →
              </a>
            </div>
          </div>

          {/* ================= MAP SECTION ================= */}
          <div
            className="group bg-white rounded-2xl shadow-sm overflow-hidden h-full
                       transition-all duration-300
                       hover:shadow-xl hover:-translate-y-1"
          >
            <div className="relative h-[260px] sm:h-[340px] md:h-full min-h-[320px] overflow-hidden">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps?q=Melbourne%20Australia&output=embed"
                className="absolute inset-0 w-full h-full border-0
                           transition-transform duration-500
                           group-hover:scale-105"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

           
          </div>

        </div>
      </div>
    </section>
  );
}