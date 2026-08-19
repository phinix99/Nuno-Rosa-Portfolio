import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Sparkles, Home, ChevronRight, ArrowUp } from 'lucide-react';
import { motion } from 'motion/react';

const portfolioData = [
  {
    category: "CREATIVE VISUAL STORYTELLING",
    slug: "visual-merchandising",
    num: "01",
    desc: "Bespoke windows concepts, in-store product displays, and limited-edition product launch architectures.",
    items: [
      { id: "vm-1", title: "Bespoke Windows Concepts", image: "https://res.cloudinary.com/dtom0ivbp/image/upload/v1784662099/1_78_tfobxr.avif" },
      { id: "vm-2", title: "In-store Product Display", image: "https://res.cloudinary.com/dtom0ivbp/image/upload/v1784405524/1_75_wvwlye.jpg" },
      { id: "vm-3", title: "Limited-edition Product Launches", image: "https://static.wixstatic.com/media/9e4437_31a5b991f9744ab8ae644c77c80f76e7~mv2.jpg/v1/crop/x_0,y_193,w_960,h_550/fill/w_787,h_451,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/44319782_2298070196932583_2427615974984253440_n.jpg" }
    ]
  },
  {
    category: "DIGITAL VISUAL MERCHANDISING",
    slug: "e-commerce-styling",
    num: "02",
    desc: "E-commerce creative direction, luxury styling curations, and high-fashion digital campaigns.",
    items: [
      { id: "es-1", title: "E-Commerce Creative Direction", image: "https://static.wixstatic.com/media/9e4437_c7516a73c7a74931a566495ddbea2df5~mv2.jpg/v1/fill/w_1463,h_787,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/1180mm%20X%20635mm%20(1)_edited.jpg" },
      { id: "es-2", title: "Styling Curation", image: "https://static.wixstatic.com/media/9e4437_590cee324ec8484980dce6346f6d9664~mv2.jpg/v1/fill/w_1181,h_787,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/_MG_0064_edited.jpg" },
      { id: "es-3", title: "Editorial Lookbook Direction", image: "https://res.cloudinary.com/dtom0ivbp/image/upload/v1784405512/1_10_sekb5j.jpg" }
    ]
  },
  {
    category: "SPATIAL GRAPHIC DESIGN",
    slug: "concept-signage",
    num: "03",
    desc: "Retail conceptual designs, visual signage communication, and spatial environmental brand frameworks.",
    items: [
      { id: "cs-1", title: "Retail Conceptual Design", image: "https://res.cloudinary.com/dtom0ivbp/image/upload/v1784405554/1_217_r3tuuz.jpg" },
      { id: "cs-2", title: "Visual Signage Communication", image: "https://static.wixstatic.com/media/9e4437_590cee324ec8484980dce6346f6d9664~mv2.jpg/v1/fill/w_1181,h_787,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/_MG_0064_edited.jpg" },
      { id: "cs-3", title: "Spatial Environmental Graphics", image: "https://static.wixstatic.com/media/9e4437_c7516a73c7a74931a566495ddbea2df5~mv2.jpg/v1/fill/w_1463,h_787,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/1180mm%20X%20635mm%20(1)_edited.jpg" }
    ]
  },
  {
    category: "BRAND RETAIL EXPERIENCES",
    slug: "events-exhibition",
    num: "04",
    desc: "Fashion trade shows, bespoke press room curations, and high-profile luxury lifestyle events.",
    items: [
      { id: "ee-1", title: "Fashion Trade Shows", image: "https://static.wixstatic.com/media/9e4437_9eb9fa8391e94b34896eb1060b8066dc~mv2.jpg/v1/crop/x_294,y_374,w_3563,h_2341/fill/w_1049,h_689,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/IMG_20220816_064620.jpg" },
      { id: "ee-2", title: "Press Rooms Curation", image: "https://res.cloudinary.com/dtom0ivbp/image/upload/v1784405555/1_224_yf8cfh.jpg" },
      { id: "ee-3", title: "Luxury Lifestyle Events", image: "https://static.wixstatic.com/media/9e4437_590cee324ec8484980dce6346f6d9664~mv2.jpg/v1/fill/w_1181,h_787,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/_MG_0064_edited.jpg" }
    ]
  },
  {
    category: "PRESS & GUEST SPEAKER",
    slug: "press-speaker",
    num: "05",
    desc: "Keynote industry panel sessions, creative workshops, and international retail design features.",
    items: [
      { id: "ps-1", title: "Keynote Panels & Summits", image: "https://static.wixstatic.com/media/9e4437_0b022f9ff7e645fbacc6aa8a6e68dbe0~mv2.jpg/v1/crop/x_304,y_805,w_3588,h_5915/fill/w_477,h_787,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/SKPL8757_JPG.jpg" },
      { id: "ps-2", title: "Industry Press Features", image: "https://res.cloudinary.com/dtom0ivbp/image/upload/v1784405555/1_224_yf8cfh.jpg" },
      { id: "ps-3", title: "VM Workshops & Engagements", image: "https://static.wixstatic.com/media/9e4437_c7516a73c7a74931a566495ddbea2df5~mv2.jpg/v1/fill/w_1463,h_787,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/1180mm%20X%20635mm%20(1)_edited.jpg" }
    ]
  }
];

export default function Portfolio() {
  const { category } = useParams();
  const [activeSlug, setActiveSlug] = useState(category || "visual-merchandising");
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (category) {
      setActiveSlug(category);
      const el = document.getElementById(category);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [category]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (slug: string) => {
    setActiveSlug(slug);
    const el = document.getElementById(slug);
    if (el) {
      const yOffset = -100; 
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="bg-[#fdfdfd] min-h-screen text-[#111] font-sans antialiased overflow-x-hidden">
      {/* Sticky Minimal Navbar */}
      <nav className="w-full px-6 md:px-12 py-4 md:py-5 border-b border-neutral-200/80 flex justify-between items-center sticky top-0 bg-[#fdfdfd]/95 backdrop-blur-md z-50">
        <Link 
          to="/" 
          className="flex items-center gap-2 font-bold tracking-tight text-sm md:text-base uppercase hover:text-[#7651B9] transition-colors"
        >
          <ArrowLeft size={16} /> NUNO ROSA
        </Link>

        {/* Quick Category Anchor Bar (Desktop) */}
        <div className="hidden xl:flex items-center gap-2 font-sans text-xs font-semibold tracking-wider uppercase">
          {portfolioData.map((section) => (
            <button 
              key={section.slug} 
              onClick={() => scrollToSection(section.slug)}
              className={`px-3.5 py-1.5 rounded-full transition-all ${
                activeSlug === section.slug 
                  ? 'bg-[#111] text-white shadow-sm' 
                  : 'text-[#111]/60 hover:text-[#111] hover:bg-neutral-100'
              }`}
            >
              {section.category}
            </button>
          ))}
        </div>

        {/* Navigation back to main sections */}
        <div className="flex items-center gap-4 text-xs font-semibold uppercase tracking-wider">
          <Link to="/#about" className="hover:text-[#7651B9] transition-colors hidden sm:inline">
            About Me
          </Link>
          <Link to="/#vm-course" className="hover:text-[#7651B9] transition-colors hidden sm:inline">
            VM Course
          </Link>
          <Link 
            to="/#contact" 
            className="flex items-center gap-1 px-4 py-2 rounded-lg bg-[#7651B9] text-white hover:bg-black transition-colors"
          >
            Contact <ArrowUpRight size={12} />
          </Link>
        </div>
      </nav>

      {/* Page Header & Breadcrumb */}
      <header className="max-w-[1500px] mx-auto px-6 md:px-12 pt-12 md:pt-20 pb-12 border-b border-neutral-200/80">
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-neutral-500 mb-8">
          <Link to="/" className="hover:text-[#7651B9] transition-colors flex items-center gap-1.5 font-medium">
            <Home size={13} /> Home
          </Link>
          <ChevronRight size={13} className="text-neutral-400" />
          <span className="text-neutral-900 font-bold">Portfolio Archives</span>
        </nav>

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-[#7651B9] uppercase">
            <Sparkles size={14} /> ARCHITECTURAL PORTFOLIO
          </div>
          <h1 className="font-sans text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight uppercase text-[#111] leading-none">
            CREATIVE DISCIPLINE ARCHIVES
          </h1>
          <p className="font-sans text-base md:text-lg font-light text-neutral-600 max-w-2xl leading-relaxed mt-2">
            A comprehensive curation of retail window displays, editorial styling, spatial exhibition architectures, and keynote speaking engagements worldwide.
          </p>
        </div>

        {/* Mobile Quick Category Bar */}
        <div className="flex xl:hidden items-center gap-2 overflow-x-auto no-scrollbar pt-8 pb-2">
          {portfolioData.map((section) => (
            <button 
              key={section.slug} 
              onClick={() => scrollToSection(section.slug)}
              className={`shrink-0 px-4 py-2 rounded-md text-xs font-semibold tracking-wider uppercase transition-all ${
                activeSlug === section.slug 
                  ? 'bg-[#111] text-white' 
                  : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
              }`}
            >
              {section.category}
            </button>
          ))}
        </div>
      </header>

      {/* Portfolio Content - Alternating Sections Layout */}
      <div className="max-w-[1500px] mx-auto px-6 md:px-12 py-16 md:py-24 flex flex-col gap-24 md:gap-32">
        {portfolioData.map((section, idx) => {
          const isEven = idx % 2 === 1; // 0-indexed: 1 and 3 are bordered boxes
          
          const sectionContent = (
            <div className="flex flex-col gap-8 md:gap-12">
              {/* Section Header */}
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-mono font-bold tracking-widest text-[#7651B9] uppercase">
                    DISCIPLINE 0{idx + 1}
                  </span>
                  <h2 className="font-sans text-4xl md:text-5xl lg:text-6xl font-light tracking-tight uppercase text-[#111] leading-[1.08]">
                    {section.category.split(' & ').map((part, i, arr) => (
                      <span key={i}>
                        {part}
                        {i < arr.length - 1 && <><br /><span className="font-medium">& </span></>}
                      </span>
                    ))}
                  </h2>
                </div>

                <Link
                  to={`/gallery/${section.slug}`}
                  className="flex items-center gap-2 px-6 py-3 rounded-lg border border-black/20 hover:border-[#7651B9] hover:bg-[#7651B9] hover:text-white transition-all text-xs font-bold tracking-widest uppercase text-black group w-fit shadow-sm"
                >
                  View Full Gallery
                  <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>

              {/* 3-Column Image Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                {section.items.map((item, i) => (
                  <motion.div 
                    key={item.id}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="relative aspect-[4/5] md:aspect-auto md:h-[400px] lg:h-[480px]"
                  >
                    <Link 
                      to={`/gallery/${section.slug}`} 
                      className="group relative w-full h-full rounded-lg md:rounded-xl overflow-hidden border border-neutral-200/80 hover:border-[#7651B9]/60 hover:shadow-[0_25px_50px_rgba(118,81B185,0.2)] transition-all duration-700 bg-neutral-900 flex flex-col justify-center items-center"
                    >
                      {/* Background Image */}
                      <div className="absolute inset-0 z-0 overflow-hidden">
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="absolute inset-0 bg-[#7651B9]/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay" />
                      </div>

                      {/* Center Badge with responsive text */}
                      <div className="relative z-10 p-4 text-center">
                        <span className="bg-white/95 text-black px-6 md:px-8 py-2.5 md:py-3 rounded-md border border-black/10 font-sans text-xs md:text-sm font-semibold tracking-wide uppercase shadow-lg group-hover:bg-[#7651B9] group-hover:text-white group-hover:border-[#7651B9] transition-all duration-300 inline-block">
                          {item.title}
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          );

          return (
            <section key={section.slug} id={section.slug} className="scroll-mt-32">
              {isEven ? (
                <div className="w-full border-[8px] md:border-[10px] border-[#111] p-6 sm:p-10 md:p-14 lg:p-16 rounded-xl bg-white shadow-sm">
                  {sectionContent}
                </div>
              ) : (
                <div className="w-full">
                  {sectionContent}
                </div>
              )}
            </section>
          );
        })}
      </div>
      
      {/* Floating Back to Top Button */}
      {showBackToTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-4 rounded-full bg-[#111] text-white hover:bg-[#7651B9] shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center border border-white/20"
          title="Back to Top"
        >
          <ArrowUp size={20} />
        </motion.button>
      )}

      {/* Footer */}
      <footer className="w-full py-12 border-t border-neutral-200/80 text-center font-sans text-xs tracking-wider uppercase text-neutral-500 bg-[#fafafa]">
        © {new Date().getFullYear()} NUNO ROSA SPATIAL DESIGN ARCHIVES. ALL RIGHTS RESERVED.
      </footer>
    </main>
  );
}
