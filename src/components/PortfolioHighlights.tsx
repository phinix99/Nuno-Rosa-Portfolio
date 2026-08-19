import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowUpRight, Sparkles, Layers, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CollageItem {
  id: string;
  title: string;
  category: string;
  slug: string;
  image: string;
  aspect: string;
  tag: string;
}

const collageItems: { col1: CollageItem[]; col2: CollageItem[]; col3: CollageItem[] } = {
  col1: [
    {
      id: 'c1',
      title: 'Bespoke Windows Concepts',
      category: 'Creative Visual Storytelling',
      slug: 'visual-merchandising',
      image: 'https://res.cloudinary.com/dtom0ivbp/image/upload/v1784662099/1_78_tfobxr.avif',
      aspect: 'aspect-[3/4]',
      tag: 'Window Concepts'
    },
    {
      id: 'c2',
      title: 'Styling Curation',
      category: 'Digital Visual Merchandising',
      slug: 'e-commerce-styling',
      image: 'https://static.wixstatic.com/media/9e4437_c7516a73c7a74931a566495ddbea2df5~mv2.jpg/v1/fill/w_1463,h_787,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/1180mm%20X%20635mm%20(1)_edited.jpg',
      aspect: 'aspect-[4/3]',
      tag: 'Fashion Curation'
    },
    {
      id: 'c3',
      title: 'Luxury Lifestyle Events',
      category: 'Brand Retail Experiences',
      slug: 'events-exhibition',
      image: 'https://static.wixstatic.com/media/9e4437_590cee324ec8484980dce6346f6d9664~mv2.jpg/v1/fill/w_1181,h_787,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/_MG_0064_edited.jpg',
      aspect: 'aspect-[3/4]',
      tag: 'Brand Activation'
    }
  ],
  col2: [
    {
      id: 'c4',
      title: 'E-Commerce Direction',
      category: 'Digital Visual Merchandising',
      slug: 'e-commerce-styling',
      image: 'https://res.cloudinary.com/dtom0ivbp/image/upload/v1784405512/1_10_sekb5j.jpg',
      aspect: 'aspect-[4/5]',
      tag: 'Art Direction'
    },
    {
      id: 'c5',
      title: 'Retail Conceptual Design',
      category: 'Spatial Graphic Design',
      slug: 'concept-signage',
      image: 'https://res.cloudinary.com/dtom0ivbp/image/upload/v1784405554/1_217_r3tuuz.jpg',
      aspect: 'aspect-[16/10]',
      tag: 'Spatial Geometry'
    },
    {
      id: 'c6',
      title: 'In-Store Product Display',
      category: 'Creative Visual Storytelling',
      slug: 'visual-merchandising',
      image: 'https://res.cloudinary.com/dtom0ivbp/image/upload/v1784405524/1_75_wvwlye.jpg',
      aspect: 'aspect-[4/3]',
      tag: 'Retail Environment'
    }
  ],
  col3: [
    {
      id: 'c7',
      title: 'Fashion Trade Shows',
      category: 'Brand Retail Experiences',
      slug: 'events-exhibition',
      image: 'https://static.wixstatic.com/media/9e4437_9eb9fa8391e94b34896eb1060b8066dc~mv2.jpg/v1/crop/x_294,y_374,w_3563,h_2341/fill/w_1049,h_689,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/IMG_20220816_064620.jpg',
      aspect: 'aspect-[4/3]',
      tag: 'Expo Architecture'
    },
    {
      id: 'c8',
      title: 'Keynote & Industry Panels',
      category: 'Press & Guest Speaker',
      slug: 'press-speaker',
      image: 'https://static.wixstatic.com/media/9e4437_0b022f9ff7e645fbacc6aa8a6e68dbe0~mv2.jpg/v1/crop/x_304,y_805,w_3588,h_5915/fill/w_477,h_787,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/SKPL8757_JPG.jpg',
      aspect: 'aspect-[3/4]',
      tag: 'Guest Speaker'
    },
    {
      id: 'c9',
      title: 'Limited-Edition Launches',
      category: 'Creative Visual Storytelling',
      slug: 'visual-merchandising',
      image: 'https://static.wixstatic.com/media/9e4437_31a5b991f9744ab8ae644c77c80f76e7~mv2.jpg/v1/crop/x_0,y_193,w_960,h_550/fill/w_787,h_451,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/44319782_2298070196932583_2427615974984253440_n.jpg',
      aspect: 'aspect-[16/10]',
      tag: 'Luxury Boutique'
    }
  ]
};

export default function PortfolioHighlights() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  // Parallax translation offsets for columns
  const yCol1 = useTransform(scrollYProgress, [0, 1], [40, -60]);
  const yCol2 = useTransform(scrollYProgress, [0, 1], [-20, 50]);
  const yCol3 = useTransform(scrollYProgress, [0, 1], [60, -40]);

  const renderCard = (item: CollageItem, index: number) => (
    <motion.div
      key={item.id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      className="group relative w-full overflow-hidden rounded-2xl md:rounded-3xl border border-black/10 bg-neutral-900 transition-all duration-500 hover:border-[#7651B9] hover:shadow-[0_25px_50px_rgba(118,81,185,0.2)]"
    >
      <Link to={`/gallery/${item.slug}`} className="block relative w-full h-full">
        {/* Image Container with aspect ratio */}
        <div className={`relative w-full ${item.aspect} overflow-hidden`}>
          <img
            src={item.image}
            alt={item.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
          />
          {/* Subtle Ambient Vignette & Purple Tint on Hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500 group-hover:opacity-90" />
          <div className="absolute inset-0 bg-[#7651B9]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay" />
        </div>

        {/* Top Floating Badge */}
        <div className="absolute top-4 left-4 right-4 z-10 flex items-center justify-between">
          <span className="px-3 py-1 text-[10px] md:text-xs font-mono font-bold tracking-widest uppercase text-white/90 bg-black/40 backdrop-blur-md border border-white/20 rounded-full shadow-sm">
            {item.tag}
          </span>
          <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white transition-all duration-300 group-hover:bg-[#7651B9] group-hover:border-[#7651B9] group-hover:scale-110 shadow-md">
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
        </div>

        {/* Bottom Content Bar */}
        <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 z-10 flex flex-col gap-1.5 transition-transform duration-300 group-hover:-translate-y-1">
          <span className="text-[11px] font-sans font-semibold tracking-wider uppercase text-[#7651B9] group-hover:text-purple-300 transition-colors">
            {item.category}
          </span>
          <h4 className="text-base md:text-xl font-medium tracking-tight text-white font-sans drop-shadow-sm">
            {item.title}
          </h4>
        </div>
      </Link>
    </motion.div>
  );

  return (
    <section 
      ref={containerRef}
      className="w-full bg-white pt-20 md:pt-28 pb-24 md:pb-36 border-b border-black/10 px-6 md:px-12 lg:px-20 overflow-hidden" 
      id="portfolio"
    >
      <div className="max-w-[1400px] mx-auto flex flex-col gap-12 md:gap-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-black/10 pb-10">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-[#7651B9] uppercase">
              <Sparkles size={14} /> PORTFOLIO
            </div>
            <h2 className="font-sans text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight uppercase text-black max-w-2xl leading-[1.05]">
              CREATIVE DISCIPLINE ARCHIVES
            </h2>
            <p className="font-sans text-base md:text-lg font-light text-black/70 max-w-xl leading-relaxed mt-1">
              A comprehensive curation of retail window displays, editorial styling, spatial exhibition architectures, and keynote speaking engagements worldwide.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Link 
              to="/portfolio" 
              className="group relative flex items-center justify-center gap-3 px-8 py-4 rounded-full border border-black/20 hover:border-[#7651B9] bg-white hover:bg-[#7651B9] transition-all duration-300 shadow-sm hover:shadow-lg"
            >
              <span className="text-xs font-bold tracking-widest uppercase text-black group-hover:text-white transition-colors">
                EXPLORE FULL PORTFOLIO
              </span>
              <ArrowUpRight size={16} className="text-black group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
            </Link>
          </div>
        </div>

        {/* Interactive Parallax Collage Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-start pt-4">
          
          {/* Column 1 with smooth parallax */}
          <motion.div style={{ y: yCol1 }} className="flex flex-col gap-6 md:gap-8">
            {collageItems.col1.map((item, idx) => renderCard(item, idx))}
          </motion.div>

          {/* Column 2 with inverse parallax */}
          <motion.div style={{ y: yCol2 }} className="flex flex-col gap-6 md:gap-8">
            {collageItems.col2.map((item, idx) => renderCard(item, idx))}
          </motion.div>

          {/* Column 3 with delayed parallax */}
          <motion.div style={{ y: yCol3 }} className="flex flex-col gap-6 md:gap-8 md:col-span-2 lg:col-span-1">
            {collageItems.col3.map((item, idx) => renderCard(item, idx))}
          </motion.div>

        </div>

        {/* Bottom Interactive Discovery Callout */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-6 p-8 md:p-10 rounded-2xl md:rounded-3xl bg-[#FAF9FB] border border-[#7651B9]/20 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[inset_0_0_30px_rgba(118,81,185,0.03)]"
        >
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-12 h-12 rounded-2xl bg-[#7651B9]/10 text-[#7651B9] flex items-center justify-center shrink-0">
              <Layers size={22} />
            </div>
            <div>
              <h4 className="font-sans text-lg md:text-xl font-medium text-black">
                300+ Spatial Installations & Global Campaigns
              </h4>
              <p className="font-sans text-xs md:text-sm font-light text-black/60 mt-0.5">
                Browse detailed case studies, client commissions, and high-resolution galleries.
              </p>
            </div>
          </div>

          <Link
            to="/portfolio"
            className="shrink-0 flex items-center gap-2 px-6 py-3 rounded-full bg-[#7651B9] hover:bg-black text-white text-xs font-bold tracking-widest uppercase transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            <Eye size={14} /> Open Archive
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
