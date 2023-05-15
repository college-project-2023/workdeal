import Link from "next/link";
import React from "react";
import blogData from "../../data/blog/blog_data.json";
function Home3Blog3() {
  return (
    <section className="lastest-blog-three sec-m">
      <div className="container">
        <div className="row">
          <div
            className="col-12 wow animate fadeInUp"
            data-wow-delay="200ms"
            data-wow-duration="1500ms"
          >
            <div className="sec-title layout-3">
              <h2>Latest Post</h2>
              <p>
                Aenean fermentum sapien ac aliquet gravida. Fusce a ipsum metus.
                answerala Suspendisse oi potenti. Nullam ac lorem ex. Ut feugiat
                maximus ante, vel gravida ex.
              </p>
            </div>
          </div>
        </div>
        <div className="row g-4">
          {blogData.slice(0, 3).map((item) => {
            const { id, img, date, title, description } = item;
            return (
              <div
                key={id}
                className="col-md-6 col-lg-4 wow animate fadeInLeft"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <div className="single-blog layout-3">
                  <div className="blog-thumb">
                    <Link legacyBehavior href="/blog-details">
                      <a>
                        <img src={img} alt="" />
                      </a>
                    </Link>
                    <div className="date">
                      <span>{date}</span>
                    </div>
                  </div>
                  <div className="blog-inner">
                    <h4>
                      <Link legacyBehavior href="/blog-details">
                        <a>{title}</a>
                      </Link>
                    </h4>
                    <p>{description}</p>
                    <Link legacyBehavior href="/blog-details">
                      <a>
                        Read more
                        <span>
                          <i className="bi bi-arrow-right" />
                        </span>
                      </a>
                    </Link>
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

export default Home3Blog3;
