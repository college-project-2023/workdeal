import Link from "next/link";
import React from "react";
import blogData from "../../data/blog/blog_data.json";
function Home1Blog() {
  return (
    <section className="lastest-blog sec-m">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="sec-title layout-1">
              <div className="title-left">
                <span>Blog Post</span>
                <h2>Our Latest Post</h2>
              </div>
              <div className="title-right">
                <strong>Our Latest Post</strong>
                <Link legacyBehavior href="/blog.">
                  <a>
                    View All Post
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
          {blogData.slice(0, 3).map((item) => {
            const { id, img, date, title } = item;
            return (
              <div
                key={id}
                className="col-md-6 col-lg-4 wow animate fadeInUp"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <div className="single-blog">
                  <div className="blog-thumb">
                    <Link legacyBehavior href="/blog-details">
                      <a>
                        <img src={img} alt="" />
                      </a>
                    </Link>
                  </div>
                  <div className="blog-inner">
                    <span>
                      <i className="bi bi-calendar-week" />
                      &nbsp;{date}
                    </span>
                    <h4>
                      <Link legacyBehavior href="/blog-details">
                        <a>{title}</a>
                      </Link>
                    </h4>
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

export default Home1Blog;
