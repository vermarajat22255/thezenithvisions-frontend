"use client";

import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-brand">
          <Logo size="large" className="footer-logo-svg" />
          <p className="footer-address">
            USA: 1305 Paterson Plank Rd, North Bergen, NJ, USA INDIA: 81/2
            Bhawanipur Colony, Indore, INDIA
          </p>
          <p className="footer-tagline">
            Email:{" "}
            <a href="mailto:info@thezenithvisions.com">
              info@thezenithvisions.com
            </a>
          </p>
          <p className="footer-tagline">
            USA: +1 551 347 6950 | INDIA: +91 8770093683
          </p>
        </div>
        <div className="footer-columns">
          <div className="footer-links">
            <h4>Pages</h4>
            <ul>
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/projects">Projects</Link>
              </li>
              <li>
                <Link href="/blogs">Blogs</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="footer-links">
            <h4>Legal</h4>
            <ul>
              <li>
                <Link href="/legal/terms-and-conditions">
                  Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <Link href="/legal/privacy-policy">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/legal/refund-policy">Refund Policy</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-subscribe">
          <h4>Subscribe and we&apos;ll send our brochure</h4>
          <p>and company profile right to your email.</p>
          <form className="subscribe-form">
            <input type="email" placeholder="Email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="footer-giant-text">THEZENITHVISIONS</div>
      <div className="footer-bottom">
        <p className="footer-copyright">© 2025 All rights reserved</p>
        <div className="footer-links-bottom">
          <Link href="/">Home</Link>
          <span>|</span>
          <Link href="/legal/privacy-policy">Privacy Policy</Link>
          <span>|</span>
          <Link href="/legal/terms-and-conditions">Terms &amp; Conditions</Link>
        </div>
      </div>
    </footer>
  );
}
