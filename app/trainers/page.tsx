import FadeIn from "@/components/FadeIn";

const trainers = [
  {
    num:       "/ 01",
    role:      "Lead",
    eyebrow:   "Lead Strength & Conditioning",
    firstName: "Arjun",
    lastName:  "Singh.",
    title:     "Head Strength & Conditioning Trainer",
    cert:      "Authorized & Certified Professional",
    quote:     "Discipline is not punishment — it's the highest form of self-respect. Every rep is a vote for the person you want to become.",
    specs:     ["Strength Training", "Muscle Building", "Fat Loss", "Posture Correction"],
    chips:     ["6+ Years Experience", "200+ Transformations"],
  },
  {
    num:       "/ 02",
    role:      "Lead",
    eyebrow:   "Lead Wellness & Cardio",
    firstName: "Sandeep",
    lastName:  "Kaur.",
    title:     "Head Wellness & Cardio Trainer",
    cert:      "Authorized & Certified Professional",
    quote:     "Strength isn't built in a single session — it's built in the commitment to show up, day after day, for yourself.",
    specs:     ["Cardio", "Women's Fitness", "Flexibility", "Nutrition Guidance"],
    chips:     ["5+ Years Experience", "150+ Members Coached"],
  },
];

const testimonials = [
  { text: "Best workout vibe in Dhuri. The equipment is next level — feels like a city gym, not a small-town one.", author: "Rahul M.",    location: "Dhuri",   stars: 5 },
  { text: "The women's timing slot changed everything for me. Safe, private, and genuinely motivating to walk in every day.", author: "Simran K.",   location: "Dhuri",   stars: 5 },
  { text: "Feels like a big-city gym right here at home. Worth every rupee — and I drive in from Sangrur for it.",  author: "Manpreet S.", location: "Sangrur", stars: 5 },
  { text: "Arjun sir's training program got me real results in just six weeks. The discipline he brings is contagious.", author: "Vikram T.",   location: "Dhuri",   stars: 5 },
];

export default function TrainersPage() {
  return (
    <main>
      <FadeIn>
        <div className="page-header">
          <div className="container">
            <span className="eyebrow">Expert Guidance</span>
            <h1>Train with <em>the best.</em></h1>
            <p className="lead">Certified professionals committed to your transformation.</p>
          </div>
        </div>
      </FadeIn>

      {/* Trainers */}
      <section className="trainers-section">
        <div className="container">
          {trainers.map((t, i) => (
            <FadeIn key={t.firstName}>
              <div className={`trainer-row${i % 2 === 1 ? " trainer-row-reverse" : ""}`}>
                {/* Photo side */}
                <div className="trainer-photo-side">
                  <div className="trainer-photo-wrap">
                    <div className="trainer-photo-circle">
                      <svg width="80" height="80" viewBox="0 0 80 80" fill="none" stroke="var(--ink-faint)" strokeWidth="1">
                        <circle cx="40" cy="32" r="16"/>
                        <path d="M10 76c0-16.569 13.431-30 30-30s30 13.431 30 30"/>
                      </svg>
                    </div>
                    {/* Orbit chips */}
                    {t.chips.map((chip, ci) => (
                      <div
                        key={chip}
                        className="trainer-orbit-chip"
                        style={ci === 0 ? { top: "18%", right: "-8%" } : { bottom: "22%", left: "-6%" }}
                      >
                        {chip}
                      </div>
                    ))}
                  </div>
                  <div className="trainer-photo-label">
                    <span className="trainer-photo-num">{t.num}</span>
                    <span className="trainer-photo-role">— {t.role}</span>
                  </div>
                </div>

                {/* Info side */}
                <div className="trainer-info-side">
                  <span className="eyebrow">{t.eyebrow}</span>
                  <h2 className="trainer-name-split">
                    {t.firstName} <em>{t.lastName}</em>
                  </h2>
                  <p className="trainer-role-title">{t.title}</p>
                  <div className="trainer-cert-badge">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                      <path d="M2 6l2.5 2.5L10 3"/>
                    </svg>
                    {t.cert}
                  </div>
                  <blockquote className="trainer-quote">&ldquo;{t.quote}&rdquo;</blockquote>
                  <div className="trainer-specs">
                    {t.specs.map((s) => <span key={s}>{s}</span>)}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}

          {/* Testimonials */}
          <FadeIn>
            <section className="testimonials-section">
              <div className="testimonials-head">
                <h2>
                  What members<br />
                  <em>are saying.</em>
                </h2>
                <div className="rating-card">
                  <div className="rating-stars">{"★".repeat(5)}</div>
                  <div className="rating-row">
                    <span className="rating-num">4.6</span>
                    <span className="rating-slash">/5</span>
                  </div>
                  <div className="rating-sub">412 Google Reviews</div>
                </div>
              </div>
              <div className="testimonials-grid">
                {testimonials.map((t) => (
                  <div className="testimonial-card" key={t.author}>
                    <div className="testimonial-quote-mark">&ldquo;</div>
                    <p className="testimonial-text">{t.text}</p>
                    <div className="testimonial-stars">{"★".repeat(t.stars)}</div>
                    <div className="testimonial-author">
                      <div className="testimonial-avatar">
                        {t.author.charAt(0)}
                      </div>
                      <div>
                        <strong>{t.author}</strong>
                        <span>{t.location} · Member</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
