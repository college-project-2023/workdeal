import React, { useMemo } from "react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Navigation, Pagination, Autoplay]);

function Testimonial2() {
  const slider = useMemo(() => {
    return {
      slidesPerView: "auto",
      spaceBetween: 25,
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next-c",
        prevEl: ".swiper-button-prev-c",
      },
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        // when window width is >= 768px
        768: {
          slidesPerView: 2,
        },
        // when window width is >= 1200px
        1200: {
          slidesPerView: 3,
        },
      },
    };
  }, []);
  return (
    <section className="testimonial-two">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div
              className="sec-title layout-2 wow animate fadeInUp"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <div className="title-left">
                <span>Testimonial</span>
                <h2>our Client Say About Us</h2>
              </div>
            </div>
          </div>
        </div>
        <Swiper {...slider} className="swiper testimonial-slider2">
          <div className="swiper-wrapper">
            <SwiperSlide
              className="swiper-slide wow animate fadeInLeft"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <div className="testimonial-slide">
                <div className="quote">
                  <i className="fas fa-quote-right" />
                </div>
                <div className="reviewer">
                  <div className="thumb">
                    <img
                      src="assets/images/testimonial/testimonial-1.jpg"
                      alt=""
                    />
                    <i className="fas fa-quote-left" />
                  </div>
                  <div className="reviewer-info">
                    <h4>Radhika Singh</h4>
                    <span>Client</span>
                  </div>
                </div>
                <p>
                "I recently used the workdeal app to find a plumber to fix a leaky faucet in my kitchen.The app is user-friendly and the booking process was a breeze. The plumber arrived on time,
                was professional,and fixed the issue promptly. I highly recommend the workdeal app for anyone looking for quick and efficient home services!"{" "}
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide
              className="swiper-slide wow animate fadeInLeft"
              data-wow-delay="400ms"
              data-wow-duration="1500ms"
            >
              <div className="testimonial-slide">
                <div className="quote">
                  <i className="fas fa-quote-right" />
                </div>
                <div className="reviewer">
                  <div className="thumb">
                    <img
                      src="assets/images/testimonial/testimonial-2.jpg"
                      alt=""
                    />
                    <i className="fas fa-quote-left" />
                  </div>
                  <div className="reviewer-info">
                    <h4>Arpan Patel</h4>
                    <span>Client</span>
                  </div>
                </div>
                <p>
                "The workdeal app is a great platform to find various services for household needs. I used it to hire an electrician to fix some wiring issues in my house. The app provided a wide range of options, and I was able to choose a skilled electrician at a reasonable price.The service was satisfactory,but the interface could be improved for smoother navigation. I would use the app again."{" "}
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide
              className="swiper-slide wow animate fadeInLeft"
              data-wow-delay="600ms"
              data-wow-duration="1500ms"
            >
              <div className="testimonial-slide">
                <div className="quote">
                  <i className="fas fa-quote-right" />
                </div>
                <div className="reviewer">
                  <div className="thumb">
                    <img
                      src="assets/images/testimonial/testimonial-3.jpg"
                      alt=""
                    />
                    <i className="fas fa-quote-left" />
                  </div>
                  <div className="reviewer-info">
                    <h4>Shivam Joshi</h4>
                    <span>Client</span>
                  </div>
                </div>
                <p>
                I recently used the WorkDeal app to find a painter for my home renovation project. The app was intuitive, and I received prompt responses from painters. The painter I chose did an excellent job, paying attention to detail and delivering high-quality work. The only improvement I would suggest is providing more information about the professionals' portfolios within the app.
                </p>
              </div>
            </SwiperSlide>
          </div>
          <div className="slider-navigations">
            <div className="swiper-button-prev-c">
              <i className="bi bi-arrow-left" />
            </div>
            <div className="swiper-button-next-c">
              <i className="bi bi-arrow-right" />
            </div>
          </div>
        </Swiper>
      </div>
    </section>
  );
}

export default Testimonial2;
