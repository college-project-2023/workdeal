import React, { useState,useEffect } from "react";
import axios from "axios";
import { auth } from "../../firebase/firebase";
import { Dialog, ToggleButton } from "@mui/material";
import "../../../public/assets/js/celebration"

function OrderNow(props) {

    const [addresses,setAddresses] = useState();
    const [userdata,setUserData] = useState();

    useEffect(() => {
      const getData = async()=>{
        const idtoken = await auth.currentUser.getIdToken();
        axios.post("http://localhost:5000/get-user-data",{
          uid:props.uid,
          idtoken:idtoken
        }).then((res)=>{
          setUserData(res.data)
          setAddresses({addr1:res.data.address,addr2:res.data.address2})
        }).catch((error)=>{
          console.log(error);
        })
      }
      if(auth.currentUser){
        getData()
      }
    }, [auth.currentUser])

    const handleAddrClick = (n)=> {
      props.showdialog(false)
      var addr = "";
      if(n==1){
        addr=userdata.address;
      }else{
        addr=userdata.address2;
      }
      if(addr==null){
        window.alert("please select valid address")
      }else{
        axios.post("http://localhost:5000/set-order-work",{
          orderByUid: auth.currentUser.uid,
          orderByName: userdata.fname+" "+userdata.lname,
          orderToName: props.workerdetail.name,
          orderToUid:props.workerdetail.uid,
          amount: props.workerdetail.price+"",
          service:props.workerdetail.tag,
          address:addr,
          status: "pending"
        }).then((res)=>{
          confetti({particleCount:300,spread:120,origin:{y:1}}); 
          props.showOrder(true);
          props.orderPlaced(true);
        }).catch((error)=>{
          console.log(error)
        })
      }
      
    }
    

  return (
    <div className="contact-info">
      
      <div className="row gy-4 align-items-center" style={{display:"contents"}}>
        <div className="col-md-6 col-lg-4" style={{width:"fit-content"}} onClick={()=>handleAddrClick(1)}>
          <div className="info" style={{paddingLeft:"50px",paddingRight:"50px"}}>
            <div className="icon">
              <i className="fas fa-map-marker-alt" />
            </div>
            <div className="desc">
              <h4>Address 1</h4>
              <p>{addresses ? addresses.addr1 ? addresses.addr1 : "No other address found" : "please wait"}</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4" style={{width:"fit-content"}} onClick={()=>handleAddrClick(2)}>
          <div className="info" style={{paddingLeft:"50px",paddingRight:"50px"}}>
            <div className="icon">
              <i className="fas fa-map-marker-alt" />
            </div>
            <div className="desc">
              <h4>Address 2</h4>
              <p>{addresses ? addresses.addr2 ? addresses.addr2 : "No other address found" : "please wait"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderNow;
