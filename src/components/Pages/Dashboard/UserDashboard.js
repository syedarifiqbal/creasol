import ChartImageTwo from "assets/images/chart-2.png";
import DotOne from "assets/images/dot-1.png";
import DotTwo from "assets/images/dot-2.png";
import DotThree from "assets/images/dot-3.png";
import { async } from "q";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { client } from "utils/utils";

const UserDashboard = () => {
  const [packagesSubscribed, setPackagesSubscribed] = useState();
  const [approvedPosts, setApprovedPosts] = useState();
  const [pendingPost, setPendingPost] = useState();
  useEffect(() => {
    getUserDashboard();
  }, []);
  const getUserDashboard = async () => {
    const { status, data } = await client("/api/user-dashboard");
    if (status === 200) {
      setPackagesSubscribed(data.subscribedPackages.toString());
      setApprovedPosts(data.approvedPosts.toString());
      setPendingPost(data.pendingPosts.toString());
    } else {
      setPackagesSubscribed("0");
      setApprovedPosts("0");
      setPendingPost("0");
      toast("An error occured!");
    }
  };
  return (
    <section id="configuration" className="dashboard">
      <div className="row">
        <div className="col-12">
          <div className="content-body">
            <div className="page-title mb-0">
              <div className="row align-items-center mb-4">
                <div className="col-lg-8">
                  <h2 className="mb-4">Dashboard</h2>
                  <div className="row mb-3">
                    <div className="col-lg-6 mb-3">
                      <div className="dashboardPackageBox text-center">
                        <div className="dashboardPackageHeader bg-purple">
                          <h6 className="fs-16 fw-bold text-white ff-helve mb-0">
                            Packages Subscribed
                          </h6>
                        </div>
                        <div className="dashboardPackageBody">
                          <h3 className="fs-35 text-dark fw-bold mb-0 ff-helve">
                            {packagesSubscribed
                              ? packagesSubscribed
                              : "Loading..."}
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 mb-3">
                      <div className="dashboardPackageBox text-center">
                        <div className="dashboardPackageHeader bg-purple1">
                          <h6 className="fs-16 fw-bold text-white ff-helve mb-0">
                            Approved Posts
                          </h6>
                        </div>
                        <div className="dashboardPackageBody">
                          <h3 className="fs-35 text-dark fw-bold mb-0 ff-helve">
                            {approvedPosts ? approvedPosts : "Loading..."}
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 mb-3">
                      <div className="dashboardPackageBox text-center">
                        <div className="dashboardPackageHeader bg-purple2">
                          <h6 className="fs-16 fw-bold text-white ff-helve mb-0">
                            Posts Pending Approval
                          </h6>
                        </div>
                        <div className="dashboardPackageBody">
                          <h3 className="fs-35 text-dark fw-bold mb-0 ff-helve">
                            {pendingPost ? pendingPost : "Loading..."}
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="dashboardPackageBox text-center">
                        <div className="dashboardPackageHeader bg-purple3">
                          <h6 className="fs-16 fw-bold text-white ff-helve mb-0">
                            Compete Form in
                          </h6>
                        </div>
                        <div className="dashboardPackageBody">
                          <h3
                            className="fs-35 text-dark fw-bold mb-0 ff-helve"
                            id="demo"
                          ></h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="fs-20 fw-bold text-purple text-decoration-underline"
                  >
                    Click to Complete Form Now!
                  </a>
                </div>
                <div className="col-lg-4">
                  <h6 className="fs-16 fw-medium ff-helve text-dark text-center mb-3">
                    Post Ratio
                  </h6>
                  <img
                    src={ChartImageTwo}
                    alt=""
                    className="img-fluid w-100 mb-4"
                  />
                  <div>
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
                <h3 className="fw-bold mb-0 align-self-center">Recent Posts</h3>
              </div>
              <div className="card-body p-0">
                <div className="chartbox position-relative text-center">
                  <div className="main-tabble table-responsive">
                    <table className="table table-borderless dataTable">
                      <thead>
                        <tr>
                          <th className="sorting">Post ID</th>
                          <th className="sorting">Title</th>
                          <th className="sorting">Description</th>
                          <th className="sorting">Post Medium</th>
                          <th className="sorting">Status</th>
                          <th className="sorting">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>12</td>
                          <td>Geographic Regions</td>
                          <td>Neque porro quisquam est qui dolorem</td>
                          <td>Facebook</td>
                          <td>
                            Posted{" "}
                            <a
                              href="#"
                              className="fs-16 ff-helve-normal text-green"
                            >
                              (View)
                            </a>
                          </td>
                          <td>
                            <span className="status active">View</span>
                          </td>
                        </tr>
                        <tr>
                          <td>13</td>
                          <td>Major Disasters</td>
                          <td>Neque porro quisquam est qui dolorem</td>
                          <td>Facebook</td>
                          <td>
                            Pending Approval{" "}
                            <a
                              href="#"
                              className="fs-16 ff-helve-normal text-green"
                            >
                              (View)
                            </a>
                          </td>
                          <td>
                            <span className="status active">View</span>
                          </td>
                        </tr>
                        <tr>
                          <td>14</td>
                          <td>Major Tremors</td>
                          <td>Neque porro quisquam est qui dolorem</td>
                          <td>Facebook</td>
                          <td>In Process</td>
                          <td>
                            <span className="status active">View</span>
                          </td>
                        </tr>
                        <tr>
                          <td>15</td>
                          <td>Major Tremors</td>
                          <td>Neque porro quisquam est qui dolorem</td>
                          <td>Facebook</td>
                          <td>Rejected with Comments</td>
                          <td>
                            <span className="status active">View</span>
                          </td>
                        </tr>
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

export default UserDashboard;
