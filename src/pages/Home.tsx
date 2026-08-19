import Hero from '../components/Hero';
import Welcome from '../components/Welcome';
import PortfolioHighlights from '../components/PortfolioHighlights';
import Philosophy from '../components/Philosophy';
import VMCourse from '../components/VMCourse';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="bg-[#fdfdfd] min-h-screen text-[#111] selection:bg-[#111] selection:text-[#fdfdfd] font-sans antialiased overflow-x-hidden">
      <Hero />
      <Welcome />
      <PortfolioHighlights />
      <Philosophy />
      <VMCourse />
      <Testimonials />
      <Footer />
    </main>
  );
}
