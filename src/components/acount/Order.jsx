import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { auth } from "../../firebase/firebase";

function Order(props) {
  const userid = auth.currentUser.uid;
  const [orders, setOrdersData] = useState([]);
  const service = props.service;


  const [orderPending,setOrderPending] = useState(0);
  const [orderComplete,setOrderComplete] = useState(0);


  function setOrderDataToDashboard(){
    for(let i=0;i<orders.length;i++){
      if (orders[i].status=="Complete"){
        setOrderComplete(orderComplete+1)
      }else{
        setOrderPending(orderPending+1)
      }
    }
  }

  function sendToMapPage(){
    
  }

  useEffect(()=>{
    setOrderDataToDashboard()
  },[orders])

  useEffect(()=>{
    props.pending(orderPending)
    props.complete(orderComplete)
  },[orderPending,orderComplete]);

  async function getOrders() {
    axios
      .get(`http://localhost:5000/get-orders-worker/${userid}`, {
        withCredentials: true,
      })
      .then((res) => {
        setOrdersData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    getOrders();
  }, []);

  

  return (
    <div
      className="tab-pane fade"
      id="v-pills-order"
      role="tabpanel"
      aria-labelledby="v-pills-order-tab"
    >
      <div className="all-order">
        <div className="order-head">
          <h3>All Order</h3>
          <select style={{ padding: "8px" }}>
            <option selected>Show: Last 05 Order</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>
        </div>
        <div className="order-table" style={{ overflowX: "auto" }}>
          <table style={{ width: "100%" }}>
            <thead>
              <tr className="head">
                <th>Service Title</th>
                <th>Order ID</th>
                <th>Order Ammount</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            {/* every single data*/}
            {orders && (
              <tbody>
                {orders.map((item) => (
                  <tr key={item._id}>
                    <td data-label="Service Title">
                      <img
                        src="assets/images/table-data/table-data-1.jpg"
                        alt=""
                      />
                      <span>{service}</span>
                    </td>
                    <td data-label="Order ID">{item._id}</td>
                    <td data-label="Order Ammount">{item.amount}</td>
                    <td data-label="Status">{item.status}</td>
                    <td data-label="Action">
                      <div className="action">
                        <div className="view" onClick={sendToMapPage}>
                          <i className="bi bi-eye" />
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            )}
          </table>
        </div>
        
      </div>
    </div>
  );
}

export default Order;
