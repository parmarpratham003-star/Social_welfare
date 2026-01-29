export default function MapSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Find Us on Map
          </h2>
          <p className="mt-3 text-gray-500 text-sm">
            Visit our office or reach out anytime
          </p>
        </div>

        {/* Map */}
        <div className="relative overflow-hidden rounded-2xl shadow-md h-[300px] sm:h-[400px] md:h-[450px]">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps?q=Melbourne%20Australia&output=embed"
            className="absolute inset-0 w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

      </div>
    </section>
  );
}
