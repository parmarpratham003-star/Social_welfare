import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Heart } from "lucide-react";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* ================= FIXED HEADER ================= */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm">

        {/* ===== TOP BAR (DESKTOP ONLY) ===== */}
        <div className="hidden md:block bg-[#2f2f2f] text-gray-200 text-sm">
          <div className="max-w-7xl mx-auto flex justify-between items-center px-6 lg:px-12 py-2">
            <p className="italic">
              No one has Ever Become Poor from Giving!
            </p>
            <div className="flex gap-6">
              <span>Phone: (01) 800 433 633</span>
              <span>Mail: info@example.com</span>
            </div>
          </div>
        </div>

        {/* ===== MIDDLE HEADER ===== */}
        <div className=" bg-white">
          <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-12 py-3 sm:py-4">

            {/* LOGO */}
            <Link to="/" className="flex items-center gap-3">
              <img
                src="/image/image.png"
                alt="Social Welfare"
                className="h-10 sm:h-12 w-auto"
              />
            </Link>

            {/* DESKTOP DONATE BUTTON */}
            <Link
              to="/donate"
              className="hidden md:flex items-center gap-2 
                         bg-[#2f2f2f] text-white px-6 py-3 
                         font-semibold hover:bg-black transition"
            >
              <Heart size={18} className="text-yellow-400" />
              DONATE NOW
            </Link>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden text-black"
            >
              {open ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* ===== MOBILE MENU ===== */}
          {open && (
            <div className="md:hidden bg-yellow-400 px-6 py-6 space-y-5 font-semibold text-black">
              <Link to="/" onClick={() => setOpen(false)} className="block hover:text-white">HOME</Link>
              <Link to="/causes" onClick={() => setOpen(false)} className="block hover:text-white">CAUSES</Link>
              <Link to="/events" onClick={() => setOpen(false)} className="block hover:text-white">EVENTS</Link>
              <Link to="/shop" onClick={() => setOpen(false)} className="block hover:text-white">SHOP</Link>
              <Link to="/gallery" onClick={() => setOpen(false)} className="block hover:text-white">GALLERY</Link>
              <Link to="/blog" onClick={() => setOpen(false)} className="block hover:text-white">BLOG</Link>
              <Link to="/pages" onClick={() => setOpen(false)} className="block hover:text-white">PAGES</Link>
              <Link to="/contact" onClick={() => setOpen(false)} className="block hover:text-white">CONTACT</Link>

              <Link
                to="/donate"
                onClick={() => setOpen(false)}
                className="mt-6 w-full flex items-center justify-center 
                           gap-2 bg-[#2f2f2f] text-white py-3 font-semibold"
              >
                <Heart size={18} className="text-yellow-400" />
                DONATE NOW
              </Link>
            </div>
          )}
        </div>
      </header>

      {/* ===== SPACER (MATCHES FIXED HEADER HEIGHT) ===== */}
      <div className="h-[64px] sm:h-[72px] md:h-[120px]" />

      {/* ================= DESKTOP NAV (SCROLLS NORMALLY) ================= */}
      <nav className="bg-yellow-400 hidden md:block">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <ul className="flex gap-10 py-4 font-semibold text-black text-sm">
            <li><Link to="/" className="hover:text-white">HOME</Link></li>
            <li><Link to="/causes" className="hover:text-white">CAUSES</Link></li>
            <li><Link to="/events" className="hover:text-white">EVENTS</Link></li>
            <li><Link to="/shop" className="hover:text-white">SHOP</Link></li>
            <li><Link to="/gallery" className="hover:text-white">GALLERY</Link></li>
            <li><Link to="/blog" className="hover:text-white">BLOG</Link></li>
            <li><Link to="/pages" className="hover:text-white">PAGES</Link></li>
            <li><Link to="/contact" className="hover:text-white">CONTACT</Link></li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Header;