import React from "react";

function HowItWrok3() {
  return (
    <section className="how-it-works-two sec-m-top">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="work-process-left">
              <h2
                className=" wow animate fadeInDown"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                How It Works
              </h2>
              <span
                className=" wow animate fadeInDown"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                3 Step To Take Our Services
              </span>
              <div
                className="process-step wow animate fadeInUp"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <div className="icon">
                  <i>
                    <span>01</span>
                    <img src="assets/images/icons/work-icon-1.png" alt="" />
                  </i>
                </div>
                <div className="step-cnt">
                  <h4>Select the Service</h4>
                  <p>
                    Aenean fermentum sapien ac aliquet gravida. Fusce a ipsum
                    metusil Vonean hrmentum sapien ac aliquet gravida.
                  </p>
                </div>
              </div>
              <div
                className="process-step green wow animate fadeInUp"
                data-wow-delay="400ms"
                data-wow-duration="1500ms"
              >
                <div className="icon">
                  <i>
                    <span>02</span>
                    <img src="assets/images/icons/work-icon-2.png" alt="" />
                  </i>
                </div>
                <div className="step-cnt">
                  <h4>Pick your schedule</h4>
                  <p>
                    Aenean fermentum sapien ac aliquet gravida. Fusce a ipsum
                    metusil Vonean hrmentum sapien ac aliquet gravida.
                  </p>
                </div>
              </div>
              <div
                className="process-step blue wow animate fadeInUp"
                data-wow-delay="600ms"
                data-wow-duration="1500ms"
              >
                <div className="icon">
                  <i>
                    <span>03</span>
                    <img src="assets/images/icons/work-icon-3.png" alt="" />
                  </i>
                </div>
                <div className="step-cnt">
                  <h4>Select the Service</h4>
                  <p>
                    Aenean fermentum sapien ac aliquet gravida. Fusce a ipsum
                    metusil Vonean hrmentum sapien ac aliquet gravida.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-lg-6 wow animate fadeInDown"
            data-wow-delay="200ms"
            data-wow-duration="1500ms"
          >
            <div className="work-process-right">
              <img src="assets/images/home3/work.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWrok3;
