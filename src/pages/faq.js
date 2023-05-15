import Link from "next/link";
import React from "react";
import Breadcrumb from "../components/common/Breadcrumb";
import Layout from "./../components/layout/Layout";

function FaqPage() {
  return (
    <Layout>
      <Breadcrumb pageName="FAQ" pageTitle="FAQ" />
      <section className="faq-area sec-m">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div
                className="widget-sidebar wow animate fadeInUp"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <h4>FAQ Category</h4>
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
            </div>
            <div className="col-lg-8">
              <div className="faqs-content">
                <div className="accordion" id="accordionExample">
                  <div
                    className="accordion-item wow animate fadeInUp"
                    data-wow-delay="200ms"
                    data-wow-duration="1500ms"
                  >
                    <h2 className="accordion-header" id="headingone">
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
                    </h2>
                    <div
                      id="collapseone"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingone"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Auction sites present consumers with a thrilling,
                        competitive way to buy the goods and services they need
                        most. But getting your own auction site up and running
                        has always required learning complex coding languages,
                        or hiring an expensive design.
                      </div>
                    </div>
                  </div>
                  <div
                    className="accordion-item wow animate fadeInUp"
                    data-wow-delay="300ms"
                    data-wow-duration="1500ms"
                  >
                    <h2 className="accordion-header" id="headingtwo">
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
                    </h2>
                    <div
                      id="collapsetwo"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingtwo"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Auction sites present consumers with a thrilling,
                        competitive way to buy the goods and services they need
                        most. But getting your own auction site up and running
                        has always required learning complex coding languages,
                        or hiring an expensive design.
                      </div>
                    </div>
                  </div>
                  <div
                    className="accordion-item wow animate fadeInUp"
                    data-wow-delay="400ms"
                    data-wow-duration="1500ms"
                  >
                    <h2 className="accordion-header" id="headingthree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapsethree"
                        aria-expanded="false"
                        aria-controls="collapsethree"
                      >
                        03. Can I request a service with an on-site consultant?
                      </button>
                    </h2>
                    <div
                      id="collapsethree"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingthree"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Auction sites present consumers with a thrilling,
                        competitive way to buy the goods and services they need
                        most. But getting your own auction site up and running
                        has always required learning complex coding languages,
                        or hiring an expensive design.
                      </div>
                    </div>
                  </div>
                  <div
                    className="accordion-item wow animate fadeInUp"
                    data-wow-delay="500ms"
                    data-wow-duration="1500ms"
                  >
                    <h2 className="accordion-header" id="headingfour">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapsefour"
                        aria-expanded="false"
                        aria-controls="collapsefour"
                      >
                        04. Who is the service provider for On-Demand Delivery?
                      </button>
                    </h2>
                    <div
                      id="collapsefour"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingfour"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Auction sites present consumers with a thrilling,
                        competitive way to buy the goods and services they need
                        most. But getting your own auction site up and running
                        has always required learning complex coding languages,
                        or hiring an expensive design.
                      </div>
                    </div>
                  </div>
                  <div
                    className="accordion-item wow animate fadeInUp"
                    data-wow-delay="600ms"
                    data-wow-duration="1500ms"
                  >
                    <h2 className="accordion-header" id="headingfive">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapsefive"
                        aria-expanded="false"
                        aria-controls="collapsefive"
                      >
                        05. Do I pay processing fees on delivery charges?
                      </button>
                    </h2>
                    <div
                      id="collapsefive"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingfive"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Auction sites present consumers with a thrilling,
                        competitive way to buy the goods and services they need
                        most. But getting your own auction site up and running
                        has always required learning complex coding languages,
                        or hiring an expensive design.
                      </div>
                    </div>
                  </div>
                  <div
                    className="accordion-item wow animate fadeInUp"
                    data-wow-delay="700ms"
                    data-wow-duration="1500ms"
                  >
                    <h2 className="accordion-header" id="headingsix">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapsesix"
                        aria-expanded="false"
                        aria-controls="collapsesix"
                      >
                        06. How should I prepare my business for an On-Demand ?
                      </button>
                    </h2>
                    <div
                      id="collapsesix"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingsix"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Auction sites present consumers with a thrilling,
                        competitive way to buy the goods and services they need
                        most. But getting your own auction site up and running
                        has always required learning complex coding languages,
                        or hiring an expensive design.
                      </div>
                    </div>
                  </div>
                  <div
                    className="accordion-item wow animate fadeInUp"
                    data-wow-delay="800ms"
                    data-wow-duration="1500ms"
                  >
                    <h2 className="accordion-header" id="headingseven">
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
                    </h2>
                    <div
                      id="collapseseven"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingseven"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Auction sites present consumers with a thrilling,
                        competitive way to buy the goods and services they need
                        most. But getting your own auction site up and running
                        has always required learning complex coding languages,
                        or hiring an expensive design.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default FaqPage;
