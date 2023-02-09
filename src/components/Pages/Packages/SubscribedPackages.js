import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { client } from "utils/utils";

const SubscribedPackages = () => {
  const [orders, setOrders] = useState(null);
  useEffect(() => {
    client("/api/orders?perPage=50000000").then((res) => {
      const { data } = res;
      console.log(data);
      setOrders(data);
    });
  }, []);
  return (
    <section id="user_page" class="user-page">
      <div class="content-body">
        <div class="page-title mb-4">
          <div class="row">
            <div class="col-12">
              <h2>Subscribed Packages</h2>
            </div>
          </div>
        </div>
        <div class="dataTables_wrapper">
          <div class="main-tabble table-responsive mx-n2">
            <table class="table table-borderless dataTable px-2">
              <thead>
                <tr>
                  <th class="sorting">Package Name</th>
                  <th class="sorting">Package Status</th>
                  {/* <th class="sorting">Start Date</th>
                  <th class="sorting">End Date</th> */}
                  <th class="sorting">Form Status</th>
                  <th class="sorting">Type</th>
                  <th class="sorting">Actions</th>
                </tr>
              </thead>
              <tbody>
                {orders ? (
                  orders.data.map((order) => (
                    <tr key={order._id}>
                      <td>{order.pkg_name}</td>
                      <td>{order.status}</td>
                      <td>{order.form_status}</td>
                      <td>{order.payment_type}</td>
                      <td>
                        {order.payment_type !== "Non Recurrent" ? (
                          <Link class="text-purple">
                            Cancel Recurring Payment
                          </Link>
                        ) : (
                          ""
                        )}
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

export default SubscribedPackages;
