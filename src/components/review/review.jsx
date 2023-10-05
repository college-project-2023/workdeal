import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

function Review(props) {
  const [rating, setrating] = useState(0);
  const [review, setReview] = useState("");
  const [price, setPrice] = useState();

  const handleSubmit = () => {
    if (rating != 0 && review != "" && price != null) {
      axios.get("http://localhost:5000/get-review-score",{params:{
        text:review
      }}).then((data)=>{
        var s = data.data;
        if(!s){
          s=0;
        }
        var score = s;
        if(props.review_score && props.review_score!=0){
          score = (props.review_score+s)/2
        }
        if(!score || !Number.isInteger(score)){
          score=0;
        }
        axios
        .post("http://localhost:5000/set-review-worker", {
          uid: props.uid,
          clientUid: props.clientUid,
          workId: props.workId,
          name: props.name,
          review: review,
          rating: rating,
          price: price,
        })
        .then((res) => {
            axios.post('http://localhost:5000/set-review-score',{
              uid:props.uid,
              score:score,
            }).then((res)=>{
              console.log(res)
              props.closeDialog(false)              
            }).catch((err)=>{
              console.log(err);
            })
        })
        .catch((error) => {
          console.log(error);
        });
      })
    
    }else{
        window.alert("please enter valid fields")
    }
  }

  return (
    <div className="container d-flex justify-content-center ">
      <div className="row">
        <center>
          <div className="col-lg-12">
            <div className="stars">
              <form action="">
                <input
                  className="star star-5"
                  id="star-5"
                  type="radio"
                  name="star"
                  onClick={() => {
                    setrating(5);
                  }}
                />

                <label className="star star-5" for="star-5"></label>

                <input
                  className="star star-4"
                  id="star-4"
                  type="radio"
                  name="star"
                  onClick={() => {
                    setrating(4);
                  }}
                />

                <label className="star star-4" for="star-4"></label>

                <input
                  className="star star-3"
                  id="star-3"
                  type="radio"
                  name="star"
                  onClick={() => {
                    setrating(3);
                  }}
                />

                <label className="star star-3" for="star-3"></label>

                <input
                  className="star star-2"
                  id="star-2"
                  type="radio"
                  name="star"
                  onClick={() => {
                    setrating(2);
                  }}
                />

                <label className="star star-2" for="star-2"></label>

                <input
                  className="star star-1"
                  id="star-1"
                  type="radio"
                  name="star"
                  onClick={() => {
                    setrating(1);
                  }}
                />

                <label className="star star-1" for="star-1"></label>
              </form>
            </div>
          </div>
          <p>This helps us to provide better service</p>
        </center>

        <div className="col-lg-12">
          <div className="review-form">
            <label>
              Feedback
              <input
                type="text"
                value={review}
                onChange={(e) => {
                  setReview(e.target.value);
                }}
                placeholder="Your experience"
              />
            </label>
            <label>
              Amount taken by service provider
              <input
                type="number"
                value={price}
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
                placeholder="Amount in rupees"
              />
            </label>

            <button id="btn_submit_updat_profile" type="button" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Review;
