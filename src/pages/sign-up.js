import Link from "next/link";
import React, { useState } from "react";
import Breadcrumb from "../components/common/Breadcrumb";
import Layout from "./../components/layout/Layout";

function SignUpPage() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible((prevState) => !prevState);
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
                <a>Log in here</a>
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
                    />
                  </label>
                </div>
              </div>
              <div className="terms-forgot">
                <p>
                  <input type="checkbox" name="agree" />I agree to the{" "}
                  <a href="#">Terms &amp; Policy</a>
                </p>
              </div>
              <input type="submit" defaultValue="Create Account" />
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
