import React, { useState } from "react";
import ReactModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";
function HowItWork4() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <section className="how-it-works sec-m">
      <div className="container">
        <div className="row">
          <div
            className="col-12 wow animate fadeInDown"
            data-wow-delay="200ms"
            data-wow-duration="1500ms"
          >
            <div className="sec-title layout-2">
              <div className="title-left">
                <span>Get A Services</span>
                <h2>How It Works</h2>
              </div>
              <div className="title-right">
                <strong>How It Works</strong>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="how-work-left layout-2">
              <h4>3 Step To Take Our Services</h4>
              <div
                className="step wow animate fadeInUp"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <h4>
                  <span>01</span>Select the Service
                </h4>
                <p>
                  Aenean fermentum sapien ac aliquet gravida. Fusce a ipsum
                  metusil Vonean hrmentum sapien ac aliquet gravida.
                </p>
              </div>
              <div
                className="step wow animate fadeInUp"
                data-wow-delay="400ms"
                data-wow-duration="1500ms"
              >
                <h4>
                  <span>02</span>Pick your schedule
                </h4>
                <p>
                  Aenean fermentum sapien ac aliquet gravida. Fusce a ipsum
                  metusil Vonean hrmentum sapien ac aliquet gravida.
                </p>
              </div>
              <div
                className="step wow animate fadeInUp"
                data-wow-delay="600ms"
                data-wow-duration="1500ms"
              >
                <h4>
                  <span>03</span>Place Your Order &amp; Relax
                </h4>
                <p>
                  Aenean fermentum sapien ac aliquet gravida. Fusce a ipsum
                  metusil Vonean hrmentum sapien ac aliquet gravida.
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-lg-6 wow animate fadeInUp"
            data-wow-delay="400ms"
            data-wow-duration="1500ms"
          >
            <div className="how-work-right layout-2">
              <div className="video-demo">
                <div className="video-thumb">
                  <img src="assets/images/work-video-thumb.jpg" alt="" />
                  <div className="play">
                    <div className="popup-video">
                      <i
                        className="bi bi-play-fill"
                        style={{ cursor: "pointer" }}
                        onClick={openModal}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ReactModalVideo
        maxheight={500}
        wmode="red"
        channel="youtube"
        isOpen={isOpen}
        videoId="0O2aH4XLbto"
        onClose={closeModal}
      />
    </section>
  );
}

export default HowItWork4;
