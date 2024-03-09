"use client"

import React, {useState} from 'react';
import {loadStripe} from '@stripe/stripe-js';
import {
  PaymentElement,
  Elements,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';

const CheckoutForm = (props) => {
  const stripe = useStripe();
  const elements = useElements();

  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (elements == null) {
      return;
    }

    // Trigger form validation and wallet collection
    const {error: submitError} = await elements.submit();
    if (submitError) {
      // Show error to your customer
      setErrorMessage(submitError.message);
      return;
    }
   

    const header = {"content-type": "application/json"}
    const body = {price : Number(props.price)}
    // Create the PaymentIntent and obtain clientSecret from your server endpoint
    const res = await fetch('http://localhost:5000/create-checkout-session', {
      method: 'POST',
      headers: header,
      body : JSON.stringify(body)
    });

    
const  clientSecret = await res.json();
console.log(clientSecret.client_secret);

    const { error } = await stripe.confirmPayment({
        elements,
      clientSecret:clientSecret.client_secret,
        confirmParams: {
          return_url: 'http://localhost:3000/sucess',
        },
      });

    if (error) {
      // This point will only be reached if there is an immediate error when
      // confirming the payment. Show error to your customer (for example, payment
      // details incomplete)
      setErrorMessage(error.message);
    } else {
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{width:"500px",height:"400px"}}>
       <h3 style={{justifyContent:"center", paddingLeft:"170px", paddingTop:"10px"}}>amount : ${props.price}</h3>
      <PaymentElement />
      <button type="submit" disabled={!stripe || !elements} style={{width:"130px",height:"50px",backgroundColor:"green", marginTop:"30px", marginLeft:"170px", borderRadius:"30px"}}>
        Pay
      </button>
      {/* Show error message to your customers */}
      {errorMessage && <div>{errorMessage}</div>}
    </form>
  );
};

const Payment = (props) =>{
const stripePromise = loadStripe('pk_test_51OrCeZSAHocqgcx7LAgJ0JUt4BYdIq8BfzrpKttBfhEu17OfVe2obH1cVrLOJoXkIx6CJcrtmeOk78TgHSc1e3Zt00phU9TOdk');

const options = {  
  mode: 'payment',
  amount: Number(props.price),
  currency: 'usd',
  description: props.description,

//   // Fully customizable with appearance API.
//   appearance: {
//     /*...*/
//   }
};

return (
  <Elements stripe={stripePromise} options={options}>
    <CheckoutForm price={props.price}/>
  </Elements>
);
}
export default Payment;