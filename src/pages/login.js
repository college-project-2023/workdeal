import Link from "next/link";
import React, { useState } from "react";
import Breadcrumb from "../components/common/Breadcrumb";
import Layout from "./../components/layout/Layout";
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import {auth} from '../firebase/firebase'

function LoginPage() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible((prevState) => !prevState);
  };

  const [email,setEmail]  = useState();
  const [password,setPassword] = useState();

  function login(){
    if(email!=null && email!="" && password!=null && password!="") {
      if (document.getElementById("check_terms_signup").checked){
      
        signInWithEmailAndPassword(auth, email, password)
        .then(async (res) => {
          window.location="/account";
        })
      .catch(err => window.alert(err))
    }else{
      window.alert("please accept the terms")
    }
    
  }else{
    window.alert("enter all fields")
  }
  }

  return (
    <Layout>
      <Breadcrumb pageName="Log In" pageTitle="Log In" />
      <section id="down" className="login-area sec-p">
        <div className="container">
          <div className="login-form">
            <h3>Log In</h3>
            <span>
              New Member?{" "}
              <Link legacyBehavior href="/sign-up-type">
                <a>SignUp here</a>
              </Link>
            </span>
            <form>
              <label htmlFor="email">
                Email*
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your Email Here"
                  onChange={e=>{
                    setEmail(e.target.value)
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
                  type={!passwordVisible ? "password" : "text"}
                  name="password"
                  id="password"
                  placeholder="Type Your Password"
                  onChange={e=>{
                    setPassword(e.target.value)
                  }}
                />
              </label>
              <div className="terms-forgot">
                <p>
                  <input type="checkbox" name="agree" id="check_terms_signup"/>I agree to the{" "}
                  <a href="#">Terms &amp; Policy</a>
                </p>
                <a href="#">Forgot Your Password</a>
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
              you agree to Cobiro's <a href="#">Terms &amp; Conditions</a> &amp;
              <a href="#">Privacy Policy.</a>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default LoginPage;
