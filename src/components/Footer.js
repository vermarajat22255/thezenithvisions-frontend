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
            81/2 BHAWANIPUR COLONY, ANNAPURNA ROAD, INDORE, INDIA
          </p>
          <p className="footer-tagline">
            Email:{" "}
            <a href="mailto:info@thezenithvisions.com">
              info@thezenithvisions.com
            </a>
          </p>
          <p className="footer-tagline">
            INDIA: +91 8770093683 | USA: +1 551 347 6950
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
                <a href="#">Terms & Conditions.</a>
              </li>
              <li>
                <a href="#">Privacy Policy.</a>
              </li>
              <li>
                <a href="#">Refund Policy.</a>
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
          <a href="#privacy">Privacy Policy</a>
          <span>|</span>
          <a href="#terms">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
}
