import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

const services = [
  {
    id: '01',
    title: 'VISUAL STRATEGY',
    content: 'We define the visual compass for your brand. From foundational layout principles to evocative typography and material selection, we ensure every touchpoint communicates a cohesive and compelling story.',
    tags: ['Visual direction', 'Type rules']
  },
  {
    id: '02',
    title: 'EXPERIENTIAL IDENTITY',
    content: 'We build brand identities that command presence. Blending deep strategic insight with refined execution, we design aesthetic frameworks that translate seamlessly from digital to physical spaces.',
    tags: ['Brand guidelines', 'Logo design']
  },
  {
    id: '03',
    title: 'SPATIAL ARCHITECTURE',
    content: 'We architect physical retail and exhibition environments that transform abstract brand concepts into visceral, immersive experiences. Every volume, texture, and light source is engineered for impact.',
    tags: ['Retail spaces', 'Exhibition']
  },
  {
    id: '04',
    title: 'OMNICHANNEL INTEGRATION',
    content: 'Bridging the gap between physical retail and digital commerce. We prioritize performance, accessibility, and modern aesthetics to ensure a unified and powerful brand presence across all mediums.',
    tags: ['Web design', 'Development']
  }
];

export default function Services() {
  const [openService, setOpenService] = useState<string | null>('01');

  const toggleService = (id: string) => {
    setOpenService(openService === id ? null : id);
  };

  return (
    <section className="w-full bg-[#fdfdfd] py-24 md:py-32 px-6 md:px-12 border-b border-[#111]/10">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between md:items-start gap-8 mb-16 lg:mb-24">
          <h2 className="font-sans text-5xl md:text-[8rem] font-medium tracking-tighter uppercase leading-none text-[#111]">
            SERVICES<sup className="text-xl md:text-3xl ml-2 font-medium">(4)</sup>
          </h2>
          <div className="font-sans text-base md:text-lg font-light tracking-tight text-[#111] max-w-sm md:mt-4 leading-snug">
            We work across art direction, spatial design, brand identity, and immersive digital experiences.
          </div>
        </div>

        {/* Feature Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="w-full aspect-[21/9] md:aspect-[3/1] rounded-2xl overflow-hidden mb-16 md:mb-32 bg-[#fdfdfd]"
        >
          <iframe 
            width="100%" 
            height="100%" 
            src="https://embed.wix.com/video?instanceId=d7c7249b-fc0f-4bc5-a383-045b6f6b0fbc&biToken=78f7dbaf-e72c-0e84-3d14-ab5b13a6661a&pathToPage=%2Fcopy-of-creative-window-concept-designs-4&channelId=af30ff34-1b23-4541-9e97-af007ccd69a6&videoId=d485dae013864b8888be65a9320c0f7f&compId=comp-mp8q446t&sitePageId=s6q0o&autoplay=true&loop=true&muted=true&mute=true&background=true" 
            frameBorder="0" 
            allow="autoplay; fullscreen"
            allowFullScreen
            title="Service Video"
          />
        </motion.div>
        
        {/* Services Accordion */}
        <div className="flex flex-col border-t border-[#111]/10">
          {services.map((service, idx) => {
            const isOpen = openService === service.id;
            return (
              <div key={service.id} className="border-b border-[#111]/10">
                <button 
                  onClick={() => toggleService(service.id)}
                  className={`w-full flex items-center justify-between py-8 md:py-12 text-left group transition-colors duration-300 ${isOpen ? 'text-[#6B4C9A]' : 'hover:text-[#6B4C9A]'}`}
                >
                  <div className="flex items-center gap-12 md:gap-32 w-full">
                    <span className="font-sans text-xs font-semibold tracking-wide uppercase opacity-50 shrink-0 w-8 group-hover:opacity-100">
                      {service.id}
                    </span>
                    <h3 className="font-sans text-2xl md:text-4xl font-medium tracking-tight">
                      {service.title}
                    </h3>
                  </div>
                  <div className="relative w-4 h-4 shrink-0 flex items-center justify-center">
                    <span className={`absolute w-full h-[2px] transition-colors duration-300 ${isOpen ? 'bg-[#6B4C9A]' : 'bg-[#111] group-hover:bg-[#6B4C9A]'}`}></span>
                    <motion.span 
                      animate={{ rotate: isOpen ? 0 : 90 }}
                      className={`absolute w-full h-[2px] transition-colors duration-300 ${isOpen ? 'bg-[#6B4C9A]' : 'bg-[#111] group-hover:bg-[#6B4C9A]'}`}
                    />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="flex flex-col md:flex-row gap-8 pb-12 pl-[4.5rem] md:pl-[10.5rem]">
                        <div className="w-full md:w-1/3 flex flex-col gap-2 font-sans text-sm text-[#111]/70">
                          {service.tags.map(tag => (
                            <span key={tag}>{tag}</span>
                          ))}
                        </div>
                        <div className="w-full md:w-2/3 max-w-2xl font-sans text-base md:text-lg font-light leading-relaxed text-[#111]/80">
                          {service.content}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
