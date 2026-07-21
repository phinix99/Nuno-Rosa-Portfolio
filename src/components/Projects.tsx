import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

const projects = [
  {
    id: 1,
    title: "Summer Collection '23",
    category: "Creative Window Concepts",
    image: "https://res.cloudinary.com/dtom0ivbp/image/upload/v1784662099/1_78_tfobxr.avif",
  },
  {
    id: 2,
    title: "Musical Symphony",
    category: "Aesthetic Pop-Up Architecture",
    image: "https://static.wixstatic.com/media/9e4437_31a5b991f9744ab8ae644c77c80f76e7~mv2.jpg/v1/crop/x_0,y_193,w_960,h_550/fill/w_787,h_451,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/44319782_2298070196932583_2427615974984253440_n.jpg",
  },
  {
    id: 3,
    title: "Beachfront Campaign",
    category: "Fashion Editorial Styling",
    image: "https://static.wixstatic.com/media/9e4437_c7516a73c7a74931a566495ddbea2df5~mv2.jpg/v1/fill/w_1463,h_787,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/1180mm%20X%20635mm%20(1)_edited.jpg",
  },
  {
    id: 4,
    title: "Jack & Jones Booth",
    category: "Experiential Trade Architecture",
    image: "https://static.wixstatic.com/media/9e4437_9eb9fa8391e94b34896eb1060b8066dc~mv2.jpg/v1/crop/x_294,y_374,w_3563,h_2341/fill/w_1049,h_689,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/IMG_20220816_064620.jpg",
  },
  {
    id: 5,
    title: "In-Store Setup",
    category: "Bespoke Visual Merchandising",
    image: "https://res.cloudinary.com/dtom0ivbp/image/upload/v1784405524/1_75_wvwlye.jpg",
  },
  {
    id: 6,
    title: "Bell & Ross",
    category: "Luxury Lifestyle Events",
    image: "https://res.cloudinary.com/dtom0ivbp/image/upload/v1784405512/1_10_sekb5j.jpg",
  },
  {
    id: 7,
    title: "Vogue Retail Summit",
    category: "Press & Guest Speaker Events",
    image: "https://res.cloudinary.com/dtom0ivbp/image/upload/v1784405555/1_224_yf8cfh.jpg",
  },
  {
    id: 8,
    title: "Minimalist Geometry",
    category: "Conceptual Spatial Design",
    image: "https://res.cloudinary.com/dtom0ivbp/image/upload/v1784405554/1_217_r3tuuz.jpg",
  }
];

export default function Projects() {
  const featuredRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: featuredRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section className="w-full bg-[#fdfdfd] pt-24 md:pt-32 pb-24 md:pb-32 border-b border-[#111]/10 px-6 md:px-12 lg:px-20" id="projects">
      <div className="max-w-[1400px] mx-auto flex flex-col gap-12">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-1.5 text-xs font-bold tracking-widest text-[#6B4C9A] uppercase">
            SELECTED WORKS
          </div>
          <h2 className="font-sans text-[10vw] md:text-[6vw] leading-[0.9] font-medium tracking-tighter uppercase text-[#111]">
            CREATIVE PORTFOLIO
          </h2>
        </div>
        
        <div className="w-full overflow-x-auto no-scrollbar pb-8 cursor-grab active:cursor-grabbing snap-x snap-mandatory">
          <div className="flex gap-4 md:gap-6 w-max">
            {projects.map((proj, idx) => (
              <motion.div 
                key={proj.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="w-[85vw] md:w-[450px] lg:w-[500px] shrink-0 snap-center md:snap-start relative group flex flex-col gap-4 p-4 rounded-[24px] hover:bg-[#fdfdfd]/80 transition-colors duration-500"
              >
                <div className="w-full aspect-[3/2] rounded-[16px] overflow-hidden bg-[#fdfdfd] relative border border-[#111]/10">
                  <img 
                    src={proj.image} 
                    alt={proj.title}
                    className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-neutral-950/5 pointer-events-none transition-colors duration-700 group-hover:bg-[#fdfdfd]/20 mix-blend-overlay" />
                </div>
                <div className="flex flex-col gap-1.5 px-1">
                  <h3 className="font-sans text-xl md:text-2xl font-medium tracking-tight text-[#111]">{proj.title}</h3>
                  <span className="font-sans text-[10px] font-bold tracking-widest uppercase text-[#6B4C9A]">{proj.category}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Highlighted Section */}
        <div className="mt-12 md:mt-16" ref={featuredRef}>
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="w-full md:max-w-[850px] aspect-[4/3] md:aspect-[16/10] rounded-[20px] overflow-hidden relative group border border-[#111]/10 shadow-[0_8px_30px_rgb(0,0,0,0.02)]"
          >
            <motion.img 
              style={{ y, scale: 1.15 }}
              src="https://static.wixstatic.com/media/9e4437_590cee324ec8484980dce6346f6d9664~mv2.jpg/v1/fill/w_1181,h_787,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/_MG_0064_edited.jpg"
              alt="Bell & Ross Luxury Events Campaign"
              className="w-full h-full object-cover origin-center transition-transform duration-[2s] ease-out group-hover:scale-[1.2]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/20 to-transparent flex flex-col justify-end p-8 md:p-12 text-[#fdfdfd] z-10 transition-colors duration-700 group-hover:from-[#6B4C9A]/90 group-hover:via-[#6B4C9A]/20">
              <span className="font-sans text-xs font-semibold tracking-widest uppercase text-[#fdfdfd] mb-2">FEATURED SHOWCASE</span>
              <h3 className="font-sans text-3xl md:text-5xl font-medium tracking-tight mb-3">Bell & Ross</h3>
              <span className="font-sans text-xs md:text-sm font-semibold tracking-widest uppercase opacity-90 text-neutral-200">Luxury Lifestyle Events</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
