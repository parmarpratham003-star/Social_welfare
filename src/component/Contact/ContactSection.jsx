import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-14">

        {/* ================= CONTACT FORM ================= */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm p-8 md:p-10">
          <h2 className="text-xl font-semibold mb-8 tracking-wide">
            MESSAGE FOR US
          </h2>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Full Name */}
            <div className="relative">
              <input
                type="text"
                required
                className="peer w-full border-b border-gray-300 bg-transparent
                           py-3 text-sm outline-none focus:border-yellow-400"
              />
              <label className="absolute left-0 top-3 text-xs text-gray-500
                                peer-focus:-top-3 peer-focus:text-yellow-500
                                peer-focus:text-[11px] transition-all">
                Full Name *
              </label>
            </div>

            {/* Email */}
            <div className="relative">
              <input
                type="email"
                required
                className="peer w-full border-b border-gray-300 bg-transparent
                           py-3 text-sm outline-none focus:border-yellow-400"
              />
              <label className="absolute left-0 top-3 text-xs text-gray-500
                                peer-focus:-top-3 peer-focus:text-yellow-500
                                peer-focus:text-[11px] transition-all">
                Email *
              </label>
            </div>

            {/* Phone */}
            <div className="relative">
              <input
                type="tel"
                required
                className="peer w-full border-b border-gray-300 bg-transparent
                           py-3 text-sm outline-none focus:border-yellow-400"
              />
              <label className="absolute left-0 top-3 text-xs text-gray-500
                                peer-focus:-top-3 peer-focus:text-yellow-500
                                peer-focus:text-[11px] transition-all">
                Phone *
              </label>
            </div>

            {/* Service */}
            <div className="relative">
              <input
                type="text"
                required
                className="peer w-full border-b border-gray-300 bg-transparent
                           py-3 text-sm outline-none focus:border-yellow-400"
              />
              <label className="absolute left-0 top-3 text-xs text-gray-500
                                peer-focus:-top-3 peer-focus:text-yellow-500
                                peer-focus:text-[11px] transition-all">
                Service You Are Interested In *
              </label>
            </div>

            {/* Message */}
            <div className="md:col-span-2 relative">
              <textarea
                rows="4"
                className="peer w-full border-b border-gray-300 bg-transparent
                           py-3 text-sm outline-none focus:border-yellow-400 resize-none"
              />
              <label className="absolute left-0 top-3 text-xs text-gray-500
                                peer-focus:-top-3 peer-focus:text-yellow-500
                                peer-focus:text-[11px] transition-all">
                Write Something
              </label>
            </div>

            {/* Button */}
            <div className="md:col-span-2 pt-4">
              <button
                type="submit"
                className="inline-flex items-center justify-center
                           bg-yellow-400 px-8 py-3 text-sm font-semibold
                           hover:bg-yellow-500 transition rounded-full"
              >
                SEND MESSAGE
              </button>
            </div>
          </form>
        </div>

        {/* ================= CONTACT DETAILS ================= */}
        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-10 space-y-8">
          <h2 className="text-xl font-semibold tracking-wide">
            CONTACT DETAILS
          </h2>

          {/* Address */}
          <ContactItem
            icon={<MapPin size={20} />}
            title="Address"
            text="44 New Design Street, Melbourne 005
                  Australia 300"
          />

          {/* Phone */}
          <ContactItem
            icon={<Phone size={20} />}
            title="Phone"
            text="01 (800) 433 744
                  01 (800) 433 633"
          />

          {/* Email */}
          <ContactItem
            icon={<Mail size={20} />}
            title="Support"
            text="support@example.com"
          />
        </div>
      </div>
    </section>
  );
}

/* ================= CONTACT ITEM ================= */

function ContactItem({ icon, title, text }) {
  return (
    <div className="flex gap-5 items-start">
      <div className="w-12 h-12 flex items-center justify-center
                      bg-yellow-400 text-black rounded-full">
        {icon}
      </div>
      <div>
        <h4 className="text-sm font-semibold uppercase mb-1">
          {title}
        </h4>
        <p className="text-sm text-gray-600 whitespace-pre-line leading-relaxed">
          {text}
        </p>
      </div>
    </div>
  );
}
