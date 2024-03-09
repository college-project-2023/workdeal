import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import axios from "axios";
import { auth } from "../../firebase/firebase";
import DialogLayout from "../common/DialogLayout";
import { Dialog, DialogTitle,ToggleButton } from "@mui/material";
import Reqform from "./Reqform";
import { trusted } from "mongoose";
import Mapworker from "./Mapworker";

function OrderWorker(props) {
  const [orders, setOrdersData] = useState([]);

  const [orderPending, setOrderPending] = useState(0);
  const [orderComplete, setOrderComplete] = useState(0);
  const [paymentclick , setPaymentclick] = useState(false);
  const [paymentMode, setPaymentMode] = useState("");
  const [currentTask, setCurrentTask] = useState();
  const [paymentType, setPaymentType] = useState("payment");
  const[req , setReq] = useState(false);

 

  function setOrderDataToDashboard() {
    let price = 0,
      count = 0;
    for (let i = 0; i < orders.length; i++) {
      if (orders[i].status == "completed") {
        setOrderComplete(orderComplete + 1);
        price += orders[i].amount;
        count += 1;
      } else {
        setOrderPending(orderPending + 1);
      }
    }
    if (price != 0) {
      price /= count;
      props.setAvgPrice(price);
    }
  }

  async function startTheService(id) {
    if (!currentTask) {
      await axios
        .post("http://localhost:5000/set-current-work", {
          _id: id,
          uid: auth.currentUser.uid,
        })
        .then((res) => {
          if (res.status == 200) {
            getOrders();
            setShowAccept(true);
          }
        });
    } else {
      window.alert("please cancel current task");
    }
  }

  async function deleteTheService(id, uid) {
    await axios
      .post("http://localhost:5000/cancel-service", {
        _id: id,
      })
      .then((res) => {
        if (res.status == 200) {
          getOrders();
          setShowReject(true);
        }
      });
      try {
        const response = await axios.delete('http://localhost:5000/delete/', {
          params: {
            clientid: uid
          }
        });
        console.log(response.data);
        if(response){
          setdone(true)
    
        }
      } catch (error) {
        console.error('Error:', error);
      }
  }

  useEffect(() => {
    setOrderDataToDashboard();
  }, [orders]);

  useEffect(() => {
    props.pending(orderPending);
    props.complete(orderComplete);
  }, [orderPending, orderComplete]);

  async function getOrders() {
    if (auth.currentUser) {
      const userid = await auth.currentUser.uid;
      axios
        .post(`http://localhost:5000/get-orders-worker/`, {
          orderToUid: userid,
        })
        .then((res) => {
          setOrdersData(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  useEffect(() => {
    getOrders();
  }, []);

  const [showAccept, setShowAccept] = useState(false);
  const [showReject, setShowReject] = useState(false);
  const [data , setData] = useState([]);

  const handlePayment = async (item) => {
    // console.log(item)
    // console.log(item.orderByUid);
    // console.log(item.orderToUid)
    setPaymentMode("payment");
    setPaymentclick(true);

     await axios
     .post('http://localhost:5000/payment/',{
      ptype:"pending..",
      status: "pending..",
      workId: item.orderByUid,
      clientId:item.orderToUid,
      price: "0",
      description:"pending"
      
    }).then(() => {}).catch(error => {
      // Optional: Handle errors if the request fails
      console.error('Error:', error);
  });
  await
  axios.get("http://localhost:5000/status", {
    params: {
      workId: item.orderByUid,
      clientId: item.orderToUid
    }
  }).then((response) => {
    setData(response.data);
  }).catch((error) => {
    console.error('Error:', error);
  });
  };

  const ans = data.map((data) => {
    return data.status;
   })
   console.log(ans)
  const handlePaymentDone = async (item) => {
    // Update the status of the order to "done"
    // console.log(item.orderByUid);
    // console.log(item.orderToUid);
     setPaymentType("offline")
    await axios.post('http://localhost:5000/update/',{
        ptype: "offline",
        workId: item.orderByUid,
        clientId: item.orderToUid // Assuming this is clientId
    }).then(() => {
        setPaymentType("done");
    }).catch(error => {
        console.error('Error:', error);
    });
};


    // Perform any other necessary actions here

    // Redirect or perform other actions as needed
    // window.location.href = "/account";
  


   const handleonline = async (item) => {
    await axios.post('http://localhost:5000/online/',{
      
      workId: item.orderByUid,
      clientId: item.orderToUid,
      status:"online" // Assuming this is clientId
  }).then(() => {
      setPaymentType("done");
  }).catch(error => {
      console.error('Error:', error);
  });

     setReq(true);
     setPaymentType("online");
   };

  const closerequest = () => {
    setReq(false);
  }
  const[location , setlocation] = useState([]);
  const[showmap,setShowmap] = useState(false);

  const getlocation=async (clientid)=>{
    console.log(clientid)
    setShowmap(true);
    await axios.get("http://localhost:5000/get-location", {
      params: {
        clientid: clientid
      }
    }).then((response) => {
      setlocation(response.data);
    }).catch((error) => {
      console.error('Error:', error);
    });

   }
   const latitude = location.map((data) => {
    return data.latitude;
   })
   const longitude = location.map((data) => {
    return data.longitude;
   }) 
   console.log(longitude)
   console.log(latitude)
  
   const closemap = () => {
    setShowmap(false);
   }
  
const[doneloc,setdone] = useState(false);
const done = async (uid) => {
  try {
    const response = await axios.delete('http://localhost:5000/delete/', {
      params: {
        clientid: uid
      }
    });
    console.log(response.data);
    if(response){
      setdone(true)

    }
  } catch (error) {
    console.error('Error:', error);
  }

}

   
   const handleClick = () => {
     // Constructing the URL for Google Maps directions
     
     const destinationLat = latitude;
     const destinationLng = longitude;
     console.log(destinationLat)
     const url = `https://www.google.com/maps/dir/?api=1&destination=${destinationLat},${destinationLng}`;
     // Opening Google Maps in a new tab
     window.open(url, '_blank');
   };
  return (
    <div
      className="tab-pane fade"
      id="v-pills-order"
      role="tabpanel"
      aria-labelledby="v-pills-order-tab"
    >
      {showAccept && (
        <DialogLayout
          title={"Let's get to work"}
          content={"Please be in time and don't forget terms. Customers are our first priority. \nAll the best for your order"}
          buttonText={"DONE"}
        />
      )}
      {showReject && (
        <DialogLayout
          title={"Order Rejected"}
          content={"Please keep in mind that more rejections of work will lose your rating.\nThank you for work with WorkDeal"}
          buttonText={"DONE"}
        />
      )}
      
      <div className="all-order" style={{marginLeft:"7px"}}>
        <div className="order-head">
          <h3>All Order</h3>
        </div>
        {orders && orders.length>0 ? (
          <div className="order-table" style={{ overflowX: "auto" }}>
            <table style={{ width: "100%" }}>
              <thead>
                <tr className="head">
                  <th>Service Title</th>
                  <th>Order ID</th>
                  <th style={{width:"10px"}}>Order By</th>
                  <th>Order Ammount</th>
                  <th>Address</th>
                  <th>Status</th>
                  <th>Action</th>
                  
                </tr>
              </thead>
              {/* every single data*/}

              <tbody >
                {orders.map((item) => (
                  <tr key={item._id}>
                    <td data-label="Service Title">
                      <span>{item.service}</span>
                    </td>
                    <td data-label="Order ID">{item._id}</td>
                    <td data-label="Order By">{item.orderByName}</td>
                    <td data-label="Order Ammount">{item.amount}</td>
                    <td data-label="Address">{item.address}</td>
                    <td data-label="Status">{item.status}</td>
                    <td data-label="Action">
                      <div className="action">
                        {item.status == "pending" ? (
                          <div>
                            {!currentTask && (
                              <button
                                className="btn-current-task"
                                type="button"
                                onClick={() => startTheService(item._id)}
                              >
                                accept
                              </button>
                            )}

                            <button
                              className="btn-current-task-delete"
                              type="button"
                              onClick={() => deleteTheService(item._id,item.orderByUid)}
                            >
                              reject
                            </button>
                            {doneloc ? <button
                            type="button"
                            className="btn btn-info"
                            onClick={()=>getlocation(item.orderByUid)} disabled>
                              LOCATION
                            </button>:
                            <button
                            type="button"
                            className="btn btn-info"
                            onClick={()=>getlocation(item.orderByUid)} >LOCATION</button>}
                            {showmap && !doneloc &&
                            <Dialog open={showmap} onClose={closemap} >
                              <DialogTitle >USER LOCATION ROUTE </DialogTitle>
                            {/* <Mapworker 
                             latitude={latitude}
                             longitude={longitude}
                             closeDialog={showmap}
                            
                            /> */}
                            <div>
                            <ToggleButton onClick={handleClick} style={{ width: "40%", borderColor: "green", marginLeft: "7%", marginBottom: "10%" }}>DIRECTION</ToggleButton>
    
    
    <ToggleButton onClick={()=>done(item.orderByUid)} style={{ width: "40%", borderColor: "green", marginTop: "-10%", marginLeft: "3%" }}>  {" "}
              done{" "}</ToggleButton>
                            </div>
              
                            
                            </Dialog>
                            }
                          </div>
                        ) : item.status == "working" ? (
                          <div>
                          <button
                            className="btn-current-task-cancel"
                            type="button"
                          >
                            in progress
                          </button>
                          {paymentType!="payment"?
                           <button className="btn-current-task" type="button" onClick={()=>handlePayment(item)} disabled>
                       
                           {paymentType}
                          </button>:
                           <button className="btn-current-task" type="button" onClick={()=>handlePayment(item)} >
                       
                           {paymentType}
                          </button>
                          }

                          {paymentType == "payment" && (
        <Dialog open={paymentclick} close={closerequest} style={{ width: "100%", height: "100%" }}>
          <center>
            <DialogTitle>select payment mode...</DialogTitle>

            <ToggleButton
              onClick={() => handlePaymentDone(item)}
              style={{ width: "40%", borderColor: "green", marginLeft: "5%", marginBottom: "10%" }}
            >
              {" "}
              offline{" "}
            </ToggleButton>
            <ToggleButton
              onClick={() => handleonline(item)}
              style={{ width: "40%", borderColor: "green", marginTop: "-10%", marginLeft: "4%" }}
            >
              {" "}
              online{" "}
            </ToggleButton>
          </center>
        </Dialog>
        
      )}
      {paymentType == "online" && req &&
         <Dialog open={req} onClose={closerequest}>
         <DialogTitle>Please fill details for online payment req ... </DialogTitle>
         <Reqform
           
           workId={item.orderByUid}
           clientId={item.orderToUid}
           price={item.amount}
           workername={item.orderToName}
           closeDialog={setReq}
         />
       </Dialog>
      }
      {doneloc && paymentType == "payment" ? <button
                            type="button"
                            className="btn btn-info"
                            onClick={()=>getlocation(item.orderByUid)} disabled>
                              LOCATION
                            </button>:
                            <button
                            type="button"
                            className="btn btn-info"
                            onClick={()=>getlocation(item.orderByUid)} >LOCATION</button>}
                            {showmap && !doneloc &&
                            <Dialog open={showmap} onClose={closemap} >
                              <DialogTitle >USER LOCATION ROUTE </DialogTitle>
                            {/* <Mapworker 
                             latitude={latitude}
                             longitude={longitude}
                             closeDialog={showmap}
                            
                            /> */}
                            <div>
                            <ToggleButton onClick={handleClick} style={{ width: "40%", borderColor: "green", marginLeft: "7%", marginBottom: "10%" }}>DIRECTION</ToggleButton>
    
    
    <ToggleButton onClick={()=>done(item.orderByUid)} style={{ width: "40%", borderColor: "green", marginTop: "-10%", marginLeft: "3%" }}>  {" "}
              done{" "}</ToggleButton>
                            </div>
              
                            
                            </Dialog>
                            }
                          </div>
                        ) : item.status == "completed" && ans  ? (
                          <button className="btn-current-task" type="button">
                            completed
                          </button>
                        ) : item.status == "cancelled" ? (
                          <button className="btn-current-task-cancel" type="cancelled">
                            cancelled
                          </button>
                          
                        ) : "Error"}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ):<center><h3>No Orders Found</h3></center>}
      </div>
    </div>
  );
}

export default OrderWorker;
