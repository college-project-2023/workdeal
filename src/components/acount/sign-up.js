import Link from "next/link";
import React, { useState } from "react";
import Breadcrumb from "../common/Breadcrumb";
import Layout from "../layout/Layout";
import { auth } from "../../firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { googleProvider } from "../../firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Dialog, DialogTitle } from "@mui/material";
import { signInWithPopup, getAdditionalUserInfo } from "firebase/auth";
import services from "../../data/service/creative_services.json";
import axios from "axios";
import Signuptype from "../../pages/sign-up-type";

function SignUpPage(props) {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible((prevState) => !prevState);
  };
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [fname, setFname] = useState();
  const [lname, setLname] = useState();
  const [typeofacc, setTypeOfAcc] = useState("worker");
  const [aadhar, setAadhar] = useState();
  const [service, setServiceType] = useState("Home Clean");

  const register = async () => {
    if (
      email != null &&
      email != "" &&
      password != null &&
      password != "" &&
      fname != null &&
      fname != "" &&
      lname != null &&
      lname != ""
    ) {
      if (document.getElementById("check_terms_signup").checked) {
        createUserWithEmailAndPassword(auth, email, password)
          .then(async (res) => {
            console.log(res.user);
            var linkfordb = null;
            var waadhar = false;
            if (
              typeofacc == "worker" &&
              service != null &&
              service != "" &&
              aadhar != null &&
              aadhar != "" &&
              aadhar.length == 12
            ) {
              linkfordb = "http://localhost:5000/create-user-worker";
              waadhar = true;
            } else if (typeofacc == "client") {
              linkfordb = "http://localhost:5000/create-user-client";
              waadhar = true;
            }
            if (waadhar) {
              await axios
                .post(linkfordb, {
                  uid: res.user.uid,
                  email: email,
                  fname: fname,
                  lname: lname,
                  typeofacc: typeofacc,
                  service: service,
                  aadhar: aadhar,
                })
                .then((res) => {
                  if (res.status == 200) {
                    signInWithEmailAndPassword(auth, email, password).catch(
                      (err) => window.alert(err)
                    );
                  }
                });
            } else {
              window.alert("Please checkout filled details");
            }
          })
          .catch((err) => window.alert(err));
      } else {
        window.alert("please accept the terms");
      }
    } else {
      window.alert("enter all fields");
    }
  };

  const [showDialog, setShowDialog] = useState(false);
  const handleDialogClose = () => {
    setShowDialog(false);
  };

  async function loginWithGoogle() {
    const result = await signInWithPopup(auth, googleProvider)
      .then((res) => {
        if (
          auth.currentUser.metadata.creationTime ===
          auth.currentUser.metadata.lastSignInTime
        ) {
          window.location = "/login-google-required";
        } else {
          window.location = "/account";
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  const dialogstyle = {
    paddingLeft: "30px",
    paddingRight: "30px",
    paddingBottom: "30px",
  };

  return (
    <div className="login-form">
      <Dialog open={showDialog} onClose={handleDialogClose}>
        <DialogTitle>Terms & Conditions</DialogTitle>
        <p style={dialogstyle}>these are some terms you have to follow</p>
      </Dialog>
      <h3>Sign Up</h3>
      <span>
        Do you already have an account?{" "}
        <Link legacyBehavior href="#">
          <a id="txt_for_login" onClick={()=>{props.signup(false);props.login(true)}}>Log in here</a>
        </Link>
      </span>
      <form>
        <div className="row">
          <div className="col-md-6">
            <label htmlFor="fname">
              First Name*
              <input
                type="text"
                name="fname"
                id="fname"
                placeholder="First Name"
                onChange={(e) => {
                  setFname(e.target.value);
                }}
              />
            </label>
          </div>
          <div className="col-md-6">
            <label htmlFor="lname">
              Last Name*
              <input
                type="text"
                name="lname"
                id="lname"
                placeholder="last Name"
                onChange={(e) => {
                  setLname(e.target.value);
                }}
              />
            </label>
          </div>
          <div className="col-12">
            <label htmlFor="email">
              Email*
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your Email Here"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </label>
            <label htmlFor="password">
              Password*
              <i
                onClick={() => togglePasswordVisibility()}
                className={
                  !passwordVisible
                    ? "bi bi-eye-slash"
                    : "bi bi-eye-slash  bi-eye"
                }
                id="togglePassword"
              />
              <input
                autoComplete="new-password"
                type={!passwordVisible ? "password" : "text"}
                name="email"
                id="password"
                placeholder="Type Your Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </label>
          </div>
        </div>
        <div className="terms-forgot">
          <p>
            <input type="checkbox" name="agree" id="check_terms_signup" />I
            agree to the{" "}
            <a onClick={() => setShowDialog(true)}>Terms &amp; Conditions</a>
          </p>
        </div>
        <Signuptype value={typeofacc} setvalue={setTypeOfAcc} />
        {typeofacc == "worker" && (
          <div>
            <div className="col-12">
              <label htmlFor="password">
                Service*
                <select
                  className="service-selection-signup"
                  onChange={(e) => {
                    setServiceType(e.target.value);
                  }}
                >
                  <option value={""}>select</option>
                  {services.map((s) => {
                    return (
                      <option key={s.id} value={s.service_name}>
                        {" "}
                        {s.service_name}{" "}
                      </option>
                    );
                  })}
                </select>
              </label>
            </div>
            <div className="col-12">
              <label htmlFor="aadhar">
                Aadhar Number*
                <input
                  type="text"
                  name="aadhar"
                  id="aadhar"
                  style={{
                    boxShadow:
                      aadhar &&
                      aadhar.length != 12 &&
                      "0px 1px 10px 0px rgb(255 0 0 / 50%)",
                  }}
                  placeholder="Type Your Aadhar Number"
                  onChange={(e) => {
                    setAadhar(e.target.value);
                  }}
                />
              </label>
            </div>
          </div>
        )}
        <input
          type="button"
          defaultValue="Create Account"
          onClick={register}
          className="btn_create_account"
        />
      </form>
      <div className="other-signup">
        <h4>or Sign up WITH</h4>
        <div className="others-account">
          <a href="#" className="google" onClick={loginWithGoogle}>
            <i className="fab fa-google" />
            Signup with google
          </a>
        </div>
      </div>
      <p>
        By clicking the "Sign up" button, you create a WorkDeal account, and you
        agree to WorkDeal's{" "}
        <a onClick={() => setShowDialog(true)}>Terms &amp; Conditions</a>
      </p>
    </div>
  );
}

export default SignUpPage;
