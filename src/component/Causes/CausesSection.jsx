import { useEffect, useState } from "react";

const categories = ["All", "Nature", "Food", "Disease", "Education"];

const causes = [
  {
    id: 1,
    title: "Donate For Child Education",
    category: "Education",
    image:
      "https://images.unsplash.com/photo-1519682337058-a94d519337bc",
    raised: 53458,
    goal: 87609,
  },
  {
    id: 2,
    title: "Donate For Drinking Water",
    category: "Nature",
    image:
      "https://images.unsplash.com/photo-1523978591478-c753949ff840",
    raised: 53458,
    goal: 87609,
  },
  {
    id: 3,
    title: "Save Children From Hunger",
    category: "Food",
    image:
      "https://images.unsplash.com/photo-1547496502-affa22d38842",
    raised: 73458,
    goal: 87609,
  },
  {
    id: 4,
    title: "Save Children From Hunger",
    category: "Food",
    image:
      "https://images.unsplash.com/photo-1547496502-affa22d38842",
    raised: 73458,
    goal: 87609,
  },
  {
    id: 5,
    title: "Help For Handicapped Child",
    category: "Disease",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    raised: 70458,
    goal: 87609,
  },
  {
    id: 6,
    title: "Donate For Homeless People",
    category: "Food",
    image:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c",
    raised: 69458,
    goal: 87609,
  },
];

export default function CausesSection() {
  const [active, setActive] = useState("All");
  const [progress, setProgress] = useState({});

  const filtered =
    active === "All"
      ? causes
      : causes.filter((c) => c.category === active);

  // Progress animation
  useEffect(() => {
    const temp = {};
    filtered.forEach((item) => {
      let start = 0;
      const end = Math.round((item.raised / item.goal) * 100);

      const interval = setInterval(() => {
        start += 1;
        temp[item.id] = start;
        setProgress({ ...temp });

        if (start >= end) clearInterval(interval);
      }, 15);
    });
  }, [active]);

  return (
    <section className="py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* FILTER */}
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h4 className="text-sm font-semibold text-gray-500 whitespace-nowrap">
            CAUSE FILTER :
          </h4>

          <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 text-sm font-medium border transition rounded-full
                  ${
                    active === cat
                      ? "border-yellow-500 text-yellow-600 bg-yellow-50"
                      : "border-gray-300 text-gray-600 hover:border-yellow-500 hover:text-yellow-500"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* GRID */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => {
            const percent = progress[item.id] || 0;

            return (
              <div
                key={item.id}
                className="bg-white shadow-md hover:shadow-xl transition overflow-hidden group"
              >
                {/* IMAGE */}
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-56 object-cover group-hover:scale-105 transition duration-500"
                  />

                  {/* PROGRESS BAR */}
                  <div className="absolute bottom-0 left-0 w-full h-2 bg-gray-200">
                    <div
                      className="h-full bg-yellow-500 transition-all duration-700"
                      style={{ width: `${percent}%` }}
                    />
                  </div>

                  {/* CIRCLE */}
                  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white border-4 border-yellow-500 w-14 h-14 rounded-full flex items-center justify-center shadow">
                    <span className="text-sm font-bold text-gray-800">
                      {percent}%
                    </span>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="pt-12 px-6 pb-8 text-center">
                  <p className="text-xs text-gray-500 mb-1">
                    Donation: ${item.raised.toLocaleString()} / $
                    {item.goal.toLocaleString()}
                  </p>

                  <h3 className="text-lg font-semibold mb-3">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-500 mb-6">
                    Totam rem aperiam, eaque ipsa quae ab illo
                    inventore veritatis et quasi.
                  </p>

                  <button className="bg-yellow-500 hover:bg-yellow-600 transition text-black font-semibold px-6 py-3 text-sm">
                    DONATE NOW
                  </button>
                </div>
              </div>
                

            );
          })}
        </div>
      </div>
      {/* PAGINATION */}


    </section>
  );
}
