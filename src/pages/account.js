import React, { useState } from "react";
import CountUp from "react-countup";
import Order from "../components/acount/Order";
import UserProfile from "../components/acount/UserProfile";
import Breadcrumb from "../components/common/Breadcrumb";
import Layout from "./../components/layout/Layout";
function Accountpage() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible((prevState) => !prevState);
  };

  return (
    <Layout>
      <Breadcrumb pageTitle="My Account" pageName="My Account" />
      <section className="account-dashboard sec-m">
        <div className="container">
          <div className="dashboard-informations">
            <div className="dashboard-content align-items-start">
              <div
                className="nav flex-column nav-pills"
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical"
              >
                <button
                  className="nav-link active"
                  id="v-pills-home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-home"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-home"
                  aria-selected="true"
                >
                  <i className="bi bi-columns-gap" />
                  Dashboard
                </button>
                <button
                  className="nav-link"
                  id="v-pills-profile-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-profile"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-profile"
                  aria-selected="false"
                >
                  <i className="bi bi-person" />
                  My Profile
                </button>
                <button
                  className="nav-link"
                  id="v-pills-order-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-order"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-order"
                  aria-selected="false"
                >
                  <i className="bi bi-bag-check" />
                  All Order
                </button>
                <button
                  className="nav-link"
                  id="v-pills-settings-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-settings"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-settings"
                  aria-selected="false"
                >
                  <i className="bi bi-house-door" />
                  Address
                </button>
                <button
                  className="nav-link"
                  id="v-pills-logout-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-logout"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-logout"
                  aria-selected="false"
                >
                  <i className="bi bi-box-arrow-in-right" />
                  Logout
                </button>
              </div>
              <div className="tab-content" id="v-pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="v-pills-home"
                  role="tabpanel"
                  aria-labelledby="v-pills-home-tab"
                >
                  <div className="row g-4">
                    <div className="col-lg-6">
                      <div className="order-box">
                        <h5>Order Pending</h5>
                        <div className="box-inner">
                          <div className="icon">
                            <img
                              src="assets/images/icons/order-box-1.png"
                              alt=""
                            />
                          </div>
                          <h2>
                            {" "}
                            <CountUp start={0} end={223} duration={3} />
                          </h2>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="order-box">
                        <h5>Order Complate</h5>
                        <div className="box-inner">
                          <div className="icon">
                            <img
                              src="assets/images/icons/order-box-2.png"
                              alt=""
                            />
                          </div>
                          <h2>
                            {" "}
                            <CountUp start={0} end={121} duration={3} />
                          </h2>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="order-box">
                        <h5>Order Active</h5>
                        <div className="box-inner">
                          <div className="icon">
                            <img
                              src="assets/images/icons/order-box-3.png"
                              alt=""
                            />
                          </div>
                          <h2>
                            {" "}
                            <CountUp start={0} end={2523} duration={3} />
                          </h2>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="order-box">
                        <h5>Total Order</h5>
                        <div className="box-inner">
                          <div className="icon">
                            <img
                              src="assets/images/icons/order-box-4.png"
                              alt=""
                            />
                          </div>
                          <h2>
                            {" "}
                            <CountUp start={0} end={23223} duration={3} />
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-profile"
                  role="tabpanel"
                  aria-labelledby="v-pills-profile-tab"
                >
                  <div className="user-profile">
                    <div className="user-info">
                      <div className="thumb">
                        <img src="assets/images/user-1.jpg" alt="" />
                      </div>
                      <div className="user-desc">
                        <h3>Johan Martin SR-</h3>
                        <span>Co Founder</span>
                      </div>
                    </div>
                    <UserProfile />
                  </div>
                </div>
                <Order />
                <div
                  className="tab-pane fade"
                  id="v-pills-settings"
                  role="tabpanel"
                  aria-labelledby="v-pills-settings-tab"
                >
                  <div className="user-address">
                    <div className="head">
                      <h3>Save Your Address</h3>
                      <p>
                        Auction sites present consumers with a thrilling,
                        competitivenl way to buy the goods and services they
                        need most.
                      </p>
                    </div>
                    <div className="user-location">
                      <div className="user-loc">
                        <div className="icon">
                          <i className="bi bi-house-door" />
                        </div>
                        <p>At Home</p>
                        <div className="tooltip">
                          <div
                            className="contact-signle hover-border1 d-flex flex-row align-items-center wow fadeInDown"
                            data-wow-duration="1.5s"
                            data-wow-delay=".2s"
                            style={{
                              visibility: "visible",
                              animationDuration: "1.5s",
                              animationDelay: "0.2s",
                              animationName: "fadeInDown",
                            }}
                          >
                            <div className="icon">
                              <i className="bi bi-geo-alt" />
                            </div>
                            <div className="text">
                              <h4>Location</h4>
                              <p>
                                168/170, Ave 01,Old York Drive Rich Mirpur,
                                Dhaka
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="user-loc">
                        <div className="icon">
                          <i className="bi bi-house-door" />
                        </div>
                        <p>At Office</p>
                        <div className="tooltip">
                          <div
                            className="contact-signle hover-border1 d-flex flex-row align-items-center wow fadeInDown"
                            data-wow-duration="1.5s"
                            data-wow-delay=".2s"
                            style={{
                              visibility: "visible",
                              animationDuration: "1.5s",
                              animationDelay: "0.2s",
                              animationName: "fadeInDown",
                            }}
                          >
                            <div className="icon">
                              <i className="bi bi-geo-alt" />
                            </div>
                            <div className="text">
                              <h4>Location</h4>
                              <p>
                                168/170, Ave 01,Old York Drive Rich Mirpur,
                                Dhaka
                              </p>
                            </div>
                          </div>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-logout"
                  role="tabpanel"
                  aria-labelledby="v-pills-settings-tab"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Accountpage;
