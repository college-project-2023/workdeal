import Link from "next/link";
import React, { useMemo } from "react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import offerServicesData from "../../data/service/offere-service.json";
SwiperCore.use([Navigation, Pagination, Autoplay]);
function OfferService2() {
  const slider = useMemo(() => {
    return {
      slidesPerView: "auto",
      spaceBetween: 25,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
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
    <section className="offer-services sec-m-top">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="sec-title layout-2">
              <div
                className="title-left wow animate fadeInUp"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <span>Offered</span>
                <h2>Best Offered Services</h2>
              </div>
              <div className="title-right">
                <Link legacyBehavior href="/service">
                  <a>
                    View all services
                    <span>
                      <i className="bi bi-arrow-right" />
                    </span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Swiper {...slider} className="swiper offer-service-slider">
          <div className="swiper-wrapper">
            {offerServicesData.map((item) => {
              const {
                id,
                offer,
                thumb,
                author_thumb,
                author_name,
                title,
                price,
              } = item;
              return (
                <SwiperSlide
                  key={id}
                  className="swiper-slide  wow animate fadeInRight"
                  data-wow-delay="200ms"
                  data-wow-duration="1500ms"
                >
                  <div className="offer-service">
                    <div className="thumb">
                      <Link legacyBehavior href="/service-details">
                        <a>
                          <img src={thumb} alt="" />
                        </a>
                      </Link>
                      <div className="sell">
                        <div className="triangle-left" />
                        <div className="triangle-right" />
                        <span>{offer}</span>
                      </div>
                    </div>
                    <div className="offer-inner">
                      <div className="author-thumb">
                        <img src={author_thumb} alt="" />
                      </div>
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
                      <h4>
                        <Link legacyBehavior href="/service-details">
                          <a>{title}</a>
                        </Link>
                      </h4>
                      <div className="starting-price">
                        <span>
                          Started At :{" "}
                          <strong>
                            <small>$</small>
                            {price}
                          </strong>
                        </span>
                        <Link legacyBehavior href="/contact">
                          <a>Book Now</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </div>
          <div className="swiper-pagination" />
        </Swiper>
      </div>
    </section>
  );
}

export default OfferService2;
