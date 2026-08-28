import { useRef } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

interface Pillar {
  id: string;
  num: string;
  title: string;
  description: string;
  subDisciplines: { name: string; slug: string }[];
  primarySlug: string;
  mediaType: 'image' | 'video';
  mediaSrc: string;
  tag: string;
}

const pillars: Pillar[] = [
  {
    id: 'p1',
    num: '01',
    title: 'Creative Visual Storytelling',
    description: "The window display acts as a silent theatre behind the store façade—unveiling precise visual narratives that instantly communicate a brand's core DNA and engage the modern consumer.",
    subDisciplines: [
      { name: 'Bespoke Windows Concepts', slug: 'creative-windows' },
      { name: 'In-store Product Display', slug: 'in-store-display' },
      { name: 'Limited-edition Product Launches', slug: 'limited-editions' }
    ],
    primarySlug: 'creative-windows',
    mediaType: 'image',
    mediaSrc: '/portfolio/VISUAL MERCHANDISING/Creative Window Concepts/p.jpg',
    tag: 'Window Concepts & In-Store Displays'
  },
  {
    id: 'p2',
    num: '02',
    title: 'Digital Visual Merchandising',
    description: "Translating seasonal narratives and brand campaigns into precise digital storefronts. Every visual element is intentionally structured to maximize digital traffic and brand retention.",
    subDisciplines: [
      { name: 'E-Commerce Creative Direction', slug: 'e-commerce-styling' },
      { name: 'Styling Curation', slug: 'e-commerce-styling' }
    ],
    primarySlug: 'e-commerce-styling',
    mediaType: 'image',
    mediaSrc: '/portfolio/E-Commerce Creative Direction & Styling/01_yousta_beach.jpg',
    tag: 'Digital Curation & Fashion Styling'
  },
  {
    id: 'p3',
    num: '03',
    title: 'Spatial Graphic Design',
    description: "Every design choice must solve a specific problem. In commercial retail, an impactful brand experience relies on the precise alignment of structural fixtures, conceptual layout development, environmental signage, and standardized visual manuals. Every single element is positioned with an exact commercial purpose—never just to fill empty space.",
    subDisciplines: [
      { name: 'Retail Conceptual Design', slug: 'conceptual-design' },
      { name: 'Visual Signage Communication', slug: 'visual-signage' }
    ],
    primarySlug: 'conceptual-design',
    mediaType: 'image',
    mediaSrc: '/portfolio/Conceptual Design & Visual Signage Packdage/CONCEPTUAL DESIGN/1.jpg',
    tag: 'Conceptual Geometry & Signage'
  },
  {
    id: 'p4',
    num: '04',
    title: 'Brand Retail Experiences',
    description: "Designing physical retail activations that transcend traditional layouts. Every concept is engineered to transport clients into an immersive experience that enhances brand DNA and elevates long-term market positioning.",
    subDisciplines: [
      { name: 'Fashion Trade Shows', slug: 'events-exhibitions' },
      { name: 'Press Room Curation', slug: 'events-exhibitions' },
      { name: 'Luxury Lifestyle Events', slug: 'events-exhibitions' }
    ],
    primarySlug: 'events-exhibitions',
    mediaType: 'video',
    mediaSrc: '/portfolio/Events & Brands Exhibition/Bespoke Press Showroom Curation/SET-UP PICS/Final Vero Moda cut.mp4',
    tag: 'Vero Moda Press Showroom & Trade Events'
  }
];

export default function PortfolioHighlights() {
  const containerRef = useRef(null);

  return (
    <section ref={containerRef} className="w-full bg-white text-black py-12 md:py-20 px-6 md:px-12 lg:px-20 border-b border-black/10 relative overflow-hidden" id="portfolio">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[50%] bg-[#0B3175]/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-[1500px] mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col gap-2 mb-8 md:mb-12 border-b border-black/10 pb-5">
          <div className="text-xs md:text-sm font-bold tracking-[0.22em] text-transparent bg-clip-text bg-gradient-to-r from-[#0052FF] via-[#7C3AED] to-[#D946EF] animate-gradient uppercase">
            VISUAL CORE PILLARS
          </div>
          <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight uppercase leading-[1.08] text-black">
            Retail Footprint Transformation
          </h2>
        </div>

        {/* 4 Folders Organisation Grid - Spacious & Clean */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="p-6 md:p-8 rounded-sm md:rounded bg-[#FAF9FB] border border-black/10 hover:border-[#7C3AED]/50 hover:shadow-[0_20px_45px_rgba(124,58,237,0.12)] transition-all duration-500 shadow-xs flex flex-col justify-between group"
            >
              {/* Top Header of Pillar */}
              <div className="flex flex-col gap-3 mb-6">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-[#0052FF] via-[#7C3AED] to-[#D946EF] animate-gradient uppercase">
                    PILLAR {pillar.num}
                  </span>
                  <span className="text-[10px] uppercase font-semibold text-black/50 tracking-wider">
                    {pillar.tag}
                  </span>
                </div>

                <Link to={`/gallery/${pillar.primarySlug}`} className="group/title">
                  <h3 className="font-sans text-xl sm:text-2xl md:text-3xl font-bold tracking-tight uppercase text-black group-hover/title:text-[#7C3AED] transition-colors">
                    {pillar.title}
                  </h3>
                </Link>

                {/* Editorial Narrative Description */}
                <p className="font-sans text-xs md:text-sm font-light text-black/75 leading-relaxed pt-1">
                  {pillar.description}
                </p>

                {/* Sub-disciplines List Pills */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {pillar.subDisciplines.map((sub, sIdx) => (
                    <Link
                      key={sIdx}
                      to={`/gallery/${sub.slug}`}
                      className="px-3 py-1.5 bg-white hover:bg-gradient-to-r hover:from-[#0052FF] hover:via-[#7C3AED] hover:to-[#D946EF] hover:animate-gradient text-neutral-800 hover:text-white border border-black/10 hover:border-transparent rounded-xs text-[11px] font-semibold tracking-wide uppercase transition-all duration-300 shadow-2xs"
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Visual Showcase Media */}
              <Link
                to={`/gallery/${pillar.primarySlug}`}
                className="block relative w-full aspect-[16/10] md:aspect-[16/9.5] overflow-hidden rounded-sm bg-neutral-900 border border-black/10 shadow-sm mt-auto"
              >
                {pillar.mediaType === 'video' ? (
                  <video
                    src={pillar.mediaSrc}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover origin-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                ) : (
                  <img
                    src={pillar.mediaSrc}
                    alt={pillar.title}
                    loading="lazy"
                    className="w-full h-full object-cover origin-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                )}

                {/* Bottom Title Vignette (No top-right arrow button) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 flex items-center justify-between z-10">
                  <span className="font-sans text-xs md:text-sm font-bold text-white uppercase tracking-wider">
                    {pillar.title}
                  </span>
                  <span className="text-[10px] font-mono text-white/90 uppercase tracking-widest bg-black/50 backdrop-blur-md px-3 py-1 rounded-xs border border-white/20">
                    Explore Pillar
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
