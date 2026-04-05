import { useEffect, useState } from "react";

export default function Navbar({ onCTA }: { onCTA: () => void }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      aria-label="Main navigation"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: scrolled
          ? "rgba(10,10,10,0.92)"
          : "rgba(10,10,10,0.75)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        borderBottom: scrolled
          ? "1px solid rgba(200,255,87,0.12)"
          : "1px solid rgba(255,255,255,0.07)",
        transition: "all 0.3s ease",
        padding: scrolled ? "18px 0" : "26px 0",
      }}
    >
      <div
        style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 48px" }}
        className="flex items-center justify-between"
      >
        <a
          href="/"
          className="font-syne font-extrabold"
          aria-label="Demandly — home"
          style={{
            fontSize: "28px",
            letterSpacing: "-0.04em",
            color: "#f5f3ee",
            lineHeight: 1,
            textDecoration: "none",
          }}
        >
          demand<span style={{ color: "#c8ff57" }}>ly</span>
        </a>

        <button
          onClick={() => scrollTo("pricing")}
          className="btn-transition cursor-pointer select-none"
          style={{
            background: "#c8ff57",
            color: "#0a0a0a",
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 700,
            fontSize: "15px",
            padding: "13px 30px",
            borderRadius: "9px",
            border: "none",
            letterSpacing: "-0.01em",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          See pricing
        </button>
      </div>
    </nav>
  );
}
