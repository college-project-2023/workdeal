import Link from "next/link";
import React from "react";
import popularService from "../../data/service/popular-Services.json";
function PopularService() {
  return (
    <section className="popular-services sec-m-top">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div
              className="sec-title layout-1 wow animate fadeInUp"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <div className="title-left">
                <span>Services</span>
                <h2>Our Popular Services</h2>
              </div>
              <div className="title-right">
                <strong>Popular Services</strong>
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
          {popularService.slice(0, 3).map((item) => {
            const { id, tag, thumb, author_thumb, author_name, title, price } =
              item;
            return (
              <div
                key={id}
                className="col-md-6 col-lg-4 wow animate fadeInUp"
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
                        <a>{tag}</a>
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
                      <span>
                        Started At :
                        <strong>
                          <small>₹</small>250
                        </strong>
                      </span>
                      <Link legacyBehavior href="/service-details">
                        <a>
                          View Details
                          <span>
                            <i className="bi bi-arrow-right" />
                          </span>
                        </a>
                      </Link>
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

export default PopularService;
