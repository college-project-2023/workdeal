import Link from "next/link";
import React from "react";
//import BlogSidebar from "../components/blog/BlogSidebar";
import Brands from "../components/common/Brands";
import Breadcrumb from "../components/common/Breadcrumb";
import blogStandardData from "../data/blog/blg_standard_data.json";
import Layout from "./../components/layout/Layout";
function BlogStandardPage() {
  return (
    <Layout>
      <Breadcrumb pageName="Blog Standard" pageTitle="Blog Standard" />
      <section id="down" className="blog-sidebar-area sec-m-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog-sidebar-details">
                {blogStandardData.map((item) => {
                  const {
                    id,
                    author_img,
                    img_thum,
                    auhtor_name,
                    date,
                    comment_number,
                    title,
                    description,
                  } = item;
                  return (
                    <div key={id} className="single-blog-standard">
                      <div
                        className="blog-standard-thumb wow animate fadeInUp"
                        data-wow-delay="200ms"
                        data-wow-duration="1500ms"
                      >
                        <Link legacyBehavior href="/blog-details">
                          <a>
                            <img src={img_thum} alt="" />
                          </a>
                        </Link>
                        <div className="blog-author">
                          <Link legacyBehavior href="/blog-details">
                            <a>
                              <img src={author_img} alt="" />
                            </a>
                          </Link>
                          <Link legacyBehavior href="/blog-details">
                            <a>{auhtor_name}</a>
                          </Link>
                        </div>
                      </div>
                      <div
                        className="blog-inner wow animate fadeInUp"
                        data-wow-delay="400ms"
                        data-wow-duration="1500ms"
                      >
                        <div className="date-cmnt">
                          <Link legacyBehavior href="#">
                            <a>
                              <i className="bi bi-calendar-week" />
                              &nbsp;
                              {date}
                            </a>
                          </Link>
                          <Link legacyBehavior href="#">
                            <a>
                              <i className="bi bi-chat-left-text" />
                              {comment_number} Comments
                            </a>
                          </Link>
                        </div>
                        <h4>
                          <Link legacyBehavior href="/blog-details">
                            <a>{title}</a>
                          </Link>
                        </h4>
                        <p>{description}</p>
                        <div className="view-post-and-socail">
                          <Link legacyBehavior href="/blog-details">
                            <a>
                              Read more
                              <span>
                                <i className="bi bi-arrow-right" />
                              </span>
                            </a>
                          </Link>
                          <ul className="author-social">
                            <li>
                              <a href="https://www.facebook.com">
                                <i className="fab fa-facebook-f" />
                              </a>
                            </li>
                            <li>
                              <a href="https://www.twitter.com">
                                <i className="fab fa-twitter" />
                              </a>
                            </li>
                            <li>
                              <a href="https://www.pinterest.com">
                                <i className="fab fa-pinterest-p" />
                              </a>
                            </li>
                            <li>
                              <a href="https://www.instagram.com">
                                <i className="fab fa-instagram" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div
                className="paginatation wow animate fadeInUp"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <ul className="paginate">
                  <li>
                    <a href="#">Previous</a>
                  </li>
                  <li>
                    <a href="#">01</a>
                  </li>
                  <li className="active">
                    <a href="#">02</a>
                  </li>
                  <li>
                    <a href="#">03</a>
                  </li>
                  <li>
                    <a href="#">Next</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Brands />
    </Layout>
  );
}

export default BlogStandardPage;
