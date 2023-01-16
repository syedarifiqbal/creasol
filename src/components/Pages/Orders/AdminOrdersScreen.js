import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { client } from "utils/utils";

const AdminOrdersScreen = () => {
  const [orders, setOrders] = useState(null);
  useEffect(() => {
    client("/api/orders?perPage=50000000").then((res) => {
      const { data } = res;
      console.log(data);
      setOrders(data);
    });
  }, []);
  return (
    <section id="user_page" className="user-page">
      <div className="content-body">
        <div className="page-title mb-4">
          <div className="row">
            <div className="col-12">
              <h2>Order Listing</h2>
            </div>
          </div>
        </div>
        <div className="dataTables_wrapper">
          <div className="user-listing-top">
            <div className="row align-items-end d-flex mb-3">
              <div className="col-12">
                <div className="dataTables_filter d-flex justify-content-start flex-shrink-1">
                  <div className="search-wrap flex-grow-1">
                    <input
                      type="search"
                      className="form-control"
                      placeholder="Search"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="main-tabble table-responsive mx-n2">
            <table className="table table-borderless dataTable px-2">
              <thead>
                <tr>
                  <th className="sorting">Order ID</th>
                  <th className="sorting">Name</th>
                  <th className="sorting">Phone #</th>
                  <th className="sorting">Payment Type</th>
                  <th className="sorting">Package</th>
                  <th className="sorting">Medium</th>
                  <th className="sorting">Form Status</th>
                  <th className="sorting">Action</th>
                </tr>
              </thead>
              <tbody>
                {orders ? (
                  orders.data.map((order) => (
                    <tr key={order._id}>
                      <td>{order._id}</td>
                      <td>
                        {order.user.first_name} {order.user.last_name}
                      </td>
                      <td>{order.user.phone}</td>
                      <td>{order.payment_type}</td>
                      <td>{order.pkg_name}</td>
                      <td>{order.medium}</td>
                      <td>
                        {order.form_status === "Not Submitted" ? (
                          <>
                            {order.form_status + " "}
                            <span className="text-green">(View)</span>
                          </>
                        ) : (
                          order.form_status
                        )}
                      </td>
                      <td>
                        <Link to={`/order/${order._id}`}>
                          <span className="status active">View</span>
                        </Link>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="10">Loading...</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminOrdersScreen;
