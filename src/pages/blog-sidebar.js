import Link from "next/link";
import React from "react";
//import BlogSidebar from "../components/blog/BlogSidebar";
import Breadcrumb from "../components/common/Breadcrumb";
import blogData from "../data/blog/blog_data.json";
import Brands from "./../components/common/Brands";
import Layout from "./../components/layout/Layout";
function BlogSidebarPage() {
  return (
    <Layout>
      <Breadcrumb pageName="Blog Sidebar" pageTitle="Blog Sidebar" />
      <section id="down" className="blog-sidebar-area sec-m-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog-sidebar-details">
                <div className="row g-4">
                  {blogData.slice(0, 6).map((item) => {
                    const { id, img, date, title } = item;
                    return (
                      <div
                        key={id}
                        className="col-md-6 wow animate fadeInLeft"
                        data-wow-delay="200ms"
                        data-wow-duration="1500ms"
                      >
                        <div className="single-blog layout-2">
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
              <div
                className="paginatation wow animate fadeInUp"
                data-wow-delay="400ms"
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

export default BlogSidebarPage;
