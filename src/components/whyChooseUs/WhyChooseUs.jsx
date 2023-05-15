import React from "react";
import CountUp from "react-countup";
function WhyChooseUs() {
  // const countUpRef = useRef(null);
  // const targetRef = useRef(null);

  // useEffect(() => {
  //   const target = targetRef.current;
  //   const countUp = countUpRef.current;

  //   if (target && countUp) {
  //     countUp.start();
  //   }
  // }, []);
  return (
    <section className="why-choose sec-m">
      <div className="container">
        <div className="row">
          <div
            className="col-lg-6 wow animate fadeInDown"
            data-wow-delay="200ms"
            data-wow-duration="1500ms"
          >
            <div className="why-choose-left">
              <div className="sec-title layout-1">
                <div className="title-left">
                  <span>Trust Agency</span>
                  <h2>Best Offered Services</h2>
                  <p>
                    Aenean fermentum sapien ac aliquet gravida. Fusce a ipsum
                    metus. tolad answerala tomadunali Aliquam viverra sagittis
                    felis.
                  </p>
                </div>
              </div>
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Ensuring Masks
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Aenean fermentum sapien ac aliquet gravida. Fusce a ipsum
                      metus. tolad Aenean fermentum sapien ac aliquet gravida.
                      Fusce a ipsum metus. tolad answerala tomadunali Aliquam
                      viverra sagittis felis.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      24/7 Supports
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Aenean fermentum sapien ac aliquet gravida. Fusce a ipsum
                      metus. tolad Aenean fermentum sapien ac aliquet gravida.
                      Fusce a ipsum metus. tolad answerala tomadunali Aliquam
                      viverra sagittis felis.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Sanitising Hands
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Aenean fermentum sapien ac aliquet gravida. Fusce a ipsum
                      metus. tolad Aenean fermentum sapien ac aliquet gravida.
                      Fusce a ipsum metus. tolad answerala tomadunali Aliquam
                      viverra sagittis felis.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="why-choose-right">
              <h2
                className=" wow animate fadeInUp"
                data-wow-delay="300ms"
                data-wow-duration="1500ms"
              >
                Why Choose Us
              </h2>
              <div className="our-archive">
                <div
                  className="single-archive wow animate fadeInUp"
                  data-wow-delay="400ms"
                  data-wow-duration="1500ms"
                >
                  <span className="counter">
                    <CountUp start={0} end={5000} duration={3} />
                  </span>
                  <span>+</span>
                  <h5>Service Providers</h5>
                </div>
                <div
                  className="single-archive wow animate fadeInUp"
                  data-wow-delay="500ms"
                  data-wow-duration="1500ms"
                >
                  <span className="counter">
                    <CountUp start={0} end={1500} duration={3} />
                  </span>
                  <span>+</span>
                  <h5>Order Served</h5>
                </div>
                <div
                  className="single-archive wow animate fadeInUp"
                  data-wow-delay="600ms"
                  data-wow-duration="1500ms"
                >
                  <span className="counter">
                    <CountUp start={0} end={2000} duration={3} />
                  </span>
                  <span>+</span>
                  <h5>5 Star Received</h5>
                </div>
                <div
                  className="single-archive wow animate fadeInUp"
                  data-wow-delay="700ms"
                  data-wow-duration="1500ms"
                >
                  <span className="counter">
                    <CountUp start={0} end={1800} duration={3} />
                  </span>
                  <span>+</span>
                  <h5>Friendly Shop</h5>
                </div>
              </div>
              <img
                src="assets/images/why-choose-dot-shape.png"
                alt=""
                className="shape-dot"
              />
              <img
                src="assets/images/why-choose-shape.png"
                alt=""
                className="shape-triangle"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
