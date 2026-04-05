import { useEffect } from "react";

export default function FormModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    if (open) document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open, onClose]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  if (!open) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1000,
        background: "rgba(0,0,0,0.75)",
        backdropFilter: "blur(6px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "#111111",
          border: "0.5px solid rgba(255,255,255,0.1)",
          borderRadius: "16px",
          width: "100%",
          maxWidth: "680px",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "14px",
            right: "14px",
            zIndex: 10,
            background: "rgba(255,255,255,0.08)",
            border: "none",
            borderRadius: "50%",
            width: "32px",
            height: "32px",
            cursor: "pointer",
            color: "rgba(245,243,238,0.6)",
            fontSize: "16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            lineHeight: 1,
          }}
          aria-label="Close"
        >
          ✕
        </button>

        <iframe
          src="https://app.youform.com/forms/ym3chlnx"
          loading="lazy"
          width="100%"
          height="700"
          frameBorder={0}
          marginHeight={0}
          marginWidth={0}
          style={{ border: "none", display: "block" }}
          title="Get started with Demandly"
        />
      </div>
    </div>
  );
}
