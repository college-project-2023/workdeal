import React, { useEffect, useReducer, useRef, useState } from "react";
import axios from "axios";
import { auth } from "../../firebase/firebase";
import { Dialog, DialogTitle,ToggleButton } from "@mui/material";
import Review from "../review/review";
import DialogLayout from "../common/DialogLayout";
import { connectStorageEmulator } from "firebase/storage";

function OrderClient() {
  const [orders, setOrdersData] = useState([]);
  const [itemToComplete,setItemToComplete]=useState({})

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
      axios
        .get("http://localhost:5000/get-review-score-from-service", {
          params: { uid: auth.currentUser.uid },
        })
        .then((res) => {
          setReviewScore(res.data.review_score);
        });
    }
  }
  const [uid, setUid] = useState();
  const [clientUid, setClientUid] = useState();
  const [name, setName] = useState();
  const [workId, setWorkId] = useState();
  const [review_score, setReviewScore] = useState();

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

  function isCompleted(id,uid) {
    setItemToComplete({id:id,uid:uid})
    setShowCompleted(true);
  }

  async function completeTheservice() {

    await axios
      .post("http://localhost:5000/complete-service", {
        _id: itemToComplete.id,
      })
      .then((res) => {
        getOrders();
        getCurrentComplete(itemToComplete.id);
        setShowCompleted(false);
        setWorkCount(itemToComplete.uid);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async function setWorkCount(orderToUid) {
    const uid = orderToUid;
    axios
      .get("http://localhost:5000/get-work-count", {
        uid: uid,
      })
      .then((res) => {
        axios
          .post("http://localhost:5000/set-work-count", {
            uid: uid,
            count: res,
          })
          .then((res) => {})
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
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
          review_score={review_score}
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
        <Dialog open={showCompleted} close={close}>
          <center>
            <DialogTitle>Completed?</DialogTitle>
            <p
              style={{
                marginLeft: "30px",
                marginRight: "30px",
                marginBottom: "20px",
              }}
            >
              "is service provided by worker? please click 'YES' if work is
              done"
            </p>
          </center>
          <div class="row">
            <div class="col-6">
              <ToggleButton onClick={completeTheservice}>YES</ToggleButton>
            </div>
            <div class="col-6">
              <ToggleButton onClick={close}>NO</ToggleButton>
            </div>
          </div>
        </Dialog>
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
                              onClick={() =>
                                isCompleted(item._id,item.orderToUid)
                              }
                            >
                              completed?
                            </button>
                          </div>
                        ) : item.status == "completed" ? (
                          <button className="btn-current-task" type="button">
                            completed
                          </button>
                        ) : item.status == "cancelled" ? (
                          <button
                            className="btn-current-task-cancel"
                            type="button"
                          >
                            cancelled
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
