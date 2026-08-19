import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
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
      slug: 'creative-windows',
      image: '/portfolio/VISUAL MERCHANDISING/Creative Window Concepts/p.jpg',
      aspect: 'aspect-[4/3]',
      tag: 'Window Concepts'
    },
    {
      id: 'c2',
      title: 'Styling Curation',
      category: 'Digital Visual Merchandising',
      slug: 'e-commerce-styling',
      image: 'https://static.wixstatic.com/media/9e4437_c7516a73c7a74931a566495ddbea2df5~mv2.jpg/v1/fill/w_1463,h_787,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/1180mm%20X%20635mm%20(1)_edited.jpg',
      aspect: 'aspect-[16/10]',
      tag: 'Fashion Curation'
    }
  ],
  col2: [
    {
      id: 'c4',
      title: 'E-Commerce Direction',
      category: 'Digital Visual Merchandising',
      slug: 'e-commerce-styling',
      image: 'https://res.cloudinary.com/dtom0ivbp/image/upload/v1784405512/1_10_sekb5j.jpg',
      aspect: 'aspect-[4/3]',
      tag: 'Art Direction'
    },
    {
      id: 'c5',
      title: 'Retail Conceptual Design',
      category: 'Spatial Graphic Design',
      slug: 'conceptual-design',
      image: 'https://res.cloudinary.com/dtom0ivbp/image/upload/v1784405554/1_217_r3tuuz.jpg',
      aspect: 'aspect-[16/10]',
      tag: 'Spatial Geometry'
    }
  ],
  col3: [
    {
      id: 'c7',
      title: 'Fashion Trade Shows',
      category: 'Brand Retail Experiences',
      slug: 'trade-shows',
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
      aspect: 'aspect-[16/10]',
      tag: 'Guest Speaker'
    }
  ]
};

export default function PortfolioHighlights() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yCol1 = useTransform(scrollYProgress, [0, 1], ["0%", "-4%"]);
  const yCol2 = useTransform(scrollYProgress, [0, 1], ["4%", "-4%"]);
  const yCol3 = useTransform(scrollYProgress, [0, 1], ["0%", "-6%"]);

  const renderCard = (item: CollageItem, index: number) => (
    <motion.div
      key={item.id}
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="group relative w-full"
    >
      <Link 
        to={`/portfolio`}
        className="block relative w-full overflow-hidden rounded-sm md:rounded bg-neutral-100 border border-black/10 shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_15px_35px_rgba(94, 39, 186,0.18)] transition-all duration-500 hover:-translate-y-1"
      >
        <div className={`relative w-full ${item.aspect} overflow-hidden`}>
          <img
            src={item.image}
            alt={item.title}
            loading="lazy"
            className="w-full h-full object-cover origin-center transition-transform duration-700 ease-out group-hover:scale-108"
          />

          {/* Luxury Gradient Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-60 group-hover:opacity-85 transition-opacity duration-500" />
          <div className="absolute inset-0 bg-[#5E27BA]/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay" />

          {/* Floating Category Pill */}
          <div className="absolute top-3 left-3 md:top-4 md:left-4 z-20">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm bg-black/60 backdrop-blur-md border border-white/20 text-white font-sans text-[9px] md:text-[10px] font-semibold tracking-widest uppercase shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#5E27BA]" />
              {item.tag}
            </span>
          </div>

          {/* Action Link Arrow */}
          <div className="absolute top-3 right-3 md:top-4 md:right-4 z-20">
            <div className="w-8 h-8 rounded-sm bg-white/90 backdrop-blur-md text-black flex items-center justify-center shadow-xs transform group-hover:scale-110 group-hover:bg-[#5E27BA] group-hover:text-white transition-all duration-300">
              <ArrowUpRight size={14} />
            </div>
          </div>

          {/* Card Meta Content */}
          <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 z-20 flex flex-col justify-end text-white">
            <span className="font-sans text-[9px] md:text-[10px] font-semibold tracking-[0.2em] uppercase text-white/70 mb-0.5 group-hover:text-[#5E27BA] transition-colors">
              {item.category}
            </span>
            <h3 className="font-sans text-base md:text-xl font-bold tracking-tight text-white leading-tight group-hover:translate-x-1 transition-transform duration-300">
              {item.title}
            </h3>
          </div>
        </div>
      </Link>
    </motion.div>
  );

  return (
    <section ref={containerRef} className="w-full bg-white text-black py-10 md:py-16 px-6 md:px-12 lg:px-20 border-b border-black/10 relative overflow-hidden" id="portfolio">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[50%] bg-[#5E27BA]/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-[1500px] mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 md:mb-8 border-b border-black/10 pb-4">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-[#5E27BA] uppercase">
              <Sparkles size={13} /> PORTFOLIO ARCHIVES
            </div>
            <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight uppercase leading-[1.08] text-black">
              CREATIVE DISCIPLINES
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/portfolio"
              className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-sm border border-black/15 bg-white text-black hover:bg-[#5E27BA] hover:text-white hover:border-[#5E27BA] transition-all duration-300 text-xs font-bold tracking-widest uppercase shadow-xs"
            >
              <span>Explore All Archives</span>
              <ArrowUpRight size={14} className="text-black group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
            </Link>
          </div>
        </div>

        {/* Compact Parallax Collage Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 items-start">
          
          <motion.div style={{ y: yCol1 }} className="flex flex-col gap-4 md:gap-6">
            {collageItems.col1.map((item, idx) => renderCard(item, idx))}
          </motion.div>

          <motion.div style={{ y: yCol2 }} className="flex flex-col gap-4 md:gap-6">
            {collageItems.col2.map((item, idx) => renderCard(item, idx))}
          </motion.div>

          <motion.div style={{ y: yCol3 }} className="flex flex-col gap-4 md:gap-6 md:col-span-2 lg:col-span-1">
            {collageItems.col3.map((item, idx) => renderCard(item, idx))}
          </motion.div>

        </div>

      </div>
    </section>
  );
}
