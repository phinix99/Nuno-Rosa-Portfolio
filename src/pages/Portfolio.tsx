import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';

const portfolioData = [
  {
    category: "VISUAL MERCHANDISING",
    slug: "visual-merchandising",
    items: [
      { title: "Creative Windows", image: "https://static.wixstatic.com/media/9e4437_b1d6e14a69774452990aa064af82b819~mv2.jpg/v1/crop/x_0,y_151,w_2978,h_3558/fill/w_660,h_710,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_20220509_111042.jpg" },
      { title: "In-Store Displays", image: "https://res.cloudinary.com/dtom0ivbp/image/upload/v1784405524/1_75_wvwlye.jpg" },
      { title: "Limited Editions", image: "https://static.wixstatic.com/media/9e4437_31a5b991f9744ab8ae644c77c80f76e7~mv2.jpg/v1/crop/x_0,y_193,w_960,h_550/fill/w_787,h_451,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/44319782_2298070196932583_2427615974984253440_n.jpg" }
    ]
  },
  {
    category: "E-COMMERCE & STYLING",
    slug: "e-commerce-styling",
    items: [
      { title: "Fashion Styling", image: "https://static.wixstatic.com/media/9e4437_c7516a73c7a74931a566495ddbea2df5~mv2.jpg/v1/fill/w_1463,h_787,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/1180mm%20X%20635mm%20(1)_edited.jpg" },
      { title: "Editorial Lookbook", image: "https://static.wixstatic.com/media/9e4437_590cee324ec8484980dce6346f6d9664~mv2.jpg/v1/fill/w_1181,h_787,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/_MG_0064_edited.jpg" },
      { title: "Product Focus", image: "https://res.cloudinary.com/dtom0ivbp/image/upload/v1784405512/1_10_sekb5j.jpg" }
    ]
  },
  {
    category: "CONCEPT & SIGNAGE",
    slug: "concept-signage",
    items: [
      { title: "Conceptual Design", image: "https://res.cloudinary.com/dtom0ivbp/image/upload/v1784405554/1_217_r3tuuz.jpg" },
      { title: "Visual Signage", image: "https://static.wixstatic.com/media/9e4437_590cee324ec8484980dce6346f6d9664~mv2.jpg/v1/fill/w_1181,h_787,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/_MG_0064_edited.jpg" }
    ]
  },
  {
    category: "EVENTS & BRAND EXHIBITION",
    slug: "events-exhibition",
    items: [
      { title: "Trade Shows", image: "https://static.wixstatic.com/media/9e4437_9eb9fa8391e94b34896eb1060b8066dc~mv2.jpg/v1/crop/x_294,y_374,w_3563,h_2341/fill/w_1049,h_689,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/IMG_20220816_064620.jpg" },
      { title: "Press Showroom Curation", image: "https://res.cloudinary.com/dtom0ivbp/image/upload/v1784405555/1_224_yf8cfh.jpg" },
      { title: "Luxury Events", image: "https://static.wixstatic.com/media/9e4437_590cee324ec8484980dce6346f6d9664~mv2.jpg/v1/fill/w_1181,h_787,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/_MG_0064_edited.jpg" }
    ]
  },
  {
    category: "PRESS & GUEST SPEAKER",
    slug: "press-speaker",
    items: [
      { title: "Keynote Panels", image: "https://static.wixstatic.com/media/9e4437_0b022f9ff7e645fbacc6aa8a6e68dbe0~mv2.jpg/v1/crop/x_304,y_805,w_3588,h_5915/fill/w_477,h_787,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/SKPL8757_JPG.jpg" },
      { title: "Interviews", image: "https://res.cloudinary.com/dtom0ivbp/image/upload/v1784405555/1_224_yf8cfh.jpg" },
      { title: "Public Engagements", image: "https://static.wixstatic.com/media/9e4437_c7516a73c7a74931a566495ddbea2df5~mv2.jpg/v1/fill/w_1463,h_787,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/1180mm%20X%20635mm%20(1)_edited.jpg" }
    ]
  }
];

export default function Portfolio() {
  const { category } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (category) {
      const el = document.getElementById(category);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [category]);

  return (
    <main className="bg-[#fdfdfd] min-h-screen text-[#111] font-sans antialiased overflow-x-hidden">
      {/* Navbar Minimal */}
      <nav className="w-full px-6 md:px-12 py-6 border-b border-[#111]/10 flex justify-between items-center sticky top-0 bg-[#fdfdfd]/80 backdrop-blur-md z-50">
        <Link to="/" className="flex items-center gap-2 font-bold tracking-tight text-xl uppercase hover:opacity-70 transition-opacity">
          <ArrowLeft size={16} /> NUNO ROSA
        </Link>
        <div className="hidden lg:flex items-center gap-6 font-sans text-[10px] font-bold tracking-widest uppercase">
          <Link to="/" className="hover:text-[#6B4C9A] transition-colors">
            WELCOME
          </Link>
          {portfolioData.map((section, idx) => (
            <a 
              key={idx} 
              href={`#${section.slug}`}
              className="hover:text-[#6B4C9A] transition-colors"
            >
              {section.category}
            </a>
          ))}
        </div>
      </nav>

      {/* Portfolio Content */}
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-20 flex flex-col gap-32">
        {portfolioData.map((section, idx) => (
          <section key={idx} id={section.slug} className="flex flex-col gap-10">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-sans text-4xl md:text-6xl font-medium tracking-tight uppercase"
            >
              {section.category}
            </motion.h2>

            {/* Black border container like in the video */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`border-[12px] md:border-[24px] border-[#111] p-2 md:p-4 grid grid-cols-1 gap-2 md:gap-4 bg-[#fdfdfd] ${
                section.items.length === 2 ? 'md:grid-cols-2 lg:grid-cols-2' : 'md:grid-cols-2 lg:grid-cols-3'
              }`}
            >
              {section.items.map((item, i) => (
                <div key={i} className="w-full aspect-[4/3] md:aspect-square relative group overflow-hidden bg-neutral-100">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-[#111]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <span className="bg-[#fdfdfd] text-[#111] px-6 py-2 rounded-full font-bold tracking-widest uppercase text-xs shadow-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      {item.title}
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>
          </section>
        ))}
      </div>
      
      {/* Simple Footer */}
      <footer className="w-full py-12 border-t border-[#111]/10 text-center font-sans text-xs tracking-wider uppercase text-[#111]/60">
        © {new Date().getFullYear()} NUNO ROSA. ALL RIGHTS RESERVED.
      </footer>
    </main>
  );
}
