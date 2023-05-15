import Link from "next/link";
import React from "react";
import serviceData from "../../data/service/popular-Services.json";
function OtherServices() {
  return (
    <section className="other-services-two sec-m-top">
      <div className="container">
        <div className="other-services">
          <h3>Other Services</h3>
          <div className="row g-4">
            {serviceData.slice(0, 3).map((item) => {
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
                <div
                  key={id}
                  className="col-md-6 col-lg-4 wow animate fadeInLeft"
                  data-wow-delay="200ms"
                  data-wow-duration="1500ms"
                >
                  <div className="single-service layout-2">
                    <div className="thumb">
                      <Link legacyBehavior href="#">
                        <a>
                          <img src={thumb} alt="" />
                        </a>
                      </Link>
                      <div className="tag">
                        <Link legacyBehavior href="/service">
                          <a>{tag}</a>
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
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default OtherServices;
