import React from "react";

const ContactAdmin = () => {
  return (
    <section id="user_page" className="user-page">
      <div className="content-body">
        <div className="page-title mb-4">
          <div className="row">
            <div className="col-12">
              <h2>Customer Feedback</h2>
            </div>
          </div>
        </div>
        <div className="dataTables_wrapper">
          <div className="main-tabble table-responsive mx-n2">
            <table className="table table-borderless dataTable px-2">
              <thead>
                <tr>
                  <th className="sorting">Feedback ID</th>
                  <th className="sorting">Date Received</th>
                  <th className="sorting">Name</th>
                  <th className="sorting">Email</th>
                  <th className="sorting">Action</th>
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
                      <span className="status active">View</span>
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
                      <span className="status active">View</span>
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
                      <span className="status active">View</span>
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

export default ContactAdmin;
