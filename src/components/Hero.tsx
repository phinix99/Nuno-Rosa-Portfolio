import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { portfolioData } from '../data/portfolio';

function RollingReel({ value, suffix = "" }: { value: number; suffix?: string }) {
  const numbers = Array.from({ length: value + 1 }, (_, i) => i);
  
  return (
    <span className="inline-flex items-baseline font-sans text-xl md:text-2xl lg:text-3xl font-bold text-neutral-900">
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
      <span className="text-[#5E27BA] ml-0.5">{suffix}</span>
    </span>
  );
}

export default function Hero() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  const showcaseSlides = [
    {
      title: "Creative Windows",
      slug: "creative-windows",
      image: "/portfolio/VISUAL MERCHANDISING/Creative Window Concepts/IMG_7385.jpg"
    },
    {
      title: "In-store Display",
      slug: "in-store-display",
      image: "/portfolio/VISUAL MERCHANDISING/In-store Product Display/IN STORE/YOUSTA(4).jpg"
    },
    {
      title: "Limited Editions",
      slug: "limited-editions",
      image: "/portfolio/VISUAL MERCHANDISING/Limited Editions/43527154_2279064838833119_2170682248129413120_n.jpg"
    },
    {
      title: "E-Commerce & Styling",
      slug: "e-commerce-styling",
      image: "/portfolio/E-Commerce Creative Direction & Styling/1_200x100_edited.jpg"
    },
    {
      title: "Conceptual Design",
      slug: "conceptual-design",
      image: "/portfolio/Conceptual Design & Visual Signage Packdage/CONCEPTUAL DESIGN/1.jpg"
    },
    {
      title: "Visual Signage",
      slug: "visual-signage",
      image: "/portfolio/Conceptual Design & Visual Signage Packdage/VISUAL SIGNAGE/Diapositiva3.JPG"
    },
    {
      title: "Trade Shows",
      slug: "trade-shows",
      image: "/portfolio/Events & Brands Exhibition/Fashion Trade Shows/J&J TRADE SHOW/Slide31.JPG"
    },
    {
      title: "Showroom Curation",
      slug: "showroom-curation",
      image: "/portfolio/Events & Brands Exhibition/Bespoke Press Showroom Curation/VERO MODA PRESS PREVIEW/IMG_9004.jpg"
    },
    {
      title: "Luxury Events",
      slug: "luxury-events",
      image: "/portfolio/Events & Brands Exhibition/Luxury & Lifestyle Events/BELL & ROSS/Copy of _MG_0053.JPG"
    },
    {
      title: "Press & Guest Speaker",
      slug: "press-speaker",
      image: "/portfolio/Press & Guest Speaker/SKPL8763_JPG.avif"
    }
  ];

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % showcaseSlides.length);
    }, 3600);
    return () => clearInterval(interval);
  }, [showcaseSlides.length]);

  const currentSlide = showcaseSlides[currentSlideIndex];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const lineVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section ref={heroRef} className="w-full bg-white text-black pt-4 md:pt-6 lg:pt-8 px-6 md:px-12 lg:px-20 pb-8 md:pb-12 overflow-hidden min-h-[90vh] flex flex-col justify-between">
      {/* Top Nav */}
      <motion.nav 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-[1600px] mx-auto w-full flex justify-end items-center mb-6 md:mb-8 font-sans text-xs font-semibold tracking-wider uppercase border-b border-neutral-200/60 pb-4"
      >
        {/* Navigation Menu */}
        <div className="flex flex-wrap justify-end items-center gap-x-6 md:gap-x-10 gap-y-2">
          <Link to="/portfolio" className="hover:text-[#5E27BA] transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-[#5E27BA] hover:after:w-full after:transition-all after:duration-300 pb-1">
            Portfolio
          </Link>
          <a href="#about" className="hover:text-[#5E27BA] transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-[#5E27BA] hover:after:w-full after:transition-all after:duration-300 pb-1">
            About Me
          </a>
          <a href="#vm-course" className="hover:text-[#5E27BA] transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-[#5E27BA] hover:after:w-full after:transition-all after:duration-300 pb-1">
            VM Course
          </a>
          <a href="#contact" className="hover:text-[#5E27BA] transition-colors flex items-center gap-1 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-[#5E27BA] hover:after:w-full after:transition-all after:duration-300 pb-1">
            Contact <ArrowUpRight size={13} strokeWidth={2.5} />
          </a>
        </div>
      </motion.nav>

      {/* Main Typography & 60:30 Grid Layout */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-[1600px] mx-auto w-full flex flex-col flex-1 justify-center"
      >
        {/* Main Title Area: NUNO ROSA + Subtitle + Locations */}
        <div className="overflow-hidden mb-4 md:mb-6">
          <motion.h1 
            variants={lineVariants}
            className="font-sans text-[11vw] md:text-[8.5vw] lg:text-[7.2vw] leading-[0.88] font-normal tracking-tight md:tracking-[-0.02em] uppercase select-none text-black ml-0 text-left"
          >
            NUNO ROSA
          </motion.h1>
          
          <motion.div 
            variants={itemVariants}
            className="flex flex-col gap-1 mt-2 md:mt-3 text-left"
          >
            <span className="font-sans text-xl md:text-2xl lg:text-3xl font-light tracking-tight text-black/90">
              Fashion Retail & Visual Merchandising
            </span>
            <span className="font-sans text-xs md:text-sm lg:text-base font-semibold tracking-[0.12em] text-[#5E27BA] uppercase mt-0.5">
              London &nbsp;|&nbsp; UAE &nbsp;|&nbsp; India &nbsp;|&nbsp; Mexico &nbsp;|&nbsp; Portugal
            </span>
          </motion.div>
        </div>

        {/* 60:30 Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column (Text & CTAs): 5 Columns */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-5 flex flex-col items-start gap-6 lg:pr-4 order-2 lg:order-1"
          >
            <div className="flex items-center gap-2 bg-[#5E27BA]/10 text-[#5E27BA] px-3 py-1 rounded-sm font-sans text-[11px] font-semibold tracking-wider uppercase border border-[#5E27BA]/20">
              <Sparkles size={12} />
              <span>Spatial Design & Visual Merchandising</span>
            </div>

            <div className="font-sans text-base md:text-lg lg:text-xl font-light tracking-tight text-[#111]/90 max-w-md leading-relaxed">
              I craft immersive visual merchandising and bespoke exhibition architectures that captivate global audiences and transform physical spaces into visceral brand stories.
            </div>
            
            <div className="flex flex-wrap items-center gap-4 font-sans text-xs font-semibold tracking-wider uppercase">
              <a 
                href="#contact" 
                className="bg-[#5E27BA] text-white px-7 py-3 rounded-sm hover:bg-black hover:text-white hover:shadow-xl transition-all duration-300 transform active:scale-95 flex items-center gap-2 text-xs"
              >
                Start Project <ArrowUpRight size={13} strokeWidth={2.5} />
              </a>
              <a 
                href="#about" 
                className="flex items-center gap-1 py-2 px-1 hover:text-[#5E27BA] transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-black/30 hover:after:bg-[#5E27BA] text-xs"
              >
                My Approach
              </a>
            </div>

            {/* Metrics Checklist */}
            <div className="w-full border-t border-neutral-200/80 pt-4 mt-2 grid grid-cols-3 gap-3">
              <div className="flex flex-col gap-0.5 border-r border-[#111]/15 pr-3">
                <span className="font-sans text-[9px] lg:text-[10px] font-semibold tracking-widest text-[#111]/60 uppercase">Experience</span>
                <div className="flex items-baseline gap-0.5 text-[#111]">
                  <RollingReel value={30} suffix="+" />
                  <span className="font-sans text-[9px] lg:text-[10px] font-semibold uppercase text-[#111]/60 ml-0.5">Yrs</span>
                </div>
              </div>
              
              <div className="flex flex-col gap-0.5 border-r border-[#111]/15 pr-3">
                <span className="font-sans text-[9px] lg:text-[10px] font-semibold tracking-widest text-[#111]/60 uppercase">Based In</span>
                <div className="flex items-baseline gap-1 pt-[2px]">
                  <span className="font-sans text-lg lg:text-xl font-bold tracking-tight text-[#111] uppercase">London</span>
                </div>
              </div>

              <div className="flex flex-col gap-0.5">
                <span className="font-sans text-[9px] lg:text-[10px] font-semibold tracking-widest text-[#111]/60 uppercase">Brands</span>
                <div className="flex items-baseline gap-0.5 text-[#111]">
                  <RollingReel value={40} suffix="+" />
                  <span className="font-sans text-[9px] lg:text-[10px] font-semibold uppercase text-[#111]/60 ml-0.5">Global</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: 7 Columns - Automatic 10-Discipline Showcase Carousel */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-7 w-full order-1 lg:order-2"
          >
            <Link 
              to={`/gallery/${currentSlide.slug}`}
              className="block relative w-full aspect-[16/9] md:aspect-[16/8.8] rounded-sm md:rounded overflow-hidden bg-neutral-900 shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-neutral-200/80 group cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-[#5E27BA]/20 via-transparent to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-700 z-10 pointer-events-none" />
              
              <AnimatePresence mode="wait">
                <motion.img 
                  key={currentSlideIndex}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1.08 }}
                  exit={{ opacity: 0, scale: 1.04 }}
                  transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                  style={{ y }}
                  src={currentSlide.image}
                  alt={`${currentSlide.title} showcase by Nuno Rosa`}
                  className="absolute inset-0 w-full h-full object-cover origin-center transition-transform duration-[2s] ease-out group-hover:scale-[1.12]"
                />
              </AnimatePresence>

              {/* Floating Dynamic Discipline Pill Badge on Image */}
              <div className="absolute top-3 left-3 md:top-4 md:left-4 z-20 flex items-center gap-2 bg-[#111]/85 backdrop-blur-md px-3.5 py-1.5 rounded-sm border border-white/20 text-white font-sans text-[10px] md:text-xs font-semibold tracking-widest uppercase shadow-lg group-hover:bg-[#5E27BA] transition-colors duration-300">
                <span className="w-1.5 h-1.5 bg-[#5E27BA] group-hover:bg-white rounded-full animate-pulse" />
                <span>{currentSlide.title}</span>
                <ArrowUpRight size={12} className="opacity-60 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Indicator Counter & Dots */}
              <div className="absolute bottom-3 right-3 md:bottom-4 md:right-4 z-20 flex items-center gap-1.5 bg-[#111]/80 backdrop-blur-md px-3 py-1 rounded-sm border border-white/10 text-white font-mono text-[10px] tracking-wider uppercase">
                <span className="text-[#5E27BA] font-bold">0{currentSlideIndex + 1}</span>
                <span className="opacity-40">/</span>
                <span className="opacity-60">10</span>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-[#111]/50 via-transparent to-transparent opacity-40 group-hover:opacity-70 transition-opacity duration-700 pointer-events-none z-10" />
            </Link>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}
