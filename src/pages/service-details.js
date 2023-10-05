import Link from "next/link";
import React, { useContext, useState } from "react";
import Breadcrumb from "./../components/common/Breadcrumb";
import Layout from "./../components/layout/Layout";
import { MyContext } from "../components/context";
import { useEffect } from "react";
import axios from "axios";
import { Dialog, DialogTitle } from "@mui/material";
import { auth } from "../firebase/firebase";
var LoginPage = undefined;
var SignUpPage = undefined;
var OrderNow = undefined;
var OrderPlaced = undefined;
if (typeof window !== "undefined") {
  import("../components/service/ordernow").then((module) => {
    OrderNow = module.default;
  });
  import("../components/acount/login").then((module) => {
    LoginPage = module.default;
  });
  import("../components/acount/sign-up").then((module) => {
    SignUpPage = module.default;
  });
  import("../components/service/orderPlaced").then((module) => {
    OrderPlaced = module.default;
  });
}

function ServiceDetailsPage() {
  const [authentication, setAuthentication] = useState();
  const [orderPlaced, setOrderPlaced] = useState(false);
  const { serviceName } = useContext(MyContext);

  // useEffect(() => {
  //   const orderNowContainer = document.getElementById('orderNowContainer');
  //   const orderNowComponent = new OrderNow();
  //   orderNowContainer.appendChild(orderNowComponent.render()); 
  
  //   return () => {
  //     second
  //   }
  // }, [third])
  

  useEffect(() => {
    auth.onAuthStateChanged(function (user) {
      if (user) {
        if (serviceName.uid != undefined) {
          setAuthentication(user);
          setShowLogin(false);
          getOrders();
          getReviews();
          checkOrderPlaced();
        } else {
          window.location = "/service";
        }
      } else {
        setShowLogin(true);
      }
    });
  }, [serviceName, authentication]);

  function checkOrderPlaced() {
    axios
      .post("http://localhost:5000/check-for-order-placed", {
        orderToUid: serviceName.uid,
        orderByUid: auth.currentUser.uid,
      })
      .then((res) => {
        if (res.data == "placed") {
          setOrderPlaced(true);
        } else {
          setOrderPlaced(false);
        }
      });
  }

  const [totalOrders, setTotalOrders] = useState(0);
  function getOrders() {
    axios
      .post(`http://localhost:5000/get-orders-worker/`, {
        orderToUid: serviceName.uid,
      })
      .then((res) => {
        setTotalOrders(res.data.length);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const [reviews, setReviews] = useState([]);
  const [avgrate, setAvgRate] = useState(0);
  function getReviews() {
    axios
      .post("http://localhost:5000/get-review-worker", {
        uid: serviceName.uid,
      })
      .then((res) => {
        console.log(res.data);
        var data = res.data;
        setReviews(data);
        var avg = 0,
          sum = 0;
        for (var i = 0; i < data.length; i++) {
          sum = sum + Number(data[i].rating);
        }
        avg = sum / data.length;
        setAvgRate(avg);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const [showLogin, setShowLogin] = useState(false);
  const closeLogin = () => {
    if (auth.currentUser) {
      setShowLogin(false);
    }
  };

  const [showSignUp, setShowSignUp] = useState(false);
  const closeSignUp = () => {
    if (auth.currentUser) {
      setShowSignUp(false);
    }
  };

  const [showOrderNow, setShowOrderNow] = useState(false);
  const closeorderNow = () => {
    if (auth.currentUser) {
      setShowOrderNow(false);
    }
  };

  const [showOrderPlaced, setShowOrderPlaced] = useState(false);

  const closeorderplaced = () => {
    setShowOrderPlaced(false);
  };

  return (
    <Layout>
      <Breadcrumb pageName="Service Details" pageTitle="Service Details" />
      <Dialog open={showLogin} onClose={closeLogin}>
        <div id="logincontainer">
          <LoginPage signup={setShowSignUp} login={setShowLogin} />
        </div>
      </Dialog>
      <Dialog open={showSignUp} onClose={closeSignUp}>
        <div id="signupcontainer">
          <SignUpPage signup={setShowSignUp} login={setShowLogin} />
        </div>
      </Dialog>
      {authentication && (
        <div id="ordernowcontainer">
          <Dialog
            open={showOrderNow}
            onClose={closeorderNow}
            PaperProps={{
              sx: {
                width: "fit-content",
              },
            }}
          >
            <DialogTitle style={{ color: "red" }}>
              <b>Order will be placed after selecting address</b>
            </DialogTitle>
            <OrderNow
              workerdetail={serviceName}
              uid={authentication.uid}
              showdialog={setShowOrderNow}
              orderPlaced={setOrderPlaced}
              showOrder={setShowOrderPlaced}
            />
          </Dialog>
        </div>
      )}
      <div id="orderplacedcontainer">
        <Dialog
          open={showOrderPlaced}
          onClose={closeorderplaced}
          PaperProps={{
            sx: {
              width: "fit-content",
            },
          }}
        >
          <OrderPlaced />
        </Dialog>
      </div>

      <section id="down" className="services-details-area sec-m-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="service-details">
                <div className="service-details-thumbnail">
                  <img
                    src={
                      "assets/images/cre-service/" +
                      serviceName.service +
                      ".jpg"
                    }
                    alt=""
                  />
                </div>
                <h2>{serviceName && <p>{serviceName.service}</p>}</h2>
                <div
                  className="service-tabs wow animate fadeInUp"
                  data-wow-delay="200ms"
                  data-wow-duration="1500ms"
                >
                  <ul className="nav nav-pills" id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link active"
                        id="pills-contact-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-contact"
                        type="button"
                        role="tab"
                        aria-controls="pills-contact"
                        aria-selected="true"
                      >
                        Client Review
                      </button>
                    </li>
                  </ul>
                  <div className="tab-content" id="pills-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="pills-contact"
                      role="tabpanel"
                      aria-labelledby="pills-contact-tab"
                    >
                      <div className="client-review">
                        <h4>Review of {serviceName.service} Service</h4>

                        {reviews &&
                          reviews.map(function (item) {
                            return (
                              <div className="tab-review">
                                <h5>{item.name}</h5>
                                <div className="review-rating">
                                  <ul>
                                    <li>
                                      <i
                                        className={
                                          Number(item.rating) >= 1
                                            ? "bi bi-star-fill"
                                            : "bi bi-star"
                                        }
                                      />
                                    </li>
                                    <li>
                                      <i
                                        className={
                                          Number(item.rating) >= 2
                                            ? "bi bi-star-fill"
                                            : "bi bi-star"
                                        }
                                      />
                                    </li>
                                    <li>
                                      <i
                                        className={
                                          Number(item.rating) >= 3
                                            ? "bi bi-star-fill"
                                            : "bi bi-star"
                                        }
                                      />
                                    </li>
                                    <li>
                                      <i
                                        className={
                                          Number(item.rating) >= 4
                                            ? "bi bi-star-fill"
                                            : "bi bi-star"
                                        }
                                      />
                                    </li>
                                    <li>
                                      <i
                                        className={
                                          Number(item.rating) >= 5
                                            ? "bi bi-star-fill"
                                            : "bi bi-star"
                                        }
                                      />
                                    </li>
                                  </ul>
                                </div>
                                <p>{item.review}</p>
                              </div>
                            );
                          })}

                        <a className="view-all-review-btn" href="#">
                          View All Reviews
                        </a>
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
                      Expected Price{" "}
                      <span>
                        <small>₹</small>
                        {serviceName && <small>{serviceName.price}</small>}
                      </span>
                    </h4>

                    <div className="package book-btn">
                      <Link legacyBehavior href="#">
                        <a
                          onClick={() => {
                            orderPlaced ? "" : setShowOrderNow(true);
                          }}
                        >
                          {orderPlaced ? "Service Booked" : "Book Now"}
                        </a>
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
                      <img src={serviceName.author_thumb} alt="" />
                    </div>
                    {serviceName && <h3>{serviceName.name}</h3>}
                    <p>This service provider has following experience</p>
                    <div className="seller-information">
                      <div className="single-info">
                        <h5>
                          Order Complete<span>{totalOrders}</span>
                        </h5>
                      </div>
                      <div className="single-info">
                        <h5>
                          Seller Rating
                          <strong>
                            <i
                              className={
                                avgrate >= 1 ? "bi bi-star-fill" : "bi bi-star"
                              }
                            />
                            <i
                              className={
                                avgrate >= 2 ? "bi bi-star-fill" : "bi bi-star"
                              }
                            />
                            <i
                              className={
                                avgrate >= 3 ? "bi bi-star-fill" : "bi bi-star"
                              }
                            />
                            <i
                              className={
                                avgrate >= 4 ? "bi bi-star-fill" : "bi bi-star"
                              }
                            />
                            <i
                              className={
                                avgrate >= 5 ? "bi bi-star-fill" : "bi bi-star"
                              }
                            />
                            <b>({avgrate ? Number.parseInt(avgrate) : 0}/5)</b>
                          </strong>
                        </h5>
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

export default ServiceDetailsPage;
