import { useEffect, useState } from "react";
import Lenis from "lenis";
import BgCanvas from "@/components/BgCanvas";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import Calculator from "@/components/Calculator";
import Footer from "@/components/Footer";
import FormModal from "@/components/FormModal";

export default function App() {
  const [formOpen, setFormOpen] = useState(false);

  const openForm = () => setFormOpen(true);
  const closeForm = () => setFormOpen(false);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <>
      <BgCanvas />
      <div style={{ position: "relative", zIndex: 1 }}>
        <Navbar onCTA={openForm} />
        <main>
          <Hero onCTA={openForm} />
          <HowItWorks />
          <Pricing onCTA={openForm} />
          <Calculator onCTA={openForm} />
        </main>
        <Footer onCTA={openForm} />
      </div>
      <FormModal open={formOpen} onClose={closeForm} />
    </>
  );
}
