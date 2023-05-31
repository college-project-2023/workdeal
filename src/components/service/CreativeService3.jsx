import Link from "next/link";
import React, { useMemo } from "react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import serviceData from "../../data/service/creative_services.json";
SwiperCore.use([Navigation, Pagination, Autoplay]);
function CreativeService3() {
  const slide = useMemo(() => {
    return {
      spaceBetween: 25,
      slidesPerView: "auto",
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next-c",
        prevEl: ".swiper-button-prev-c",
      },
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 25,
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
        // when window width is >= 1200px
        1200: {
          slidesPerView: 6,
        },
      },
    };
  }, []);
  return (
    <section id="category" className="categorys sec-p">
      <div className="container">
        <div className="row">
          <div
            className="col-12 wow animate fadeInUp"
            data-wow-delay="200ms"
            data-wow-duration="1500ms"
          >
            <div className="sec-title layout-3">
              <h2>Category</h2>
              <p>
                Aenean fermentum sapien ac aliquet gravida. Fusce a ipsum metus.
                answerala Suspendisse oi potenti. Nullam ac lorem ex. Ut feugiat
                maximus ante, vel gravida ex.
              </p>
            </div>
          </div>
        </div>
        <Swiper {...slide} className="swiper category-slider">
          <div className="swiper-wrapper">
            {serviceData.map((item) => {
              const { id, service_img_3, service_name, bg_name } = item;
              return (
                <SwiperSlide
                  key={id}
                  className="swiper-slide wow animate fadeInLeft"
                  data-wow-delay="400ms"
                  data-wow-duration="1500ms"
                >
                  <div className="category-slide">
                    <div className={`thumb ${bg_name}`}>
                      <img src={service_img_3} alt="" />
                    </div>
                    <div className="category-inner">
                      <h4>
                        <Link legacyBehavior href="/service-details">
                          <a>{service_name}</a>
                        </Link>
                      </h4>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
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

export default CreativeService3;
