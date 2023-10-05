import React, { useState } from 'react'
import { auth } from '../firebase/firebase';
import { sendPasswordResetEmail } from 'firebase/auth';

function resetpass() {

    const [email,setEmail] = useState("");
    const [btnDisabled,setBtnDisabled] = useState(false);
    const [success,setSuccess] = useState(false);

    const sendResetlink = async()=> {
        if(email!="" && auth){
            setBtnDisabled(true);
            await sendPasswordResetEmail(auth,email)
            .then(()=>{
                setSuccess(true);
            }).catch((error)=>{
                setBtnDisabled(false);
                window.alert(error);
            });
        }else{
            window.alert("please enter your email")
        }
    }

  return (
    <div className="form">
      <p id="txt_head_sign_up_form">Reset Password</p>
      <div className="row">
        <div className="col-12">
          <label>
            Email*
            <input
              autoComplete="new-password"
              type="text"
              id="password"
              placeholder="Type Your Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </label>
        </div>
      </div>
      {success && (<div className="row">
        <div className="col-12">
          <label>
            Please check your email for password reset link
          </label>
        </div>
      </div>)}
      <div className="row">
        <input type="button" onClick={sendResetlink} disabled={btnDisabled} defaultValue={btnDisabled ? "Sent" : "Send Link"} className="btn_login_other_account"/>
        <button className="btn_login_other_account" onClick={()=>{window.location="/login"}}>
          Back to Login
        </button>
      </div>
    </div>
  )
}

export default resetpass