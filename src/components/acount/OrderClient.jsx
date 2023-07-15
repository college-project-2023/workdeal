import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { auth } from "../../firebase/firebase";

function OrderClient() {
  const userid = auth.currentUser.uid;
  const [orders, setOrdersData] = useState([]);

  async function getOrders() {
    axios
      .post(`http://localhost:5000/get-orders-client/`, {
        orderByUid: userid,
      })
      .then((res) => {
        console.log(res.data);
        setOrdersData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async function cancelTheService(id) {
    await axios
      .post("http://localhost:5000/cancel-service", {
        _id: id,
      })
      .then((res) => {
        if (res.status == 200) {
          getOrders();
          window.alert("task deleted");
        }
      });
  }

  async function completeTheservice(id){
    await axios.post("http://localhost:5000/complete-service",{
      _id:id,
    }).then((res)=>{
      getOrders();
    }).catch((error)=>{
      console.log(error)
    })
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
        </div>
        <div className="order-table" style={{ overflowX: "auto" }}>
          <table style={{ width: "100%" }}>
            <thead>
              <tr className="head">
                <th>Service Title</th>
                <th>Order ID</th>
                <th>Order To</th>
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
                      <span>{item.service}</span>
                    </td>
                    <td data-label="Order ID">{item._id}</td>
                    <td data-label="Service Provider">{item.orderToName}</td>
                    <td data-label="Order Ammount">
                      {item.amount == 0 ? "Not Specified" : item.amount}
                    </td>
                    <td data-label="Status">{item.status}</td>
                    <td data-label="Action">
                      <div className="action">
                        {item.status == "pending" ? (
                          <button
                            className="btn-current-task"
                            type="button"
                            onClick={() => cancelTheService(item._id)}
                          >
                            cancel
                          </button>
                        ) : item.status == "working" ? (
                          <div>
                            <button className="btn-current-task" type="button">
                              in progress
                            </button>

                            <button
                              className="btn-current-task-cancel"
                              type="button"
                              onClick={() => completeTheservice(item._id)}
                            >
                              completed?
                            </button>
                          </div>
                        ) : item.status == "completed" ? (
                          <button className="btn-current-task" type="button">
                            completed
                          </button>
                        ) : (
                          "error"
                        )}
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

export default OrderClient;
