import React, { useState,useEffect } from "react";
import axios from "axios";

function OrderNow(props) {

    const [addresses,setAddresses] = useState();

    useEffect(() => {
      axios.post("http://localhost:5000/get-user-address",{
        uid:props.uid
      }).then((res)=>{
        setAddresses(res.data)
      }).catch((error)=>{
        console.log(error);
      })
    }, [])

    const handleAddrClick = (n)=> {
      
    }
    

  return (
    <div className="contact-info">
      <div className="row gy-4 align-items-center" style={{display:"inline-block"}}>
        <div className="col-md-6 col-lg-4" style={{width:"fit-content"}} onClick={handleAddrClick(1)}>
          <div className="info" style={{paddingLeft:"50px",paddingRight:"50px"}}>
            <div className="icon">
              <i className="fas fa-map-marker-alt" />
            </div>
            <div className="desc">
              <h4>Address 1</h4>
              <p>{addresses ? addresses.addr1 : "please wait"}</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4" style={{width:"fit-content"}} onClick={handleAddrClick(2)}>
          <div className="info" style={{paddingLeft:"50px",paddingRight:"50px"}}>
            <div className="icon">
              <i className="fas fa-map-marker-alt" />
            </div>
            <div className="desc">
              <h4>Address 2</h4>
              <p>{addresses ? addresses.addr2 : "please wait"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderNow;
