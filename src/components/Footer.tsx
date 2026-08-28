import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-br from-[#05112E] via-[#160B33] to-[#2E0847] text-white px-6 md:px-12 lg:px-20 py-12 md:py-18 relative overflow-hidden" id="contact">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-[#0052FF]/35 to-[#D946EF]/30 blur-[130px] rounded-full pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-[#7C3AED]/35 to-[#0052FF]/30 blur-[130px] rounded-full pointer-events-none animate-pulse-glow" style={{ animationDelay: '3.5s' }} />
      <div className="max-w-[1500px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col"
        >
          <h2 className="font-sans text-5xl md:text-[6.5rem] font-medium tracking-tighter uppercase mb-4 md:mb-6 leading-none">
            LET'S TALK
          </h2>
          <div className="flex flex-col gap-3 font-sans text-xs md:text-sm">
            <p className="font-light text-white/80 max-w-md leading-relaxed">
              Available for global retail visual merchandising direction, masterclasses, and executive consultations.
            </p>
            <a 
              href="#vm-course" 
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm bg-white text-black hover:bg-gradient-to-r hover:from-[#0052FF] hover:via-[#7C3AED] hover:to-[#D946EF] hover:animate-gradient hover:text-white font-sans text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-[0_8px_25px_rgba(124,58,237,0.4)] w-fit group active:scale-[0.98]"
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
