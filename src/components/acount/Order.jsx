import React from "react";

function Order() {
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
            <tbody>
              <tr>
                <td data-label="Service Title">
                  <img src="assets/images/table-data/table-data-1.jpg" alt="" />
                  <span>Hair Cut Service</span>
                </td>
                <td data-label="Order ID">#200124001</td>
                <td data-label="Order Ammount">1222.8365</td>
                <td data-label="Status">Complete</td>
                <td data-label="Action">
                  <div className="action">
                    <div className="view">
                      <i className="bi bi-eye" />
                    </div>
                    <div className="delete">
                      <i className="bi bi-trash3" />
                    </div>
                  </div>
                </td>
              </tr>
              {/* every single data*/}
              <tr>
                <td data-label="Service title">
                  <img src="assets/images/table-data/table-data-2.jpg" alt="" />
                  <span>Hous Shift Service</span>
                </td>
                <td data-label="Order ID">#2005601</td>
                <td data-label="Order Ammount">1455.8768</td>
                <td data-label="Status">Complete</td>
                <td data-label="Action">
                  <div className="action">
                    <div className="view">
                      <i className="bi bi-eye" />
                    </div>
                    <div className="delete">
                      <i className="bi bi-trash3" />
                    </div>
                  </div>
                </td>
              </tr>
              {/* every single data*/}
              <tr>
                <td data-label="Service title">
                  <img src="assets/images/table-data/table-data-3.jpg" alt="" />
                  <span>Electric Line Services</span>
                </td>
                <td data-label="Order ID">#200129875</td>
                <td data-label="Order Ammount">1268.8955</td>
                <td data-label="Status">Complete</td>
                <td data-label="Action">
                  <div className="action">
                    <div className="view">
                      <i className="bi bi-eye" />
                    </div>
                    <div className="delete">
                      <i className="bi bi-trash3" />
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="show-entries">
          <div className="entrie">
            <span>Showing 10 to 20 of 1 entries</span>
            <ul className="paginate">
              <li>
                <a href="#">Previous</a>
              </li>
              <li>
                <a href="#">01</a>
              </li>
              <li className="active">
                <a href="#">02</a>
              </li>
              <li>
                <a href="#">03</a>
              </li>
              <li>
                <a href="#">Next</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Order;
