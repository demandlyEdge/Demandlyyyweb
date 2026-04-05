import { useEffect } from "react";
import Lenis from "lenis";
import BgCanvas from "@/components/BgCanvas";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import Calculator from "@/components/Calculator";
import Footer from "@/components/Footer";

declare global {
  interface Window {
    Cal?: (...args: unknown[]) => void;
  }
}

const CAL_LINK = "demandlycrew/30min";

function openCal() {
  // Try Cal.com's event-delegation approach via the hidden trigger
  const trigger = document.getElementById("cal-trigger") as HTMLButtonElement | null;
  if (trigger) {
    trigger.click();
    return;
  }
  // Fallback: open directly in new tab
  window.open(`https://cal.com/${CAL_LINK}`, "_blank");
}

export default function App() {
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
        <Navbar onCTA={openCal} />
        <main>
          <Hero onCTA={openCal} />
          <HowItWorks />
          <Pricing onCTA={openCal} />
          <Calculator onCTA={openCal} />
        </main>
        <Footer onCTA={openCal} />
      </div>
    </>
  );
}
