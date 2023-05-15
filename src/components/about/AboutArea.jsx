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
                  Orem ipsum dolor sit amet, consectetur adip cing elit. Suspen
                  disse eu risus
                </h2>
              </div>
              <p>
                Today, we supported the education of 20000 children born in poor
                families cross 12 undeveloped countries over the world. in the
                future, our goals areIn at nibh vulputate turpis feugiat dictum.
              </p>
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
