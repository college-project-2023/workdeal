import React, { useEffect, useReducer, useRef, useState } from "react";
import axios from "axios";
import { auth } from "../../firebase/firebase";
import { Dialog, DialogTitle } from "@mui/material";
import Review from "../review/review";
import DialogLayout from "../common/DialogLayout";

function OrderClient() {
  const [orders, setOrdersData] = useState([]);

  async function getOrders() {
    if (auth.currentUser) {
      const userid = auth.currentUser.uid;
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
  }
  const [uid, setUid] = useState();
  const [clientUid, setClientUid] = useState();
  const [name, setName] = useState();
  const [workId, setWorkId] = useState();

  function getCurrentComplete(id) {
    for (let i = 0; i < orders.length; i++) {
      if (orders[i]._id == id) {
        setUid(orders[i].orderToUid);
        setClientUid(orders[i].orderByUid);
        setName(orders[i].orderByName);
        setWorkId(orders[i]._id);
      }
    }
    setOpenReview(true);
  }

  async function cancelTheService(id) {
    await axios
      .post("http://localhost:5000/cancel-service", {
        _id: id,
      })
      .then((res) => {
        if (res.status == 200) {
          getOrders();
          setShowCancel(true);
        }
      });
  }

  async function completeTheservice(id) {
    await axios
      .post("http://localhost:5000/complete-service", {
        _id: id,
      })
      .then((res) => {
        getOrders();
        getCurrentComplete(id);
        setShowCompleted(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    getOrders();
  }, []);

  const [openReview, setOpenReview] = useState(false);
  const closeReview = () => {
    setOpenReview(false);
  };

  const [showCancel, setShowCancel] = useState(false);
  const [showCompleted, setShowCompleted] = useState(false);

  return (
    <div
      className="tab-pane fade"
      id="v-pills-order"
      role="tabpanel"
      aria-labelledby="v-pills-order-tab"
    >
      <Dialog open={openReview} onClose={closeReview}>
        <DialogTitle>Please rate the service</DialogTitle>
        <Review
          uid={uid}
          clientUid={clientUid}
          name={name}
          workId={workId}
          closeDialog={setOpenReview}
        />
      </Dialog>
      {showCancel && (
        <DialogLayout
          title={"service cancelled"}
          content={"Thank you for trying our platform\nhope you like it"}
          buttonText={"DONE"}
        />
      )}
      {showCompleted && (
        <DialogLayout
          title={"Completed?"}
          content={
            "is service provided by worker? please click 'YES' if work is dservice booking cancelledone"
          }
          buttonText={"YES"}
        />
      )}

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
                    <td data-label="Service Provider">{item.orderToName}</td>
                    <td data-label="Order Ammount">
                      {item.amount == 0 ? "Not Specified" : item.amount}
                    </td>
                    <td data-label="Address">{item.address}</td>
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
