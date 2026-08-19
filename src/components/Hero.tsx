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

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  const showcaseSlides = [
    {
      title: "Creative Windows",
      slug: "creative-windows",
      image: portfolioData["Creative Windows"]?.["Creative Window Concepts"]?.[0] || "/portfolio/VISUAL MERCHANDISING/Creative Window Concepts/a.jpg"
    },
    {
      title: "In-store Display",
      slug: "in-store-display",
      image: portfolioData["In-store Display"]?.["In-store Product Displays"]?.[0] || "/portfolio/VISUAL MERCHANDISING/In-store Product Display/IN STORE/1.jpg"
    },
    {
      title: "Limited Editions",
      slug: "limited-editions",
      image: portfolioData["Limited Editions"]?.["Limited Editions"]?.[0] || "https://static.wixstatic.com/media/9e4437_31a5b991f9744ab8ae644c77c80f76e7~mv2.jpg/v1/crop/x_0,y_193,w_960,h_550/fill/w_787,h_451,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/44319782_2298070196932583_2427615974984253440_n.jpg"
    },
    {
      title: "E-Commerce & Styling",
      slug: "e-commerce-styling",
      image: portfolioData["E-Commerce & Styling"]?.["E-Commerce & Styling"]?.[0] || "https://static.wixstatic.com/media/9e4437_c7516a73c7a74931a566495ddbea2df5~mv2.jpg/v1/fill/w_1463,h_787,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/1180mm%20X%20635mm%20(1)_edited.jpg"
    },
    {
      title: "Conceptual Design",
      slug: "conceptual-design",
      image: portfolioData["Conceptual Design"]?.["Conceptual Design"]?.[0] || "/portfolio/CONCEPTUAL DESIGN/1.jpg"
    },
    {
      title: "Visual Signage",
      slug: "visual-signage",
      image: portfolioData["Visual Signage"]?.["Visual Signage"]?.[0] || "/portfolio/VISUAL SIGNAGE/Slide1.JPG"
    },
    {
      title: "Trade Shows",
      slug: "trade-shows",
      image: portfolioData["Trade Shows"]?.["Trade Shows"]?.[0] || "https://static.wixstatic.com/media/9e4437_9eb9fa8391e94b34896eb1060b8066dc~mv2.jpg/v1/crop/x_294,y_374,w_3563,h_2341/fill/w_1049,h_689,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/IMG_20220816_064620.jpg"
    },
    {
      title: "Showroom Curation",
      slug: "showroom-curation",
      image: portfolioData["Showroom Curation"]?.["Press & Showroom Curation"]?.[0] || "/portfolio/Events & Brands Exhibition/Bespoke Press Showroom Curation/VERO MODA PRESS PREVIEW/IMG_20220816_064620.jpg"
    },
    {
      title: "Luxury Events",
      slug: "luxury-events",
      image: portfolioData["Luxury Events"]?.["Luxury & Lifestyle Events"]?.[0] || "https://static.wixstatic.com/media/9e4437_590cee324ec8484980dce6346f6d9664~mv2.jpg/v1/fill/w_1181,h_787,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/_MG_0064_edited.jpg"
    },
    {
      title: "Press & Guest Speaker",
      slug: "press-speaker",
      image: portfolioData["Press & Guest Speaker"]?.["Keynote Panels & Workshops"]?.[0] || "https://static.wixstatic.com/media/9e4437_0b022f9ff7e645fbacc6aa8a6e68dbe0~mv2.jpg/v1/crop/x_304,y_805,w_3588,h_5915/fill/w_477,h_787,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/SKPL8757_JPG.jpg"
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
            <span className="font-sans text-xs md:text-sm lg:text-base font-semibold tracking-[0.12em] text-[#7651B9] uppercase mt-0.5">
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
            <div className="flex items-center gap-2 bg-[#7651B9]/10 text-[#7651B9] px-3 py-1 rounded-sm font-sans text-[11px] font-semibold tracking-wider uppercase border border-[#7651B9]/20">
              <Sparkles size={12} />
              <span>Spatial Design & Visual Merchandising</span>
            </div>

            <div className="font-sans text-base md:text-lg lg:text-xl font-light tracking-tight text-[#111]/90 max-w-md leading-relaxed">
              I craft immersive visual merchandising and bespoke exhibition architectures that captivate global audiences and transform physical spaces into visceral brand stories.
            </div>
            
            <div className="flex flex-wrap items-center gap-4 font-sans text-xs font-semibold tracking-wider uppercase">
              <a 
                href="#contact" 
                className="bg-[#7651B9] text-white px-7 py-3 rounded-sm hover:bg-black hover:text-white hover:shadow-xl transition-all duration-300 transform active:scale-95 flex items-center gap-2 text-xs"
              >
                Start Project <ArrowUpRight size={13} strokeWidth={2.5} />
              </a>
              <a 
                href="#about" 
                className="flex items-center gap-1 py-2 px-1 hover:text-[#7651B9] transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-black/30 hover:after:bg-[#7651B9] text-xs"
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
              <div className="absolute inset-0 bg-gradient-to-tr from-[#7651B9]/20 via-transparent to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-700 z-10 pointer-events-none" />
              
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
              <div className="absolute top-3 left-3 md:top-4 md:left-4 z-20 flex items-center gap-2 bg-[#111]/85 backdrop-blur-md px-3.5 py-1.5 rounded-sm border border-white/20 text-white font-sans text-[10px] md:text-xs font-semibold tracking-widest uppercase shadow-lg group-hover:bg-[#7651B9] transition-colors duration-300">
                <span className="w-1.5 h-1.5 bg-[#7651B9] group-hover:bg-white rounded-full animate-pulse" />
                <span>{currentSlide.title}</span>
                <ArrowUpRight size={12} className="opacity-60 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Indicator Counter & Dots */}
              <div className="absolute bottom-3 right-3 md:bottom-4 md:right-4 z-20 flex items-center gap-1.5 bg-[#111]/80 backdrop-blur-md px-3 py-1 rounded-sm border border-white/10 text-white font-mono text-[10px] tracking-wider uppercase">
                <span className="text-[#7651B9] font-bold">0{currentSlideIndex + 1}</span>
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
