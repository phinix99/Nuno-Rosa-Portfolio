import Hero from '../components/Hero';
import Welcome from '../components/Welcome';
import PortfolioHighlights from '../components/PortfolioHighlights';
import Philosophy from '../components/Philosophy';
import Services from '../components/Services';
import VMCourse from '../components/VMCourse';
import Process from '../components/Process';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="bg-[#fdfdfd] min-h-screen text-[#111] selection:bg-[#111] selection:text-[#fdfdfd] font-sans antialiased overflow-x-hidden">
      <Hero />
      <Welcome />
      <PortfolioHighlights />
      <Philosophy />
      <Services />
      <VMCourse />
      <Process />
      <Testimonials />
      <Footer />
    </main>
  );
}
