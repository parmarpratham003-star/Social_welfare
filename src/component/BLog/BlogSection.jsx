import { Search } from "lucide-react";

/* ================= BLOG POSTS ================= */
const posts = [
  {
    id: 1,
    title: "The New Social Welfare Template Release Today",
    date: "May 14, 2015",
    author: "Admin",
    comments: 4,
    likes: 10,
    img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1200&q=80",
  },
  {
    id: 2,
    title: "Helping Hands for a Better Tomorrow",
    date: "May 14, 2015",
    author: "Admin",
    comments: 6,
    likes: 18,
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&q=80",
  },
];

export default function BlogSection() {
  return (
    <>
      {/* ================= BLOG + SIDEBAR ================= */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-4 gap-12">

          {/* ================= LEFT BLOG ================= */}
          <div className="lg:col-span-3 space-y-24">
            {posts.map((post, i) => (
              <article
                key={post.id}
                className="group bg-white rounded-2xl overflow-hidden
                           shadow-sm border border-gray-100
                           transition-all duration-500
                           hover:-translate-y-2 hover:shadow-xl
                           animate-[fadeUp_0.8s_ease-out]"
                style={{ animationDelay: `${i * 150}ms` }}
              >
                {/* IMAGE */}
                <div className="relative overflow-hidden">
                  <img
                    src={post.img}
                    alt={post.title}
                    className="w-full h-[420px] object-cover
                               transition-transform duration-700
                               group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/10
                                  opacity-0 group-hover:opacity-100 transition" />
                </div>

                {/* CONTENT */}
                <div className="p-10">
                  <h2 className="text-2xl font-serif text-gray-900
                                 group-hover:text-yellow-500 transition">
                    {post.title}
                  </h2>

                  <p className="mt-3 text-xs uppercase text-gray-400 tracking-wide">
                    {post.date} &nbsp;•&nbsp; By {post.author} &nbsp;•&nbsp;
                    {post.comments} Comments &nbsp;•&nbsp; {post.likes} Likes
                  </p>

                  <p className="mt-6 text-gray-600 leading-relaxed">
                    Nolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit.
                  </p>

                  <button
                    className="mt-8 inline-flex items-center gap-3
                               bg-yellow-400 px-8 py-3 text-sm font-semibold
                               rounded-full hover:bg-yellow-500 transition"
                  >
                    READ MORE
                    <span className="w-7 h-7 bg-black text-white rounded-full
                                     flex items-center justify-center">
                      →
                    </span>
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* ================= SIDEBAR ================= */}
          <aside className="space-y-10 lg:sticky lg:top-24 h-fit">

            {/* Search */}
            <div className="bg-white rounded-xl shadow-sm p-4 flex items-center gap-2">
              <input
                placeholder="Search here..."
                className="w-full outline-none text-sm bg-transparent"
              />
              <Search size={18} className="text-gray-400" />
            </div>

            <SidebarBlock title="Categories">
              <SidebarItem text="All (52)" />
              <SidebarItem text="Food (11)" />
              <SidebarItem text="Disease (10)" />
              <SidebarItem text="Nature (52)" />
              <SidebarItem text="Education (52)" />
            </SidebarBlock>

            <SidebarBlock title="Recent Post">
              <RecentPost
                img="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=200&q=80"
                title="Beritatis et Quasi Arcte veratae Vitae"
              />
              <RecentPost
                img="https://images.unsplash.com/photo-1596870230751-ebdfce98ec42?w=200&q=80"
                title="Beritatis et Quasi Arcte veratae Vitae"
              />
              <RecentPost
                img="https://images.unsplash.com/photo-1517849845537-4d257902454a?w=200&q=80"
                title="Beritatis et Quasi Arcte veratae Vitae"
              />
            </SidebarBlock>

            <SidebarBlock title="Archives">
              <SidebarItem text="March 2015 (4)" />
              <SidebarItem text="January 2015 (5)" />
              <SidebarItem text="December 2014 (6)" />
              <SidebarItem text="October 2014 (8)" />
            </SidebarBlock>

            <SidebarBlock title="Image Gallery">
              <div className="grid grid-cols-3 gap-2">
                {[
                  "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c",
                  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
                  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
                  "https://images.unsplash.com/photo-1517849845537-4d257902454a",
                  "https://images.unsplash.com/photo-1596870230751-ebdfce98ec42",
                  "https://images.unsplash.com/photo-1509099836639-18ba1795216d",
                ].map((img, i) => (
                  <img
                    key={i}
                    src={`${img}?w=200&q=80`}
                    className="w-full h-20 object-cover rounded-lg
                               hover:scale-105 transition"
                    alt=""
                  />
                ))}
              </div>
            </SidebarBlock>
          </aside>
        </div>
      </section>

      <QuoteSection />

      {/* ================= ANIMATION ================= */}
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
      `}</style>
    </>
  );
}

/* ================= QUOTE ================= */
function QuoteSection() {
  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-4xl mx-auto px-6 text-center animate-[fadeUp_1s_ease-out]">
        <p className="text-gray-700 italic text-lg md:text-xl leading-relaxed">
          “ Mullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duost aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. ”
        </p>
        <p className="mt-8 text-gray-800 font-semibold">– Mother Teresa</p>
      </div>
    </section>
  );
}

/* ================= SIDEBAR ================= */
function SidebarBlock({ title, children }) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h4 className="font-semibold uppercase text-sm mb-4">{title}</h4>
      <div className="space-y-3">{children}</div>
    </div>
  );
}

function SidebarItem({ text }) {
  return (
    <p className="text-sm text-gray-600 flex items-center gap-2
                  hover:text-yellow-500 cursor-pointer transition">
      <span className="text-yellow-400">›</span>
      {text}
    </p>
  );
}

function RecentPost({ img, title }) {
  return (
    <div className="flex gap-3 items-center">
      <img src={img} alt="" className="w-14 h-14 object-cover rounded-lg" />
      <div>
        <p className="text-sm hover:text-yellow-500 cursor-pointer transition">
          {title}
        </p>
        <span className="text-xs text-gray-400">May 04, 2015</span>
      </div>
    </div>
  );
}
