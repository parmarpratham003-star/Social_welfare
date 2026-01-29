const donors = [
  {
    name: "Chris Binva",
    role: "Nikan Manager, Sydney",
    amount: "$1052",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Jenny Rose",
    role: "Nikan Manager, Sydney",
    amount: "$252",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Benny Doe",
    role: "Nikan Manager, Sydney",
    amount: "$1052",
    img: "https://randomuser.me/api/portraits/men/65.jpg",
  },
];

const LatestDonators = () => {
  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* ================= HEADING ================= */}
        <div className="text-center mb-14">
          <h2 className="text-2xl md:text-4xl font-serif">
            Latest <span className="font-bold">Donators</span>
          </h2>

          <p className="mt-3 italic text-sm md:text-base text-gray-500">
            Our charity helps those people who have no hope
          </p>

          <div className="w-12 h-[2px] bg-yellow-400 mx-auto mt-4"></div>
        </div>

        {/* ================= GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* ===== DONOR CARDS ===== */}
          {donors.map((donor, i) => (
            <div
              key={i}
              className="relative group bg-white rounded-2xl pt-16 pb-8 px-6 
                         shadow-md hover:shadow-xl transition-all duration-500
                         hover:-translate-y-2"
            >
              {/* Gradient Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 
                              to-transparent opacity-0 group-hover:opacity-100 
                              transition duration-500 rounded-2xl"></div>

              {/* Avatar */}
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 z-10">
                <img
                  src={donor.img}
                  alt={donor.name}
                  className="w-24 h-24 rounded-full border-4 border-white 
                             shadow-lg transition-transform duration-500
                             group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="relative z-10 text-center mt-4">
                <h3 className="font-serif text-lg">{donor.name}</h3>
                <p className="text-xs text-gray-500 mt-1">{donor.role}</p>

                <div className="w-10 h-[1px] bg-gray-300 mx-auto my-4"></div>

                <span className="inline-block px-4 py-1 rounded-full 
                                 bg-yellow-100 text-yellow-600 
                                 text-sm font-semibold">
                  Donated {donor.amount}
                </span>
              </div>
            </div>
          ))}

          {/* ===== BECOME DONATOR ===== */}
          <div
            className="relative bg-gradient-to-br from-yellow-400 to-yellow-500 
                       rounded-2xl p-8 text-center text-black 
                       shadow-md hover:shadow-xl transition-all duration-500
                       hover:-translate-y-2 flex flex-col justify-between"
          >
            <div>
              <h3 className="font-serif text-xl mb-3">
                Become <span className="font-bold">Donator</span>
              </h3>

              <p className="text-sm leading-relaxed text-black/80">
                Quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.
              </p>
            </div>

            <button
              className="mt-8 bg-black text-white py-3 rounded-full 
                         font-semibold hover:bg-white hover:text-black 
                         transition"
            >
              JOIN NOW!
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LatestDonators;
