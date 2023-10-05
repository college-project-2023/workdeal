import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { auth } from "../../firebase/firebase";
import DialogLayout from "../common/DialogLayout";

function OrderWorker(props) {
  const [orders, setOrdersData] = useState([]);

  const [orderPending, setOrderPending] = useState(0);
  const [orderComplete, setOrderComplete] = useState(0);

  const [currentTask, setCurrentTask] = useState();

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

  async function deleteTheService(id) {
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
      <div className="all-order">
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
                  <th>Order By</th>
                  <th>Order Ammount</th>
                  <th>Address</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              {/* every single data*/}

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
                              reject
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
