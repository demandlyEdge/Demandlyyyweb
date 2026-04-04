import { useEffect, useState } from "react";

export default function Navbar() {
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
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <div
          className="font-syne text-xl font-extrabold tracking-tight text-[#f5f3ee] cursor-pointer select-none"
          style={{ letterSpacing: "-0.03em" }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          demand<span style={{ color: "#c8ff57" }}>ly</span>
        </div>

        <button
          onClick={() => scrollTo("pricing")}
          className="btn-transition text-[#0a0a0a] font-medium text-sm px-5 py-2.5 rounded-md cursor-pointer select-none"
          style={{
            background: "#c8ff57",
            fontFamily: "'DM Sans', sans-serif",
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
