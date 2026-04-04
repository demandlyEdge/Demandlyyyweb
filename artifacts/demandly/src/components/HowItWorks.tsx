import { useEffect, useRef } from "react";

const steps = [
  {
    num: "01",
    title: "Customer calls or texts",
    desc: "Any time of day. Whether you're on a job, with a client, or asleep — every inbound contact is captured instantly.",
    tag: "Twilio + OpenClaw",
    first: true,
  },
  {
    num: "02",
    title: "AI handles the conversation",
    desc: "Picks up calls with a human voice, texts back missed ones in 60 seconds, qualifies the lead, and books the appointment — all automatically.",
    tag: "OpenClaw + ElevenLabs",
  },
  {
    num: "03",
    title: "You get a WhatsApp ping",
    desc: '"New lead: Sarah, needs quote for kitchen renovation, booked Friday 2pm." Your calendar fills. You do nothing.',
    tag: "WhatsApp + Cal.com",
    last: true,
  },
];

export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);

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
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="how"
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
          How it works
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
          Set it up once.
          <br />
          It runs forever.
        </h2>
        <p
          style={{
            fontSize: "17px",
            color: "#bbb",
            maxWidth: "540px",
            lineHeight: 1.7,
          }}
        >
          No dashboards to manage. No tools to learn. Your AI front desk lives
          in your phone as WhatsApp alerts.
        </p>
      </div>

      {/* Grid */}
      <div
        className="grid grid-cols-1 md:grid-cols-3 mt-14"
        style={{ gap: "2px" }}
      >
        {steps.map((step, i) => (
          <div
            key={i}
            className={`reveal reveal-delay-${i + 1} card-hover relative`}
            style={{
              background: "#111111",
              border: "0.5px solid rgba(255,255,255,0.08)",
              padding: "32px 28px",
              borderRadius: step.first
                ? "12px 0 0 12px"
                : step.last
                ? "0 12px 12px 0"
                : "0",
            }}
          >
            {/* Big number */}
            <div
              className="font-syne font-extrabold"
              style={{
                fontSize: "56px",
                color: "rgba(200,255,87,0.1)",
                lineHeight: 1,
                marginBottom: "16px",
                userSelect: "none",
              }}
            >
              {step.num}
            </div>

            <div
              className="font-syne font-semibold"
              style={{ fontSize: "18px", marginBottom: "10px" }}
            >
              {step.title}
            </div>
            <div
              style={{ fontSize: "14px", color: "#888", lineHeight: 1.7 }}
            >
              {step.desc}
            </div>

            <span
              style={{
                display: "inline-block",
                marginTop: "18px",
                fontSize: "10px",
                fontWeight: 500,
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                padding: "3px 9px",
                borderRadius: "4px",
                background: "rgba(200,255,87,0.1)",
                color: "#c8ff57",
              }}
            >
              {step.tag}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
