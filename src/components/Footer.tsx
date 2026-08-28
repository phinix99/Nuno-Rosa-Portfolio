import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#0B3175] text-white px-5 md:px-10 lg:px-16 py-14 md:py-20 relative overflow-hidden" id="contact">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col"
        >
          <h2 className="font-sans text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter uppercase mb-4 md:mb-6 leading-none">
            LET'S TALK
          </h2>
          <div className="flex flex-col gap-3 font-sans text-xs md:text-sm">
            <p className="font-light text-white/80 max-w-md leading-relaxed">
              Available for global retail visual merchandising direction, masterclasses, and executive consultations.
            </p>
            <a 
              href="#vm-course" 
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm bg-white text-[#0B3175] hover:bg-black hover:text-white font-sans text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-md w-fit group active:scale-[0.98]"
            >
              <span>Get In Touch / Inquire</span>
              <ArrowUpRight size={13} strokeWidth={2.5} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="flex flex-col md:text-right gap-6"
        >
          <div className="flex flex-col gap-1.5 font-sans text-xs md:text-sm font-semibold tracking-wide uppercase">
            <a 
              href="https://www.linkedin.com/in/fashionvisualmerchandising/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-black transition-colors"
            >
              LinkedIn
            </a>
            <a 
              href="https://www.instagram.com/nuno.marques.rosa/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-black transition-colors"
            >
              Instagram
            </a>
          </div>
          <div className="font-sans text-[10px] tracking-widest uppercase opacity-60">
            © {new Date().getFullYear()} NUNO ROSA. ALL RIGHTS RESERVED.
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
