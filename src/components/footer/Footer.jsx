import Link from "next/link";
import React from "react";
import Cookies from "universal-cookie";

function Footer() {

  const cookies= new Cookies();

  const handleService = (input) => {
    cookies.set('mycookie2',input);
  }

  return (
    <footer className="footer-1">
      <img
        src="assets/images/footer-left-shape.png"
        alt=""
        className="line-shape"
      />
      <div className="container">
        <div className="footer-top">
          <div className="row gy-5">
            <div className="col-md-6 col-lg-5">
              <div className="footer-widget with-logo">
                <div className="footer-logo">
                  <Link legacyBehavior href="/">
                    <a>
                      <img src="assets/images/footer_logo.png" alt="" />
                    </a>
                  </Link>
                </div>
                <p>
                  Book Your Desired Service in a Few Clicks: Streamlined Booking for All Your Home Service Needs!.
                </p>
                <div className="request-btn">
                  <Link legacyBehavior href="/service">
                    <a>Request a Service</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-2">
              <div className="footer-widget">
                <h4>Explore On</h4>
                <ul className="footer-menu">
                  <li>
                    <Link legacyBehavior href="/">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li>
                    <a href="/contact">Help &amp; Support</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Terms of use</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-lg-2">
              <div className="footer-widget">
                <h4>Categories</h4>
                <ul className="footer-menu">
                  <li>
                    <Link legacyBehavior href="/service">
                      <a onClick={handleService("Electronic")}>Electronics</a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/service">
                      <a onClick={handleService("Cook")}>Cooking</a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/service">
                      <a onClick={handleService("Ac Repair")}>Ac Repair</a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/service">
                      <a onClick={handleService("Plumbing")}>Plumbing</a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/service">
                      <a onClick={handleService("Cleaning")}>Cleaning</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
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
                      <p>Vadodara, Gujarat, India, 390001</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="copy-right">
                <span>
                  Copyright 2023 Serve | Design By{" "}
                  <a href="https://www.egenslab.com/">Egens Lab</a>
                </span>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="footer-social-media">
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
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
