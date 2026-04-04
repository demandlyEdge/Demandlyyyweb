export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "0.5px solid rgba(255,255,255,0.08)",
        width: "100%",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "44px 48px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "16px",
        }}
      >
        {/* Logo */}
        <div
          className="font-syne font-extrabold"
          style={{
            fontSize: "20px",
            letterSpacing: "-0.03em",
            color: "#f5f3ee",
          }}
        >
          demand<span style={{ color: "#c8ff57" }}>ly</span>
        </div>

        {/* Right side */}
        <div
          style={{
            fontSize: "12px",
            color: "#666",
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          Your AI front desk, 24/7.
        </div>
      </div>
    </footer>
  );
}
