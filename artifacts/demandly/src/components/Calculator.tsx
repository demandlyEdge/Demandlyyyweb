import { useState, useRef, useEffect } from "react";

const fmt = (n: number) =>
  "$" + Math.round(n).toLocaleString("en-US");

interface SliderProps {
  label: string;
  description: string;
  min: number;
  max: number;
  step: number;
  value: number;
  unit?: string;
  onChange: (v: number) => void;
}

function Slider({ label, description, min, max, step, value, unit, onChange }: SliderProps) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div style={{ marginBottom: "28px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "10px" }}>
        <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "14px", color: "rgba(245,243,238,0.8)", fontWeight: 500 }}>
          {label}
        </span>
        <span style={{ fontFamily: "'Syne', sans-serif", fontSize: "18px", fontWeight: 700, color: "#c8ff57" }}>
          {unit === "$" ? `$${value.toLocaleString()}` : `${value}${unit ?? ""}`}
        </span>
      </div>
      <div style={{ position: "relative", height: "18px", display: "flex", alignItems: "center" }}>
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          style={{
            width: "100%",
            appearance: "none",
            WebkitAppearance: "none",
            height: "4px",
            borderRadius: "2px",
            outline: "none",
            cursor: "pointer",
            background: `linear-gradient(to right, #c8ff57 ${pct}%, rgba(255,255,255,0.1) ${pct}%)`,
          }}
        />
      </div>
      <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px", color: "rgba(245,243,238,0.35)", marginTop: "7px" }}>
        {description}
      </p>
    </div>
  );
}

interface StatBoxProps {
  label: string;
  value: string;
  color?: string;
}

function StatBox({ label, value, color = "#f5f3ee" }: StatBoxProps) {
  return (
    <div style={{
      flex: 1,
      background: "rgba(255,255,255,0.03)",
      border: "0.5px solid rgba(255,255,255,0.08)",
      borderRadius: "12px",
      padding: "16px 12px",
      textAlign: "center",
    }}>
      <div style={{ fontFamily: "'Syne', sans-serif", fontSize: "22px", fontWeight: 700, color, marginBottom: "4px" }}>
        {value}
      </div>
      <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", color: "rgba(245,243,238,0.4)", textTransform: "uppercase", letterSpacing: "0.06em" }}>
        {label}
      </div>
    </div>
  );
}

export default function Calculator({ onCTA }: { onCTA: () => void }) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.querySelectorAll(".reveal").forEach((el) => el.classList.add("visible"));
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const [missed, setMissed] = useState(15);
  const [jobValue, setJobValue] = useState(450);
  const [closeRate, setCloseRate] = useState(40);
  const [recovery, setRecovery] = useState(70);

  const weeklyMissedRevenue = missed * jobValue * (closeRate / 100);
  const weeklyRecovered = weeklyMissedRevenue * (recovery / 100);
  const monthlyRecovered = weeklyRecovered * 4.33;
  const yearlyRecovered = weeklyRecovered * 52;

  const weeklyLost = weeklyMissedRevenue * (1 - recovery / 100);
  const monthlyLost = weeklyLost * 4.33;
  const yearlyLost = weeklyLost * 52;

  return (
    <section ref={sectionRef} style={{ padding: "100px 48px" }}>
      <style>{`
        input[type=range]::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: #c8ff57;
          cursor: pointer;
          border: none;
          box-shadow: 0 0 0 3px rgba(200,255,87,0.2);
        }
        input[type=range]::-moz-range-thumb {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: #c8ff57;
          cursor: pointer;
          border: none;
        }
      `}</style>

      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Heading */}
        <div style={{ marginBottom: "56px" }}>
          <div className="section-label reveal">Revenue Protection Calculator</div>
          <h2 className="section-title reveal" style={{ marginTop: "12px" }}>
            See what you're leaving on the table.
          </h2>
          <p className="reveal" style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "17px",
            color: "rgba(245,243,238,0.55)",
            marginTop: "14px",
            maxWidth: "480px",
          }}>
            See potential recovered revenue from after-hours leads.
          </p>
        </div>

        {/* Card */}
        <div
          className="reveal"
          style={{
            background: "#111111",
            border: "0.5px solid rgba(255,255,255,0.08)",
            borderRadius: "20px",
            padding: "48px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "56px",
          }}
        >
          {/* LEFT — Sliders */}
          <div>
            <Slider
              label="Missed Calls / Week"
              description="How many inbound calls go unanswered each week"
              min={1} max={100} step={1} value={missed}
              onChange={setMissed}
            />
            <Slider
              label="Average Job Value"
              description="Typical revenue per closed job or appointment"
              min={50} max={5000} step={50} value={jobValue}
              unit="$"
              onChange={setJobValue}
            />
            <Slider
              label="Close Rate"
              description="Percentage of answered calls that convert to paying clients"
              min={5} max={100} step={5} value={closeRate}
              unit="%"
              onChange={setCloseRate}
            />
            <Slider
              label="Recovery with AI Front Desk"
              description="Percentage of missed calls the AI successfully recovers"
              min={10} max={100} step={5} value={recovery}
              unit="%"
              onChange={setRecovery}
            />
          </div>

          {/* RIGHT — Results */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {/* Main recovery card */}
            <div style={{
              background: "rgba(200,255,87,0.06)",
              border: "1px solid rgba(200,255,87,0.2)",
              borderRadius: "16px",
              padding: "28px",
            }}>
              <div style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "11px",
                fontWeight: 600,
                color: "rgba(245,243,238,0.4)",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginBottom: "8px",
              }}>
                Estimated Monthly Recovery
              </div>
              <div style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "52px",
                fontWeight: 800,
                color: "#c8ff57",
                lineHeight: 1,
                marginBottom: "6px",
              }}>
                {fmt(monthlyRecovered)}
              </div>
              <div style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "13px",
                color: "rgba(245,243,238,0.4)",
                marginBottom: "24px",
              }}>
                Additional Revenue / Month
              </div>

              {/* Weekly / Monthly / Yearly */}
              <div style={{ display: "flex", gap: "10px" }}>
                <StatBox label="Weekly" value={fmt(weeklyRecovered)} color="#c8ff57" />
                <StatBox label="Monthly" value={fmt(monthlyRecovered)} color="#c8ff57" />
                <StatBox label="Yearly" value={fmt(yearlyRecovered)} color="#c8ff57" />
              </div>
            </div>

            {/* Without Demandly */}
            <div style={{
              background: "rgba(255,107,107,0.05)",
              border: "0.5px solid rgba(255,107,107,0.2)",
              borderRadius: "14px",
              padding: "22px",
            }}>
              <div style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "11px",
                fontWeight: 600,
                color: "rgba(245,243,238,0.4)",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginBottom: "14px",
              }}>
                Without Demandly — You're Currently Losing
              </div>
              <div style={{ display: "flex", gap: "10px", marginBottom: "14px" }}>
                <StatBox label="Weekly" value={fmt(weeklyLost)} color="#ff6b6b" />
                <StatBox label="Monthly" value={fmt(monthlyLost)} color="#ff6b6b" />
                <StatBox label="Yearly" value={fmt(yearlyLost)} color="#ff6b6b" />
              </div>

              {/* Recovery pill */}
              <div style={{
                display: "inline-block",
                background: "rgba(200,255,87,0.12)",
                border: "1px solid rgba(200,255,87,0.3)",
                borderRadius: "100px",
                padding: "6px 14px",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "13px",
                fontWeight: 600,
                color: "#c8ff57",
              }}>
                You recover {recovery}% of missed revenue
              </div>
            </div>

            {/* CTA */}
            <button
              onClick={onCTA}
              className="btn-transition"
              style={{
                background: "#c8ff57",
                color: "#0a0a0a",
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 700,
                fontSize: "15px",
                padding: "16px 28px",
                borderRadius: "10px",
                border: "none",
                cursor: "pointer",
                width: "100%",
                letterSpacing: "-0.01em",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              Start recovering revenue →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
