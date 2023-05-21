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
                    <h4>Johan Martin</h4>
                    <span>CEO Founder</span>
                  </div>
                </div>
                <p>
                  Suspendisse potenti. Suspendisse potenti. Phasellus sedan
                  arcu. Donec commodo lobortis purus quis dictum. Sedijabui
                  aliquamtinl ante tortor, vel dapibus mi tempor sit amet. andi
                  pretium.{" "}
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
                    <h4>Angel Kolenia</h4>
                    <span>CO Founder</span>
                  </div>
                </div>
                <p>
                  Fusce congue nibh nec ligula accumsan, sed consectetur tellus
                  placerat. Curabitur gravida velit at tristique imperdiet. In
                  pellentesque orci metus, eu congue sapien commodo eget.{" "}
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
                    <h4>Dorjonia Koken</h4>
                    <span>Founder</span>
                  </div>
                </div>
                <p>
                  Maecenas dignissim posuere velit nec scelerisque. Cras vel
                  volutpat augue, sit amet commodo ipsum. Nunc ultricies sit
                  amet massa mattis porttitor Mauris purus Nunc ultricies enim.
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
