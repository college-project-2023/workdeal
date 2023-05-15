import Link from "next/link";
import React from "react";

function BlogSidebar() {
  return (
    <div className="col-lg-4">
      <div className="blog-sidebar">
        <div
          className="widget-search wow animate fadeInUp"
          data-wow-delay="200ms"
          data-wow-duration="1500ms"
        >
          <form action="#" method="post">
            <input type="text" name="search" placeholder="Search Here" />
            <button type="submit">
              <i className="bi bi-search" />
            </button>
          </form>
        </div>
        <div
          className="widget-sidebar wow animate fadeInUp"
          data-wow-delay="300ms"
          data-wow-duration="1500ms"
        >
          <h4>Recent Post</h4>
          <div className="recent-post">
            <div className="recent-thumb">
              <Link legacyBehavior href="/blog-details">
                <a>
                  <img src="assets/images/blog/recent-post-1.jpg" alt="" />
                </a>
              </Link>
            </div>
            <div className="recent-post-cnt">
              <span>22 January 2023</span>
              <h5>
                <Link legacyBehavior href="/blog-details">
                  <a>Born the Cloud The Next Generation.</a>
                </Link>
              </h5>
            </div>
          </div>
          <div className="recent-post">
            <div className="recent-thumb">
              <Link legacyBehavior href="/blog-details.htm">
                <a>
                  <img src="assets/images/blog/recent-post-2.jpg" alt="" />
                </a>
              </Link>
            </div>
            <div className="recent-post-cnt">
              <span>01 February 2023</span>
              <h5>
                <Link legacyBehavior href="/blog-details">
                  <a>App Development Step By Step Guide.</a>
                </Link>
              </h5>
            </div>
          </div>
          <div className="recent-post">
            <div className="recent-thumb">
              <Link legacyBehavior href="/blog-details">
                <a>
                  <img src="assets/images/blog/recent-post-3.jpg" alt="" />
                </a>
              </Link>
            </div>
            <div className="recent-post-cnt">
              <span>12 January 2023</span>
              <h5>
                <Link legacyBehavior href="/blog-details">
                  <a>On demand Service Allows end user to used.</a>
                </Link>
              </h5>
            </div>
          </div>
          <div className="recent-post">
            <div className="recent-thumb">
              <Link legacyBehavior href="/blog-details">
                <a>
                  <img src="assets/images/blog/recent-post-4.jpg" alt="" />
                </a>
              </Link>
            </div>
            <div className="recent-post-cnt">
              <span>02 August 2023</span>
              <h5>
                <Link legacyBehavior href="/blog-details">
                  <a>Cloud Computing Enables The easy Provision.</a>
                </Link>
              </h5>
            </div>
          </div>
        </div>
        <div
          className="widget-sidebar wow animate fadeInUp"
          data-wow-delay="400ms"
          data-wow-duration="1500ms"
        >
          <h4>Category</h4>
          <ul className="category-list">
            <li>
              <Link legacyBehavior href="/service-details">
                <a>
                  Home Cleaning
                  <i className="bi bi-chevron-right" />
                </a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/service-details">
                <a>
                  Painting &amp; Renovation
                  <i className="bi bi-chevron-right" />
                </a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/service-details">
                <a>
                  Cleaning &amp; Pest Control
                  <i className="bi bi-chevron-right" />
                </a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/service-details">
                <a>
                  Emergency Services
                  <i className="bi bi-chevron-right" />
                </a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/service-details">
                <a>
                  Car Care Services
                  <i className="bi bi-chevron-right" />
                </a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/service-details">
                <a>
                  Electric &amp; Plumbing
                  <i className="bi bi-chevron-right" />
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div
          className="widget-sidebar wow animate fadeInUp"
          data-wow-delay="500ms"
          data-wow-duration="1500ms"
        >
          <h4>Post Tag</h4>
          <ul className="post-tags">
            <li>
              <Link legacyBehavior href="#">
                <a>Cleaning</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="#">
                <a>Car Care</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="#">
                <a>Painting</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="#">
                <a>Plumbing</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="#">
                <a>Post Control</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="#">
                <a>Car</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="#">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="#">
                <a>Car Services</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="#">
                <a>Car Care</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default BlogSidebar;
