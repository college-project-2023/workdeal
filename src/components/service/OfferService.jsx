import Link from "next/link";
import React from "react";
import offerServicesData from "../../data/service/offere-service.json";
function OfferService() {
  return (
    <section className="offer-services sec-m-top">
      <div className="container">
        <div className="row">
          <div
            className="col-12 wow animate fadeInUp"
            data-wow-delay="200ms"
            data-wow-duration="1500ms"
          >
            <div className="sec-title layout-1">
              <div className="title-left">
                <span>Offered</span>
                <h2>Best Offered Services</h2>
              </div>
              <div className="title-right">
                <strong>For Your Home</strong>
                <Link legacyBehavior href="/service">
                  <a>
                    View All Services
                    <span>
                      <i className="bi bi-arrow-right" />
                    </span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row g-4">
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
              <div
                key={id}
                className="col-md-6 col-lg-4 wow animate fadeInLeft"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <div className="single-service">
                  <div className="thumb">
                    <Link legacyBehavior href="/service-details">
                      <a>
                        <img src={thumb} alt="" />
                      </a>
                    </Link>
                    <div className="tag">
                      <Link legacyBehavior href="/service">
                        <a>{offer}</a>
                      </Link>
                    </div>
                  </div>
                  <div className="single-inner">
                    <div className="author-info">
                      <div className="wish">
                        <Link legacyBehavior href="/account">
                          <a>
                            {" "}
                            <i className="bi bi-suit-heart" />
                          </a>
                        </Link>
                      </div>
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
                        <a> {title}</a>
                      </Link>
                    </h4>
                    <div className="started">
                      <span>
                        Started At :{" "}
                        <strong>
                          <small>$</small>
                          {price}
                        </strong>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default OfferService;
