import Link from "next/link";
import React from "react";
import Slider from "react-slick";
function Shop3() {
  const slider = {
    rows: 2,
    dots: true,
    arrows: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 6,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          arrows: false,
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 991,
        settings: {
          arrows: false,
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 576,
        settings: {
          arrows: false,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <section className="new-shop-here sec-m">
      <div className="container">
        <div className="row">
          <div
            className="col-12 wow animate fadeInUp"
            data-wow-delay="200ms"
            data-wow-duration="1500ms"
          >
            <div className="sec-title layout-2 special">
              <div className="title-left">
                <h2>new store has joined us</h2>
                <p>
                  Aenean fermentum sapien ac aliquet gravida. Fusce a ipsum
                  metus desin answerala Suspendisse oi potenti nullam ac lorem
                  ex ut feugiat.
                </p>
              </div>
              <div className="title-right">
                <Link legacyBehavior href="/service">
                  <a>
                    View All Shop
                    <span>
                      <i className="bi bi-arrow-right" />
                    </span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div
            className="slick-wrapper wow fadeInUp"
            data-wow-duration="1.5s"
            data-wow-delay="0.2s"
          >
            <Slider
              {...slider}
              id="shop-arrival"
              className="d-flex justify-content-center"
            >
              <div className="slide-item">
                <div className="new-shop">
                  <img src="assets/images/shop/new-arrival-1.png" alt="" />
                </div>
              </div>
              <div className="slide-item">
                <div className="new-shop">
                  <img src="assets/images/shop/new-arrival-2.png" alt="" />
                </div>
              </div>
              <div className="slide-item">
                <div className="new-shop">
                  <img src="assets/images/shop/new-arrival-3.png" alt="" />
                </div>
              </div>
              <div className="slide-item">
                <div className="new-shop">
                  <img src="assets/images/shop/new-arrival-4.png" alt="" />
                </div>
              </div>
              <div className="slide-item">
                <div className="new-shop">
                  <img src="assets/images/shop/new-arrival-5.png" alt="" />
                </div>
              </div>
              <div className="slide-item">
                <div className="new-shop">
                  <img src="assets/images/shop/new-arrival-6.png" alt="" />
                </div>
              </div>
              <div className="slide-item">
                <div className="new-shop">
                  <img src="assets/images/shop/new-arrival-7.png" alt="" />
                </div>
              </div>
              <div className="slide-item">
                <div className="new-shop">
                  <img src="assets/images/shop/new-arrival-8.png" alt="" />
                </div>
              </div>
              <div className="slide-item">
                <div className="new-shop">
                  <img src="assets/images/shop/new-arrival-9.png" alt="" />
                </div>
              </div>
              <div className="slide-item">
                <div className="new-shop">
                  <img src="assets/images/shop/new-arrival-10.png" alt="" />
                </div>
              </div>
              <div className="slide-item">
                <div className="new-shop">
                  <img src="assets/images/shop/new-arrival-11.png" alt="" />
                </div>
              </div>
              <div className="slide-item">
                <div className="new-shop">
                  <img src="assets/images/shop/new-arrival-12.png" alt="" />
                </div>
              </div>
              <div className="slide-item">
                <div className="new-shop">
                  <img src="assets/images/shop/new-arrival-1.png" alt="" />
                </div>
              </div>
              <div className="slide-item">
                <div className="new-shop">
                  <img src="assets/images/shop/new-arrival-2.png" alt="" />
                </div>
              </div>
              <div className="slide-item">
                <div className="new-shop">
                  <img src="assets/images/shop/new-arrival-3.png" alt="" />
                </div>
              </div>
              <div className="slide-item">
                <div className="new-shop">
                  <img src="assets/images/shop/new-arrival-4.png" alt="" />
                </div>
              </div>
              <div className="slide-item">
                <div className="new-shop">
                  <img src="assets/images/shop/new-arrival-5.png" alt="" />
                </div>
              </div>
              <div className="slide-item">
                <div className="new-shop">
                  <img src="assets/images/shop/new-arrival-6.png" alt="" />
                </div>
              </div>
              <div className="slide-item">
                <div className="new-shop">
                  <img src="assets/images/shop/new-arrival-7.png" alt="" />
                </div>
              </div>
              <div className="slide-item">
                <div className="new-shop">
                  <img src="assets/images/shop/new-arrival-8.png" alt="" />
                </div>
              </div>
              <div className="slide-item">
                <div className="new-shop">
                  <img src="assets/images/shop/new-arrival-9.png" alt="" />
                </div>
              </div>
              <div className="slide-item">
                <div className="new-shop">
                  <img src="assets/images/shop/new-arrival-10.png" alt="" />
                </div>
              </div>
              <div className="slide-item">
                <div className="new-shop">
                  <img src="assets/images/shop/new-arrival-11.png" alt="" />
                </div>
              </div>
              <div className="slide-item">
                <div className="new-shop">
                  <img src="assets/images/shop/new-arrival-12.png" alt="" />
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Shop3;
