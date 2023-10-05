import Link from "next/link";

import React, { useMemo,useContext } from "react";
import { MyContext } from "../context";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import serviceData from "../../data/service/creative_services.json";

SwiperCore.use([Navigation, Pagination, Autoplay]);
function CreativeService() {

  const handleServiceClick = (val)=>{
    updateVariable({
      location: "",
      category: val,
      pricerange: "",
      rating: "",
    });
  }


  const { serviceType, updateVariable } = useContext(MyContext);
  
  const handleService = (input) => {
    console.log(input);
    updateVariable({"location":"","category":input,"pricerange":"","rating":""});
  }

  const slider = useMemo(() => {
    return {
      slidesPerView: 6,
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
          slidesPerView: 5,
        },
        // when window width is >= 1200px
        1200: {
          slidesPerView: 6,
        },
      },
    };
  }, []);
  return (
    <section id="category" className="creative-services sec-p-top">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div
              className="sec-title layout-1 wow animate fadeInUp"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <div className="title-left">
                <span>Category</span>
                <h2>See All Creative Services</h2>
              </div>
              <div className="title-right">
                <strong>Category</strong>
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
        </div>
        <Swiper {...slider} className="swiper creative-service-slider">
          <div className="swiper-wrapper">
            {serviceData.map((item) => {
              const { id, serVice_img_1, service_name, item_number } = item;
              return (
                <SwiperSlide key={id} className="swiper-slide">
                  <div
                    className="creative-service wow animate fadeInDown"
                   
                    data-wow-delay="200ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="thumb">
                      <img src={serVice_img_1} alt="" />
                      <div className="cre-service-inner">
                        <strong>{item_number}</strong>
                        <span>Items</span>
                      </div>
                    </div>
                    <h6>
                      <Link legacyBehavior href="/service">
                        <a onClick={()=>handleServiceClick(service_name)}>{service_name}</a>
                      </Link>
                    </h6>
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

export default CreativeService;
