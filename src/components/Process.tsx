import { motion } from 'motion/react';

const steps = [
  {
    id: "01",
    title: "DISCOVER",
    desc: "Understanding your challenge, your audience, and what success looks like for you.",
    percent: "25%",
    image: null
  },
  {
    id: "02",
    title: "DESIGN",
    desc: "Ideas take shape. We explore directions, test concepts, and refine until it feels right.",
    percent: "50%",
    image: "https://res.cloudinary.com/dtom0ivbp/image/upload/v1784405554/1_217_r3tuuz.jpg"
  },
  {
    id: "03",
    title: "BUILD",
    desc: "We develop the final product with attention to every detail and technical precision.",
    percent: "75%",
    image: null
  },
  {
    id: "04",
    title: "LAUNCH",
    desc: "We manage the launch, provide training if needed, and ensure a smooth transition.",
    percent: "100%",
    image: null
  }
];

export default function Process() {
  return (
    <section className="w-full bg-[#6B4C9A] py-24 md:py-32 px-6 md:px-12 border-b border-[#111]/10 text-[#fdfdfd]" id="process">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between md:items-start gap-8 mb-16 lg:mb-24">
          <h2 className="font-sans text-[12vw] md:text-[8rem] font-medium tracking-tighter uppercase leading-none text-[#fdfdfd]">
            FLOW
          </h2>
          <div className="font-sans text-base md:text-lg font-light tracking-tight text-[#fdfdfd]/90 max-w-sm md:mt-4 leading-snug">
            Our process for turning ideas into real, working solutions that deliver amazing results.
          </div>
        </div>

        <div className="flex justify-between font-sans text-xs font-semibold tracking-wide uppercase opacity-70 mb-8 border-b border-[#fdfdfd]/20 pb-4">
          <span>PROCESS: 4 STEPS</span>
          <span>DURATION: ~ 1 MONTH</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-x-0 border-t border-[#fdfdfd]/20 pt-16 relative">
          {steps.map((step, idx) => (
            <motion.div 
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`flex flex-col h-full border-[#fdfdfd]/20 pb-16 md:pb-0 hover:bg-white/5 transition-colors duration-300 p-6 rounded-2xl ${idx !== 3 ? 'md:border-r md:pr-8' : ''} ${idx !== 0 ? 'md:pl-8 mt-12 md:mt-0' : ''}`}
            >
              <div className="flex flex-col justify-between h-[300px] md:h-[400px]">
                <div>
                  {step.image && (
                    <img src={step.image} alt={step.title} className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-xl mb-6 filter grayscale mix-blend-multiply opacity-80" />
                  )}
                  <h3 className="font-sans text-2xl md:text-3xl font-medium tracking-tight mb-4">{step.title}</h3>
                  <p className="font-sans text-sm md:text-base font-light text-[#fdfdfd]/80 leading-relaxed pr-4">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-8">
                  <span className="font-sans text-[10px] font-semibold tracking-wider uppercase mb-2 block">{step.percent}</span>
                  <div className="w-full h-[3px] bg-[#6B4C9A]/20 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: step.percent }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 + idx * 0.1, ease: "easeOut" }}
                      className="h-full bg-[#6B4C9A]"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
