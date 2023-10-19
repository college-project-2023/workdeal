import React, { useState, useEffect, useRef } from "react";
import CountUp from "react-countup";
import OrderWorker from "../components/acount/OrderWorker";
import UserProfile from "../components/acount/UserProfile";
import Breadcrumb from "../components/common/Breadcrumb";
import Layout from "./../components/layout/Layout";
import { auth } from "../firebase/firebase";
import axios from "axios";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase/firebase";
import OrderClient from "../components/acount/OrderClient";
import { Button, Dialog, DialogTitle, ToggleButton } from "@mui/material";
import Cropper, { ReactCropperElement } from "react-cropper";
import "cropperjs/dist/cropper.css";
import LoginPage from "../components/acount/login";
import SignUpPage from "../components/acount/sign-up";

function Accountpage() {
  const [workeractive, setWorkerActive] = useState();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);
  const [authentication, setAuthentication] = useState(null);
  const [typeofacc, setTypeOfAcc] = useState("worker");
  const [userdata, setUserdata] = useState();
  const [address1, setAddress1] = useState();
  const [address2, setAddress2] = useState();
  const [avgrate, setAvgRate] = useState(2);
  const [avgPrice, setAvgPrice] = useState(100);
  const [orderPending, setOrderPending] = useState(0);
  const [orderComplete, setOrderComplete] = useState(0);

  function getReviews() {}

  const handleWorkerActive = async () => {
    var checkBox = document.getElementById("checkbox_worker_active");
    if (checkBox && checkBox.checked) {
      axios
        .post("http://localhost:5000/get-review-worker", {
          uid: auth.currentUser.uid,
        })
        .then((res) => {
          var data = res.data;
          var avg = 0,
            sum = 0;
          for (var i = 0; i < data.length; i++) {
            sum = sum + Number(data[i].rating);
          }
          if (data.length != 0) {
            avg = sum / data.length;
            setAvgRate(avg);
          }
          if (userdata && userdata.city) {
            axios
              .get("http://localhost:5000/get-work-count", {
                params: { uid: auth.currentUser.uid },
              })
              .then((count) => {
                var countwork = count.data;
                console.log(countwork);
                axios
                  .get("http://localhost:5000/get-review-score-from-service", {
                    params: { uid: auth.currentUser.uid },
                  })
                  .then((review_score) => {
                    let review_sc = Number.parseInt(
                      review_score.data.review_score
                    )
                    if(!review_sc){
                      review_sc=0
                    }
                    axios
                      .post("http://localhost:5000/get-review-worker", {
                        uid: auth.currentUser.uid,
                      })
                      .then((res) => {
                        console.log(res.data);
                        var data = res.data;
                        var avg = 0,
                          sum = 0;
                        for (var i = 0; i < data.length; i++) {
                          sum = sum + Number(data[i].rating);
                        }
                        avg = sum / data.length;
                        if(isNaN(avg)){
                          avg=0;
                        }
                        console.log(avg)
                        axios
                          .post("http://localhost:5000/set-avg-review-worker", {
                            uid: auth.currentUser.uid,
                            rate: avg,
                          })
                          .then((res) => {
                            console.log(userdata)
                            axios
                              .post("http://localhost:5000/setworkeractive", {
                                uid: auth.currentUser.uid,
                                tag: userdata.service.toLowerCase(),
                                thumb:
                                  "assets/images/cre-service/" +
                                  userdata.service +
                                  ".png",
                                author_thumb: imageUrl,
                                author_name:
                                  userdata.fname + " " + userdata.lname,
                                title: userdata.service,
                                price: avgPrice,
                                no_works: Number.parseInt(countwork),
                                review_score: review_sc,
                                enabled: true,
                                rating: avgrate,
                                location:userdata.city.toLowerCase()
                              })
                              .catch((error) => {
                                checkBox.checked = false;
                                window.alert(error);
                              })
                              .then((res) => {
                                console.log(res.data);
                                if (res == "online") {
                                  checkBox.checked = true;
                                }
                              });
                          });
                      })
                      .catch((error) => {
                        console.log(error);
                      });
                  });
              });
          } else {
            checkBox.checked = false;
            window.alert("Please complete your profile");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      if (userdata) {
        await axios
          .post("http://localhost:5000/setworkeroffline", {
            uid: auth.currentUser.uid,
          })
          .then((res) => {
            if (res.data == "success") {
              checkBox.checked = false;
            }
          })
          .catch((error) => {
            window.alert(error);
            checkBox.checked = true;
          });
      }
    }
  };

  useEffect(() => {
    if (auth.currentUser && userdata && userdata.typeofacc == "worker") {
      console.log(userdata);
      var checkBox = document.getElementById("checkbox_worker_active");
      axios
        .post("http://localhost:5000/checkworkeractive", {
          uid: auth.currentUser.uid,
        })
        .then((res) => {
          if (res.data == "online") {
            checkBox.checked = true;
          } else {
            checkBox.checked = false;
          }
        });
    }
  }, [auth.currentUser, userdata]);

  useEffect(() => {
    auth.onAuthStateChanged(function (user) {
      if (user) {
        setAuthentication(user);
        setShowLogin(false);
      } else {
        setShowLogin(true);
      }
    });
    const getData = async () => {
      if (auth.currentUser) {
        const useruid = auth.currentUser.uid;
        const idtoken = await auth.currentUser.getIdToken();
        axios
          .post(`http://localhost:5000/get-user-data/`, {
            uid: useruid,
            idtoken: idtoken,
          })
          .then((data) => {
            if (data.status == 200) {
              console.log(data);
              setUserdata(data.data);
              setTypeOfAcc(data.data.typeofacc);
              if (
                data.data.imageUrl != null ||
                data.data.imageUrl != undefined
              ) {
                setImageUrl(data.data.imageUrl);
              }
              setAddress1(data.data.address);
              setAddress2(data.data.address2);
            } else {
              window.alert("something went wrong");
            }
          })
          .catch((error) => {
            console.log(error);
            if (error && error.response && error.response.status == 404) {
              window.location = "/login-google-required";
            } else {
              window.alert(error.message);
            }
          });
      }
    };

    getData();
  }, [authentication]);

  function updateAddress() {
    console.log(userdata.city);
    axios
      .post(`http://localhost:5000/update-user-client/`, {
        fname: userdata.fname,
        lname: userdata.lname,
        email: userdata.email,
        address: address1,
        address2: address2,
        uid: auth.currentUser.uid,
        mobile: userdata.mobile,
        addrcity: userdata.city,
        zipcode: userdata.zipcode,
        addrstatename: userdata.statename,
        addrcountry: userdata.country,
      })
      .then((res) => {
        if (res.status == 200) {
          window.alert("Address updated successfully");
          window.location = "/account";
        } else {
          console.log(res);
          window.alert("Something went wrong");
        }
      })
      .catch((error) => {
        window.alert(error);
      });
  }

  const togglePasswordVisibility = () => {
    setPasswordVisible((prevState) => !prevState);
  };

  async function logout() {
    setShowDialog(false);
    var checkBox = document.getElementById("checkbox_worker_active");
    if (checkBox && checkBox.checked) {
      checkBox.checked = false;
      handleWorkerActive();
      setShowDialog(true);
    } else {
      await auth.signOut().then(() => {
        window.location = "/";
      });
    }
  }

  const [showDialog, setShowDialog] = useState(false);
  const handleDialogClose = () => {
    setShowDialog(false);
  };

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

  const [showImageUpload, setShowImageUpload] = useState(false);
  const [percentUpload, setPercentUpload] = useState(0);
  const [showCropImage, setShowCropImage] = useState(false);

  const closCropImage = () => {
    setShowCropImage(false);
  };
  const closeShowImageUpload = () => {
    setShowImageUpload(false);
  };
  const [fileForCrop, setFileForCrop] = useState();
  const handleImageUpload = (event) => {
    var file = event.target.files[0];
    if (file) {
      setFileForCrop(URL.createObjectURL(file));
      setShowCropImage(true);
    }
  };

  const cropperRef = useRef(null);
  const [cropedFile, setCropedFile] = useState();
  const onCrop = () => {
    const cropper = cropperRef.current?.cropper;
    setCropedFile(cropper.getCroppedCanvas().toDataURL("image/jpeg"));
  };

  const handelCroppedImage = () => {
    setShowCropImage(false);
    var binary = atob(cropedFile.split(",")[1]);
    var array = [];
    for (var i = 0; i < binary.length; i++) {
      array.push(binary.charCodeAt(i));
    }
    let croppedImage = new Blob([new Uint8Array(array)], {
      type: "image/png",
    });
    if (croppedImage && storage) {
      const storageRef = ref(storage, `/profile-pics/${userdata.uid}`);
      const uploadTask = uploadBytesResumable(storageRef, croppedImage);
      setShowImageUpload(true);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const percent = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setPercentUpload(percent);
        },
        (err) => console.log(err),
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            console.log(url);
            setImageUrl(url);
            setShowImageUpload(false);
            if (userdata.typeofacc == "worker") {
              axios
                .post("http://localhost:5000/update-profile-pic-worker", {
                  uid: userdata.uid,
                  imageUrl: url,
                })
                .then((res) => {})
                .catch((error) => {
                  console.log(error);
                });
            } else {
              axios
                .post("http://localhost:5000/update-profile-pic-client", {
                  uid: userdata.uid,
                  imageUrl: url,
                })
                .then((res) => {})
                .catch((error) => {
                  console.log(error);
                });
            }
          });
        }
      );
    }
  };

  return (
    <Layout>
      <Breadcrumb pageTitle="My Account" pageName="My Account" />
      <Dialog open={showCropImage} onClose={closCropImage}>
        <Cropper
          src={fileForCrop}
          style={{ height: 400, width: "100%" }}
          aspectRatio={1 / 1}
          guides={false}
          crop={onCrop}
          ref={cropperRef}
        />
        <ToggleButton onClick={handelCroppedImage}>Done</ToggleButton>
      </Dialog>
      <Dialog open={showDialog} onClose={handleDialogClose}>
        <DialogTitle>You can't accept more works while offline</DialogTitle>
        <input
          className="btn-current-task"
          type="button"
          onClick={logout}
          value="logout"
        />
      </Dialog>
      <Dialog open={showImageUpload} onClose={closeShowImageUpload}>
        <DialogTitle>Image Uploading : {percentUpload}%</DialogTitle>
      </Dialog>
      <Dialog open={showLogin} onClose={closeLogin}>
        <LoginPage signup={setShowSignUp} login={setShowLogin} />
      </Dialog>
      <Dialog open={showSignUp} onClose={closeSignUp}>
        <SignUpPage signup={setShowSignUp} login={setShowLogin} />
      </Dialog>
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
                {typeofacc == "worker" && (
                  <div>
                    <div>
                      <div className="profile-logout">
                        <div>
                          <h4>Let's get to work?</h4>
                          <label class="switch">
                            <input
                              id="checkbox_worker_active"
                              type="checkbox"
                              onClick={handleWorkerActive}
                            />
                            <span class="slider round"></span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {typeofacc == "worker" && (
                  <button
                    className="nav-link"
                    id="v-pills-home-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-home"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-home"
                    aria-selected="false"
                  >
                    <i className="bi bi-columns-gap" />
                    Dashboard
                  </button>
                )}
                <button
                  className="nav-link active"
                  id="v-pills-profile-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-profile"
                  type="button"
                  role="tab"
                  aria-current="page"
                  aria-controls="v-pills-profile"
                  aria-selected="true"
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
                {typeofacc == "client" && (
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
                )}
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
                  className="tab-pane fade"
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
                            <CountUp
                              start={0}
                              end={orderPending}
                              duration={1}
                            />
                          </h2>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="order-box">
                        <h5>Order Completed</h5>
                        <div className="box-inner">
                          <div className="icon">
                            <img
                              src="assets/images/icons/order-box-2.png"
                              alt=""
                            />
                          </div>
                          <h2>
                            {" "}
                            <CountUp
                              start={0}
                              end={orderComplete}
                              duration={1}
                            />
                          </h2>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-12">
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
                            <CountUp
                              start={0}
                              end={orderPending + orderComplete}
                              duration={3}
                            />
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade show active"
                  id="v-pills-profile"
                  role="tabpanel"
                  aria-labelledby="v-pills-profile-tab"
                >
                  <div className="user-profile">
                    <div className="user-info">
                      <div className="thumb">
                        <center>
                          {userdata ? (
                            imageUrl ? (
                              <img src={imageUrl} />
                            ) : (
                              <p>
                                {userdata.fname.slice(0, 1).toUpperCase()}
                                {userdata.lname.slice(0, 1).toUpperCase()}
                              </p>
                            )
                          ) : (
                            ""
                          )}
                        </center>
                      </div>
                      {userdata != null && (
                        <div style={{ width: "100%" }}>
                          <h3>{userdata.fname + " " + userdata.lname}</h3>
                          <span>{userdata.typeofacc}</span>
                        </div>
                      )}
                      <div className="profile-pic">
                        <label className="takephoto">
                          Change Profile Picture
                          <input
                            id="input-profile-pic"
                            onChange={handleImageUpload}
                            style={{ display: "none" }}
                            type={"file"}
                          />
                        </label>
                      </div>
                    </div>
                    {userdata != null && <UserProfile user={userdata} />}
                  </div>
                </div>
                {authentication &&
                  userdata &&
                  (typeofacc == "worker" ? (
                    <OrderWorker
                      setAvgPrice={setAvgPrice}
                      service={userdata.service}
                      pending={setOrderPending}
                      complete={setOrderComplete}
                    />
                  ) : (
                    <OrderClient />
                  ))}
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
                        <p>Address 1</p>
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
                              {userdata && (
                                <div>
                                  <input
                                    type={Text}
                                    id="txt_edit_address"
                                    value={address1}
                                    onChange={(e) => {
                                      setAddress1(e.target.value);
                                    }}
                                  />
                                  <button
                                    className="btn-current-task"
                                    type="button"
                                    onClick={updateAddress}
                                  >
                                    Done
                                  </button>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="user-loc">
                        <div className="icon">
                          <i className="bi bi-house-door" />
                        </div>
                        <p>Address 2</p>
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
                              {userdata && (
                                <div>
                                  <input
                                    type={Text}
                                    id="txt_edit_address"
                                    value={address2}
                                    onChange={(e) => {
                                      setAddress2(e.target.value);
                                    }}
                                  />
                                  <button
                                    className="btn-current-task"
                                    type="button"
                                    onClick={updateAddress}
                                  >
                                    Done
                                  </button>
                                </div>
                              )}
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
                >
                  <div className="profile-logout">
                    <center>
                      <h3>Are you sure?</h3>
                      <input
                        className="btn-current-task"
                        type="button"
                        onClick={logout}
                        value="logout"
                      />
                    </center>
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

export default Accountpage;
