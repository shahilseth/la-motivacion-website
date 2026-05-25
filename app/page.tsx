import Image from "next/image";
import Link from "next/link";
import Ticker from "@/components/Ticker";
import FadeIn from "@/components/FadeIn";

export default function HomePage() {
  return (
    <main>
      {/* ── HERO ── */}
      <header className="hero">
        <div className="container">
          <div className="hero-grid">
            {/* Copy */}
            <div className="hero-copy">
              <span className="eyebrow">Est. Dhuri, Punjab — IND</span>
              <h1>
                <span className="line1">La</span>
                <span className="line2">Motivación.</span>
              </h1>
              <div className="hero-sub">Premium Fitness Lounge · Dhuri</div>
              <p className="hero-tag">Where motivation meets muscle.</p>
              <div className="hero-ctas">
                <Link href="/membership" className="btn btn-primary">
                  Join Now
                  <span className="arrow">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6">
                      <path d="M2 7h10M8 3l4 4-4 4"/>
                    </svg>
                  </span>
                </Link>
                <Link href="/membership" className="btn btn-ghost">
                  Explore Plans
                  <span className="arrow">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6">
                      <path d="M2 7h10M8 3l4 4-4 4"/>
                    </svg>
                  </span>
                </Link>
              </div>
              <div className="hero-meta">
                <div>★ ★ ★ ★ ★ · <strong>4.6 / 5</strong> · 412 Google Reviews</div>
              </div>
            </div>

            {/* Visual */}
            <div className="hero-visual">
              <div className="frame frame-main">
                <Image
                  src="/assets/hero-photo.jpg"
                  alt="La Motivacion gym floor"
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                />
              </div>
              <div className="frame frame-sub">
                <Image
                  src="/assets/hero-photo.jpg"
                  alt="Training detail"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="badge-card">
                <div className="num">
                  <em>5</em>AM
                  <span style={{ fontSize: 18, color: "var(--ink-muted)" }}> – </span>
                  9PM
                </div>
                <div className="label">Open Daily<br />Mon — Sat</div>
              </div>
            </div>
          </div>
        </div>

        <Ticker />
      </header>

      {/* ── ABOUT STRIP ── */}
      <FadeIn>
        <section className="about">
          <div className="container about-grid">
            <div className="num">01</div>
            <div className="copy">
              <p>
                Dhuri&rsquo;s <em>most elite</em> fitness destination. Professional-grade machines sourced from{" "}
                <em>Pro Ultimate, Mohali.</em> Built for those who refuse to settle.
              </p>
            </div>
            <div className="meta">
              <div><strong>Founded</strong>2024 · Dhuri</div>
              <div><strong>Members</strong>2,000+ Active</div>
              <div><strong>Trainers</strong>Certified Pros</div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* ── PILLARS ── */}
      <FadeIn>
        <section className="pillars">
          <div className="container">
            <div className="pillars-grid">
              {[
                { num: "/ 01", title: "Strength Zone",    body: "Olympic barbells, free weights to 50kg, power racks & commercial cables." },
                { num: "/ 02", title: "Cardio Arena",     body: "Pro Ultimate treadmills, assault bikes, rowers, ellipticals for every level." },
                { num: "/ 03", title: "Luxury Spa",       body: "Members-only spa for recovery & recharge — included on Premium plan." },
                { num: "/ 04", title: "Supplement Shop",  body: "In-house store, certified proteins, pre-workouts and recovery formulas." },
              ].map((p) => (
                <div className="pillar" key={p.num}>
                  <div className="pillar-num">{p.num}</div>
                  <h3 className="pillar-title">{p.title}</h3>
                  <p>{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      {/* ── SHOWCASE ── */}
      <FadeIn>
        <section className="showcase">
          <div className="container">
            <div className="showcase-head">
              <h2>Inside the <em>lounge.</em></h2>
              <p>
                Industrial-chic interiors. Commercial-grade machines. A space engineered to make
                training feel like an event, not an errand.
              </p>
            </div>
            <div className="showcase-grid">
              {[
                { src: "/assets/showcase-strength.jpg", top: "/ 01 — Strength", name: "The Heavy Floor" },
                { src: "/assets/showcase-cardio.jpg",   top: "/ 02 — Cardio",   name: "The Arena" },
                { src: "/assets/showcase-spa.jpg",      top: "/ 03 — Recovery", name: "The Spa" },
              ].map((card) => (
                <div className="showcase-card" key={card.name}>
                  <Image src={card.src} alt={card.name} fill style={{ objectFit: "cover" }} />
                  <div className="label">
                    <span className="top">{card.top}</span>
                    <span className="name">{card.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      {/* ── SISTER BRANCH ── */}
      <FadeIn>
        <section className="sister">
          <div className="container">
            <div className="sister-card">
              <div>
                <span className="eyebrow">Sister Branch</span>
                <h3>Also visit <em>FitnessBox</em><br />by La Motivación — Sangrur.</h3>
                <p>
                  Same standards, same warmth, second postcode. Drop in if you&rsquo;re closer to
                  Sangrur than Dhuri.
                </p>
              </div>
              <Link href="/contact" className="btn btn-primary">
                Visit Branch
                <span className="arrow">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <path d="M2 7h10M8 3l4 4-4 4"/>
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </section>
      </FadeIn>
    </main>
  );
}
