export default function Hero({ onCTA }: { onCTA: (plan?: string) => void }) {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden"
      style={{ padding: "120px 24px 80px" }}
    >
      {/* Radial glow */}
      <div className="hero-glow" />

      {/* Badge */}
      <div
        className="animate-fade-up relative z-10 inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full"
        style={{
          background: "rgba(200,255,87,0.1)",
          border: "0.5px solid rgba(200,255,87,0.25)",
          color: "#c8ff57",
          fontSize: "12px",
          fontWeight: 500,
          letterSpacing: "0.04em",
          textTransform: "uppercase",
        }}
      >
        <span className="animate-pulse-dot" style={{ fontSize: "8px" }}>●</span>
        AI front desk for local business
      </div>

      {/* Headline */}
      <h1
        className="animate-fade-up-1 relative z-10 font-syne font-extrabold text-glow-green"
        style={{
          fontSize: "clamp(48px, 9vw, 100px)",
          lineHeight: 0.95,
          letterSpacing: "-0.04em",
          marginBottom: "28px",
          maxWidth: "900px",
        }}
      >
        Every call is a
        <br />
        <em
          className="not-italic"
          style={{ color: "#c8ff57" }}
        >
          lead waiting
        </em>
        <br />
        to close.
      </h1>

      {/* Sub */}
      <p
        className="animate-fade-up-2 relative z-10"
        style={{
          fontSize: "18px",
          fontWeight: 300,
          color: "#bbb",
          maxWidth: "520px",
          margin: "0 auto 44px",
          lineHeight: 1.7,
        }}
      >
        Demandly answers calls, texts back missed ones, books appointments —
        and sends you a WhatsApp when it's done. Your AI receptionist, 24/7.
      </p>

      {/* CTAs */}
      <div
        className="animate-fade-up-3 relative z-10 flex flex-wrap items-center justify-center gap-3"
      >
        <button
          onClick={() => onCTA("Growth")}
          className="btn-transition font-medium text-base px-7 py-3.5 rounded-lg cursor-pointer"
          style={{
            background: "#c8ff57",
            color: "#0a0a0a",
            fontFamily: "'DM Sans', sans-serif",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.opacity = "0.92";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.opacity = "1";
          }}
        >
          Get started free
        </button>

        <button
          onClick={() => scrollTo("how")}
          className="btn-transition font-normal text-base px-7 py-3.5 rounded-lg cursor-pointer"
          style={{
            background: "transparent",
            color: "#f5f3ee",
            fontFamily: "'DM Sans', sans-serif",
            border: "0.5px solid rgba(255,255,255,0.12)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.28)";
            e.currentTarget.style.transform = "translateY(-1px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          See how it works
        </button>
      </div>

      {/* Stats row */}
      <div
        className="animate-fade-up-4 relative z-10 flex flex-wrap justify-center gap-10 md:gap-16"
        style={{ marginTop: "72px" }}
      >
        {[
          { num: "62%", label: "of missed calls never call back" },
          { num: "60s", label: "avg text-back response time" },
          { num: "$599", label: "vs $2,000+ for a real receptionist" },
        ].map((s, i) => (
          <div key={i} className="text-center">
            <div
              className="font-syne font-bold"
              style={{ fontSize: "32px", color: "#c8ff57", lineHeight: 1 }}
            >
              {s.num}
            </div>
            <div
              style={{
                fontSize: "12px",
                color: "#888",
                marginTop: "6px",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                maxWidth: "140px",
              }}
            >
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
