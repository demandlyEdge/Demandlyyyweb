import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { getCalApi } from "@calcom/embed-react";
import BgCanvas from "@/components/BgCanvas";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import Calculator from "@/components/Calculator";
import Footer from "@/components/Footer";

const CAL_LINK = "demandlycrew/30min";
const CAL_NAMESPACE = "30min";

type CalApi = Awaited<ReturnType<typeof getCalApi>>;
let _cal: CalApi | null = null;

function openCal() {
  if (_cal) {
    _cal("modal", {
      calLink: CAL_LINK,
      config: { layout: "month_view", theme: "dark" },
    });
  } else {
    window.open(`https://cal.com/${CAL_LINK}`, "_blank");
  }
}

export default function App() {
  const calReady = useRef(false);

  useEffect(() => {
    if (!calReady.current) {
      calReady.current = true;
      (async () => {
        const cal = await getCalApi({ namespace: CAL_NAMESPACE });
        cal("ui", {
          theme: "dark",
          hideEventTypeDetails: false,
          layout: "month_view",
        });
        _cal = cal;
      })();
    }
  }, []);

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
