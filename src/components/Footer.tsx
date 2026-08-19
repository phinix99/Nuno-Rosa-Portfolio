import { motion } from 'motion/react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#5E27BA] text-white px-6 md:px-12 lg:px-20 py-10 md:py-16" id="contact">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
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
          <div className="flex flex-col gap-1 font-sans text-xs md:text-sm font-semibold tracking-wide uppercase opacity-75 hover:text-black transition-colors">
            <a href="mailto:hello@studio.co">hello@studio.co</a>
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
