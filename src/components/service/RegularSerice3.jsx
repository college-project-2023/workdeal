import Link from "next/link";
import React, { useMemo } from "react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import regularserviceData from "../../data/service/popular-Services.json";
SwiperCore.use([Navigation, Pagination, Autoplay]);
function RegularSerice3() {
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
        // when window width is >= 480px
        480: {
          slidesPerView: 2,
        },
        // when window width is >= 768px
        768: {
          slidesPerView: 2,
        },
        // when window width is >= 992px
        992: {
          slidesPerView: 3,
        },
      },
    };
  }, []);
  return (
    <section className="regular-services sec-m-top">
      <div className="container">
        <div className="row">
          <div
            className="col-12 wow animate fadeInUp"
            data-wow-delay="200ms"
            data-wow-duration="1500ms"
          >
            <div className="sec-title layout-3 left">
              <h2>Regular Services</h2>
              <p>
                Aenean fermentum sapien ac aliquet gravida. Fusce a ipsum metus.
                answerala Suspendisse oi potenti. Nullam ac lorem ex. Ut feugiat
                maximus ante, vel gravida ex.
              </p>
              <div className="slider-navigations">
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
        <Swiper {...slider} className="swiper regular-service-slider">
          <div className="swiper-wrapper">
            {regularserviceData.slice(0, 3).map((item) => {
              const {
                id,
                tag,
                thumb,
                author_thumb,
                author_name,
                title,
                price,
              } = item;
              return (
                <SwiperSlide
                  key={id}
                  className="swiper-slide wow animate fadeInLeft"
                  data-wow-delay="600ms"
                  data-wow-duration="1500ms"
                >
                  <div className="single-service layout-2 layout-3">
                    <div className="thumb">
                      <Link legacyBehavior href="#">
                        <img src={thumb} alt="" />
                      </Link>
                      <div className="tag">
                        <Link legacyBehavior href="/service">
                          {tag}
                        </Link>
                      </div>
                      <div className="wish">
                        <Link legacyBehavior href="/account">
                          <a>
                            <i className="bi bi-suit-heart" />
                          </a>
                        </Link>
                      </div>
                    </div>
                    <div className="single-inner">
                      <div className="author-info">
                        <div className="author-thumb">
                          <img src={author_thumb} alt="" />
                        </div>
                        <div className="author-content">
                          <span>{author_name}</span>
                          <div className="ratting">
                            <ul className="stars">
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <i className="fas fa-star" />
                              </li>
                            </ul>
                            <strong>(5/5)</strong>
                          </div>
                        </div>
                      </div>
                      <h4>
                        <Link legacyBehavior href="/service-details">
                          <a>{title}</a>
                        </Link>
                      </h4>
                      <div className="started">
                        <Link legacyBehavior href="/service-details">
                          <a>
                            View Details
                            <span>
                              <i className="bi bi-arrow-right" />
                            </span>
                          </a>
                        </Link>
                        <span>
                          <small>$</small>
                          {price}
                        </span>
                      </div>
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

export default RegularSerice3;
