import React, { useState } from "react";
import ReactModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";
function HowItwork1() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <section className="how-it-works sec-m-top">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="sec-title layout-1">
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
            <div className="how-work-left">
              <h4>3 Step To Take Our Services</h4>
              <div className="step">
                <h4>
                  <span>01</span>Schedule Your Service
                </h4>
                <p>
                Fill Credential, Book Service & Relax
                </p>
              </div>
              <div className="step">
                <h4>
                  <span>02</span>Service At Your Home
                </h4>
                <p>
                Keep Calm, We Will Serve At Your Door
                </p>
              </div>
              <div className="step">
                <h4>
                  <span>03</span>Pay After Service
                </h4>
                <p>
                Make Payment After Job Get Done
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="how-work-right">
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
        channel="youtube"
        isOpen={isOpen}
        videoId="0O2aH4XLbto"
        onClose={closeModal}
      />
    </section>
  );
}

export default HowItwork1;
