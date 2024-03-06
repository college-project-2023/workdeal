"use client"
import React,{useState} from 'react'
import axios from "axios";


const Reqform = (props) => {
   
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState();


    const handleSubmit= async () => {

      if(description!="" && price!=null) {
      console.log(props)
     await axios.post("http://localhost:5000/price/", {
     workId:props.workId,
     clientId:props.clientId,
     description:description,
     price:price,
   

     }).then(()=>{
        props.closeDialog(false)
     }).catch((err)=>{

        console.log(err);
     })

    }};
  return (
    <div className="container d-flex justify-content-center ">
    <div className="row">
      
      <div className="col-lg-12">
        <div className="review-form">
        <label>
            price*
            <input
              type="number"
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
              placeholder="please enter a price"
            />
          </label>

          <label>
            worker name
            <input
              type="text"
              value={props.workername}
             
              placeholder="Your name"
            />
          </label>
          <label>
            Description*
            <input
              type="text"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              placeholder="enter information about your service"
            />
          </label>

          <button id="btn_submit_updat_profile" type="button" onClick={handleSubmit}>
            payment request
          </button>
        </div>
      </div>
    </div>
  </div>
);
  
}

export default Reqform
