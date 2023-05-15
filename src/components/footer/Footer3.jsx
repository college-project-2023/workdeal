import Link from "next/link";
import React from "react";

function Footer3() {
  return (
    <footer className="footer-3">
      <div className="container-fluid p-0">
        <div className="footer-content">
          <div className="footer-left">
            <div className="footer-widget">
              <h4>Contacts</h4>
              <div className="information">
                <div className="info">
                  <div className="icon">
                    <i className="fas fa-phone-alt" />
                  </div>
                  <div className="desc">
                    <a href="tel:01761111456">+880 176 1111 456</a>
                    <a href="tel:01761111555">+880 176 1111 555</a>
                  </div>
                </div>
                <div className="info">
                  <div className="icon">
                    <i className="far fa-envelope" />
                  </div>
                  <div className="desc">
                    <a href="mailto:info@example.com">info@example.com</a>
                    <a href="mailto:info@support.com">info@support.com</a>
                  </div>
                </div>
                <div className="info">
                  <div className="icon">
                    <i className="fas fa-map-marker-alt" />
                  </div>
                  <div className="desc">
                    <p>168/170, Avenue 01, Mirpur DOHS, Bangladesh</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-right">
            <div className="footer-widgets-group">
              <div className="footer-widget">
                <h4>Explore On</h4>
                <ul className="footer-menu">
                  <li>
                    <Link legacyBehavior href="/">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/blog">
                      <a>Blog Grid</a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="#">
                      Help &amp; Support
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/service-details">
                      <a>Services Details</a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="#">
                      <a>Privacy Policy</a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="#">
                      <a>Terms of use</a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="footer-widget">
                <h4>Categories</h4>
                <ul className="footer-menu">
                  <li>
                    <Link legacyBehavior href="/service">
                      <a>Electronics</a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/service">
                      <a>Driver Service</a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/service">
                      <a>Electric &amp; Plumbing</a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/service">
                      <a>Gadgets Repair</a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/service">
                      <a>Security Service</a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="footer-widget with-logo">
                <div className="footer-logo">
                  <Link legacyBehavior href="#">
                    <a>
                      <img src="assets/images/footer-logo.svg" alt="" />
                    </a>
                  </Link>
                </div>
                <p>
                  Aenean fermentum sapien acena gravida. Fusce a ipsum metuslai.
                  Suspendisse oi potenti.
                </p>
                <div className="request-btn">
                  <Link legacyBehavior href="/contact">
                    <a>Request a Service</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="footer-social-footer">
              <ul>
                <li>
                  <a href="https://www.facebook.com">
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
                <li>
                  <a href="https://www.twitter.com">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="https://www.pinterest.com">
                    <i className="fab fa-pinterest-p" />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com">
                    <i className="fab fa-instagram" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="copy-right-txt">
              <span>
                Copyright 2023 Serve | Design By{" "}
                <a href="https://www.egenslab.com/">Egens Lab</a>
              </span>
            </div>
            <img
              src="assets/images/home3/footer-circle.png"
              alt=""
              className="circle"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer3;
