import { userSelector } from "features/auth/authSlice";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { client } from "utils/utils";

const FormListing = () => {
  let { user } = useSelector(userSelector);
  user = user === null ? {} : user;
  const isAdmin = user && user.is_admin;
  const [orders, setOrders] = useState(null);
  useEffect(() => {
    client("/api/orders?perPage=50000000").then((res) => {
      const { data } = res;
      console.log(data);
      setOrders(data);
    });
  }, []);

  const OrderList = () => {
    // if (isAdmin) {
    return orders ? (
      orders.data.map((order) => (
        <tr key={order._id}>
          <td>{order._id}</td>
          <td>{order.pkg_name}</td>
          <td>{order.medium}</td>
          <td>{order.form_status}</td>
          <td>32:43:00</td>
          <td>
            <Link to={`/form/${order._id}`}>
              {order.form_status === "Not Submitted" ? (
                <span className="status canceled">Fill</span>
              ) : (
                <span className="status active">View</span>
              )}
            </Link>
          </td>
        </tr>
      ))
    ) : (
      <tr>
        <td colSpan="10">Loading...</td>
      </tr>
    );
    // }
  };

  return (
    <section id="user_page" className="user-page">
      <div className="content-body">
        <div className="page-title mb-4">
          <div className="row">
            <div className="col-12">
              <h2>Form Status</h2>
            </div>
          </div>
        </div>
        <div className="dataTables_wrapper">
          <div className="main-tabble table-responsive mx-n2">
            <table className="table table-borderless dataTable px-2">
              <thead>
                {isAdmin ? (
                  <tr>
                    <th className="sorting">Order ID</th>
                    <th className="sorting">Package Name</th>
                    <th className="sorting">Medium</th>
                    <th className="sorting">Form Status</th>
                    <th className="sorting">Time Left</th>
                    <th className="sorting">Action</th>
                  </tr>
                ) : (
                  <tr>
                    <th className="sorting">Order ID</th>
                    <th className="sorting">Package Name</th>
                    <th className="sorting">Medium</th>
                    <th className="sorting">Form Status</th>
                    <th className="sorting">Time Left</th>
                    <th className="sorting">Action</th>
                  </tr>
                )}
              </thead>
              <tbody>
                <OrderList />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormListing;
