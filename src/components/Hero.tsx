import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { useRef } from 'react';

function RollingReel({ value, suffix = "" }: { value: number; suffix?: string }) {
  const numbers = Array.from({ length: value + 1 }, (_, i) => i);
  
  return (
    <span className="inline-flex items-baseline font-sans text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-900">
      <span className="inline-block overflow-hidden h-[1.1em] relative leading-none">
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: `-${value * 1.1}em` }}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          className="flex flex-col items-center"
          style={{ lineHeight: '1.1em' }}
        >
          {numbers.map((n) => (
            <span key={n} className="h-[1.1em] flex items-center justify-center tabular-nums">
              {n}
            </span>
          ))}
        </motion.div>
      </span>
      <span className="text-[#6B4C9A] ml-0.5">{suffix}</span>
    </span>
  );
}

export default function Hero() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const lineVariants = {
    hidden: { opacity: 0, y: 45 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.4,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section ref={heroRef} className="w-full bg-[#fdfdfd] text-[#111] pt-8 md:pt-16 lg:pt-20 px-6 md:px-12 lg:px-20 pb-20 md:pb-32 overflow-hidden">
      {/* Top Nav */}
      <motion.nav 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-[1600px] mx-auto w-full flex flex-col md:flex-row justify-between items-center gap-6 mb-16 md:mb-24 lg:mb-28 font-sans text-xs font-semibold tracking-wider uppercase border-b border-neutral-100 pb-6"
      >
        <motion.div 
          whileHover="hover"
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="grid grid-cols-3 gap-[3px] w-4 h-4">
            {[...Array(9)].map((_, i) => (
              <motion.div 
                key={i} 
                variants={{
                  hover: { 
                    scale: [1, 1.2, 1],
                    transition: { duration: 0.6, delay: i * 0.04, ease: "easeInOut" }
                  }
                }}
                className="bg-[#111] opacity-95 rounded-[1px]"
              />
            ))}
          </div>
          <span className="tracking-widest group-hover:opacity-60 transition-opacity">NUNO ROSA</span>
        </motion.div>
        
        {/* Responsive, beautiful Menu with updated items */}
        <div className="flex flex-wrap justify-center items-center gap-x-6 md:gap-x-8 gap-y-3">
          <a href="#projects" className="hover:text-[#6B4C9A] transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-[#6B4C9A] hover:after:w-full after:transition-all after:duration-300 pb-1">
            Projects
          </a>
          <a href="#vm-course" className="hover:text-[#6B4C9A] transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-[#6B4C9A] hover:after:w-full after:transition-all after:duration-300 pb-1">
            VM Course
          </a>
          <a href="#about" className="hover:text-[#6B4C9A] transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-[#6B4C9A] hover:after:w-full after:transition-all after:duration-300 pb-1">
            About
          </a>
          <a href="#contact" className="hover:text-[#6B4C9A] transition-colors flex items-center gap-1 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-[#6B4C9A] hover:after:w-full after:transition-all after:duration-300 pb-1">
            Contact <ArrowUpRight size={13} strokeWidth={2.5} />
          </a>
        </div>
      </motion.nav>

      {/* Main Typography & Media Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-[1600px] mx-auto w-full flex flex-col"
      >
        {/* Dynamic Display Title */}
        <div className="overflow-hidden mb-6 md:mb-8">
          <motion.h1 
            variants={lineVariants}
            className="font-sans text-[11vw] md:text-[9vw] lg:text-[8vw] leading-[0.85] font-medium tracking-tighter uppercase ml-[-0.3vw] select-none text-[#111]"
          >
            SPATIAL <br className="hidden md:inline" /> <span className="text-[#6B4C9A]">NARRATIVES</span>
          </motion.h1>
        </div>

        {/* Content & Media Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mt-4 md:mt-8">
          
          {/* Left Column: Creative Intro & CTA */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-6 flex flex-col items-start gap-8 md:gap-10 lg:pr-8"
          >
            <div className="font-sans text-lg md:text-xl lg:text-2xl font-light tracking-tight text-[#111]/90 max-w-lg leading-relaxed">
              Crafting immersive visual merchandising and bespoke exhibition architectures that captivate global audiences and transform physical spaces into visceral brand stories.
            </div>
            
            <div className="flex flex-wrap items-center gap-5 font-sans text-xs font-semibold tracking-wider uppercase">
              <a 
                href="#contact" 
                className="bg-[#6B4C9A] text-[#fdfdfd] px-7 py-4 rounded-full hover:bg-[#111] hover:text-[#fdfdfd] hover:shadow-lg transition-all duration-300 transform active:scale-95"
              >
                Start Project
              </a>
              <a 
                href="#about" 
                className="flex items-center gap-1.5 py-3 px-1 hover:text-[#6B4C9A] transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-[#111]/30 hover:after:bg-[#6B4C9A]"
              >
                Our Approach <ArrowUpRight size={13} strokeWidth={2.5} />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Hero Showcase Image & Studio Metrics */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-6 w-full max-w-xl lg:max-w-none ml-auto flex flex-col gap-10"
          >
            {/* Visual Frame */}
            <div className="w-full aspect-[16/10] sm:aspect-[3/2] rounded-[20px] overflow-hidden bg-[#fafafa] shadow-[0_8px_30px_rgb(0,0,0,0.02)] border border-neutral-100/50 group relative">
              <motion.img 
                style={{ y, scale: 1.15 }}
                src="https://static.wixstatic.com/media/9e4437_f1771be942364b90aa901e1f976a625c~mv2.jpg/v1/fill/w_1203,h_787,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/1_edited.jpg"
                alt="Spatial Exhibition Architecture"
                className="w-full h-full object-cover origin-top transition-transform duration-[2.5s] ease-out group-hover:scale-[1.2]"
              />
              <div className="absolute inset-0 bg-[#111]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none mix-blend-overlay" />
            </div>

            {/* Metrics Checklist - Horizontal on PC (md:grid), Vertical on Mobile */}
            <div className="border-t border-neutral-200/60 pt-6">
              {/* PC / Horizontal Display */}
              <div className="hidden md:grid grid-cols-3 gap-8">
                <div className="flex flex-col gap-1.5 border-r border-[#111]/20 pr-6">
                  <span className="font-sans text-[10px] lg:text-xs font-semibold tracking-widest text-[#111]/60 uppercase">Experience</span>
                  <div className="flex items-baseline gap-1 text-[#111]">
                    <RollingReel value={30} suffix="+" />
                    <span className="font-sans text-[11px] lg:text-xs font-semibold tracking-wider text-[#111]/60 uppercase ml-1">Years</span>
                  </div>
                </div>
                
                <div className="flex flex-col gap-1.5 border-r border-[#111]/20 pr-6">
                  <span className="font-sans text-[10px] lg:text-xs font-semibold tracking-widest text-[#111]/60 uppercase">Based In</span>
                  <div className="flex items-baseline gap-1 pt-[2px]">
                    <span className="font-sans text-2xl lg:text-3xl font-bold tracking-tight text-[#111] uppercase">London</span>
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <span className="font-sans text-[10px] lg:text-xs font-semibold tracking-widest text-[#111]/60 uppercase">Global Brands</span>
                  <div className="flex items-baseline gap-1 text-[#111]">
                    <RollingReel value={40} suffix="+" />
                    <span className="font-sans text-[11px] lg:text-xs font-semibold tracking-wider text-[#111]/60 uppercase ml-1">Partners</span>
                  </div>
                </div>
              </div>

              {/* Mobile / Vertical Display */}
              <div className="flex flex-col md:hidden text-[#111]">
                <div className="flex justify-between py-4 border-b border-[#111]/20">
                  <span className="font-sans text-xs font-semibold tracking-wider text-[#111]/60 uppercase">Experience</span>
                  <div className="flex items-baseline gap-0.5">
                    <RollingReel value={30} suffix="+" />
                    <span className="font-sans text-[10px] font-semibold uppercase text-[#111]/60 ml-1">Years</span>
                  </div>
                </div>
                <div className="flex justify-between py-4 border-b border-[#111]/20">
                  <span className="font-sans text-xs font-semibold tracking-wider text-[#111]/60 uppercase">Based In</span>
                  <span className="font-sans text-xs font-bold tracking-wider text-[#111] uppercase">London</span>
                </div>
                <div className="flex justify-between py-4 border-b border-[#111]/20">
                  <span className="font-sans text-xs font-semibold tracking-wider text-[#111]/60 uppercase">Global Brands</span>
                  <div className="flex items-baseline gap-0.5">
                    <RollingReel value={40} suffix="+" />
                    <span className="font-sans text-[10px] font-semibold uppercase text-[#111]/60 ml-1">Partners</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}
