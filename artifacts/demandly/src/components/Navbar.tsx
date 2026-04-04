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
      className={`fixed top-0 left-0 right-0 z-50 nav-glass transition-all duration-300 ${
        scrolled ? "py-4" : "py-7"
      }`}
    >
      <div
        style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 48px" }}
        className="flex items-center justify-between"
      >
        <div
          className="font-syne font-extrabold tracking-tight text-[#f5f3ee] cursor-pointer select-none"
          style={{ fontSize: "20px", letterSpacing: "-0.03em" }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          demand<span style={{ color: "#c8ff57" }}>ly</span>
        </div>

        <button
          onClick={() => scrollTo("pricing")}
          className="btn-transition cursor-pointer select-none font-medium"
          style={{
            background: "#c8ff57",
            color: "#0a0a0a",
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "13px",
            padding: "10px 22px",
            borderRadius: "7px",
            border: "none",
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
