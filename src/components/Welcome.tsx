import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export default function Welcome() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  // Parallax for the panoramic image
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.05, 1.1]);

  return (
    <section 
      ref={containerRef}
      className="w-full bg-[#fdfdfd] text-[#111] py-24 md:py-40 border-b border-[#111]/10 overflow-hidden relative" 
      id="welcome"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 flex flex-col items-center text-center">
        
        {/* Intro Tag */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-3 mb-10"
        >
          <span className="w-1.5 h-1.5 bg-[#6B4C9A] rounded-full" />
          <h2 className="font-sans text-xs font-bold tracking-[0.2em] uppercase text-[#111]/50">
            WELCOME & INTRODUCTION
          </h2>
          <span className="w-1.5 h-1.5 bg-[#6B4C9A] rounded-full" />
        </motion.div>
        
        {/* Enormous Quote */}
        <motion.h3 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-sans text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.05] text-[#111] max-w-5xl mb-16"
        >
          "True visual merchandising is the <span className="text-[#6B4C9A] italic font-serif font-light">silent architecture</span> of desire."
        </motion.h3>
        
        {/* Copy */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-sans text-lg md:text-xl font-light leading-relaxed text-[#111]/70 max-w-3xl flex flex-col gap-6 mb-20"
        >
          <p>
            Welcome to my atelier. I believe that space is not merely a volume to be filled, but a canvas for a physical narrative. Over my 30-year journey as an International Head of Visual Merchandising, I have worked at the intersection of psychology, architecture, and brand direction to craft retail experiences that transcend commerce.
          </p>
          <p>
            Every sightline is calculated; every texture and shadow is calibrated to evoke emotion. It is about creating the beautiful tension that leads to curiosity, connection, and ultimately, conversions.
          </p>
        </motion.div>

        {/* Signature */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.4 }}
          className="flex flex-col items-center gap-2 mb-24 md:mb-32"
        >
          <span className="font-serif italic text-4xl text-[#111] font-light tracking-wide select-none">
            Nuno Rosa
          </span>
          <span className="font-sans text-[10px] font-bold tracking-widest uppercase opacity-40">
            Founder & Creative Director
          </span>
        </motion.div>

      </div>

      {/* Panoramic Media Break */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.5 }}
        className="w-full h-[40vh] md:h-[60vh] lg:h-[70vh] overflow-hidden relative"
      >
        <div className="absolute inset-0 bg-[#111]/10 z-10 mix-blend-overlay" />
        <motion.img 
          style={{ y, scale }}
          src="https://static.wixstatic.com/media/9e4437_c7516a73c7a74931a566495ddbea2df5~mv2.jpg/v1/fill/w_1463,h_787,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/1180mm%20X%20635mm%20(1)_edited.jpg" 
          alt="Visual Merchandising Space" 
          className="w-full h-[130%] object-cover object-center absolute top-[-15%] filter grayscale hover:grayscale-0 transition-all duration-[2s] ease-out"
        />
        
        {/* Minimalist Overlay Label */}
        <div className="absolute bottom-8 right-8 z-20 flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-[#fdfdfd] rounded-full animate-pulse" />
          <span className="font-sans text-[10px] font-bold tracking-[0.2em] uppercase text-[#fdfdfd]">
            Atelier Vision
          </span>
        </div>
      </motion.div>
    </section>
  );
}
