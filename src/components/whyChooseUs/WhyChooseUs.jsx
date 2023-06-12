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
                  <b>WorkDeal</b>   provides service to all areas of the city, with a large network of dedicated service providers. They offer both online and offline services, and are 24*7. They understand and value the customer's time, so they offer door-to-door services on just a single call.
                <p> <b>Expert Technician :</b> 
                From switch relief to complete home addition, we give expert grasp to every home complication.</p>
 <b>Genuine Price</b>
 <p>At WorkDeal, we believe in providing genuine pricing for all our home services. Our platform is designed to ensure transparency and fairness, allowing you to receive accurate and competitive quotes from trusted professionals.</p>
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
                    Wearing Face mask is recommended as part of personal protective equipment and as a public health measure to prevent the spread of viruses. And it's also protect to our workers and clients health.
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
                    Serving 24x7 to our customer is top motto of WorkDeal. Now get services at your door anytime, anywhere.
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
                    Germs are everywhere! Workers get onto hands and items we touch during daily activities. 
                    Cleaning hands at key times with soap and water or hand sanitizer that contains at least 60% alcohol is one of the most important steps you can take to avoid getting spreading germs to those around customers.
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
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
