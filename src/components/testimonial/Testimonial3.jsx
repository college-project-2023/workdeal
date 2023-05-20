import React, { useState } from "react";
import ReactModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Navigation, Pagination, Autoplay]);
function Testimonial3() {
  const [isOpen, setIsOpen] = useState(false);
  const slider = {
    slidesPerView: "auto",
    spaceBetween: 25,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next-c",
      prevEl: ".swiper-button-prev-c",
    },
  };
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <section className="testimonial-three">
      <div className="container">
        <div className="row">
          <div
            className="col-12 wow animate fadeInUp"
            data-wow-delay="200ms"
            data-wow-duration="1500ms"
          >
            <div className="sec-title layout-3 white">
              <h2>Testimonial</h2>
              <p>
                Aenean fermentum sapien ac aliquet gravida. Fusce a ipsum metus.
                answerala Suspendisse oi potenti. Nullam ac lorem ex. Ut feugiat
                maximus ante, vel gravida ex.
              </p>
            </div>
          </div>
        </div>
        <Swiper {...slider} className="swiper testimonial-slider-three">
          <div className="swiper-wrapper">
            <SwiperSlide
              className="swiper-slide wow animate fadeInLeft"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <div className="testimonial-slide-three">
                <div className="testimonial-thumb">
                  <img
                    src="assets/images/testimonial/testimonial-author-1.jpg"
                    alt=""
                  />
                  <div className="video">
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
                <div className="testimonial-cnt">
                  <i className="fas fa-quote-left" />
                  <p>
                    Suspendisse potenti. Suspendisse potenti. Phasellus sed
                    ultricesei an arcu. Donec commodo lobortis purus quis
                    dictum. Sed aliquamtinl tela ante tortor, vel dapibus mi
                    tempor sit amet. Proin lacinia egestasai goj pretium. Nunc
                    tempor condimentum velit, ac molestie neque.
                  </p>
                  <h4>Johan Martinal</h4>
                  <span>CEO Founder</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide
              className="swiper-slide wow animate fadeInLeft"
              data-wow-delay="400ms"
              data-wow-duration="1500ms"
            >
              <div className="testimonial-slide-three">
                <div className="testimonial-thumb">
                  <img
                    src="assets/images/testimonial/testimonial-author-2.jpg"
                    alt=""
                  />
                  <div className="video">
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
                <div className="testimonial-cnt">
                  <i className="fas fa-quote-left" />
                  <p>
                    Suspendisse potenti. Suspendisse potenti. Phasellus sed
                    ultricesei an arcu. Donec commodo lobortis purus quis
                    dictum. Sed aliquamtinl tela ante tortor, vel dapibus mi
                    tempor sit amet. Proin lacinia egestasai goj pretium. Nunc
                    tempor condimentum velit, ac molestie neque.
                  </p>
                  <h4>Jecob Melon</h4>
                  <span>CO Founder</span>
                </div>
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

export default Testimonial3;
