import Link from "next/link";
import React, { useMemo } from "react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import serviceData from "../../data/service/creative_services.json";
SwiperCore.use([Navigation, Pagination, Autoplay]);

function CreativeService2() {
  const slide = useMemo(() => {
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
        // when window width is >= 480px
        480: {
          slidesPerView: 2,
        },
        // when window width is >= 768px
        768: {
          slidesPerView: 3,
        },
        // when window width is >= 992px
        992: {
          slidesPerView: 4,
        },
      },
    };
  }, []);
  return (
    <section id="category" className="creative-services sec-p">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="sec-title layout-2">
              <div className="title-left">
                <span>Category</span>
                <h2>See Our All Creative Services</h2>
              </div>
              <div className="title-right">
                <div className="slider-two-navigations">
                  <div className="swiper-button-prev-c">
                    <i className="bi bi-arrow-left" />
                  </div>
                  <div className="swiper-button-next-c">
                    <i className="bi bi-arrow-right" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Swiper {...slide} className="swiper creative-service-slider-two">
          <div className="swiper-wrapper">
            {serviceData.map((item) => {
              const { id, service_img_2, service_name, item_number } = item;
              return (
                <SwiperSlide
                  key={id}
                  className="swiper-slide wow animate fadeInLeft"
                  data-wow-delay="200ms"
                  data-wow-duration="1500ms"
                >
                  <div className="creative-service-layout-2">
                    <div className="thumb">
                      <img src={service_img_2} alt="" />
                    </div>
                    <div className="creative-inner-service">
                      <h4>
                        <Link legacyBehavior href="/service-details">
                          <a>{service_name}</a>
                        </Link>
                      </h4>
                      <span>{item_number} Services</span>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </div>
        </Swiper>
      </div>
    </section>
  );
}

export default CreativeService2;
