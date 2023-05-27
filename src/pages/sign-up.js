import Link from "next/link";
import React, { useState } from "react";
import Breadcrumb from "../components/common/Breadcrumb";
import Layout from "./../components/layout/Layout";
import { auth } from "../firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Signuptype from "./sign-up-type";

function SignUpPage() {


  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible((prevState) => !prevState);
  };
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [fname, setFname] = useState();
  const [lname, setLname] = useState();
  const [typeofacc ,setTypeOfAcc] = useState("worker");

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
        // Create a new user with email and password using firebase
        createUserWithEmailAndPassword(auth, email, password)
          .then(async (res) => {
            console.log(res.user);
            var linkfordb = null;
            if(typeofacc=="worker"){
              linkfordb="http://localhost:5000/create-user-worker"
            }else{
              linkfordb="http://localhost:5000/create-user-client"
            }
            await axios
              .post(linkfordb, {
                uid: res.user.uid,
                email: email,
                fname: fname,
                lname:lname,
                typeofacc:typeofacc
              })
              .then((res) => {
                if (res.status == 200) {
                  window.location="/login"
                }
              });
          })
          .catch((err) => window.alert(err));
      } else {

        window.alert("please accept the terms");
      }
    } else {
      window.alert("enter all fields");
    }
  };

  return (
    <Layout>
      <Breadcrumb pageName="Sign Up" pageTitle="Sign Up" />
      <section id="down" className="login-area sec-p">
        <div className="container">
          <div className="login-form">
            <h3>Sign Up</h3>
            <span>
              Do you already have an account?{" "}
              <Link legacyBehavior href="/login">
                <a id="txt_for_login">Log in here</a>
              </Link>
            </span>
            <form>
              <div className="row">
                <div className="col-md-6">
                  <label htmlFor="fname">
                    Frist Name*
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
                  <input type="checkbox" name="agree" id="check_terms_signup" />
                  I agree to the <a href="#">Terms &amp; Policy</a>
                </p>
              </div>
              <Signuptype value={typeofacc} setvalue={setTypeOfAcc}/>
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
                <a href="#" className="google">
                  <i className="fab fa-google" />
                  Signup with google
                </a>
                <a href="#" className="facebook">
                  <i className="fab fa-facebook-f" />
                  Sign up with facebook
                </a>
              </div>
            </div>
            <p>
              By clicking the "Sign up" button, you create a Cobiro account, and
              you agree to Cobiro's <a href="#">Terms &amp; Conditions</a> &amp;{" "}
              <a href="#">Privacy Policy.</a>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default SignUpPage;
