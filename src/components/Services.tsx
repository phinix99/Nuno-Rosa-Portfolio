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
    <section className="w-full bg-[#fdfdfd] py-24 md:py-32 px-6 md:px-12 lg:px-20 border-b border-[#111]/10">
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

        {/* Minimal Line-Art Laptop Frame Video Showcase */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-[1100px] mx-auto mb-20 md:mb-32 flex flex-col items-center group relative px-2 sm:px-4"
        >
          {/* Ambient Purple Soft Glow Behind Laptop */}
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-3/4 h-3/4 bg-[#6B4C9A]/10 blur-[100px] rounded-full pointer-events-none z-0" />

          {/* Laptop Lid (Screen & Bezel) */}
          <div className="relative w-full aspect-[16/9.5] sm:aspect-[16/9.5] rounded-t-[18px] sm:rounded-t-[24px] md:rounded-t-[28px] p-2.5 sm:p-3.5 md:p-4 bg-[#141414] border-[3px] border-[#282828] shadow-[0_25px_60px_rgba(0,0,0,0.18)] overflow-hidden z-10">
            
            {/* Camera Notch / Camera Dot */}
            <div className="absolute top-1.5 sm:top-2 left-1/2 -translate-x-1/2 flex items-center justify-center z-20">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#090909] rounded-full border border-neutral-700/60" />
            </div>

            {/* Laptop Inner Screen */}
            <div className="w-full h-full rounded-lg sm:rounded-xl overflow-hidden bg-black relative pointer-events-none">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://embed.wix.com/video?instanceId=d7c7249b-fc0f-4bc5-a383-045b6f6b0fbc&biToken=78f7dbaf-e72c-0e84-3d14-ab5b13a6661a&pathToPage=%2Fcopy-of-creative-window-concept-designs-4&channelId=af30ff34-1b23-4541-9e97-af007ccd69a6&videoId=d485dae013864b8888be65a9320c0f7f&compId=comp-mp8q446t&sitePageId=s6q0o&autoplay=true&loop=true&muted=true&mute=true&background=true" 
                frameBorder="0" 
                allow="autoplay; fullscreen"
                allowFullScreen
                title="Service Showcase Video"
                className="w-full h-full object-cover scale-[1.25] origin-center"
              />
              {/* Screen Gloss Reflection */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Laptop Base (Hinge & Keyboard Deck Line-Art) */}
          <div className="relative w-[104%] max-w-[1140px] z-10">
            {/* Top Hinge Bar */}
            <div className="w-full h-2.5 sm:h-3 md:h-3.5 bg-neutral-300 rounded-b-sm border-t border-neutral-400/60 flex items-center justify-center relative shadow-sm">
              {/* Thumb Notch */}
              <div className="w-16 sm:w-24 md:w-28 h-1 sm:h-1.5 bg-neutral-400/80 rounded-b-md" />
            </div>
            
            {/* Laptop Lower Chassis Base */}
            <div className="w-[102%] -ml-[1%] h-2.5 sm:h-3 md:h-4 bg-gradient-to-b from-neutral-200 to-neutral-300 rounded-b-[12px] sm:rounded-b-[16px] md:rounded-b-[20px] border-b-2 border-neutral-400/80 shadow-[0_15px_30px_rgba(0,0,0,0.12)] flex items-center justify-center">
              {/* Rubber Foot Notch Accent */}
              <div className="w-20 sm:w-28 md:w-36 h-[2px] bg-neutral-400/70 rounded-full" />
            </div>
          </div>

          {/* Ambient Floor Shadow */}
          <div className="w-[88%] h-4 sm:h-6 bg-black/15 blur-md rounded-[100%] mt-1 pointer-events-none z-0" />
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
