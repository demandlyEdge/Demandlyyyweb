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
  if (typeof window.Cal === "function") {
    window.Cal("openModal", { calLink: CAL_LINK });
  } else {
    window.open(`https://cal.com/${CAL_LINK}`, "_blank");
  }
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
