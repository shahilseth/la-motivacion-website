"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import FadeIn from "@/components/FadeIn";

const goals = ["Weight Loss", "Muscle Gain", "General Fitness", "Spa & Wellness"];

const infoItems = [
  {
    label: "Address",
    value: "Opposite Civil Hospital, A.P Enclave, Dhuri, Punjab",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 1C6.239 1 4 3.239 4 6c0 4 5 11 5 11s5-7 5-11c0-2.761-2.239-5-5-5z"/>
        <circle cx="9" cy="6" r="1.5"/>
      </svg>
    ),
  },
  {
    label: "Email",
    value: "info@lamotivacion.com",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="14" height="10" rx="1.5"/>
        <path d="M2 5l7 5 7-5"/>
      </svg>
    ),
  },
  {
    label: "Phone",
    value: "+91 98XXX XXXXX",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3h4l1.5 4-2 1.5a10 10 0 0 0 3 3L11 9l4 1.5V15a1 1 0 0 1-1 1C6.163 16 2 11.837 2 4a1 1 0 0 1 1-1z"/>
      </svg>
    ),
  },
  {
    label: "Hours",
    value: "Open: 5:00 AM — 9:00 PM",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="9" r="7"/>
        <path d="M9 5v4l2.5 2.5"/>
      </svg>
    ),
  },
];

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M2 7h10M8 3l4 4-4 4"/>
  </svg>
);

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      (e.target as HTMLFormElement).reset();
    }, 4000);
  }

  return (
    <main>
      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">

            {/* Left: info column */}
            <FadeIn>
              <div className="contact-sticky">
                <span className="eyebrow">Get In Touch</span>
                <h1 className="contact-heading">
                  Drop by, call,<br />
                  or <em>write.</em>
                </h1>
                <p className="contact-lead">
                  We&rsquo;re easy to find — opposite the Civil Hospital. Walk in any day during open hours for a tour, or use the form to book a free fitness assessment first.
                </p>

                <div className="contact-info-list">
                  {infoItems.map((item) => (
                    <div className="contact-info-card" key={item.label}>
                      <div className="contact-info-icon">{item.icon}</div>
                      <div>
                        <div className="contact-info-label">/ {item.label}</div>
                        <div className="contact-info-value">{item.value}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="contact-action-btns">
                  <a href="tel:+9198XXXXXXXXX" className="btn btn-ghost">
                    Call Us <span className="arrow"><ArrowIcon /></span>
                  </a>
                  <a href="https://wa.me/9198XXXXXXXXX" className="btn btn-ghost">
                    WhatsApp <span className="arrow"><ArrowIcon /></span>
                  </a>
                </div>
              </div>
            </FadeIn>

            {/* Right: form card */}
            <FadeIn delay={0.1}>
              <div className="contact-form-card">
                <div className="contact-form-header">
                  <h2 className="contact-form-title">
                    Send your <em>inquiry.</em>
                  </h2>
                  <span className="contact-form-reply">/ Reply within 24 hours</span>
                </div>

                <form className="contact-form-wrap" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="field">
                      <label>Full Name</label>
                      <input type="text" placeholder="Your name" required />
                    </div>
                    <div className="field">
                      <label>Phone Number</label>
                      <input type="tel" placeholder="+91" required />
                    </div>
                  </div>

                  <div className="field">
                    <label>Email Address</label>
                    <input type="email" placeholder="you@example.com" required />
                  </div>

                  <div className="field">
                    <label>Your Goal</label>
                    <select defaultValue="">
                      <option value="" disabled>— Select your primary goal —</option>
                      {goals.map((g) => (
                        <option key={g} value={g}>{g}</option>
                      ))}
                    </select>
                  </div>

                  <div className="field">
                    <label>Message</label>
                    <textarea placeholder="Tell us a little about where you are and where you want to go..." rows={5} />
                  </div>

                  <div className="contact-form-footer">
                    <p className="contact-form-note">
                      We respect your inbox.<br />No spam, ever.
                    </p>
                    <motion.button
                      type="submit"
                      className={`btn ${submitted ? "btn-ghost" : "btn-primary"}`}
                      whileTap={{ scale: 0.98 }}
                      disabled={submitted}
                    >
                      {submitted ? "Sent — we'll be in touch." : "Send My Inquiry"}
                      {!submitted && <span className="arrow"><ArrowIcon /></span>}
                    </motion.button>
                  </div>
                </form>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>
    </main>
  );
}
