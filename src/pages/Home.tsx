import { motion, useScroll, useSpring } from 'motion/react';
import Hero from '../components/Hero';
import RetailAchievements from '../components/RetailAchievements';
import Welcome from '../components/Welcome';
import PortfolioHighlights from '../components/PortfolioHighlights';
import Philosophy from '../components/Philosophy';
import VMCourse from '../components/VMCourse';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <main className="bg-[#fdfdfd] min-h-screen text-[#111] selection:bg-[#0B3175] selection:text-white font-sans antialiased overflow-x-hidden relative">
      {/* Luxury Hairline Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-[#0B3175] origin-left z-50 pointer-events-none"
        style={{ scaleX }}
      />

      <Hero />
      <RetailAchievements />
      <Welcome />
      <PortfolioHighlights />
      <Philosophy />
      <VMCourse />
      <Testimonials />
      <Footer />
    </main>
  );
}
