export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "0.5px solid rgba(255,255,255,0.08)",
        padding: "40px 24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "16px",
        maxWidth: "1100px",
        margin: "0 auto",
      }}
    >
      <div
        className="font-syne font-extrabold"
        style={{
          fontSize: "22px",
          letterSpacing: "-0.03em",
          color: "#c8ff57",
        }}
      >
        W
      </div>
      <div
        style={{
          fontSize: "12px",
          color: "#888",
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        Your AI front desk, 24/7.
      </div>
    </footer>
  );
}
