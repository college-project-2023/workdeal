import React from "react";

function Signuptype(props) {
  function handleClientClick() {
    document.getElementById("radio_client").checked = true;
    props.setvalue("client");
  }

  function handleWorkerClick() {
    document.getElementById("radio_worker").checked = true;
    props.setvalue("worker");
  }

  return (
    <center>
      <div className="typecontainer">
        <div onClick={handleWorkerClick}>
          <div className="divtypeuser">
            <div className="chek-wrapper">
              <input
                type="radio"
                id="radio_worker"
                className="check_sign_up_type"
                name="type"
              />
            </div>
            <img src="assets/images/worker.png" className="worker" />
            <h5 id="txt_type_user_text">Create as worker</h5>
          </div>
        </div>
        <div onClick={handleClientClick}>
          <div className="divtypeuser">
            <div className="chek-wrapper">
              <input
                type="radio"
                id="radio_client"
                className="check_sign_up_type"
                name="type"
              />
            </div>
            <img src="assets/images/user.png" className="worker" />
            <h5 id="txt_type_user_text">Create as client</h5>
          </div>
        </div>
      </div>
    </center>
  );
}

export default Signuptype;
