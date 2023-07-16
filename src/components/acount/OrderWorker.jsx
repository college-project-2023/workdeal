import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { auth } from "../../firebase/firebase";

function OrderWorker(props) {
  const userid = auth.currentUser.uid;
  const [orders, setOrdersData] = useState([]);

  const [orderPending, setOrderPending] = useState(0);
  const [orderComplete, setOrderComplete] = useState(0);

  const [currentTask, setCurrentTask] = useState();

  function setOrderDataToDashboard() {
    for (let i = 0; i < orders.length; i++) {
      if (orders[i].status == "completed") {
        setOrderComplete(orderComplete + 1);
      } else {
        setOrderPending(orderPending + 1);
      }
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
            window.alert("task started");
          }
        });
    } else {
      window.alert("please cancel current task");
    }
  }

  async function deleteTheService(id) {
    await axios
      .post("http://localhost:5000/delete-service-work", {
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
    setOrderDataToDashboard();
  }, [orders]);

  useEffect(() => {
    props.pending(orderPending);
    props.complete(orderComplete);
  }, [orderPending, orderComplete]);

  async function getOrders() {
    console.log(userid);
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
                <th>Order By</th>
                <th>Order Ammount</th>
                <th>Address</th>
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
                              onClick={() => deleteTheService(item._id)}
                            >
                              cancel
                            </button>
                          </div>
                        ) : item.status == "working" ? (
                          <button
                            className="btn-current-task-cancel"
                            type="button"
                          >
                            in progress
                          </button>
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

export default OrderWorker;
