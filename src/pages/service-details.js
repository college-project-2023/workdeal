import Link from "next/link";
import React from "react";
import OtherServices from "../components/service/OtherServices";
import Brands from "./../components/common/Brands";
import Breadcrumb from "./../components/common/Breadcrumb";
import Layout from "./../components/layout/Layout";

function ServiceDetailsPage() {
  return (
    <Layout>
      <Breadcrumb pageName="Service Details" pageTitle="Service Details" />
      <section id="down" className="services-details-area sec-m-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="service-details">
                <div className="service-details-thumbnail">
                  <img
                    src="assets/images/services/service-details.jpg"
                    alt=""
                  />
                </div>
                <h2>
                  Cleaning Package (Bedroom + Sofa + Furniture + Bathroom)
                </h2>
                <div
                  className="service-tabs wow animate fadeInUp"
                  data-wow-delay="200ms"
                  data-wow-duration="1500ms"
                >
                  <ul className="nav nav-pills" id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link active"
                        id="pills-home-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-home"
                        type="button"
                        role="tab"
                        aria-controls="pills-home"
                        aria-selected="true"
                      >
                        Overview
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="pills-profile-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-profile"
                        type="button"
                        role="tab"
                        aria-controls="pills-profile"
                        aria-selected="false"
                      >
                        Details
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="pills-contact-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-contact"
                        type="button"
                        role="tab"
                        aria-controls="pills-contact"
                        aria-selected="false"
                      >
                        Client Review
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="pills-faq-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-faq"
                        type="button"
                        role="tab"
                        aria-controls="pills-faq"
                        aria-selected="false"
                      >
                        FAQ
                      </button>
                    </li>
                  </ul>
                  <div className="tab-content" id="pills-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="pills-home"
                      role="tabpanel"
                      aria-labelledby="pills-home-tab"
                    >
                      <div
                        className="service-overview  wow animate fadeInRight"
                        data-wow-delay="400ms"
                        data-wow-duration="1500ms"
                      >
                        <h4>Plumbing Training</h4>
                        <p>
                          Obtain pain of because is pain, but because you nally
                          circumstances more than some work um soluta nobis est
                          eligendi optio cumque nihil impedit quo minus id
                          quodOne advanced diverted domestic repeated bringing
                          you old. Possible procured her trifling
                        </p>
                        <div className="package">
                          <h4>Our Package</h4>
                          <ul className="package-list">
                            <li>
                              <i className="bi bi-check-all" />
                              Page Load (time, size, number of requests).
                            </li>
                            <li>
                              <i className="bi bi-check-all" />
                              Adance Data analysis operation.
                            </li>
                          </ul>
                        </div>
                        <div className="include-exclude">
                          <h4>What’s Included</h4>
                          <ul>
                            <li>
                              <i className="bi bi-circle-fill" />
                              There are many variations of passages of Lorem
                              Ipsum.
                            </li>
                            <li>
                              <i className="bi bi-circle-fill" />
                              Water Heater Repair Services
                            </li>
                            <li>
                              <i className="bi bi-circle-fill" />
                              Toilet Repair
                            </li>
                          </ul>
                        </div>
                        <div className="include-exclude">
                          <h4>What’s Excluded</h4>
                          <ul>
                            <li>
                              <i className="bi bi-circle-fill" />
                              Price of additional materials or parts (if needed)
                            </li>
                            <li>
                              <i className="bi bi-circle-fill" />
                              Transportation cost for carrying new
                              materials/parts (if applicable)
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="pills-profile"
                      role="tabpanel"
                      aria-labelledby="pills-profile-tab"
                    >
                      <div className="package">
                        <h4>Our Package</h4>
                        <ul className="package-list">
                          <li>
                            <i className="bi bi-check-all" />
                            Page Load (time, size, number of requests).
                          </li>
                          <li>
                            <i className="bi bi-check-all" />
                            Adance Data analysis operation.
                          </li>
                          <li>
                            <i className="bi bi-check-all" />
                            Possible procured her trifling Obtain pain.
                          </li>
                        </ul>
                      </div>
                      <br />
                      <p>
                        Obtain pain of because is pain, but because you nally
                        circumstances more than some work um soluta nobis est
                        eligendi optio cumque nihil impedit quo minus id quodOne
                        advanced diverted domestic repeated bringing you old.
                        Possible procured her trifling
                      </p>
                      <br />
                      <p>
                        Circumstances more than some work um soluta nobis est
                        eligendi optio cumque nihil impedit quo minus id quodOne
                        advanced diverted domestic repeated bringing you old.
                        Possible procured her trifling Obtain pain of because is
                        pain, but because you nally circumstances more than some
                        work um soluta nobis est eligendi optio cumque nihil
                        impedit quo minus id quodOne advanced diverted domestic
                        repeated bringing you old. Possible procured her
                        trifling
                      </p>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="pills-contact"
                      role="tabpanel"
                      aria-labelledby="pills-contact-tab"
                    >
                      <div className="client-review">
                        <h4>Review of Painting Services in Mirpur</h4>
                        <div className="tab-review">
                          <h5>Johan Martin</h5>
                          <div className="review-rating">
                            <ul>
                              <li>
                                <i className="bi bi-star-fill" />
                              </li>
                              <li>
                                <i className="bi bi-star-fill" />
                              </li>
                              <li>
                                <i className="bi bi-star-fill" />
                              </li>
                              <li>
                                <i className="bi bi-star-fill" />
                              </li>
                              <li>
                                <i className="bi bi-star" />
                              </li>
                            </ul>
                          </div>
                          <p>
                            Obtain pain of because is pain, but because you
                            nally circumstances more than some work um soluta
                            nobis est eligendi optio cumque nihil impedit quo
                            minus id quodOne advanced diverted domestic repeated
                            bringing you old. Possible procured her trifling
                          </p>
                        </div>
                        <div className="tab-review">
                          <h5>Johan Martin</h5>
                          <div className="review-rating">
                            <ul>
                              <li>
                                <i className="bi bi-star-fill" />
                              </li>
                              <li>
                                <i className="bi bi-star-fill" />
                              </li>
                              <li>
                                <i className="bi bi-star-fill" />
                              </li>
                              <li>
                                <i className="bi bi-star-fill" />
                              </li>
                              <li>
                                <i className="bi bi-star" />
                              </li>
                            </ul>
                          </div>
                          <p>
                            Obtain pain of because is pain, but because you
                            nally circumstances more than some work um soluta
                            nobis est eligendi optio cumque nihil impedit quo
                            minus id quodOne.
                          </p>
                        </div>
                        <div className="tab-review">
                          <h5>Johan Martin</h5>
                          <div className="review-rating">
                            <ul>
                              <li>
                                <i className="bi bi-star-fill" />
                              </li>
                              <li>
                                <i className="bi bi-star-fill" />
                              </li>
                              <li>
                                <i className="bi bi-star-fill" />
                              </li>
                              <li>
                                <i className="bi bi-star-fill" />
                              </li>
                              <li>
                                <i className="bi bi-star" />
                              </li>
                            </ul>
                          </div>
                          <p>
                            Eligendi optio cumque nihil impedit quo minus id
                            quodOne advanced diverted domestic repeated bringing
                            you old. Possible procured her trifling
                          </p>
                        </div>
                        <a className="view-all-review-btn" href="#">
                          View All Reviews
                        </a>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="pills-faq"
                      role="tabpanel"
                      aria-labelledby="pills-faq-tab"
                    >
                      <div className="faqs-content">
                        <div className="accordion" id="accordionExample">
                          <div className="accordion-item">
                            <span className="accordion-header" id="headingone">
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseone"
                                aria-expanded="false"
                                aria-controls="collapseone"
                              >
                                01. How can OnDemand Services help me?
                              </button>
                            </span>
                            <div
                              id="collapseone"
                              className="accordion-collapse collapse"
                              aria-labelledby="headingone"
                              data-bs-parent="#accordionExample"
                            >
                              <div className="accordion-body">
                                Auction sites present consumers with a
                                thrilling, competitive way to buy the goods and
                                services they need most. But getting your own
                                auction site up and running has always required
                                learning complex coding languages, or hiring an
                                expensive design.
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <span className="accordion-header" id="headingtwo">
                              <button
                                className="accordion-button"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapsetwo"
                                aria-expanded="true"
                                aria-controls="collapsetwo"
                              >
                                02. What is the Printing Quality?
                              </button>
                            </span>
                            <div
                              id="collapsetwo"
                              className="accordion-collapse collapse show"
                              aria-labelledby="headingtwo"
                              data-bs-parent="#accordionExample"
                            >
                              <div className="accordion-body">
                                Auction sites present consumers with a
                                thrilling, competitive way to buy the goods and
                                services they need most. But getting your own
                                auction site up and running has always required
                                learning complex coding languages, or hiring an
                                expensive design.
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <span
                              className="accordion-header"
                              id="headingthree"
                            >
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapsethree"
                                aria-expanded="false"
                                aria-controls="collapsethree"
                              >
                                03.Can I request a service with an on-site
                                consultant?
                              </button>
                            </span>
                            <div
                              id="collapsethree"
                              className="accordion-collapse collapse"
                              aria-labelledby="headingthree"
                              data-bs-parent="#accordionExample"
                            >
                              <div className="accordion-body">
                                Auction sites present consumers with a
                                thrilling, competitive way to buy the goods and
                                services they need most. But getting your own
                                auction site up and running has always required
                                learning complex coding languages, or hiring an
                                expensive design.
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <span className="accordion-header" id="headingfour">
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapsefour"
                                aria-expanded="false"
                                aria-controls="collapsefour"
                              >
                                04. Who is the service provider for On-Demand
                                Delivery?
                              </button>
                            </span>
                            <div
                              id="collapsefour"
                              className="accordion-collapse collapse"
                              aria-labelledby="headingfour"
                              data-bs-parent="#accordionExample"
                            >
                              <div className="accordion-body">
                                Auction sites present consumers with a
                                thrilling, competitive way to buy the goods and
                                services they need most. But getting your own
                                auction site up and running has always required
                                learning complex coding languages, or hiring an
                                expensive design.
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <span className="accordion-header" id="headingfive">
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapsefive"
                                aria-expanded="false"
                                aria-controls="collapsefive"
                              >
                                05. Do I pay processing fees on delivery
                                charges?
                              </button>
                            </span>
                            <div
                              id="collapsefive"
                              className="accordion-collapse collapse"
                              aria-labelledby="headingfive"
                              data-bs-parent="#accordionExample"
                            >
                              <div className="accordion-body">
                                Auction sites present consumers with a
                                thrilling, competitive way to buy the goods and
                                services they need most. But getting your own
                                auction site up and running has always required
                                learning complex coding languages, or hiring an
                                expensive design.
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <span className="accordion-header" id="headingsix">
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapsesix"
                                aria-expanded="false"
                                aria-controls="collapsesix"
                              >
                                06.How should I prepare my business for an
                                On-Demand ?
                              </button>
                            </span>
                            <div
                              id="collapsesix"
                              className="accordion-collapse collapse"
                              aria-labelledby="headingsix"
                              data-bs-parent="#accordionExample"
                            >
                              <div className="accordion-body">
                                Auction sites present consumers with a
                                thrilling, competitive way to buy the goods and
                                services they need most. But getting your own
                                auction site up and running has always required
                                learning complex coding languages, or hiring an
                                expensive design.
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <span
                              className="accordion-header"
                              id="headingseven"
                            >
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseseven"
                                aria-expanded="false"
                                aria-controls="collapseseven"
                              >
                                07. What kind of support do you get from?
                              </button>
                            </span>
                            <div
                              id="collapseseven"
                              className="accordion-collapse collapse"
                              aria-labelledby="headingseven"
                              data-bs-parent="#accordionExample"
                            >
                              <div className="accordion-body">
                                Auction sites present consumers with a
                                thrilling, competitive way to buy the goods and
                                services they need most. But getting your own
                                auction site up and running has always required
                                learning complex coding languages, or hiring an
                                expensive design.
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="service-sidebar">
                <div
                  className="service-widget wow animate fadeInRight"
                  data-wow-delay="200ms"
                  data-wow-duration="1500ms"
                >
                  <div className="service-pack">
                    <h4>
                      Service Price{" "}
                      <span>
                        <small>$</small>250
                      </span>
                    </h4>
                    <div className="package">
                      <h4>Our Package</h4>
                      <ul className="package-list">
                        <li>
                          <i className="bi bi-check-all" />
                          Garbage Disposal Services
                        </li>
                        <li>
                          <i className="bi bi-check-all" />
                          Water Heater Repair Services
                        </li>
                        <li>
                          <i className="bi bi-check-all" />
                          Toilet Repair
                        </li>
                        <li>
                          <i className="bi bi-check-all" />
                          Kitchen Cleaner
                        </li>
                      </ul>
                    </div>
                    <div className="book-btn">
                      <Link legacyBehavior href="/contact">
                        <a>Order Now</a>
                      </Link>
                    </div>
                  </div>
                </div>
                <div
                  className="service-widget wow animate fadeInRight"
                  data-wow-delay="400ms"
                  data-wow-duration="1500ms"
                >
                  <div className="about-seller">
                    <div className="thumb">
                      <img src="assets/images/seller.png" alt="" />
                    </div>
                    <h3>About Seller</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ipsum molestie adipiscing fermentum lectus.
                    </p>
                    <div className="seller-information">
                      <div className="single-info">
                        <h5>
                          Order Complete<span>2000</span>
                        </h5>
                      </div>
                      <div className="single-info">
                        <h5>
                          Seller Rating
                          <strong>
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <b>(5/5)</b>
                          </strong>
                        </h5>
                      </div>
                    </div>
                    <ul className="seller-social">
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
            </div>
          </div>
        </div>
      </section>
      <OtherServices />
      <Brands />
    </Layout>
  );
}

export default ServiceDetailsPage;
