import { useState } from "react";
import { ChevronDown, Clock, MapPin, Search } from "lucide-react";

const events = [
  {
    id: 1,
    title: "Donate For Handicapped Child",
    date: "May 14, 2015 3:00 PM",
    location: "Conference Hall, 12 Marcon Street, Africa",
    image:
      "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=600&q=80",
  },
  {
    id: 2,
    title: "Help Poor Children",
    date: "June 02, 2015 10:00 AM",
    location: "City Center, New York",
    image:
      "https://images.unsplash.com/photo-1542810634-71277d95dcbb?w=600&q=80",
  },
  {
    id: 3,
    title: "Medical Aid Program",
    date: "July 21, 2015 1:30 PM",
    location: "Health Camp, Africa",
    image:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?w=600&q=80",
  },
  {
    id: 4,
    title: "Education For All",
    date: "August 05, 2015 11:00 AM",
    location: "Community Hall, Asia",
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80",
  },
];

export default function EventsSection() {
  return (
    <section className="bg-gray-50 py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-4 gap-8">

        {/* ================= LEFT ================= */}
        <div className="lg:col-span-3 space-y-6">

          {/* FILTER BAR */}
        <div className="bg-white/70 backdrop-blur px-4 py-4 flex flex-col md:flex-row gap-4 rounded-xl shadow-sm">
            <span className="font-semibold text-sm uppercase text-gray-700">
             Events Filter:
            </span>

            <Dropdown
             label="Event Time"
             options={["All Events", "Upcoming", "Past"]}
             />
            <Dropdown
             label="New York"
             options={["New York", "New Jersey", "Africa", "Asia"]}
             />
            <Dropdown
             label="Event"
             options={["Keyword", "Donation", "Medical", "Education"]}
            />
        </div>


          {/* EVENTS */}
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white p-6 flex flex-col md:flex-row gap-6 hover:shadow-md transition"
            >
              <img
                src={event.image}
                alt=""
                className="w-full md:w-72 h-48 object-cover"
              />

              <div className="flex-1 space-y-3">
                <h3 className="text-lg font-semibold hover:text-yellow-500 transition">
                  {event.title}
                </h3>

                <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <Clock size={14} /> {event.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={14} /> {event.location}
                  </span>
                </div>

                <p className="text-sm text-gray-600 leading-relaxed">
                  Ducimus qui blanditiis praesentium voluptatum deleniti atque
                  corrupti quos dolores et quas molestias excepturi.
                </p>

                <button className="bg-yellow-400 px-6 py-2 text-sm font-semibold hover:bg-yellow-500 transition">
                  JOIN NOW
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* ================= SIDEBAR ================= */}
        <aside className="space-y-8">

        <div className="bg-white/70 backdrop-blur p-4 rounded-xl shadow-sm">
            <div className="flex items-center bg-gray-100 px-4 py-2 rounded-full">
                <input
                  placeholder="Search Here"
                    className="w-full text-sm bg-transparent outline-none"
                 />
                <Search size={18} className="text-gray-400" />
            </div>
        </div>

        {/* CATEGORIES */}
        <SidebarBox title="Categories">
            <SidebarItem text="All (52)" />
            <SidebarItem text="Food (11)" />
            <SidebarItem text="Disease (10)" />
            <SidebarItem text="Nature (52)" />
            <SidebarItem text="Education (52)" />
        </SidebarBox>

        {/* ARCHIVES */}
        <SidebarBox title="Archives">
            <SidebarItem text="March 2015 (4)" />
            <SidebarItem text="January 2015 (5)" />
            <SidebarItem text="December 2014 (6)" />
            <SidebarItem text="October 2014 (8)" />
        </SidebarBox>
    </aside>
    </div>
</section>
  );
}

/* ================= DROPDOWN ================= */

function Dropdown({ label, options }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(label);

  return (
    <div className="relative w-full md:w-auto">
      <button
        onClick={() => setOpen(!open)}
        className={`flex justify-between items-center w-full md:w-44 px-4 py-2 text-sm 
        bg-gray-100 rounded-full hover:bg-gray-200 transition
        ${open ? "bg-gray-200" : ""}`}
      >
        <span className="font-medium">{value}</span>
        <ChevronDown
          size={14}
          className={`transition ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <ul className="absolute z-20 bg-white w-full mt-2 rounded-xl shadow-lg overflow-hidden">
          {options.map((opt) => (
            <li
              key={opt}
              onClick={() => {
                setValue(opt);
                setOpen(false);
              }}
              className="px-4 py-2 text-sm hover:bg-yellow-100 cursor-pointer transition"
            >
              {opt}
            </li>
          ))}
        </ul>
      )}

      {/* underline */}
      <span
        className={`absolute left-1/2 -bottom-1 h-[2px] bg-yellow-400 transition-all
        ${open ? "w-16 -translate-x-1/2" : "w-0"}`}
      />
    </div>
  );
}


/* ================= SIDEBAR ================= */

function SidebarBox({ title, children }) {
  return (
    <div className="bg-white/70 backdrop-blur p-4 rounded-xl shadow-sm">
      <h4 className="font-semibold uppercase text-sm mb-3 text-gray-700">
        {title}
      </h4>
      <div className="space-y-2">{children}</div>
    </div>
  );
}


function SidebarItem({ text }) {
  return (
    <p className="text-sm text-gray-600 cursor-pointer flex items-center gap-2
      hover:text-yellow-500 transition">
      <span className="text-yellow-400">›</span> {text}
    </p>
  );
}

