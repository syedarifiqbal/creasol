import React from "react";

const Users = () => {
  return (
    <section id="user_page" className="user-page">
      <div className="content-body">
        <div className="page-title mb-4">
          <div className="row">
            <div className="col-12">
              <h2>User Listing</h2>
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
                  <th className="sorting">Name</th>
                  <th className="sorting">Email</th>
                  <th className="sorting">Phone #</th>
                  <th className="sorting">Status</th>
                  <th className="sorting">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>John Smith</td>
                  <td>johnsmith@gmail.com</td>
                  <td>+14086752406</td>
                  <td>
                    <span className="status active">Active</span>
                  </td>
                  <td>
                    <a
                      href="#"
                      className="text-purple text-decoration-underline fw-semibold"
                    >
                      Click to Edit
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>Albert</td>
                  <td>Albert@gmail.com</td>
                  <td>+14086752406</td>
                  <td>
                    <span className="status active">Active</span>
                  </td>
                  <td>
                    <a
                      href="user-profile.php"
                      className="text-purple text-decoration-underline fw-semibold"
                    >
                      Click to Edit
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>John Smith</td>
                  <td>johnsmith@gmail.com</td>
                  <td>+14086752406</td>
                  <td>
                    <span className="status active">Active</span>
                  </td>
                  <td>
                    <a
                      href="user-profile.php"
                      className="text-purple text-decoration-underline fw-semibold"
                    >
                      Click to Edit
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>John Smith</td>
                  <td>johnsmith@gmail.com</td>
                  <td>+14086752406</td>
                  <td>
                    <span className="status active">Active</span>
                  </td>
                  <td>
                    <a
                      href="user-profile.php"
                      className="text-purple text-decoration-underline fw-semibold"
                    >
                      Click to Edit
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>Albert</td>
                  <td>Albert@gmail.com</td>
                  <td>+14086752406</td>
                  <td>
                    <span className="status active">Active</span>
                  </td>
                  <td>
                    <a
                      href="user-profile.php"
                      className="text-purple text-decoration-underline fw-semibold"
                    >
                      Click to Edit
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

export default Users;
