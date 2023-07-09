import Link from "next/link";
import React from "react";
import { useContext } from "react";
import { MyContext } from "../context";

function Footer() {


  const { serviceType, updateVariable } = useContext(MyContext);
  

  const handleService = (input) => {
    console.log(input);
    updateVariable({"location":"","category":input,"pricerange":"","rating":""});
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
                <li  onClick={() => handleService("Electrician")}>
                    <Link legacyBehavior href="/service">
                      <a>Electrician</a>
                    </Link>
                  </li>
                  <li onClick={() => handleService("Cook")}>
                    <Link legacyBehavior href="/service">
                      <a>Cooking</a>
                    </Link>
                  </li>
                  <li onClick={() => handleService("Ac Repair")}>
                    <Link legacyBehavior href="/service">
                      <a>Ac Repair</a>
                    </Link>
                  </li>
                  <li onClick={() => handleService("Plumbing")}>
                    <Link legacyBehavior href="/service">
                      <a>Plumbing</a>
                    </Link>
                  </li>
                  <li onClick={() => handleService("Home Clean")}>
                    <Link legacyBehavior href="/service">
                      <a>Home Clean</a>
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
                      <a href="tel:01761111456">+91 7833445323</a>
                      <a href="tel:01761111555">+91 7833445323</a>
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
                  Copyright 2023 WorkDeal | Design By{" "}
                  <a href="https://www.egenslab.com/">141</a>
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
