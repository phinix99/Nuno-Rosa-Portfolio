import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Sparkles, Award } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { portfolioData } from '../data/portfolio';

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
      <span className="text-[#7651B9] ml-0.5">{suffix}</span>
    </span>
  );
}

export default function Hero() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  const heroImages = [
    portfolioData["VISUAL MERCHANDISING"]?.[0],
    portfolioData["E-COMMERCE & STYLING"]?.[0],
    portfolioData["CONCEPT & SIGNAGE"]?.[0],
    portfolioData["EVENTS & Brand Exhibition"]?.[0]
  ].filter(Boolean) as string[];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (heroImages.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 4500); // Change image every 4.5 seconds
    return () => clearInterval(interval);
  }, [heroImages.length]);

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
    <section ref={heroRef} className="w-full bg-white text-black pt-8 md:pt-14 lg:pt-16 px-6 md:px-12 lg:px-20 pb-16 md:pb-28 overflow-hidden">
      {/* Top Nav */}
      <motion.nav 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-[1600px] mx-auto w-full flex flex-col md:flex-row justify-between items-center gap-6 mb-12 md:mb-16 lg:mb-20 font-sans text-xs font-semibold tracking-wider uppercase border-b border-neutral-200/60 pb-6"
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
                className="bg-[#7651B9] rounded-[1px]"
              />
            ))}
          </div>
          <span className="tracking-[0.22em] font-extrabold text-[#7651B9] group-hover:text-black transition-colors text-sm">
            NUNO ROSA
          </span>
        </motion.div>
        
        {/* Navigation Menu */}
        <div className="flex flex-wrap justify-center items-center gap-x-6 md:gap-x-8 gap-y-3">
          <Link to="/portfolio" className="hover:text-[#7651B9] transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-[#7651B9] hover:after:w-full after:transition-all after:duration-300 pb-1">
            Portfolio
          </Link>
          <a href="#about" className="hover:text-[#7651B9] transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-[#7651B9] hover:after:w-full after:transition-all after:duration-300 pb-1">
            About Me
          </a>
          <a href="#vm-course" className="hover:text-[#7651B9] transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-[#7651B9] hover:after:w-full after:transition-all after:duration-300 pb-1">
            VM Course
          </a>
          <a href="#contact" className="hover:text-[#7651B9] transition-colors flex items-center gap-1 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-[#7651B9] hover:after:w-full after:transition-all after:duration-300 pb-1">
            Contact <ArrowUpRight size={13} strokeWidth={2.5} />
          </a>
        </div>
      </motion.nav>

      {/* Main Typography & 60:30:10 Grid Layout */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-[1600px] mx-auto w-full flex flex-col"
      >
        {/* Highlighted Nuno Rosa Identification Kicker & Dynamic Display Title */}
        <div className="overflow-hidden mb-6 md:mb-8">
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-3 mb-5"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#7651B9] text-white font-sans text-xs md:text-sm font-bold tracking-[0.2em] uppercase shadow-[0_4px_20px_rgba(118,81,185,0.35)] border border-white/20">
              <Sparkles size={14} className="text-white animate-pulse" />
              <span>NUNO ROSA</span>
            </div>
            <span className="hidden sm:inline text-black/30 font-bold">•</span>
            <span className="text-black/70 font-sans text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase">
              30+ YRS GLOBAL VISUAL MERCHANDISING & SPATIAL ARCHITECTURE
            </span>
          </motion.div>

          <motion.h1 
            variants={lineVariants}
            className="font-sans text-[11vw] md:text-[8.5vw] lg:text-[7.5vw] leading-[0.88] font-medium tracking-tighter uppercase ml-[-0.3vw] select-none text-[#7651B9]"
          >
            SPATIAL <br className="hidden md:inline" /> NARRATIVES
          </motion.h1>
        </div>

        {/* 60:30 Split Grid (Col 7 = ~60% image width on LG, Col 5 = text width) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mt-2 md:mt-6">
          
          {/* Left Column (Text & CTAs): 5 Columns (~40% proportion) */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-5 flex flex-col items-start gap-8 lg:pr-4 order-2 lg:order-1"
          >
            <div className="flex items-center gap-2.5 bg-[#7651B9]/10 text-[#7651B9] px-3.5 py-1.5 rounded-full font-sans text-xs font-semibold tracking-wider uppercase border border-[#7651B9]/20">
              <Sparkles size={13} />
              <span>Spatial Design & Visual Merchandising</span>
            </div>

            <div className="font-sans text-lg md:text-xl lg:text-2xl font-light tracking-tight text-[#111]/90 max-w-lg leading-relaxed">
              I craft immersive visual merchandising and bespoke exhibition architectures that captivate global audiences and transform physical spaces into visceral brand stories.
            </div>
            
            <div className="flex flex-wrap items-center gap-5 font-sans text-xs font-semibold tracking-wider uppercase pt-2">
              <a 
                href="#contact" 
                className="bg-[#7651B9] text-white px-8 py-4 rounded-full hover:bg-black hover:text-white hover:shadow-xl transition-all duration-300 transform active:scale-95 flex items-center gap-2"
              >
                Start Project <ArrowUpRight size={14} strokeWidth={2.5} />
              </a>
              <a 
                href="#about" 
                className="flex items-center gap-1.5 py-3 px-1 hover:text-[#7651B9] transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-black/30 hover:after:bg-[#7651B9]"
              >
                My Approach
              </a>
            </div>

            {/* Metrics Checklist */}
            <div className="w-full border-t border-neutral-200/80 pt-6 mt-4 grid grid-cols-3 gap-4">
              <div className="flex flex-col gap-1 border-r border-[#111]/15 pr-4">
                <span className="font-sans text-[10px] lg:text-xs font-semibold tracking-widest text-[#111]/60 uppercase">Experience</span>
                <div className="flex items-baseline gap-0.5 text-[#111]">
                  <RollingReel value={30} suffix="+" />
                  <span className="font-sans text-[10px] lg:text-xs font-semibold uppercase text-[#111]/60 ml-0.5">Yrs</span>
                </div>
              </div>
              
              <div className="flex flex-col gap-1 border-r border-[#111]/15 pr-4">
                <span className="font-sans text-[10px] lg:text-xs font-semibold tracking-widest text-[#111]/60 uppercase">Based In</span>
                <div className="flex items-baseline gap-1 pt-[2px]">
                  <span className="font-sans text-xl lg:text-2xl font-bold tracking-tight text-[#111] uppercase">London</span>
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <span className="font-sans text-[10px] lg:text-xs font-semibold tracking-widest text-[#111]/60 uppercase">Brands</span>
                <div className="flex items-baseline gap-0.5 text-[#111]">
                  <RollingReel value={40} suffix="+" />
                  <span className="font-sans text-[10px] lg:text-xs font-semibold uppercase text-[#111]/60 ml-0.5">Global</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column (Hero Highlight Image): 7 Columns (~60% proportion) */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-7 w-full order-1 lg:order-2"
          >
            {/* Elevated Image Showcase Container */}
            <div className="relative w-full aspect-[16/10] sm:aspect-[16/9.5] rounded-[24px] md:rounded-[32px] overflow-hidden bg-neutral-100 shadow-[0_25px_60px_rgba(0,0,0,0.09)] border border-neutral-200/80 group">
              {/* Subtle ambient accent glow behind frame */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#7651B9]/15 via-transparent to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-700 z-10 pointer-events-none" />
              
              <AnimatePresence mode="wait">
                <motion.img 
                  key={currentImageIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                  style={{ y, scale: 1.12 }}
                  src={heroImages[currentImageIndex] || "https://res.cloudinary.com/dtom0ivbp/image/upload/v1784660741/1_228_iqyley.avif"}
                  alt="Featured Spatial Architecture by Nuno Rosa"
                  className="absolute inset-0 w-full h-full object-cover origin-center transition-transform duration-[2.5s] ease-out group-hover:scale-[1.16]"
                />
              </AnimatePresence>

              {/* Floating Pill Badge on Image */}
              <div className="absolute top-4 left-4 md:top-6 md:left-6 z-20 flex items-center gap-2.5 bg-[#111]/80 backdrop-blur-md px-4 py-2.5 rounded-full border border-white/20 text-white font-sans text-[10px] md:text-xs font-semibold tracking-widest uppercase shadow-lg">
                <span className="w-2 h-2 bg-[#7651B9] rounded-full animate-pulse" />
                Featured Spatial Showcase
              </div>

              {/* Overlay Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#111]/40 via-transparent to-transparent opacity-40 group-hover:opacity-70 transition-opacity duration-700 pointer-events-none z-10" />
            </div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}
