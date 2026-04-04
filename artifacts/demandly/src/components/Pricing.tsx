import { useEffect, useRef } from "react";

const layer1Features = [
  "Missed call text-back in 60 seconds",
  "AI 3-step follow-up sequence",
  "FAQ auto-replies via SMS",
  "WhatsApp alerts to owner",
  "Lead log in Google Sheets",
];
const layer2Features = [
  "AI answers every live call",
  "Qualifies leads on the call",
  "Human-sounding voice",
  "Call summary to WhatsApp",
];
const layer3Features = [
  "Auto books into your calendar",
  "Persistent memory per lead",
  "Daily WhatsApp briefing",
  "Monthly performance report",
  "Priority setup + support",
];

interface LayerProps {
  label: string;
  color: string;
  features: string[];
  active: boolean;
}

function Layer({ label, color, features, active }: LayerProps) {
  return (
    <div style={{ marginTop: "16px" }}>
      <div
        style={{
          fontSize: "10px",
          fontWeight: 600,
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          color,
          marginBottom: "10px",
        }}
      >
        {label}
      </div>
      <ul style={{ listStyle: "none" }}>
        {features.map((f, i) => (
          <li
            key={i}
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "9px",
              fontSize: "13px",
              color: active ? "#f5f3ee" : "rgba(255,255,255,0.18)",
              textDecoration: active ? "none" : "line-through",
              padding: "5px 0",
              lineHeight: 1.5,
              opacity: active ? 1 : 0.4,
            }}
          >
            <span
              style={{
                marginTop: "1px",
                flexShrink: 0,
                fontSize: "11px",
                color: active ? "#c8ff57" : "rgba(255,255,255,0.15)",
              }}
            >
              →
            </span>
            {f}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Divider() {
  return (
    <div
      style={{
        height: "0.5px",
        background: "rgba(255,255,255,0.08)",
        margin: "20px 0",
      }}
    />
  );
}

interface PkgProps {
  tier: string;
  name: string;
  price: string;
  tagline: string;
  featured?: boolean;
  layer1: boolean;
  layer2: boolean;
  layer3: boolean;
  layer1Label: string;
  layer2Label: string;
  layer3Label: string;
  layer1Features: string[];
  layer2Features: string[];
  layer3Features: string[];
  onCTA: (plan: string) => void;
}

function PricingCard({
  tier,
  name,
  price,
  tagline,
  featured,
  layer1,
  layer2,
  layer3,
  layer1Label,
  layer2Label,
  layer3Label,
  layer1Features: l1f,
  layer2Features: l2f,
  layer3Features: l3f,
  onCTA,
}: PkgProps) {
  return (
    <div
      className={`card-hover ${featured ? "featured-hover glow-green" : ""} relative`}
      style={{
        background: featured
          ? "linear-gradient(160deg, #141a0a 0%, #0f0f0f 100%)"
          : "#111111",
        border: `0.5px solid ${featured ? "#c8ff57" : "rgba(255,255,255,0.08)"}`,
        borderRadius: "16px",
        padding: "32px 28px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {featured && (
        <div
          style={{
            position: "absolute",
            top: "-13px",
            left: "50%",
            transform: "translateX(-50%)",
            background: "#c8ff57",
            color: "#0a0a0a",
            fontSize: "10px",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            padding: "3px 12px",
            borderRadius: "20px",
            whiteSpace: "nowrap",
          }}
        >
          Most popular
        </div>
      )}

      <div
        style={{
          fontSize: "10px",
          fontWeight: 600,
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          color: "#888",
          marginBottom: "8px",
        }}
      >
        {tier}
      </div>

      <div
        className="font-syne font-bold"
        style={{ fontSize: "22px", marginBottom: "6px", letterSpacing: "-0.02em" }}
      >
        {name}
      </div>

      <div
        className="font-syne font-extrabold"
        style={{
          fontSize: "44px",
          letterSpacing: "-0.04em",
          lineHeight: 1,
          marginBottom: "4px",
          color: featured ? "#c8ff57" : "#f5f3ee",
        }}
      >
        {price}
        <sub
          style={{ fontSize: "16px", fontWeight: 400, color: "#888", verticalAlign: "baseline" }}
        >
          /mo
        </sub>
      </div>

      <div style={{ fontSize: "13px", color: "#888", marginBottom: "24px" }}>
        {tagline}
      </div>

      <Divider />

      <Layer
        label={layer1Label}
        color="#EF9F27"
        features={l1f}
        active={layer1}
      />

      {l2f.length > 0 && (
        <>
          <Divider />
          <Layer
            label={layer2Label}
            color="#c8ff57"
            features={l2f}
            active={layer2}
          />
        </>
      )}

      {l3f.length > 0 && (
        <>
          <Divider />
          <Layer
            label={layer3Label}
            color="#8b7cf8"
            features={l3f}
            active={layer3}
          />
        </>
      )}

      <div style={{ flex: 1 }} />

      <button
        onClick={() => onCTA(tier)}
        className="btn-transition"
        style={{
          display: "block",
          width: "100%",
          marginTop: "24px",
          padding: "13px 0",
          borderRadius: "8px",
          textAlign: "center",
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "14px",
          fontWeight: 500,
          cursor: "pointer",
          background: featured ? "#c8ff57" : "transparent",
          color: featured ? "#0a0a0a" : "#f5f3ee",
          border: `0.5px solid ${featured ? "#c8ff57" : "rgba(255,255,255,0.12)"}`,
        }}
        onMouseEnter={(e) => {
          if (featured) {
            e.currentTarget.style.opacity = "0.9";
            e.currentTarget.style.transform = "translateY(-1px)";
          } else {
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)";
          }
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.opacity = "1";
          e.currentTarget.style.transform = "translateY(0)";
          if (!featured) {
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
          }
        }}
      >
        Get started
      </button>
    </div>
  );
}

export default function Pricing({ onCTA }: { onCTA: (plan: string) => void }) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el) => {
              el.classList.add("visible");
            });
          }
        });
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      id="pricing"
      style={{ padding: "100px 24px", maxWidth: "1100px", margin: "0 auto" }}
    >
      <div className="reveal">
        <div
          style={{
            fontSize: "11px",
            fontWeight: 500,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            color: "#c8ff57",
            marginBottom: "16px",
          }}
        >
          Pricing
        </div>
        <h2
          className="font-syne font-bold"
          style={{
            fontSize: "clamp(30px, 5vw, 52px)",
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
            marginBottom: "16px",
          }}
        >
          One build.
          <br />
          Three packages.
        </h2>
        <p
          style={{
            fontSize: "17px",
            color: "#bbb",
            maxWidth: "540px",
            lineHeight: 1.7,
          }}
        >
          All plans include 48-hour setup. Replace your receptionist for less
          than their lunch budget.
        </p>
      </div>

      <div
        className="reveal grid grid-cols-1 md:grid-cols-3 gap-4 mt-14"
      >
        {/* Starter */}
        <PricingCard
          tier="Starter"
          name="Text Rep"
          price="$199"
          tagline="Never lose a missed call again"
          layer1
          layer2={false}
          layer3={false}
          layer1Label="Layer 1 — Text Automation"
          layer2Label="Layer 2 — Voice Rep"
          layer3Label="Layer 3 — Full Front Desk"
          layer1Features={layer1Features}
          layer2Features={[
            "AI voice rep (live calls)",
            "Auto calendar booking",
            "Daily morning briefing",
            "Persistent lead memory",
          ]}
          layer3Features={[]}
          onCTA={onCTA}
        />

        {/* Growth (featured) */}
        <PricingCard
          tier="Growth"
          name="Text + Voice"
          price="$399"
          tagline="AI handles texts AND live calls 24/7"
          featured
          layer1
          layer2
          layer3={false}
          layer1Label="Layer 1 — Text Automation"
          layer2Label="Layer 2 — Voice Rep"
          layer3Label="Layer 3 — Full Front Desk"
          layer1Features={["Everything in Starter"]}
          layer2Features={layer2Features}
          layer3Features={[
            "Auto calendar booking",
            "Daily morning briefing",
          ]}
          onCTA={onCTA}
        />

        {/* Full Stack */}
        <PricingCard
          tier="Full Stack"
          name="AI Front Desk"
          price="$599"
          tagline="Complete AI employee, zero effort"
          layer1
          layer2
          layer3
          layer1Label="Layer 1 + 2 — All above"
          layer2Label="Layer 2 — Voice Rep"
          layer3Label="Layer 3 — Full Front Desk"
          layer1Features={["Everything in Growth"]}
          layer2Features={[]}
          layer3Features={layer3Features}
          onCTA={onCTA}
        />
      </div>

      {/* Conversion note */}
      <div
        className="reveal mt-6"
        style={{
          padding: "20px 24px",
          background: "rgba(200,255,87,0.04)",
          border: "0.5px solid rgba(200,255,87,0.14)",
          borderRadius: "12px",
          fontSize: "13px",
          color: "#888",
          lineHeight: 1.7,
        }}
      >
        <strong style={{ color: "#c8ff57", fontWeight: 500 }}>
          Why most people pick Growth:
        </strong>{" "}
        For just $200 more than Starter, you get an AI that actually picks up
        calls — not just texts. That's the difference between catching 40% of
        your leads and catching 90%. The math does itself.
      </div>
    </div>
  );
}
