import React from "react";

const ContactAdmin = () => {
  return (
    <section id="user_page" class="user-page">
      <div class="content-body">
        <div class="page-title mb-4">
          <div class="row">
            <div class="col-12">
              <h2>Customer Feedback</h2>
            </div>
          </div>
        </div>
        <div class="dataTables_wrapper">
          <div class="main-tabble table-responsive mx-n2">
            <table class="table table-borderless dataTable px-2">
              <thead>
                <tr>
                  <th class="sorting">Feedback ID</th>
                  <th class="sorting">Date Received</th>
                  <th class="sorting">Name</th>
                  <th class="sorting">Email</th>
                  <th class="sorting">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>12</td>
                  <td>09/21 09:00 PM</td>
                  <td>John Smith</td>
                  <td>Johnwick@gmail.com</td>
                  <td>
                    <a href="feedback-detail.php">
                      <span class="status active">View</span>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>13</td>
                  <td>09/21 09:00 PM</td>
                  <td>Alber Santner</td>
                  <td>Albersantner@gmail.com</td>
                  <td>
                    <a href="feedback-detail.php">
                      <span class="status active">View</span>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>14</td>
                  <td>09/21 09:00 PM</td>
                  <td>Micheal Shaun</td>
                  <td>MichealShaun@gmail.com</td>
                  <td>
                    <a href="feedback-detail.php">
                      <span class="status active">View</span>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>15</td>
                  <td>09/21 09:00 PM</td>
                  <td>Jonathan Alen</td>
                  <td>JonathanAlen@gmail.com</td>
                  <td>
                    <a href="feedback-detail.php">
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

export default ContactAdmin;
