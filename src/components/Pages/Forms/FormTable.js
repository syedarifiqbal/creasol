import React from "react";
import { Link } from "react-router-dom";

const FormTable = ({ Orders, Filter = "", isAdmin = false }) => {
  const OrderList = () => {
    if (Orders) {
      const o =
        Filter === ""
          ? Orders.data
          : Filter === "Submitted"
          ? Orders.data.filter((order) => order.form_status === "Submitted")
          : Orders.data.filter(
              (order) => order.form_status === "Not Submitted"
            );
      return o.map((order) => (
        <tr key={order._id}>
          <td>{order._id}</td>
          <td>{order.pkg_name}</td>
          <td>{order.medium}</td>
          <td>{order.form_status}</td>
          <td>32:43:00</td>
          <td>
            {order.form_status === "Not Submitted" ? (
              !isAdmin ? (
                <Link to={`/form/${order._id}`}>
                  <span className="status canceled">Fill</span>
                </Link>
              ) : (
                <Link to={"/forms"}>
                  <span className="status canceled">Send Reminder</span>
                </Link>
              )
            ) : (
              <Link to={`/view/form/${order._id}`}>
                <span className={`status active ${isAdmin ? "d-block" : ""}`}>
                  View
                </span>
              </Link>
            )}
          </td>
        </tr>
      ));
    } else {
      return (
        <tr>
          <td colSpan="10">Loading...</td>
        </tr>
      );
    }
  };

  return (
    <table className="table table-borderless dataTable px-2">
      <thead>
        <tr>
          <th className="sorting">Order ID</th>
          <th className="sorting">Package Name</th>
          <th className="sorting">Medium</th>
          <th className="sorting">Form Status</th>
          <th className="sorting">Time Left</th>
          <th className="sorting">Action</th>
        </tr>
      </thead>
      <tbody>
        <OrderList />
      </tbody>
    </table>
  );
};

export default FormTable;
