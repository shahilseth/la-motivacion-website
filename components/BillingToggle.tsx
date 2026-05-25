"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const periods = [
  { key: "monthly",  label: "Monthly" },
  { key: "bimonth",  label: "2-Month" },
  { key: "yearly",   label: "Yearly" },
] as const;
type Period = typeof periods[number]["key"];

const plans = [
  {
    meta:     "Standard Plan",
    name:     "Strength &",
    nameItal: "Cardio",
    desc:     "Strength Zone + Cardio Arena access",
    featured: false,
    prices:   { monthly: "1,500", bimonth: "2,500", yearly: "12,000" } as Record<Period, string>,
    features: [
      "Full Strength Zone access",
      "Cardio Arena access",
      "Locker access",
      "Free fitness assessment",
    ],
  },
  {
    meta:     "Premium Plan",
    name:     "Strength, Cardio",
    nameItal: "& Spa",
    desc:     "Everything included — the full experience",
    featured: true,
    prices:   { monthly: "2,500", bimonth: "3,500", yearly: "14,000" } as Record<Period, string>,
    features: [
      "Everything in Standard",
      "Luxury Spa access",
      "Priority trainer access",
      "Supplement Shop discount",
      "Locker access",
      "Free fitness assessment",
    ],
  },
];

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 8l3.5 3.5L13 4"/>
  </svg>
);

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M2 7h10M8 3l4 4-4 4"/>
  </svg>
);

export default function BillingToggle() {
  const [period, setPeriod] = useState<Period>("monthly");

  return (
    <>
      <div className="billing-row">
        <div className="billing-toggle">
          {periods.map((p) => (
            <button
              key={p.key}
              className={period === p.key ? "active" : ""}
              onClick={() => setPeriod(p.key)}
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>

      <div className="plans-grid">
        {plans.map((plan) => (
          <div className={`plan${plan.featured ? " featured" : ""}`} key={plan.meta}>
            {plan.featured && <div className="plan-badge">★ Most Popular</div>}
            <div className="plan-meta">{plan.meta}</div>
            <h2 className="plan-name">
              {plan.name} <em>{plan.nameItal}</em>
            </h2>
            <div className="plan-desc">{plan.desc}</div>

            <div className="plan-price">
              <span className="currency">₹</span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={period + plan.meta}
                  className="amount"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2, ease: [0.2, 0, 0, 1] }}
                >
                  {plan.prices[period]}
                </motion.span>
              </AnimatePresence>
            </div>
            <div className="plan-period">
              per {period === "monthly" ? "month" : period === "bimonth" ? "2 months" : "year"}
            </div>

            <ul className="plan-features">
              {plan.features.map((f) => (
                <li key={f}>
                  <CheckIcon />
                  {f}
                </li>
              ))}
            </ul>

            <Link href="/contact" className={`btn ${plan.featured ? "btn-primary" : "btn-ghost"}`}>
              Get Started
              <span className="arrow"><ArrowIcon /></span>
            </Link>

            <p className="plan-note">
              All plans include locker access and free fitness assessment.
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
