import BgCanvas from "@/components/BgCanvas";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
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
  return (
    <>
      <BgCanvas />
      <div style={{ position: "relative", zIndex: 1 }}>
        <Navbar onCTA={openCal} />
        <main>
          <Hero onCTA={openCal} />
          <HowItWorks />
          <Pricing onCTA={openCal} />
        </main>
        <Footer onCTA={openCal} />
      </div>
    </>
  );
}
