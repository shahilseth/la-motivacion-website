import Image from "next/image";
import FadeIn from "@/components/FadeIn";

const features = [
  {
    num: "/ 01",
    title: "Strength Zone",
    body: "Full range of Olympic barbells, dumbbells up to 50kg, power racks and cable machines.",
    specs: ["Olympic Barbells", "50kg Dumbbells", "Power Racks", "Commercial Cables"],
    icon: (
      <svg viewBox="0 0 26 26" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <rect x="1" y="11" width="4" height="4" rx="1"/><rect x="21" y="11" width="4" height="4" rx="1"/>
        <rect x="5" y="8" width="3" height="10" rx="1"/><rect x="18" y="8" width="3" height="10" rx="1"/>
        <line x1="8" y1="13" x2="18" y2="13"/>
      </svg>
    ),
  },
  {
    num: "/ 02",
    title: "Cardio Arena",
    body: "Pro Ultimate treadmills, assault bikes, rowing machines and ellipticals for every fitness level.",
    specs: ["Pro Treadmills", "Assault Bikes", "Rowing Machines", "Ellipticals"],
    icon: (
      <svg viewBox="0 0 26 26" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <circle cx="13" cy="13" r="10"/><path d="M13 8v5l3 3"/>
      </svg>
    ),
  },
  {
    num: "/ 03",
    title: "Luxury Spa",
    body: "Exclusive spa access for Premium members. Relax, recover, and recharge after every session.",
    specs: ["Steam Room", "Hydrotherapy", "Recovery Pools", "Premium Amenities"],
    icon: (
      <svg viewBox="0 0 26 26" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M5 20h16M7 20v-4a6 6 0 0 1 12 0v4"/><path d="M10 12a3 3 0 0 1 6 0"/>
        <path d="M13 9V6M10 7l1.5 2M16 7l-1.5 2"/>
      </svg>
    ),
  },
  {
    num: "/ 04",
    title: "Supplement Shop",
    body: "In-house nutrition store stocked with certified proteins, pre-workouts, and recovery supplements.",
    specs: ["Whey Proteins", "Pre-Workouts", "Recovery", "Certified Brands"],
    icon: (
      <svg viewBox="0 0 26 26" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M9 3h8l2 5H7L9 3Z"/><rect x="5" y="8" width="16" height="14" rx="2"/>
        <line x1="13" y1="12" x2="13" y2="18"/><line x1="10" y1="15" x2="16" y2="15"/>
      </svg>
    ),
  },
];

export default function FacilitiesPage() {
  return (
    <main>
      {/* Page Header */}
      <FadeIn>
        <div className="page-header">
          <div className="container">
            <span className="eyebrow">Chapter 02 — The Space</span>
            <h1>World-class <em>infrastructure.</em></h1>
            <p className="lead">
              Every square foot purpose-built. Every machine commercial-grade. Designed
              for ambition, calibrated for results.
            </p>
          </div>
        </div>
      </FadeIn>

      {/* Features */}
      <section className="features">
        <div className="container">
          <FadeIn>
            <div className="features-head">
              <h2>Four zones.<br />One <em>premium</em><br />experience.</h2>
              <p>
                From your first warm-up to your last recovery rep — the lounge is divided into
                four distinct environments, each tuned to a specific kind of work.
              </p>
            </div>
          </FadeIn>

          <div className="features-grid">
            {features.map((f) => (
              <div className="feature" key={f.num}>
                <div className="feature-icon">{f.icon}</div>
                <div>
                  <span className="feature-num">{f.num}</span>
                  <h3>{f.title}</h3>
                  <p>{f.body}</p>
                  <div className="specs">
                    {f.specs.map((s) => <span key={s}>{s}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pro Ultimate Band */}
      <FadeIn>
        <section className="pro-ultimate">
          <div className="container">
            <div className="pro-band-grid">
              <div>
                <span className="eyebrow">Equipment Partner</span>
                <h2>Powered by <em>Pro Ultimate,</em> Mohali.</h2>
                <p>
                  Every machine at La Motivación is sourced from Pro Ultimate — North India&rsquo;s
                  most trusted commercial fitness equipment brand. Built for performance, designed to last.
                </p>
                <div className="pro-stats">
                  <div>
                    <div className="pro-stat-num">20+</div>
                    <div className="pro-stat-label">Years of engineering</div>
                  </div>
                  <div>
                    <div className="pro-stat-num">100%</div>
                    <div className="pro-stat-label">Commercial grade</div>
                  </div>
                  <div>
                    <div className="pro-stat-num">5 yr</div>
                    <div className="pro-stat-label">Frame warranty</div>
                  </div>
                </div>
              </div>
              <div className="pro-band-img">
                <Image
                  src="/assets/pro-ultimate.webp"
                  alt="Pro Ultimate equipment"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Timings */}
      <FadeIn>
        <section className="timings">
          <div className="container">
            <div className="timings-head">
              <span className="eyebrow">Hours of Operation</span>
              <h2>When the <em>doors</em> open.</h2>
            </div>
            <div className="timings-grid">
              <div className="timing-card">
                <div className="timing-eyebrow">/ General Access</div>
                <div className="timing-days">Monday — Saturday</div>
                <div className="timing-time">5:00 AM — 9:00 PM</div>
              </div>
              <div className="timing-card women">
                <div className="timing-eyebrow">/ Women&rsquo;s Exclusive</div>
                <div className="timing-days">Monday — Saturday</div>
                <div className="timing-time">10:30 AM — 1:00 PM</div>
                <span className="women-pill">
                  <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#e8857a", display: "inline-block" }} />
                  Safe · Private · Empowering
                </span>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>
    </main>
  );
}
