import Link from "next/link";
import React, { useContext, useState, useEffect } from "react";
import Breadcrumb from "../common/Breadcrumb";
import Layout from "../layout/Layout";
import { signInWithEmailAndPassword } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";
import { googleProvider } from "../../firebase/firebase";
import { auth } from "../../firebase/firebase";
import { MyContext } from "../context";
import { Dialog, DialogTitle } from "@mui/material";
import axios from "axios";

function LoginPage(props) {
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
            props.login(false)
            // console.log(res.user.uid)
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
                    localStorage.setItem('city',data.data.city)
                  } else {
                    window.alert("something went wrong");
                  }
                })
                .catch((error) => {
                  console.log(error);
                  if (error.response && error.response.status == 404) {
                    window.location = "/login-google-required";
                  } else {
                    window.alert(error.message);
                  }
                });
            }
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
    <div className="login-form">
      <Dialog open={showDialog} onClose={handleDialogClose}>
        <DialogTitle>Terms & Conditions</DialogTitle>
        <p style={dialogstyle}>these are some terms you have to follow</p>
      </Dialog>
      <h3>Log In</h3>
      <span>
        New Member?{" "}
        <Link legacyBehavior href="#" >
          <a onClick={()=>{props.signup(true);props.login(false)}}>SignUp here</a>
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
              !passwordVisible ? "bi bi-eye-slash" : "bi bi-eye-slash  bi-eye"
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
            <input type="checkbox" name="agree" id="check_terms_signup" />I
            agree to the{" "}
            <a onClick={() => setShowDialog(true)}>Terms &amp; Conditions</a>
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
        By clicking the "Log In" button, you create a WorkDeal account, and you
        agree to WorkDeal's{" "}
        <a onClick={() => setShowDialog(true)}>Terms &amp; Conditions</a>
      </p>
    </div>
  );
}

export default LoginPage;
