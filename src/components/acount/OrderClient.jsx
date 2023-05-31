import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { auth } from "../../firebase/firebase";

function OrderClient() {
  const userid = auth.currentUser.uid;
  const [orders, setOrdersData] = useState([]);

  async function getOrders() {
    axios
      .get(`http://localhost:5000/get-orders-client/${userid}`, {
        withCredentials: true,
      })
      .then((res) => {
        setOrdersData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async function cancelTheService(id) {
    await axios
      .post("http://localhost:5000/delete-service-client", {
        _id: id,
      })
      .then((res) => {
        if (res.status == 200) {
          getOrders();
          window.alert("task deleted");
        }
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
                      <span>{"service"}</span>
                    </td>
                    <td data-label="Order ID">{item._id}</td>
                    <td data-label="Order Ammount">{item.amount}</td>
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
                        ) : (
                          <button className="btn-current-task" type="button">
                            done
                          </button>
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
