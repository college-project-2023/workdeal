import Link from "next/link";
import React, { useState } from "react";
import ReactModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";
function AboutArea() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
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
                Delivering Excellence in Home Services.  Your Trusted Partner for Quality and Reliability
                </h2>
              </div>
              <p>
             <b>Welcome to WorkDeal!</b>

             <p> At WorkDeal, we understand the importance of having reliable and skilled professionals when it comes to home services.
              We know how challenging it can be to find the right plumber, AC repair technician, electrician, or any other service provider for your specific needs.
              That's why we created WorkDeal – to simplify the process and connect you with trustworthy professionals in your area.</p>
              </p>
              <p>Our confirmed & knowledgeable pros are forever ready to help you and are loyal to providing best choice aids that you need, so we uphold the feature that we promise to our valuable consumers.</p>
              <ul className="feature-list">
                <li>
                  <i className="bi bi-check-all" />
                  Page Load (time, size, number of requests).
                </li>
                <li>
                  <i className="bi bi-check-all" />
                  Adance Data analysis operation.
                </li>
              </ul>
              <div className="cmn-btn">
                <Link legacyBehavior href="/about">
                  <a>More About</a>
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
                <div className="about-video">
                  <div className="popup-video">
                    <i
                      className="bi bi-play-fill"
                      style={{ cursor: "pointer" }}
                      onClick={openModal}
                    />
                  </div>
                </div>
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
        <ReactModalVideo
          channel="youtube"
          isOpen={isOpen}
          videoId="0O2aH4XLbto"
          onClose={closeModal}
        />
      </div>
    </section>
  );
}

export default AboutArea;
