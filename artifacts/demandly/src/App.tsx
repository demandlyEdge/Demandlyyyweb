import { useState } from "react";
import BgCanvas from "@/components/BgCanvas";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";
import Modal from "@/components/Modal";

export default function App() {
  const [modalPlan, setModalPlan] = useState<string | null>(null);

  const openModal = (plan?: string) => {
    setModalPlan(plan ?? "Growth");
  };

  return (
    <>
      <BgCanvas />

      <div style={{ position: "relative", zIndex: 1 }}>
        <Navbar />
        <main>
          <Hero onCTA={openModal} />
          <HowItWorks />
          <Pricing onCTA={openModal} />
        </main>
        <Footer />
      </div>

      {modalPlan !== null && (
        <Modal plan={modalPlan} onClose={() => setModalPlan(null)} />
      )}
    </>
  );
}
