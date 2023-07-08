import React, { useMemo } from "react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Navigation, Pagination, Autoplay]);
function Testimonial1() {
  const slider = useMemo(() => {
    return {
      slidesPerView: 2,
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
        // when window width is >= 992px
        992: {
          slidesPerView: 2,
        },
      },
    };
  }, []);
  return (
    <section className="testimonial">
      <div className="container">
        <div className="row">
          <div
            className="col-12 wow animate fadeInUp"
            data-wow-delay="200ms"
            data-wow-duration="1500ms"
          >
            <div className="sec-title layout-1">
              <div className="title-left">
                <span>Testimonial</span>
                <h2>our Client Say About Us</h2>
              </div>
            </div>
          </div>
        </div>
        <Swiper {...slider} className="swiper testimonial-slider">
          <div className="swiper-wrapper">
            <SwiperSlide
              className="swiper-slide wow animate fadeInUp"
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
              className="swiper-slide wow animate fadeInUp"
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
                      src="assets/images/testimonial/testiminial-2.jpg"
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
          </div>
          <div
            className="slider-navigations wow animate fadeInUp"
            data-wow-delay="200ms"
            data-wow-duration="1500ms"
          >
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

export default Testimonial1;
