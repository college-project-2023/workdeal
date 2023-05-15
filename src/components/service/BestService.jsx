import Link from "next/link";
import React from "react";
import popularService from "../../data/service/popular-Services.json";
function BestService() {
  return (
    <section className="best-services">
      <div className="container">
        <div className="row">
          <div
            className="col-12 wow animate fadeInUp"
            data-wow-delay="200ms"
            data-wow-duration="1500ms"
          >
            <div className="sec-title layout-3">
              <h2>Best Services</h2>
              <p>
                Aenean fermentum sapien ac aliquet gravida. Fusce a ipsum metus.
                answerala Suspendisse oi potenti. Nullam ac lorem ex. Ut feugiat
                maximus ante, vel gravida ex.
              </p>
            </div>
          </div>
        </div>
        <div className="row g-4">
          {popularService.slice(0, 6).map((item) => {
            const { id, tag, thumb, author_thumb, author_name, title, price } =
              item;
            return (
              <div
                key={id}
                className="col-md-6 col-lg-4 wow animate fadeInLeft"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <div className="single-service layout-2 layout-3">
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
        <div
          className="view-more wow animate fadeInUp"
          data-wow-delay="400ms"
          data-wow-duration="1500ms"
        >
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
    </section>
  );
}

export default BestService;
