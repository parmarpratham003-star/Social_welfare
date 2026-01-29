import { useEffect, useState } from "react";
import {
  Heart,
  Users,
  ThumbsUp,
  Smile,
} from "lucide-react";

const stats = [
  {
    icon: Heart,
    value: 4512,
    label: "NO OF CAUSES SOLVED",
  },
  {
    icon: Users,
    value: 1024,
    label: "VOLUNTEERS HAVE",
  },
  {
    icon: ThumbsUp,
    value: 5234,
    label: "ACHIVED DONATORS",
  },
  {
    icon: Smile,
    value: 77614,
    label: "SAVED CHILDRENS",
  },
];

const CounterItem = ({ icon: Icon, value, label }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 20);

    const counter = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(counter);
      } else {
        setCount(Math.floor(start));
      }
    }, 20);

    return () => clearInterval(counter);
  }, [value]);

  return (
    <div className="text-center w-full text-white">
      <Icon className="mx-auto mb-4 text-yellow-400" size={42} />

      <h3 className="text-3xl md:text-4xl font-bold text-yellow-400">
        {count}
      </h3>

      <div className="w-8 h-[2px] bg-yellow-400 mx-auto my-3"></div>

      <p className="text-sm tracking-widest uppercase">
        {label}
      </p>
    </div>
  );
};

const StatsCounter = () => {
  return (
    <section
      className="relative bg-cover bg-center py-20 md:py-28"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1526256262350-7da7584cf5eb)",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((item, index) => (
            <CounterItem
              key={index}
              icon={item.icon}
              value={item.value}
              label={item.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
