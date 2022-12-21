import React from "react";

const Orders = () => {
  return (
    <section id="user_page" class="user-page">
      <div class="content-body">
        <div class="page-title mb-4">
          <div class="row">
            <div class="col-12">
              <h2>Order Listing</h2>
            </div>
          </div>
        </div>
        <div class="dataTables_wrapper">
          <div class="user-listing-top">
            <div class="row align-items-end d-flex mb-3">
              <div class="col-12">
                <div class="dataTables_filter d-flex justify-content-start flex-shrink-1">
                  <div class="search-wrap flex-grow-1">
                    <input
                      type="search"
                      class="form-control"
                      placeholder="Search"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="main-tabble table-responsive mx-n2">
            <table class="table table-borderless dataTable px-2">
              <thead>
                <tr>
                  <th class="sorting">Order ID</th>
                  <th class="sorting">Name</th>
                  <th class="sorting">Phone #</th>
                  <th class="sorting">Payment Type</th>
                  <th class="sorting">Package</th>
                  <th class="sorting">Medium</th>
                  <th class="sorting">Form Status</th>
                  <th class="sorting">Action</th>
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
                      <span class="status active">View</span>
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
                    Not Submitted <span class="text-green">(View)</span>
                  </td>
                  <td>
                    <a href="order-detail.php">
                      <span class="status active">View</span>
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
                      <span class="status active">View</span>
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
                    Not Submitted <span class="text-green">(View)</span>
                  </td>
                  <td>
                    <a href="order-detail.php">
                      <span class="status active">View</span>
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
                      <span class="status active">View</span>
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
