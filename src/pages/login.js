import Link from "next/link";
import React, { useState } from "react";
import Breadcrumb from "../components/common/Breadcrumb";
import Layout from "./../components/layout/Layout";
import { signInWithEmailAndPassword } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";
import { googleProvider } from "../firebase/firebase";
import { auth } from "../firebase/firebase";
import { Dialog, DialogTitle } from "@mui/material";

function LoginPage() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible((prevState) => !prevState);
  };

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  function login() {
    if (email != null && email != "" && password != null && password != "") {
      if (document.getElementById("check_terms_signup").checked) {
        signInWithEmailAndPassword(auth, email, password)
          .then(async (res) => {
            window.location = "/account";
          })
          .catch((err) => window.alert(err));
      } else {
        window.alert("please accept the terms");
      }
    } else {
      window.alert("enter all fields");
    }
  }

  async function loginWithGoogle() {
    const result = await signInWithPopup(auth, googleProvider)
      .then((res) => {
        if (auth.currentUser.metadata.creationTime ===auth.currentUser.metadata.lastSignInTime) {
          window.location="/login-google-required"
        } else {
          window.location = "/account";
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  const [showDialog, setShowDialog] = useState(false);
  const handleDialogClose = () => {
    setShowDialog(false);
  };

  const dialogstyle = {
    paddingLeft: "30px",
    paddingRight: "30px",
    paddingBottom: "30px",
  };

  return (
    <Layout>
      <Dialog open={showDialog} onClose={handleDialogClose}>
        <DialogTitle>Terms & Conditions</DialogTitle>
        <p style={dialogstyle}>these are some terms you have to follow</p>
      </Dialog>
      <Breadcrumb pageName="Log In" pageTitle="Log In" />
      <section id="down" className="login-area sec-p">
        <div className="container">
          <div className="login-form">
            <h3>Log In</h3>
            <span>
              New Member?{" "}
              <Link legacyBehavior href="/sign-up">
                <a>SignUp here</a>
              </Link>
            </span>
            <form autoComplete="false">
              <label htmlFor="email">
                Email*
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="off"
                  placeholder="Your Email Here"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </label>
              <label>
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
                  name="password"
                  id="password"
                  placeholder="Type Your Password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </label>
              <div className="terms-forgot">
                <p>
                  <input type="checkbox" name="agree" id="check_terms_signup" />
                  I agree to the <a onClick={()=>setShowDialog(true)}>Terms &amp; Conditions</a>
                </p>
                <a href="/login-reset-pass">Forgot Your Password</a>
              </div>
              <input
                type="button"
                name="submit"
                defaultValue="LogIn"
                placeholder="dasdasdasd"
                onClick={login}
              />
            </form>
            <div className="other-signup">
              <h4>or log in WITH</h4>
              <div className="others-account">
                <a className="google" onClick={loginWithGoogle}>
                  <i className="fab fa-google" />
                  google
                </a>
              </div>
            </div>
            <p>
              By clicking the "Log In" button, you create a WorkDeal account, and
              you agree to WorkDeal's <a onClick={()=>setShowDialog(true)}>Terms &amp; Conditions</a>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default LoginPage;
