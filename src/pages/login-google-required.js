import React, { useRef } from "react";
import { useState,useEffect } from "react";
import Signuptype from "./sign-up-type";
import { auth } from "../firebase/firebase";
import { updatePassword } from "firebase/auth";
import axios from "axios";
import { Dialog, DialogTitle } from "@mui/material";
import services from "../data/service/creative_services.json";

const signupdata = () => {
  const [showDialog, setShowDialog] = useState(false);
  const handleDialogClose = () => {
    setShowDialog(false);
  };

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [typeofacc, setTypeOfAcc] = useState("worker");
  const togglePasswordVisibility = () => {
    setPasswordVisible((prevState) => !prevState);
  };
  const [password, setPassword] = useState();
  const [fname, setFname] = useState();
  const [lname, setLname] = useState();
  const [aadhar, setAadhar] = useState();
  const [service, setServiceType] = useState(null);

  const handleServiceChange = (e) =>{
    setServiceType(e.target.value)
  }

  useEffect(()=>{
    setServiceType(service)
    console.log(service)
  },[service])

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
        var waadhar = false;
        if (typeofacc == "worker" && aadhar != null && aadhar != "" && service!=null && service!="" && aadhar.length==12) {
          linkfordb = "http://localhost:5000/create-user-worker";
          waadhar = true;
        } else if(typeofacc == "client"){
          linkfordb = "http://localhost:5000/create-user-client";
          waadhar = true;
        }
        const user = auth.currentUser;
        if (user && waadhar) {
          updatePassword(user, password)
            .then(async () => {
              await axios
                .post(linkfordb, {
                  uid: auth.currentUser.uid,
                  email: auth.currentUser.email,
                  fname: fname,
                  lname: lname,
                  typeofacc: typeofacc,
                  service: service,
                  aadhar: aadhar,
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
                window.alert("can't create profile" + error);
              }
            });
        } else {
          if (!waadhar) {
            window.alert("all field are required");
          } else {
            window.alert("user not found"); 
          }
        }
      } else {
        window.alert("please accept the terms");
      }
    } else {
      window.alert("enter all fields");
    }
  };

  const switchaccount = () => {
    window.location = "/login";
  };

  const dialogstyle = {
    paddingLeft: "30px",
    paddingRight: "30px",
    paddingBottom: "30px",
  };

  return (
    <div className="form">
      <Dialog open={showDialog} onClose={handleDialogClose}>
        <DialogTitle>Terms & Conditions</DialogTitle>
        <p style={dialogstyle}>these are some terms you have to follow</p>
      </Dialog>
      <p id="txt_head_sign_up_form">let's complete the profile</p>
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
          <input type="checkbox" name="agree" id="check_terms_signup" />I agree
          to the{" "}
          <a
            onClick={() => {
              setShowDialog(true);
            }}
          >
            Terms &amp; Policy
          </a>
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
                defaultValue={service}
                onChange={(e) =>  {
                  handleServiceChange(e)
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
                style={{boxShadow: aadhar && aadhar.length!=12 && "0px 1px 10px 0px rgb(255 0 0 / 50%)"}}
                placeholder="Type Your Aadhar Number"
                onChange={(e) => {
                  setAadhar(e.target.value);
                }}
              />
            </label>
          </div>
        </div>
      )}
      <div className="row">
        <input
          type="button"
          onClick={register}
          defaultValue="Create Account"
          className="btn_create_account"
        />
        <button onClick={switchaccount} className="btn_login_other_account">
          Switch Account
        </button>
      </div>
    </div>
  );
};

export default signupdata;
