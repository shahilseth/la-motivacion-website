"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "/",           label: "Home" },
  { href: "/facilities", label: "Facilities" },
  { href: "/membership", label: "Membership" },
  { href: "/trainers",   label: "Trainers" },
  { href: "/contact",    label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <motion.header
      className="nav"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="container nav-inner">
        <Link href="/" className="brand">
          <span className="brand-mark"><span>L</span></span>
          <span className="brand-name">
            <strong>La Motivación</strong>
            <em>Premium Fitness Lounge</em>
          </span>
        </Link>

        <ul className="nav-links">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className={pathname === l.href ? "active" : ""}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link href="/membership" className="nav-cta">
          Join Now
        </Link>

        <button
          className={`hamburger${open ? " open" : ""}`}
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-nav open"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            {links.map((l) => (
              <Link key={l.href} href={l.href} className={pathname === l.href ? "active" : ""}>
                {l.label}
              </Link>
            ))}
            <Link href="/membership" style={{ color: "var(--accent)", marginTop: 8 }}>
              Join Now →
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
