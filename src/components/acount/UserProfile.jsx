import React, { useEffect, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import axios from "axios";

function UserProfile(props) {
  const [fname, setFname] = useState(props.user.fname);
  const [lname, setLname] = useState(props.user.lname);
  const [email, setEmail] = useState(props.user.email);
  const [mobile, setMobileNumber] = useState(props.user.mobile);
  const [address, setAdress] = useState(props.user.address);
  const [addrcity, setCity] = useState(props.user.city);
  const [zipcode, setZipCode] = useState(props.user.zipcode);
  const [addrstatename, setStateName] = useState(props.user.statename);
  const [addrcountry, setCountry] = useState(props.user.country);
  const [password, setPass] = useState("");
  




  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible((prevState) => !prevState);
  };

  function updateProfile() {
    var ele = document.getElementById("btn_submit_updat_profile");
    ele.disabled = true;
    ele.style.backgroundColor = "Gray";
      if (password != null && password != "") {
        signInWithEmailAndPassword(auth, email, password)
          .then((res) => {
            var typeofaccount;
            if (props.user.typeofacc=="worker"){
              typeofaccount="worker"
            }else{
              typeofaccount="client"
            }
            axios 
              .post(`http://localhost:5000/update-user-${typeofaccount}/`, {
                  fname: fname,
                  lname: lname,
                  email: email,
                  mobile: mobile,
                  address: address,
                  addrcity: addrcity,
                  zipcode: zipcode,
                  addrstatename: addrstatename,
                  addrcountry: addrcountry,
                  uid: auth.currentUser.uid,
                },
              )
              .then((res) => {
                if (res.status == 200) {
                  window.alert("Profile updated successfully");
                } else {
                  window, alert("Something went wrong");
                }
                ele.disabled = false;
                ele.style.backgroundColor = "#5bb543";
              });
          })
          .catch((error) => {
            window.alert(error.message);
            ele.disabled = false;
            ele.style.backgroundColor = "#5bb543";
          });
      } else {
        ele.disabled = false;
        ele.style.backgroundColor = "#5bb543";
        window.alert("Please enter password");
      }
  }


  return (
    <div className="user-form">
      <form>
        <div className="row">
          <div className="col-lg-6">
            <label>
              Frist Name *
              <input
                type="text"
                name="fname"
                id="fname"
                value={fname}
                onChange={(e) => {
                  setFname(e.target.value);
                }}
                placeholder="Your first name"
              />
            </label>
          </div>
          <div className="col-lg-6">
            <label>
              Last Name *
              <input
                type="text"
                name="lname"
                id="lname"
                value={lname}
                onChange={(e) => {
                  setFname(e.target.value);
                }}
                placeholder="Your last name"
              />
            </label>
          </div>
          <div className="col-lg-6">
            <label>
              Contact Number
              <input
                type="text"
                name="number"
                id="number"
                value={mobile}
                onChange={(e) => {
                  setMobileNumber(e.target.value);
                }}
                placeholder={+8801}
              />
            </label>
          </div>
          <div className="col-lg-6">
            <label>
              Email
              <input
                type="email"
                name="email"
                id="email"
                disabled={true}
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                placeholder="Your Email"
              />
            </label>
          </div>
          <div className="col-12">
            <label>
              Address
              <input
                type="text"
                name="address"
                id="address"
                value={address}
                onChange={(e) => {
                  setAdress(e.target.value);
                }}
              />
            </label>
          </div>
          <div className="col-lg-6">
            <div className="select-level level-b">
              <label>
                City
                <input
                  type="text"
                  name="city"
                  id="city"
                  value={addrcity}
                  onChange={(e) => {
                    setCity(e.target.value);
                  }}
                />
              </label>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="select-level level-b">
              <label>
                State
                <input
                  type="text"
                  name="state"
                  id="state"
                  value={addrstatename}
                  onChange={(e) => {
                    setStateName(e.target.value);
                  }}
                />
              </label>
            </div>
          </div>
          <div className="col-lg-6">
            <label>
              Zip Code
              <input
                type="text"
                name="zipcode"
                id="zipcode"
                value={zipcode}
                onChange={(e) => {
                  setZipCode(e.target.value);
                }}
              />
            </label>
          </div>
          <div className="col-lg-6">
            <div className="select-level level-b">
              <label>
                Country
                <input
                  type="text"
                  name="country"
                  id="counry"
                  value={addrcountry}
                  onChange={(e) => {
                    setCountry(e.target.value);
                  }}
                />
              </label>
            </div>
          </div>
          <div className="col-12">
            <div className="form-inner">
              <label>
                Password*
                <i
                  onClick={() => togglePasswordVisibility()}
                  className={
                    !passwordVisible
                      ? "bi bi-eye-slash"
                      : "bi bi-eye-slash  bi-eye"
                  }
                  id="togglePasswordTwo"
                />
                <input
                  type={!passwordVisible ? "password" : "text"}
                  name="email"
                  id="passwordTwo"
                  placeholder="******"
                  value={password}
                  onChange={(e) => {
                    setPass(e.target.value);
                  }}
                />
              </label>
            </div>

            <button
              id="btn_submit_updat_profile"
              type="button"
              onClick={updateProfile}
            >
              Update Profile
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default UserProfile;
