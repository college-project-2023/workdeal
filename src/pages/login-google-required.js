import React from "react";
import { useState } from "react";
import Signuptype from "./sign-up-type";
import { auth } from "../firebase/firebase";
import { updatePassword } from "firebase/auth";
import axios from "axios";

const signupdata = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [typeofacc, setTypeOfAcc] = useState("worker");
  const togglePasswordVisibility = () => {
    setPasswordVisible((prevState) => !prevState);
  };
  const [password, setPassword] = useState();
  const [fname, setFname] = useState();
  const [lname, setLname] = useState();
  const [service, setServiceType] = useState(null);

  const register = async () => {
    if (
      password != null &&
      password != "" &&
      fname != null &&
      fname != "" &&
      lname != null &&
      lname != ""
    ) {
      if (document.getElementById("check_terms_signup").checked) {
        var linkfordb;
        if (typeofacc == "worker") {
          linkfordb = "http://localhost:5000/create-user-worker";
        } else {
          linkfordb = "http://localhost:5000/create-user-client";
        }
        const user = auth.currentUser;
        if (user) {
          updatePassword(user, password)
            .then(async () => {
              await axios
                .post(linkfordb, {
                  uid: auth.currentUser.uid,
                  email: auth.currentUser.email,
                  fname: fname,
                  lname: lname,
                  typeofacc: typeofacc,
                  service:service
                })
                .then((res) => {
                  if (res.status == 200) {
                    window.location = "/account";
                  }
                });
            })
            .catch((error) => {
              if (error.code == "auth/requires-recent-login") {
                window.alert("Session expired");
                window.location = "/login";
              } else {
                window.alert("can't update profile" + error);
              }
            });
        } else {
          window.alert("user not found");
        }
      } else {
        window.alert("please accept the terms");
      }
    } else {
      window.alert("enter all fields");
    }
  };

  return (
    <form className="form">
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
          <label htmlFor="password">
            Password*
            <i
              onClick={() => togglePasswordVisibility()}
              className={
                !passwordVisible ? "bi bi-eye-slash" : "bi bi-eye-slash  bi-eye"
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

        {typeofacc=="worker" &&
        <div className="col-12">
          <label htmlFor="password">
            Service*
            <select className="service-selection-signup" onChange={(e)=>{
              setServiceType(e.target.value)
            }}>
              <option value="Cleaning">Cleaning</option>
              <option value="Electrician">Electrician</option>
            </select>
          </label>
        </div>}

      </div>
              
      <div className="terms-forgot">
        <p>
          <input type="checkbox" name="agree" id="check_terms_signup" />I agree
          to the <a href="#">Terms &amp; Policy</a>
        </p>
      </div>
      <Signuptype value={typeofacc} setvalue={setTypeOfAcc} />
      <input
        type="button"
        onClick={register}
        defaultValue="Create Account"
        className="btn_create_account"
      />
    </form>
  );
};

export default signupdata;
