export default function Footer({ onCTA }: { onCTA: () => void }) {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      style={{
        borderTop: "0.5px solid rgba(255,255,255,0.08)",
        width: "100%",
        marginTop: "40px",
      }}
    >
      {/* Main footer content */}
      <div
        className="footer-grid"
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "64px 48px 48px",
          display: "grid",
          gridTemplateColumns: "1.6fr 1fr 1fr 1fr",
          gap: "40px",
          alignItems: "start",
        }}
      >
        {/* Brand column */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <a
            href="/"
            className="font-syne font-extrabold"
            style={{ fontSize: "20px", letterSpacing: "-0.03em", color: "#f5f3ee", textDecoration: "none" }}
            aria-label="Demandly — home"
          >
            demand<span style={{ color: "#c8ff57" }}>ly</span>
          </a>
          <p
            style={{
              fontSize: "13px",
              color: "#666",
              lineHeight: 1.7,
              maxWidth: "220px",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            Your AI front desk runs 24/7. Answers calls, texts back leads, books
            appointments — while you focus on the work.
          </p>
          {/* Powered by tags */}
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginTop: "4px" }}>
            {["Twilio", "ElevenLabs", "WhatsApp", "Cal.com"].map((t) => (
              <span
                key={t}
                style={{
                  fontSize: "10px",
                  fontWeight: 500,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  padding: "3px 8px",
                  borderRadius: "4px",
                  background: "rgba(255,255,255,0.05)",
                  border: "0.5px solid rgba(255,255,255,0.08)",
                  color: "#555",
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Product column */}
        <nav aria-label="Product navigation" style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <div
            style={{
              fontSize: "11px",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              color: "#444",
              marginBottom: "4px",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            Product
          </div>
          {[
            { label: "How it works", href: "#how" },
            { label: "Pricing", href: "#pricing" },
            { label: "Starter plan", href: "#pricing" },
            { label: "Growth plan", href: "#pricing" },
            { label: "AI Front Desk", href: "#pricing" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              style={{
                fontSize: "13px",
                color: "#666",
                fontFamily: "'DM Sans', sans-serif",
                textDecoration: "none",
                transition: "color 0.2s",
                width: "fit-content",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#f5f3ee")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#666")}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Built with column */}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <div
            style={{
              fontSize: "11px",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              color: "#444",
              marginBottom: "4px",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            Built with
          </div>
          {["Twilio", "OpenClaw", "ElevenLabs", "n8n", "Cal.com", "Google Sheets"].map((t) => (
            <span
              key={t}
              style={{
                fontSize: "13px",
                color: "#666",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* CTA column */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div
            style={{
              fontSize: "11px",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              color: "#444",
              marginBottom: "4px",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            Get started
          </div>
          <p
            style={{
              fontSize: "13px",
              color: "#666",
              lineHeight: 1.65,
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            Set up in 48 hours.
          </p>
          <button
            onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}
            style={{
              background: "#c8ff57",
              color: "#0a0a0a",
              border: "none",
              borderRadius: "8px",
              padding: "12px 20px",
              fontSize: "13px",
              fontWeight: 600,
              fontFamily: "'DM Sans', sans-serif",
              cursor: "pointer",
              width: "fit-content",
              transition: "opacity 0.2s, transform 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = "0.88";
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = "1";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            See pricing →
          </button>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          borderTop: "0.5px solid rgba(255,255,255,0.06)",
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "24px 48px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "12px",
        }}
      >
        <span
          style={{
            fontSize: "12px",
            color: "#3a3a3a",
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          © {new Date().getFullYear()} Demandly. All rights reserved.
        </span>
        <span
          style={{
            fontSize: "12px",
            color: "#3a3a3a",
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          Your AI front desk, 24/7.
        </span>
      </div>
    </footer>
  );
}
