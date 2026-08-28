import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { ArrowUpRight, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);

  const showcaseSlides = [
    {
      title: "Creative Windows",
      category: "Visual Merchandising",
      slug: "creative-windows",
      image: "/portfolio/VISUAL MERCHANDISING/Creative Window Concepts/IMG_7385.jpg"
    },
    {
      title: "In-store Display",
      category: "Retail Layouts",
      slug: "in-store-display",
      image: "/portfolio/VISUAL MERCHANDISING/In-store Product Display/IN STORE/YOUSTA(4).jpg"
    },
    {
      title: "Limited Editions",
      category: "Special Projects",
      slug: "limited-editions",
      image: "/portfolio/VISUAL MERCHANDISING/Limited Editions/43527154_2279064838833119_2170682248129413120_n.jpg"
    },
    {
      title: "E-Commerce & Styling",
      category: "Digital Storefronts",
      slug: "e-commerce-styling",
      image: "/portfolio/E-Commerce Creative Direction & Styling/1_200x100_edited.jpg"
    },
    {
      title: "Conceptual Design",
      category: "Spatial Architecture",
      slug: "conceptual-design",
      image: "/portfolio/Conceptual Design & Visual Signage Packdage/CONCEPTUAL DESIGN/1.jpg"
    },
    {
      title: "Visual Signage",
      category: "Environmental Graphics",
      slug: "visual-signage",
      image: "/portfolio/Conceptual Design & Visual Signage Packdage/VISUAL SIGNAGE/Diapositiva3.JPG"
    },
    {
      title: "Trade Shows",
      category: "Brand Activations",
      slug: "trade-shows",
      image: "/portfolio/Events & Brands Exhibition/Fashion Trade Shows/J&J TRADE SHOW/Slide31.JPG"
    },
    {
      title: "Showroom Curation",
      category: "Press Previews",
      slug: "showroom-curation",
      image: "/portfolio/Events & Brands Exhibition/Bespoke Press Showroom Curation/VERO MODA PRESS PREVIEW/IMG_9004.jpg"
    },
    {
      title: "Luxury Events",
      category: "Lifestyle Activations",
      slug: "luxury-events",
      image: "/portfolio/Events & Brands Exhibition/Luxury & Lifestyle Events/BELL & ROSS/Copy of _MG_0053.JPG"
    },
    {
      title: "Press & Guest Speaker",
      category: "Industry Leadership",
      slug: "press-speaker",
      image: "/portfolio/Press & Guest Speaker/SKPL8763_JPG.avif"
    }
  ];

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % showcaseSlides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isPaused, showcaseSlides.length]);

  const handlePrev = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentSlideIndex((prev) => (prev - 1 + showcaseSlides.length) % showcaseSlides.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentSlideIndex((prev) => (prev + 1) % showcaseSlides.length);
  };

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
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section ref={heroRef} className="w-full bg-white text-black pt-4 md:pt-6 lg:pt-8 px-6 md:px-12 lg:px-20 pb-10 md:pb-14 overflow-hidden flex flex-col justify-between">
      {/* Top Nav (10% Accent & Structure) */}
      <motion.nav 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-[1500px] mx-auto w-full flex justify-between items-center mb-6 md:mb-8 font-sans text-xs font-semibold tracking-wider uppercase border-b border-neutral-200/70 pb-4"
      >
        {/* Subtle Brand Tagline on Left */}
        <div className="hidden sm:flex items-center gap-2 text-[11px] font-mono tracking-widest text-[#0B3175] uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-[#0B3175]" />
          Visual Direction & Spatial Design
        </div>

        {/* Navigation Menu on Right */}
        <div className="flex flex-wrap justify-end items-center gap-x-6 md:gap-x-9 gap-y-2 ml-auto">
          <Link to="/portfolio" className="text-black/80 hover:text-[#0B3175] transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1.5px] after:bg-[#0B3175] hover:after:w-full after:transition-all after:duration-300 pb-0.5">
            Portfolio
          </Link>
          <a href="#about" className="text-black/80 hover:text-[#0B3175] transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1.5px] after:bg-[#0B3175] hover:after:w-full after:transition-all after:duration-300 pb-0.5">
            About Me
          </a>
          <a href="#vm-course" className="text-black/80 hover:text-[#0B3175] transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1.5px] after:bg-[#0B3175] hover:after:w-full after:transition-all after:duration-300 pb-0.5">
            VM Course
          </a>
          <a href="#contact" className="text-[#0B3175] font-bold hover:text-black transition-colors flex items-center gap-1 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1.5px] after:bg-[#0B3175] hover:after:w-full after:transition-all after:duration-300 pb-0.5">
            Contact <ArrowUpRight size={13} strokeWidth={2.5} />
          </a>
        </div>
      </motion.nav>

      {/* Main Container - Structured by 60:30:10 Rule */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-[1500px] mx-auto w-full flex flex-col flex-1 justify-center"
      >
        {/* Top Header: Brand Name + Studio Subtitle + International Markets */}
        <div className="overflow-hidden mb-6 md:mb-8">
          <motion.h1 
            variants={itemVariants}
            className="font-sans text-5xl sm:text-6xl md:text-7xl lg:text-[4.75rem] leading-[0.95] font-normal tracking-tight md:tracking-[-0.02em] uppercase select-none text-black ml-0 text-left"
          >
            NUNO ROSA
          </motion.h1>
          
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mt-2 md:mt-3 pt-1 border-t border-black/5"
          >
            <span className="font-sans text-xl md:text-2xl lg:text-[1.75rem] font-light tracking-tight text-black/90">
              Fashion Retail & Visual Merchandising Studio
            </span>
            <span className="font-sans text-xs md:text-sm font-semibold tracking-[0.14em] uppercase text-[#0B3175] shrink-0">
              London &nbsp;•&nbsp; UAE &nbsp;•&nbsp; India &nbsp;•&nbsp; Mexico &nbsp;•&nbsp; Portugal
            </span>
          </motion.div>
        </div>

        {/* 60:30 Layout Grid */}
        {/* Left Column (30% Editorial Story & CTA) | Right Column (60% Dominant Showcase Image) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column (30% Hierarchy): 5 Columns in 12-col grid */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-5 flex flex-col items-start gap-6 lg:pr-2 order-2 lg:order-1"
          >
            {/* Editorial Narrative */}
            <div className="font-sans text-xs sm:text-sm lg:text-[0.95rem] font-light tracking-tight text-[#111]/85 max-w-xl leading-relaxed flex flex-col gap-3.5 border-l-2 border-[#0B3175]/30 pl-4">
              <p>
                To enhance a brand's visual presence, every project must balance strategic planning with immaculate execution. I design high-impact window concepts, spatial retail layouts, and immersive physical activations for global fashion brands.
              </p>
              <p>
                From bespoke luxury events to fixture development, detailed planograms, and national store layout optimisation, each concept is engineered to elevate brand DNA and market positioning.
              </p>
            </div>
            
            {/* 10% Accent CTA Button */}
            <div className="flex items-center gap-4 pt-1">
              <a 
                href="#about" 
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-sm bg-[#111] hover:bg-[#0B3175] text-white font-sans text-xs font-bold uppercase tracking-widest shadow-[0_4px_14px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_25px_rgba(11,49,117,0.35)] transition-all duration-300 group active:scale-[0.98]"
              >
                <span>My Approach</span>
                <ArrowUpRight size={14} strokeWidth={2.5} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300 text-white/80 group-hover:text-white" />
              </a>

              <Link 
                to="/portfolio"
                className="hidden sm:inline-flex items-center gap-1.5 font-sans text-xs font-semibold uppercase tracking-wider text-black/70 hover:text-[#0B3175] transition-colors py-2 px-3"
              >
                <span>View Full Works</span>
                <ArrowUpRight size={13} />
              </Link>
            </div>
          </motion.div>

          {/* Right Column (60% Dominant Visual): 7 Columns in 12-col grid */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-7 w-full order-1 lg:order-2"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="relative w-full rounded-sm md:rounded overflow-hidden bg-neutral-900 shadow-[0_20px_55px_-10px_rgba(0,0,0,0.18)] border border-black/10 group">
              
              {/* Grand Showcase Frame */}
              <Link 
                to={`/gallery/${currentSlide.slug}`}
                className="block relative w-full aspect-[16/9.5] sm:aspect-[16/9] overflow-hidden cursor-pointer"
              >
                <div className="absolute inset-0 bg-[#0B3175]/10 opacity-60 group-hover:opacity-100 transition-opacity duration-700 z-10 pointer-events-none" />
                
                <AnimatePresence mode="wait">
                  <motion.img 
                    key={currentSlideIndex}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1.08 }}
                    exit={{ opacity: 0, scale: 1.03 }}
                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                    style={{ y }}
                    src={currentSlide.image}
                    alt={`${currentSlide.title} showcase by Nuno Rosa`}
                    className="absolute inset-0 w-full h-full object-cover origin-center transition-transform duration-[2.5s] ease-out group-hover:scale-[1.12]"
                  />
                </AnimatePresence>

                {/* Top Left: Category & Live Indicator */}
                <div className="absolute top-3.5 left-3.5 md:top-4 md:left-4 z-20 flex items-center gap-2 bg-[#111]/80 backdrop-blur-md px-3 py-1.5 rounded-xs border border-white/15 text-white shadow-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0B3175] animate-pulse" />
                  <span className="font-mono text-[10px] uppercase tracking-widest text-white/90">
                    {currentSlide.category}
                  </span>
                </div>

                {/* Top Right: Manual Navigation Controls */}
                <div className="absolute top-3.5 right-3.5 md:top-4 md:right-4 z-20 flex items-center gap-1.5">
                  <button
                    onClick={handlePrev}
                    className="w-8 h-8 rounded-xs bg-[#111]/80 hover:bg-[#0B3175] backdrop-blur-md border border-white/15 text-white flex items-center justify-center transition-colors shadow-md cursor-pointer"
                    title="Previous Slide"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button
                    onClick={handleNext}
                    className="w-8 h-8 rounded-xs bg-[#111]/80 hover:bg-[#0B3175] backdrop-blur-md border border-white/15 text-white flex items-center justify-center transition-colors shadow-md cursor-pointer"
                    title="Next Slide"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>

                {/* Bottom Bar: Title & Reel Counter */}
                <div className="absolute bottom-3 left-3 right-3 md:bottom-4 md:left-4 md:right-4 z-20 flex items-center justify-between gap-3 bg-[#111]/85 backdrop-blur-md px-4 py-2.5 rounded-sm border border-white/20 text-white shadow-xl transition-all duration-300 group-hover:border-[#0B3175]/60">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2 h-2 bg-[#0B3175] rounded-full" />
                    <span className="font-sans text-xs md:text-sm font-bold tracking-wider uppercase text-white">
                      {currentSlide.title}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[11px] font-semibold text-white/60 tracking-widest">
                      <span className="text-white font-bold">{String(currentSlideIndex + 1).padStart(2, '0')}</span> / {String(showcaseSlides.length).padStart(2, '0')}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold tracking-wider uppercase text-[#0B3175] bg-white px-2 py-0.5 rounded-2xs group-hover:bg-[#0B3175] group-hover:text-white transition-colors">
                      <span>Explore</span>
                      <ArrowUpRight size={11} />
                    </span>
                  </div>
                </div>

                {/* Subtle vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#111]/60 via-transparent to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-700 pointer-events-none z-10" />
              </Link>

              {/* Mini Slide Track Bar (bottom progress indicators) */}
              <div className="w-full h-1 bg-black/40 flex">
                {showcaseSlides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlideIndex(idx)}
                    title={`Go to slide ${idx + 1}`}
                    className="flex-1 h-full relative transition-colors duration-300"
                  >
                    <div 
                      className={`h-full w-full transition-all duration-300 ${
                        idx === currentSlideIndex 
                          ? 'bg-[#0B3175]' 
                          : 'bg-white/15 hover:bg-white/40'
                      }`} 
                    />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}
