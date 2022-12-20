import LogoAdmin from "assets/images/logo-admin.png";
import OnlineAvatar from "assets/images/online-avatar.png";
import { Link } from "react-router-dom";

const MainHeader = () => {
  return (
    <div id="header">
      <nav className="header-navbar navbar-expand-md navbar navbar-with-menu fixed-top navbar-light navbar-border">
        <div className="navbar-wrapper w-100 d-md-flex">
          <div className="navbar-header d-flex">
            <ul className="nav navbar-nav flex-row flex-grow-1 d-flex">
              <li className="nav-item d-md-none align-self-center ps-3">
                <Link className="nav-link menu-toggle hidden-xs p-0">
                  <i className="ft-menu font-large-1"></i>
                </Link>
              </li>
              <li className="nav-item align-self-center flex-grow-1 text-center">
                <Link className="navbar-brand p-0" href="/">
                  <img
                    className="brand-logo img-fluid"
                    alt="stack admin logo"
                    src={LogoAdmin}
                  />
                </Link>
              </li>
              <li className="nav-item d-md-none align-self-center pe-3">
                <Link
                  className="nav-link open-navbar-container p-0"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbar-mobile"
                >
                  <i className="fa fa-ellipsis-v"></i>
                </Link>
              </li>
            </ul>
          </div>

          <div className="navbar-container flex-grow-1 align-self-center">
            <div className="collapse navbar-collapse" id="navbar-mobile">
              <ul className="nav navbar-nav ms-auto justify-content-end">
                <li className="dropdown dropdown-notification nav-item d-flex">
                  <Link
                    className="nav-link nav-link-label align-self-center mt-2"
                    data-bs-toggle="dropdown"
                    aria-expanded="true"
                  >
                    <i className="far fa-bell"></i>{" "}
                    <span className="badge badge-pill badge-default badge-danger badge-default badge-up">
                      5
                    </span>{" "}
                  </Link>
                  <ul className="dropdown-menu dropdown-menu-end me-3 me-md-0 ms-3 ms-md-0">
                    {/* <!-- <li className="dropdown-menu-header">
                                    <h6 className="dropdown-header">Notifications</h6>
                                    <span className="notification-tag badge badge-default badge-danger float-right m-0">5 New</span>
                                </li> --> */}
                    <li className="dropdown-menu-header">
                      <h6 className="dropdown-header fs-16 text-dark ff-helve fw-bold mb-2">
                        Notification
                      </h6>
                    </li>
                    <li className="scrollable-container media-list ps-container ps-theme-dark">
                      <a>
                        <div className="media d-flex">
                          <div className="media-left flex-shrink-0 align-self-top">
                            <i className="far fa-bell"></i>{" "}
                          </div>
                          <div className="media-body flex-grow-1">
                            <h6 className="media-heading">
                              You have a new user request
                            </h6>
                            <small>
                              <time className="date-meta">
                                Jul 23, 2022 at 09:15 AM
                              </time>
                            </small>
                          </div>
                          <div className="media-left flex-shrink-0 align-self-top">
                            <i className="far fa-circle-dot"></i>{" "}
                          </div>
                        </div>
                      </a>
                      <a href="">
                        <div className="media d-flex">
                          <div className="media-left flex-shrink-0 align-self-top">
                            <i className="far fa-bell"></i>
                          </div>
                          <div className="media-body flex-grow-1">
                            <h6 className="media-heading">
                              You have a new user request
                            </h6>
                            <small>
                              <time className="date-meta">
                                Jul 23, 2022 at 09:15 AM
                              </time>
                            </small>
                          </div>
                          <div className="media-left flex-shrink-0 align-self-top">
                            <i className="far fa-circle-dot"></i>{" "}
                          </div>
                        </div>
                      </a>
                      <a href="">
                        <div className="media d-flex">
                          <div className="media-left flex-shrink-0 align-self-top">
                            <i className="far fa-bell"></i>
                          </div>
                          <div className="media-body flex-grow-1">
                            <h6 className="media-heading">
                              You have a new user request
                            </h6>
                            <small>
                              <time className="date-meta">
                                Jul 23, 2022 at 09:15 AM
                              </time>
                            </small>
                          </div>
                          <div className="media-left flex-shrink-0 align-self-top">
                            <i className="far fa-circle-dot"></i>{" "}
                          </div>
                        </div>
                      </a>
                      <a href="">
                        <div className="media d-flex">
                          <div className="media-left flex-shrink-0 align-self-top">
                            <i className="far fa-bell"></i>
                          </div>
                          <div className="media-body flex-grow-1">
                            <h6 className="media-heading">
                              You have a new user request
                            </h6>
                            <small>
                              <time className="date-meta">
                                Jul 23, 2022 at 09:15 AM
                              </time>
                            </small>
                          </div>
                          <div className="media-left flex-shrink-0 align-self-top">
                            <i className="far fa-circle-dot"></i>{" "}
                          </div>
                        </div>
                      </a>
                      <a href="">
                        <div className="media d-flex">
                          <div className="media-left flex-shrink-0 align-self-top">
                            <i className="far fa-bell"></i>
                          </div>
                          <div className="media-body flex-grow-1">
                            <h6 className="media-heading">
                              You have a new user request
                            </h6>
                            <small>
                              <time className="date-meta">
                                Jul 23, 2022 at 09:15 AM
                              </time>
                            </small>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="dropdown-menu-footer border-top mt-3">
                      <a className="dropdown-item" href="notifications.php">
                        View all notifications
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown dropdown-user nav-item">
                  <Link
                    className="dropdown-toggle nav-link dropdown-user-link"
                    href="#"
                    data-bs-toggle="dropdown"
                  >
                    <span className="avatar avatar-online">
                      {" "}
                      <img src={OnlineAvatar} alt="avatar" />{" "}
                    </span>
                    <div>
                      <span className="user-name fw-medium">Denny Flex</span>
                      <br />
                      <span className="user-role fw-medium">admin</span>
                    </div>
                  </Link>
                  <div className="dropdown-menu dropdown-menu-right me-3 me-md-0 ms-3 ms-md-0">
                    <a className="dropdown-item" href="profile.php">
                      <i className="fa fa-user"></i>Profile
                    </a>
                    <Link
                      className="dropdown-item"
                      data-bs-toggle="modal"
                      data-bs-target=".profile-logout"
                    >
                      <i className="fa fa-power-off"></i>Logout
                    </Link>
                  </div>
                </li>
                <li className="nav-item d-block d-lg-none align-self-center">
                  <Link
                    className="nav-link nav-menu-main menu-toggle hidden-xs is-active"
                    href="#"
                  >
                    <i className="ft-menu"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default MainHeader;
