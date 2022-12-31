import ChartImage from "assets/images/chart.png";
import ChartImageTwo from "assets/images/chart-2.png";
import DotOne from "assets/images/dot-1.png";
import DotTwo from "assets/images/dot-2.png";
import DotThree from "assets/images/dot-3.png";
import { useEffect, useState } from "react";
import { client } from "utils/utils";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  const [users, setUsers] = useState(null);
  // console.log(users);
  useEffect(() => {
    client("/api/users?top=3").then((res) => {
      setUsers(res);
    });
  }, []);
  return (
    <section id="configuration" className="dashboard">
      <div className="row">
        <div className="col-12">
          <div className="content-body">
            <div className="page-title mb-0">
              <div className="row align-items-center mb-4">
                <div className="col-lg-8">
                  <div className="d-flex align-items-center justify-content-between mb-4">
                    <h2 className="mb-0">Dashboard</h2>
                    <a
                      href="trade-office.php"
                      className="fs-16 text-purple fw-bold text-decoration-underline"
                    >
                      View Form Status
                    </a>
                  </div>
                  <div className="d-block d-sm-flex align-items-center justify-content-between mb-4">
                    <h3 className="mb-sm-0 mb-3">No. of users Registered</h3>
                    <div className="">
                      <div className="select-wrapper d-block d-sm-inline-block mt-1 mt-sm-0 me-0 me-sm-2">
                        <select name="" id="" className="form-control">
                          <option value="">2022</option>
                          <option value="">2021</option>
                          <option value="">2020</option>
                          <option value="">2019</option>
                          <option value="">2018</option>
                          <option value="">2017</option>
                          <option value="">2016</option>
                          <option value="">2015</option>
                          <option value="">2014</option>
                          <option value="">2013</option>
                          <option value="">2012</option>
                          <option value="">2011</option>
                          <option value="">2010</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <img src={ChartImage} alt="" className="img-fluid w-100" />
                </div>
                <div className="col-lg-4">
                  <h6 className="fs-16 fw-medium ff-helve text-dark text-center mb-3">
                    Popular Package
                  </h6>
                  <img src={ChartImageTwo} alt="" className="img-fluid w-100" />
                  <div className="my-4">
                    <h6 href="#" className="fs-16 text-dark ff-helve fw-bold">
                      Legends:
                    </h6>
                    <div className="d-flex align-items-center">
                      <div className="me-3">
                        <img
                          src={DotOne}
                          alt=""
                          className="img-fluid d-inline-block me-2"
                        />
                        <h6 className="fs-16 fw-medium text-dark ff-helve d-inline-block">
                          Approved
                        </h6>
                      </div>
                      <div className="me-3">
                        <img
                          src={DotTwo}
                          alt=""
                          className="img-fluid d-inline-block me-2"
                        />
                        <h6 className="fs-16 fw-medium text-dark ff-helve d-inline-block">
                          Pending
                        </h6>
                      </div>
                      <div className="me-3">
                        <img
                          src={DotThree}
                          alt=""
                          className="img-fluid d-inline-block me-2"
                        />
                        <h6 className="fs-16 fw-medium text-dark ff-helve d-inline-block">
                          Rejected
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card shadow-none bg-transparent p-0 d-block card-chart border-none align-items-center">
              <div className="card-header d-block d-sm-flex justify-content-between bg-transparent border-0 p-0 ">
                <h3 className="fw-bold mb-0 align-self-center">
                  Recently Registered Users
                </h3>
              </div>
              <div className="card-body p-0">
                <div className="chartbox position-relative text-center">
                  <div className="main-tabble table-responsive">
                    <table className="table table-borderless dataTable">
                      <thead>
                        <tr>
                          <th className="sorting">Name</th>
                          <th className="sorting">Email</th>
                          <th className="sorting">Phone #</th>
                          <th className="sorting">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {users !== null ? (
                          users.data.data.map((user) => (
                            <tr key={user._id}>
                              <td>{`${user.first_name} ${user.last_name}`}</td>
                              <td>{`${user.email}`}</td>
                              <td>{`${user.phone}`}</td>
                              <td>
                                <span className="status active">
                                  {user.status ? "active" : "inactive"}
                                </span>
                              </td>
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td colSpan="5" className="text-center">
                              Loading...
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminDashboard;
