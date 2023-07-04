import Link from "next/link";
import React from "react";

function AboutArea() {
  return (
    <section id="down" className="about-us-area sec-m-top">
      <div className="container">
        <div className="row">
          <div
            className="col-lg-6 wow animate fadeInLeft"
            data-wow-delay="1800ms"
            data-wow-duration="1500ms"
          >
            <div className="about-left">
              <div className="about-title">
                <span>About us</span>
                <h2>
                  Transform Your Home with Top-Quality Services: Discover the
                  Ultimate Home Service Provider for All Your Needs!
                </h2>
              </div>
              <div>
                <b>Welcome to WorkDeal!</b>

                <p>
                  {" "}
                  Your premier destination for all your home service needs. We
                  are a trusted and reliable online platform that connects
                  homeowners with top-rated service professionals in their local
                  area. Our goal is to make it effortless for you to find and
                  hire experienced professionals who can provide high-quality
                  services to enhance your home.
                </p>
              </div>
              <p>
                we aim to be your first choice resource for all your home
                service needs. Explore our website today and take the first step
                towards enhancing your home with the help of trusted experts.
              </p>
              <ul className="feature-list">
                <li>
                  <i className="bi bi-check-all" />
                  Join us Today.
                </li>
                <li>
                  <i className="bi bi-check-all" />
                  Let us find you best service provider.
                </li>
              </ul>

              <div className="cmn-btn">
                <Link legacyBehavior href="/account">
                  <a>Join Now</a>
                </Link>
              </div>
              <div className="feature-counts">
                <div className="single-count">
                  <span className="counter">40</span>
                  <span>+</span>
                  <h5>Team Member</h5>
                </div>
                <div className="single-count">
                  <span className="counter">1550</span>
                  <span>+</span>
                  <h5>Satisfied Client</h5>
                </div>
                <div className="single-count">
                  <span className="counter">20</span>
                  <span>+</span>
                  <h5>Services</h5>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-lg-6 wow animate fadeInRight"
            data-wow-delay="1800ms"
            data-wow-duration="1500ms"
          >
            <div className="about-right">
              <div className="shape">
                <img src="assets/images/about/about-shape.png" alt="" />
              </div>
              <div className="frame-1">
                <div className="img-1">
                  <img src="assets/images/about/about-banner-1.jpg" alt="" />
                </div>
              </div>
              <div className="frame-2">
                <div className="img-1">
                  <img src="assets/images/about/about-banner-2.jpg" alt="" />
                </div>
                <div className="img-2">
                  <img src="assets/images/about/about-banner-3.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutArea;
