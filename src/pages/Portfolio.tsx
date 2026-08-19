import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

const portfolioData = [
  {
    category: "VISUAL MERCHANDISING",
    slug: "visual-merchandising",
    num: "01",
    desc: "Bespoke window architectures, luxury boutique installations, and high-impact retail store environments.",
    items: [
      { id: "vm-1", title: "Creative Windows", image: "https://res.cloudinary.com/dtom0ivbp/image/upload/v1784662099/1_78_tfobxr.avif", bentoSpan: "lg:col-span-2 lg:row-span-2 min-h-[380px] lg:min-h-[540px]" },
      { id: "vm-2", title: "In-Store Displays", image: "https://res.cloudinary.com/dtom0ivbp/image/upload/v1784405524/1_75_wvwlye.jpg", bentoSpan: "lg:col-span-1 lg:row-span-1 min-h-[260px]" },
      { id: "vm-3", title: "Limited Editions", image: "https://static.wixstatic.com/media/9e4437_31a5b991f9744ab8ae644c77c80f76e7~mv2.jpg/v1/crop/x_0,y_193,w_960,h_550/fill/w_787,h_451,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/44319782_2298070196932583_2427615974984253440_n.jpg", bentoSpan: "lg:col-span-1 lg:row-span-1 min-h-[260px]" }
    ]
  },
  {
    category: "E-COMMERCE & STYLING",
    slug: "e-commerce-styling",
    num: "02",
    desc: "Fashion editorial lookbooks, high-fashion styling, and luxury product campaign art direction.",
    items: [
      { id: "es-1", title: "Fashion Styling", image: "https://static.wixstatic.com/media/9e4437_c7516a73c7a74931a566495ddbea2df5~mv2.jpg/v1/fill/w_1463,h_787,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/1180mm%20X%20635mm%20(1)_edited.jpg", bentoSpan: "lg:col-span-2 lg:row-span-1 min-h-[300px]" },
      { id: "es-2", title: "Editorial Lookbook", image: "https://static.wixstatic.com/media/9e4437_590cee324ec8484980dce6346f6d9664~mv2.jpg/v1/fill/w_1181,h_787,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/_MG_0064_edited.jpg", bentoSpan: "lg:col-span-1 lg:row-span-2 min-h-[380px] lg:min-h-[520px]" },
      { id: "es-3", title: "Product Focus", image: "https://res.cloudinary.com/dtom0ivbp/image/upload/v1784405512/1_10_sekb5j.jpg", bentoSpan: "lg:col-span-2 lg:row-span-1 min-h-[300px]" }
    ]
  },
  {
    category: "CONCEPT & SIGNAGE",
    slug: "concept-signage",
    num: "03",
    desc: "Spatial geometry concepts, experimental brand identity signage, and architectural retail frameworks.",
    items: [
      { id: "cs-1", title: "Conceptual Design", image: "https://res.cloudinary.com/dtom0ivbp/image/upload/v1784405554/1_217_r3tuuz.jpg", bentoSpan: "lg:col-span-2 lg:row-span-1 min-h-[340px]" },
      { id: "cs-2", title: "Visual Signage", image: "https://static.wixstatic.com/media/9e4437_590cee324ec8484980dce6346f6d9664~mv2.jpg/v1/fill/w_1181,h_787,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/_MG_0064_edited.jpg", bentoSpan: "lg:col-span-1 lg:row-span-1 min-h-[340px]" }
    ]
  },
  {
    category: "EVENTS & BRAND EXHIBITION",
    slug: "events-exhibition",
    num: "04",
    desc: "International trade fair booths, press showroom curations, and bespoke luxury launch activations.",
    items: [
      { id: "ee-1", title: "Trade Shows", image: "https://static.wixstatic.com/media/9e4437_9eb9fa8391e94b34896eb1060b8066dc~mv2.jpg/v1/crop/x_294,y_374,w_3563,h_2341/fill/w_1049,h_689,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/IMG_20220816_064620.jpg", bentoSpan: "lg:col-span-2 lg:row-span-1 min-h-[320px]" },
      { id: "ee-2", title: "Press Showroom Curation", image: "https://res.cloudinary.com/dtom0ivbp/image/upload/v1784405555/1_224_yf8cfh.jpg", bentoSpan: "lg:col-span-1 lg:row-span-2 min-h-[380px] lg:min-h-[520px]" },
      { id: "ee-3", title: "Luxury Events", image: "https://static.wixstatic.com/media/9e4437_590cee324ec8484980dce6346f6d9664~mv2.jpg/v1/fill/w_1181,h_787,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/_MG_0064_edited.jpg", bentoSpan: "lg:col-span-2 lg:row-span-1 min-h-[320px]" }
    ]
  },
  {
    category: "PRESS & GUEST SPEAKER",
    slug: "press-speaker",
    num: "05",
    desc: "Keynote industry panel sessions, creative workshops, and international retail design features.",
    items: [
      { id: "ps-1", title: "Keynote Panels", image: "https://static.wixstatic.com/media/9e4437_0b022f9ff7e645fbacc6aa8a6e68dbe0~mv2.jpg/v1/crop/x_304,y_805,w_3588,h_5915/fill/w_477,h_787,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/SKPL8757_JPG.jpg", bentoSpan: "lg:col-span-1 lg:row-span-2 min-h-[380px] lg:min-h-[520px]" },
      { id: "ps-2", title: "Interviews", image: "https://res.cloudinary.com/dtom0ivbp/image/upload/v1784405555/1_224_yf8cfh.jpg", bentoSpan: "lg:col-span-2 lg:row-span-1 min-h-[300px]" },
      { id: "ps-3", title: "Public Engagements", image: "https://static.wixstatic.com/media/9e4437_c7516a73c7a74931a566495ddbea2df5~mv2.jpg/v1/fill/w_1463,h_787,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/1180mm%20X%20635mm%20(1)_edited.jpg", bentoSpan: "lg:col-span-2 lg:row-span-1 min-h-[300px]" }
    ]
  }
];

export default function Portfolio() {
  const { category } = useParams();
  const [activeSlug, setActiveSlug] = useState(category || "visual-merchandising");

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

  const scrollToSection = (slug: string) => {
    setActiveSlug(slug);
    const el = document.getElementById(slug);
    if (el) {
      const yOffset = -100; 
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <main className="bg-[#fdfdfd] min-h-screen text-[#111] font-sans antialiased overflow-x-hidden">
      {/* Sticky Minimal Navbar */}
      <nav className="w-full px-6 md:px-12 py-5 border-b border-neutral-200/80 flex justify-between items-center sticky top-0 bg-[#fdfdfd]/90 backdrop-blur-md z-50">
        <Link 
          to="/" 
          className="flex items-center gap-2 font-bold tracking-tight text-lg uppercase hover:text-[#7651B9] transition-colors"
        >
          <ArrowLeft size={18} /> NUNO ROSA
        </Link>

        {/* Quick Category Anchor Bar */}
        <div className="hidden lg:flex items-center gap-2 font-sans text-xs font-semibold tracking-wider uppercase">
          {portfolioData.map((section) => (
            <button 
              key={section.slug} 
              onClick={() => scrollToSection(section.slug)}
              className={`px-4 py-2 rounded-full transition-all ${
                activeSlug === section.slug 
                  ? 'bg-[#111] text-white shadow-md' 
                  : 'text-[#111]/60 hover:text-[#111] hover:bg-neutral-100'
              }`}
            >
              {section.category}
            </button>
          ))}
        </div>
      </nav>

      {/* Page Header */}
      <header className="max-w-[1500px] mx-auto px-6 md:px-12 pt-16 md:pt-24 pb-12 border-b border-neutral-200/80">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-[#7651B9] uppercase">
            <Sparkles size={14} /> ARCHITECTURAL PORTFOLIO
          </div>
          <h1 className="font-sans text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight uppercase text-[#111]">
            CREATIVE DISCIPLINE ARCHIVES
          </h1>
          <p className="font-sans text-base md:text-lg font-light text-neutral-600 max-w-2xl leading-relaxed mt-2">
            A comprehensive curation of retail window displays, editorial styling, spatial exhibition architectures, and keynote speaking engagements worldwide.
          </p>
        </div>
      </header>

      {/* Portfolio Content - Bento Grid Layout */}
      <div className="max-w-[1500px] mx-auto px-6 md:px-12 py-16 flex flex-col gap-24 md:gap-32">
        {portfolioData.map((section, idx) => {
          const isEven = idx % 2 === 1; // 0-indexed: 1 and 3 are the "even" sections (E-Commerce, Events)
          
          const sectionContent = (
            <>
              {/* Section Header */}
              <div className="flex flex-col gap-2 mb-12">
                <h2 className={`font-sans ${isEven ? 'text-5xl md:text-6xl lg:text-7xl' : 'text-5xl md:text-6xl lg:text-7xl'} font-light tracking-tight uppercase text-[#111] leading-[1.1]`}>
                  {section.category.split(' & ').map((part, i, arr) => (
                    <span key={i}>
                      {part}
                      {i < arr.length - 1 && <><br /><span className="font-medium">& </span></>}
                    </span>
                  ))}
                </h2>
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
                    className="relative aspect-[4/5] md:aspect-auto md:h-[400px] lg:h-[500px]"
                  >
                    <Link to={`/gallery/${section.slug}`} className="group relative w-full h-full rounded-2xl md:rounded-3xl overflow-hidden border border-neutral-200/80 hover:border-[#7651B9]/40 hover:shadow-[0_25px_50px_rgba(107,76,154,0.12)] transition-all duration-700 bg-neutral-900 flex flex-col justify-center items-center">
                      {/* Background Image */}
                      <div className="absolute inset-0 z-0 overflow-hidden">
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>

                      {/* Center Badge (Matching layout arrangement but with consistent UI) */}
                      <div className="relative z-10">
                        <span className="bg-white/95 text-black px-6 md:px-8 py-2 md:py-3 rounded-full border border-black/10 font-sans text-xs md:text-sm font-semibold tracking-wide uppercase shadow-lg group-hover:bg-[#7651B9] group-hover:text-white group-hover:border-[#7651B9] transition-all duration-300">
                          {item.title}
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </>
          );

          return (
            <section key={section.slug} id={section.slug} className="scroll-mt-32">
              {isEven ? (
                <div className="w-full border-[12px] md:border-[16px] border-[#111] p-8 md:p-12 lg:p-16 rounded-3xl bg-white/50">
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
      
      {/* Footer */}
      <footer className="w-full py-12 border-t border-neutral-200/80 text-center font-sans text-xs tracking-wider uppercase text-neutral-500 bg-[#fafafa]">
        © {new Date().getFullYear()} NUNO ROSA SPATIAL DESIGN ARCHIVES. ALL RIGHTS RESERVED.
      </footer>
    </main>
  );
}

