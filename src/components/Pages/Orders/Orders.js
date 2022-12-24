import React from "react";

const Orders = () => {
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
                <tr>
                  <td>12</td>
                  <td>John Smith</td>
                  <td>+14086752406</td>
                  <td>Recurring</td>
                  <td>Package A</td>
                  <td>Facebook</td>
                  <td>Submitted</td>
                  <td>
                    <a href="order-detail.php">
                      <span className="status active">View</span>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>13</td>
                  <td>Albert</td>
                  <td>+14086752406</td>
                  <td>Non Recurrent</td>
                  <td>Package B</td>
                  <td>Instagram</td>
                  <td>
                    Not Submitted <span className="text-green">(View)</span>
                  </td>
                  <td>
                    <a href="order-detail.php">
                      <span className="status active">View</span>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>14</td>
                  <td>John Smith</td>
                  <td>+14086752406</td>
                  <td>Recurring</td>
                  <td>Package A</td>
                  <td>Facebook</td>
                  <td>Submitted</td>
                  <td>
                    <a href="order-detail.php">
                      <span className="status active">View</span>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>15</td>
                  <td>John Smith</td>
                  <td>+14086752406</td>
                  <td>Non Recurrent</td>
                  <td>Package B</td>
                  <td>Instagram</td>
                  <td>
                    Not Submitted <span className="text-green">(View)</span>
                  </td>
                  <td>
                    <a href="order-detail.php">
                      <span className="status active">View</span>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>16</td>
                  <td>Albert</td>
                  <td>+14086752406</td>
                  <td>Recurring</td>
                  <td>Package A</td>
                  <td>Facebook</td>
                  <td>Submitted</td>
                  <td>
                    <a href="order-detail.php">
                      <span className="status active">View</span>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Orders;
