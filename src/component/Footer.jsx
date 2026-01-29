import {
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaInstagram,
  FaRss,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1f1f1f] text-gray-300 text-sm">

      {/* TOP SOCIAL BAR (LEFT ALIGNED) */}
      <div className="bg-[#262626] py-4">
        <div className="max-w-7xl mx-auto px-10 flex gap-6 text-gray-400">
          <FaFacebookF className="hover:text-yellow-400 cursor-pointer transition" />
          <FaTwitter className="hover:text-yellow-400 cursor-pointer transition" />
          <FaGooglePlusG className="hover:text-yellow-400 cursor-pointer transition" />
          <FaInstagram className="hover:text-yellow-400 cursor-pointer transition" />
          <FaRss className="hover:text-yellow-400 cursor-pointer transition" />
        </div>
      </div>

      {/* MAIN FOOTER */}
      <div className="grid grid-cols-1 lg:grid-cols-4">

        {/* KEEP IN TOUCH (LIGHT SHADE) */}
        <div className="bg-[#2a2a2a] px-10 py-20">
          <h4 className="text-white uppercase font-semibold">
            Keep in Touch
          </h4>
          <div className="w-10 h-[1px] bg-gray-500 mt-2 mb-6"></div>

          <p>Address: 44 New Design Street, Melbourne 005</p>
          <p className="mt-2">Phone: (01) 800 433 633</p>
          <p className="mt-2">
            Email: <span className="text-yellow-400">info@example.com</span>
          </p>

          <div className="mt-6 flex">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-2 bg-[#1f1f1f] outline-none"
            />
            <button className="px-4 bg-yellow-400 text-black font-bold">
              →
            </button>
          </div>
        </div>

        {/* USEFUL LINKS */}
        <div className="px-10 py-20">
          <h4 className="text-white uppercase font-semibold">
            Useful Links
          </h4>
          <div className="w-10 h-[1px] bg-gray-500 mt-2 mb-6"></div>

          <ul className="space-y-3">
            {[
              "About Us",
              "Meet The Team",
              "Volunteers",
              "Service Provided",
              "Latest News",
              "Contact Us",
            ].map((item, i) => (
              <li
                key={i}
                className="hover:text-yellow-400 cursor-pointer transition"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* LATEST TWEETS */}
        <div className="px-10 py-20">
          <h4 className="text-white uppercase font-semibold">
            Latest Tweets
          </h4>
          <div className="w-10 h-[1px] bg-gray-500 mt-2 mb-6"></div>

          <p>
            Eaque ipsa quae ab illo inventore veritatis et quasi architecto
            beatae vitae dicta sunt explicabo.
          </p>

          <a href="#" className="block mt-3 text-yellow-400">
            http://socialwelfare.themeforest
          </a>

          <p className="mt-4 text-xs flex items-center gap-2 text-gray-400">
            <FaTwitter /> <span>3:00 PM, 27 May 2018</span>
          </p>
        </div>

        {/* DONATIONS */}
        <div className="px-10 py-20">
          <h4 className="text-white uppercase font-semibold">
            Donations
          </h4>
          <div className="w-10 h-[1px] bg-gray-500 mt-2 mb-6"></div>

          <ul className="space-y-3">
            {["How to Donate", "Donation List", "Recent Causes", "FAQ"].map(
              (item, i) => (
                <li
                  key={i}
                  className="hover:text-yellow-400 cursor-pointer transition"
                >
                  {item}
                </li>
              )
            )}
          </ul>

          <button className="mt-8 px-6 py-2 border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black transition">
            DONATE NOW!
          </button>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="bg-[#191919] py-4 text-center text-xs text-gray-400">
        COPYRIGHT © 2015 SOCIAL WELFARE. ALL RIGHTS RESERVED.
      </div>
    </footer>
  );
};

export default Footer;
