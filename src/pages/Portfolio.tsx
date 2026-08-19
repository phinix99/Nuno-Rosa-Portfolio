import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Home, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

const portfolioData = [
  {
    category: "CREATIVE VISUAL STORYTELLING",
    slug: "creative-windows",
    num: "01",
    desc: "Bespoke windows concepts, in-store product displays, and limited-edition product launch architectures.",
    items: [
      { id: "vm-1", title: "Creative Windows", slug: "creative-windows", image: "/portfolio/VISUAL MERCHANDISING/Creative Window Concepts/p.jpg" },
      { id: "vm-2", title: "In-store Display", slug: "in-store-display", image: "/portfolio/VISUAL MERCHANDISING/In-store Product Display/IN STORE/20170227_112718.avif" },
      { id: "vm-3", title: "Limited Editions", slug: "limited-editions", image: "/portfolio/VISUAL MERCHANDISING/Limited Editions/01.jpg" }
    ]
  },
  {
    category: "DIGITAL VISUAL MERCHANDISING",
    slug: "e-commerce-styling",
    num: "02",
    desc: "E-commerce creative direction, luxury styling curations, and high-fashion digital campaigns.",
    items: [
      { id: "es-1", title: "E-Commerce & Styling", slug: "e-commerce-styling", image: "/portfolio/E-Commerce Creative Direction & Styling/3-compressed.jpg" },
      { id: "es-2", title: "Styling Curation", slug: "e-commerce-styling", image: "/portfolio/E-Commerce Creative Direction & Styling/1_200x100_edited.jpg" },
      { id: "es-3", title: "Editorial Lookbooks", slug: "e-commerce-styling", image: "/portfolio/E-Commerce Creative Direction & Styling/4_Life Style_1180mm X 635mm_edited.jpg" }
    ]
  },
  {
    category: "SPATIAL GRAPHIC DESIGN",
    slug: "conceptual-design",
    num: "03",
    desc: "Retail conceptual designs, visual signage communication, and spatial environmental brand frameworks.",
    items: [
      { id: "cs-1", title: "Conceptual Design", slug: "conceptual-design", image: "/portfolio/CONCEPTUAL DESIGN/1.jpg" },
      { id: "cs-2", title: "Visual Signage", slug: "visual-signage", image: "/portfolio/VISUAL SIGNAGE/Slide1.JPG" },
      { id: "cs-3", title: "Environmental Graphics", slug: "visual-signage", image: "/portfolio/VISUAL SIGNAGE/Slide2.JPG" }
    ]
  },
  {
    category: "BRAND RETAIL EXPERIENCES",
    slug: "trade-shows",
    num: "04",
    desc: "Fashion trade shows, bespoke press room curations, and high-profile luxury lifestyle events.",
    items: [
      { id: "ee-1", title: "Trade Shows", slug: "trade-shows", image: "/portfolio/Events & Brands Exhibition/Fashion Trade Shows/J&J TRADE SHOW/IMG-20220816-WA0015.jpg" },
      { id: "ee-2", title: "Showroom Curation", slug: "showroom-curation", image: "/portfolio/Events & Brands Exhibition/Bespoke Press Showroom Curation/VERO MODA PRESS PREVIEW/20190117_194904.jpg" },
      { id: "ee-3", title: "Luxury Events", slug: "luxury-events", image: "/portfolio/Events & Brands Exhibition/Luxury & Lifestyle Events/BELL & ROSS/BELL & ROSS AUTODROME EVENT/Copy of _MG_0001 (2).JPG" }
    ]
  },
  {
    category: "PRESS & GUEST SPEAKER",
    slug: "press-speaker",
    num: "05",
    desc: "Keynote industry panel sessions, creative workshops, and international retail design features.",
    items: [
      { id: "ps-1", title: "Keynote Panels", slug: "press-speaker", image: "/portfolio/Events & Brands Exhibition/Bespoke Press Showroom Curation/SET-UP PICS/6E4A7870.JPG" },
      { id: "ps-2", title: "Press & Articles", slug: "press-speaker", image: "/portfolio/Events & Brands Exhibition/Bespoke Press Showroom Curation/VERO MODA PRESS PREVIEW/20190117_195007.jpg" },
      { id: "ps-3", title: "VM Workshops", slug: "press-speaker", image: "/portfolio/Events & Brands Exhibition/Bespoke Press Showroom Curation/SET-UP PICS/6E4A7903.JPG" }
    ]
  }
];

const galleryLinks = [
  { name: "Creative Windows", slug: "creative-windows" },
  { name: "In-store Display", slug: "in-store-display" },
  { name: "Limited Editions", slug: "limited-editions" },
  { name: "E-Commerce & Styling", slug: "e-commerce-styling" },
  { name: "Conceptual Design", slug: "conceptual-design" },
  { name: "Visual Signage", slug: "visual-signage" },
  { name: "Trade Shows", slug: "trade-shows" },
  { name: "Showroom Curation", slug: "showroom-curation" },
  { name: "Luxury Events", slug: "luxury-events" },
  { name: "Press & Guest Speaker", slug: "press-speaker" }
];

export default function Portfolio() {
  const { category } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [category]);

  return (
    <main className="bg-[#fdfdfd] min-h-screen text-[#111] font-sans antialiased overflow-x-hidden">
      {/* Sticky Minimal Navbar */}
      <nav className="w-full px-6 md:px-12 py-4 md:py-5 border-b border-neutral-200/80 flex justify-between items-center sticky top-0 bg-[#fdfdfd]/95 backdrop-blur-md z-50">
        <Link 
          to="/" 
          className="flex items-center gap-2 font-bold tracking-tight text-sm md:text-base uppercase hover:text-[#5E27BA] transition-colors"
        >
          <ArrowLeft size={16} /> NUNO ROSA
        </Link>

        {/* Navigation back to main sections */}
        <div className="flex items-center gap-4 text-xs font-semibold uppercase tracking-wider">
          <Link to="/#about" className="hover:text-[#5E27BA] transition-colors hidden sm:inline">
            About Me
          </Link>
          <Link to="/#vm-course" className="hover:text-[#5E27BA] transition-colors hidden sm:inline">
            VM Course
          </Link>
          <Link 
            to="/#contact" 
            className="flex items-center gap-1 px-4 py-2 rounded-sm bg-[#5E27BA] text-white hover:bg-black transition-colors"
          >
            Contact <ArrowUpRight size={12} />
          </Link>
        </div>
      </nav>

      {/* Minimal Header & Gallery Selectors */}
      <header className="max-w-[1500px] mx-auto px-6 md:px-12 pt-8 md:pt-10 pb-6 border-b border-neutral-200/80 flex flex-col gap-6">
        <div className="flex items-center justify-between">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-neutral-500">
            <Link to="/" className="hover:text-[#5E27BA] transition-colors flex items-center gap-1.5 font-medium">
              <Home size={13} /> Home
            </Link>
            <ChevronRight size={13} className="text-neutral-400" />
            <span className="text-neutral-900 font-bold">Portfolio</span>
          </nav>
        </div>

        {/* Left-Aligned Visible Gallery Selectors Bar */}
        <div className="flex flex-wrap items-center justify-start gap-2 pb-1">
          {galleryLinks.map((g) => (
            <Link 
              key={g.slug} 
              to={`/gallery/${g.slug}`}
              className="px-3.5 py-2 rounded-sm text-xs font-semibold tracking-wider uppercase transition-all bg-neutral-100 text-neutral-800 hover:bg-[#5E27BA] hover:text-white border border-black/5 hover:border-[#5E27BA] shadow-xs flex items-center gap-1.5 group"
            >
              <span>{g.name}</span>
              <ArrowUpRight size={12} className="opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </Link>
          ))}
        </div>
      </header>

      {/* Portfolio Content - Alternating Sections Layout */}
      <div className="max-w-[1500px] mx-auto px-6 md:px-12 py-8 md:py-14 flex flex-col gap-12 md:gap-16">
        {portfolioData.map((section, idx) => {
          const isEven = idx % 2 === 1; // 0-indexed: 1 and 3 are bordered boxes
          
          const sectionContent = (
            <div className="flex flex-col gap-5 md:gap-6">
              {/* Section Header */}
              <div className="flex flex-col gap-1.5">
                <span className="text-xs font-mono font-bold tracking-widest text-[#5E27BA] uppercase">
                  DISCIPLINE 0{idx + 1}
                </span>
                <Link 
                  to={`/gallery/${section.slug}`}
                  className="group w-fit"
                >
                  <h2 className="font-sans text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light tracking-tight uppercase text-[#111] leading-[1.08] group-hover:text-[#5E27BA] transition-colors">
                    {section.category.split(' & ').map((part, i, arr) => (
                      <span key={i}>
                        {part}
                        {i < arr.length - 1 && <><br /><span className="font-medium">& </span></>}
                      </span>
                    ))}
                  </h2>
                </Link>
              </div>

              {/* 3-Column Image Grid with Sleek Height */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                {section.items.map((item, i) => (
                  <motion.div 
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                    className="relative aspect-[16/11] md:aspect-auto md:h-[270px] lg:h-[310px]"
                  >
                    <Link 
                      to={`/gallery/${item.slug || section.slug}`} 
                      className="group relative w-full h-full rounded-sm md:rounded overflow-hidden border border-neutral-200/80 hover:border-[#5E27BA]/60 hover:shadow-[0_15px_35px_rgba(94, 39, 186,0.18)] transition-all duration-500 bg-neutral-900 flex flex-col justify-center items-center"
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
                        <div className="absolute inset-0 bg-[#5E27BA]/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay" />
                      </div>

                      {/* Center Badge with responsive text */}
                      <div className="relative z-10 p-3 text-center">
                        <span className="bg-white/95 text-black px-5 md:px-7 py-2 md:py-2.5 rounded-sm border border-black/10 font-sans text-xs md:text-sm font-semibold tracking-wide uppercase shadow-sm group-hover:bg-[#5E27BA] group-hover:text-white group-hover:border-[#5E27BA] transition-all duration-300 inline-block">
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
                <div className="w-full border-2 md:border-[3px] border-[#111] p-5 sm:p-6 md:p-8 lg:p-10 rounded-sm md:rounded bg-white shadow-xs">
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
