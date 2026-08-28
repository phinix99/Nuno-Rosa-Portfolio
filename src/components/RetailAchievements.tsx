import { useEffect, useRef } from 'react';
import { motion, useInView, animate } from 'motion/react';

interface AchievementMetric {
  to: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  separator?: boolean;
  text: string;
}

const achievements: AchievementMetric[] = [
  { to: 30, suffix: "+", text: "Years of International Experience" },
  { to: 3, text: "Continents of Market Expansion" },
  { to: 50, suffix: "+", text: "Led High-Performing Professionals" },
  { to: 2000, suffix: "+", separator: true, text: "Stores Transformed" },
  { prefix: "€", to: 0.5, decimals: 1, suffix: "M", text: "Annual Budget Optimisation" }
];

function SmoothCounter({ 
  to, 
  decimals = 0, 
  prefix = "", 
  suffix = "", 
  separator = false,
  inView
}: { 
  to: number; 
  decimals?: number; 
  prefix?: string; 
  suffix?: string; 
  separator?: boolean;
  inView: boolean;
}) {
  const numberRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const node = numberRef.current;
    if (!node) return;

    if (!inView) {
      const initial = decimals > 0 ? (0).toFixed(decimals) : "0";
      node.textContent = initial;
      return;
    }

    const controls = animate(0, to, {
      duration: 2.2,
      ease: [0.16, 1, 0.3, 1], // High-end luxury smooth ease
      onUpdate(value) {
        if (decimals > 0) {
          node.textContent = value.toFixed(decimals);
        } else if (separator) {
          node.textContent = Math.round(value).toLocaleString('en-US');
        } else {
          node.textContent = Math.round(value).toString();
        }
      },
    });

    return () => controls.stop();
  }, [inView, to, decimals, separator]);

  return (
    <div className="flex items-baseline gap-0.5 text-white">
      {prefix && (
        <span className="font-sans text-2xl lg:text-3xl font-bold text-white/90">
          {prefix}
        </span>
      )}
      <span 
        ref={numberRef} 
        className="font-sans text-3xl lg:text-4xl font-bold tracking-tight text-white leading-none tabular-nums"
      >
        {decimals > 0 ? (0).toFixed(decimals) : "0"}
      </span>
      {suffix && (
        <span className="font-sans text-2xl lg:text-3xl font-bold text-white/90">
          {suffix}
        </span>
      )}
    </div>
  );
}

export default function RetailAchievements() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { margin: "-60px" });

  return (
    <section className="w-full bg-white text-black pt-2 pb-6 md:pb-8 px-6 md:px-12 lg:px-20 overflow-hidden" id="achievements">
      <div className="max-w-[1500px] mx-auto" ref={sectionRef}>
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0.85, y: 10 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="w-full bg-[#0B3175] text-white rounded-sm md:rounded p-6 md:p-8 lg:p-10 shadow-[0_15px_40px_rgba(11,49,117,0.22)] border border-white/10 relative overflow-hidden"
        >
          <div className="text-xs md:text-sm font-bold tracking-[0.22em] text-white/80 uppercase mb-6 md:mb-8">
            RETAIL ACHIEVEMENTS
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
            {achievements.map((item, idx) => (
              <div key={idx} className="flex flex-col gap-1.5 border-r border-white/15 pr-4 last:border-r-0">
                <SmoothCounter
                  to={item.to}
                  decimals={item.decimals}
                  prefix={item.prefix}
                  suffix={item.suffix}
                  separator={item.separator}
                  inView={inView}
                />
                <span className="font-sans text-xs md:text-sm font-medium text-white/80 leading-snug">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
