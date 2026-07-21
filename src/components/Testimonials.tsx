import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "They gave us a clear direction early, and everything after that became easier. The work is clean and consistent.",
    author: "SARAH MITCHELL",
    brand: "Brand Strategist",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200"
  },
  {
    quote: "Intelligent design that understands aesthetics and adapts to our creative direction flawlessly.",
    author: "MAYA RODRIGUEZ",
    brand: "Art Director",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200"
  },
  {
    quote: "Their vision transformed our flagship store into an immersive brand experience. The spatial precision is unmatched.",
    author: "DAVID CHEN",
    brand: "Global VP of Retail",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
  },
  {
    quote: "Every sightline, every display was meticulously calculated. The resulting turnover spoke for itself.",
    author: "EMMA WATSON",
    brand: "Head of Marketing",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200"
  }
];

export default function Testimonials() {
  return (
    <section className="w-full bg-[#fdfdfd] py-24 md:py-32 border-b border-[#111]/10">
      <div className="px-6 md:px-12 mb-12 md:mb-16">
        <h3 className="font-sans text-xs font-semibold tracking-wide uppercase opacity-60 mb-4">
          TESTIMONIALS
        </h3>
        <h2 className="font-sans text-4xl md:text-5xl lg:text-7xl font-medium tracking-tight uppercase leading-none text-[#111] max-w-4xl">
          BRANDS THAT LOVE WORKING WITH US
        </h2>
      </div>

      <div className="w-full overflow-x-auto no-scrollbar pb-8 cursor-grab active:cursor-grabbing snap-x snap-mandatory">
        <div className="flex gap-4 md:gap-6 w-max px-6 md:px-12">
          {testimonials.map((t, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="w-[85vw] md:w-[400px] lg:w-[450px] aspect-[4/3] rounded-[16px] bg-[#f4f4f4] p-8 md:p-10 shrink-0 snap-center md:snap-start flex flex-col justify-between group hover:bg-[#6B4C9A] transition-colors duration-500"
            >
              <div>
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" className="text-[#111] group-hover:text-[#fdfdfd] transition-colors duration-500" />
                  ))}
                </div>
                <p className="font-sans text-base md:text-lg font-light tracking-tight leading-relaxed text-[#111] group-hover:text-[#fdfdfd] transition-colors duration-500">
                  "{t.quote}"
                </p>
              </div>
              
              <div className="flex items-center gap-4 mt-8">
                <img src={t.image} alt={t.author} className="w-12 h-12 rounded-full object-cover grayscale" />
                <div className="font-sans">
                  <p className="text-xs font-semibold tracking-wide uppercase text-[#111] group-hover:text-[#fdfdfd] transition-colors duration-500">{t.author}</p>
                  <p className="text-[10px] font-medium tracking-widest uppercase opacity-60 mt-1 text-[#111] group-hover:text-[#fdfdfd] transition-colors duration-500">{t.brand}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
