import { motion } from 'motion/react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#111] text-[#fdfdfd] px-6 md:px-12 py-12 md:py-24" id="contact">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex flex-col"
        >
          <h2 className="font-sans text-5xl md:text-[8rem] font-medium tracking-tighter uppercase mb-6 md:mb-12 leading-none">
            LET'S TALK
          </h2>
          <div className="flex flex-col gap-2 font-sans text-xs md:text-sm font-semibold tracking-wide uppercase opacity-70 hover:text-[#6B4C9A] transition-colors">
            <a href="mailto:hello@studio.co">hello@studio.co</a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex flex-col md:text-right gap-8"
        >
          <div className="flex flex-col gap-2 font-sans text-xs md:text-sm font-semibold tracking-wide uppercase">
            <a href="#" className="hover:text-[#6B4C9A] transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-[#6B4C9A] transition-colors">Instagram</a>
          </div>
          <div className="font-sans text-[10px] tracking-widest uppercase opacity-40">
            © {new Date().getFullYear()} Studio. All Rights Reserved.
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
