import { motion } from 'motion/react';

const achievements = [
  { value: "30", suffix: "+", text: "Years of International Experience" },
  { value: "3", suffix: "", text: "Continents of Market Expansion" },
  { value: "50", suffix: "+", text: "Led High-Performing Professionals" },
  { value: "2,000", suffix: "+", text: "Stores Transformed" },
  { value: "€0.5", suffix: "M", text: "Annual Budget Optimisation" }
];

export default function RetailAchievements() {
  return (
    <section className="w-full bg-white text-black pt-2 pb-6 md:pb-8 px-6 md:px-12 lg:px-20 overflow-hidden" id="achievements">
      <div className="max-w-[1500px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-full bg-[#0B3175] text-white rounded-sm md:rounded p-6 md:p-8 lg:p-10 shadow-[0_15px_40px_rgba(11,49,117,0.22)] border border-white/10 relative overflow-hidden"
        >
          <div className="text-xs md:text-sm font-bold tracking-[0.22em] text-white/80 uppercase mb-6 md:mb-8">
            RETAIL ACHIEVEMENTS
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
            {achievements.map((item, idx) => (
              <div key={idx} className="flex flex-col gap-1.5 border-r border-white/15 pr-4 last:border-r-0">
                <div className="flex items-baseline gap-0.5 text-white">
                  <span className="font-sans text-3xl lg:text-4xl font-bold tracking-tight text-white leading-none">
                    {item.value}
                  </span>
                  {item.suffix && (
                    <span className="font-sans text-2xl lg:text-3xl font-bold text-white/90">
                      {item.suffix}
                    </span>
                  )}
                </div>
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
