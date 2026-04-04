import { useEffect } from "react";

interface ModalProps {
  plan: string;
  onClose: () => void;
}

export default function Modal({ plan, onClose }: ModalProps) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handler);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ background: "rgba(0,0,0,0.85)", backdropFilter: "blur(10px)" }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="relative"
        style={{
          background: "#111",
          border: "0.5px solid rgba(255,255,255,0.12)",
          borderRadius: "16px",
          width: "min(540px, 94vw)",
          overflow: "hidden",
        }}
      >
        {/* Header */}
        <div
          style={{
            padding: "20px 24px 0",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div>
            <div
              className="font-syne font-bold"
              style={{ fontSize: "17px", color: "#f5f3ee" }}
            >
              Quick intro — 60 seconds
            </div>
            <div style={{ fontSize: "12px", color: "#888", marginTop: "3px" }}>
              Then we'll book your setup call
            </div>
          </div>
          <button
            onClick={onClose}
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "none",
              color: "#aaa",
              width: "32px",
              height: "32px",
              borderRadius: "50%",
              cursor: "pointer",
              fontSize: "16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.12)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.06)")}
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div
          style={{
            padding: "32px 24px 28px",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <div
            style={{
              background: "rgba(200,255,87,0.06)",
              border: "0.5px solid rgba(200,255,87,0.15)",
              borderRadius: "10px",
              padding: "14px 16px",
              fontSize: "13px",
              color: "#bbb",
              lineHeight: 1.6,
            }}
          >
            <strong style={{ color: "#c8ff57" }}>Selected plan: {plan}</strong>
            <br />
            Fill in your details and we'll get your AI front desk set up within
            48 hours.
          </div>

          {[
            { label: "Business name", placeholder: "e.g. Johnson's Plumbing" },
            { label: "Your name", placeholder: "e.g. Mike Johnson" },
            { label: "Phone number", placeholder: "+1 (555) 000-0000" },
          ].map((f, i) => (
            <div key={i}>
              <label
                style={{
                  fontSize: "12px",
                  color: "#888",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  display: "block",
                  marginBottom: "6px",
                }}
              >
                {f.label}
              </label>
              <input
                type="text"
                placeholder={f.placeholder}
                style={{
                  width: "100%",
                  padding: "10px 14px",
                  background: "#0a0a0a",
                  border: "0.5px solid rgba(255,255,255,0.12)",
                  borderRadius: "8px",
                  color: "#f5f3ee",
                  fontSize: "14px",
                  fontFamily: "'DM Sans', sans-serif",
                  outline: "none",
                  transition: "border-color 0.2s",
                }}
                onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(200,255,87,0.4)")}
                onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)")}
              />
            </div>
          ))}

          <button
            onClick={onClose}
            style={{
              width: "100%",
              padding: "13px 0",
              background: "#c8ff57",
              color: "#0a0a0a",
              border: "none",
              borderRadius: "8px",
              fontSize: "14px",
              fontWeight: 600,
              fontFamily: "'DM Sans', sans-serif",
              cursor: "pointer",
              marginTop: "4px",
              transition: "opacity 0.2s, transform 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = "0.9";
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = "1";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Book my setup call →
          </button>

          <p
            style={{
              fontSize: "11px",
              color: "#555",
              textAlign: "center",
              lineHeight: 1.5,
            }}
          >
            Setup within 48 hours.
          </p>
        </div>
      </div>
    </div>
  );
}
