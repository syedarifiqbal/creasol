import LogoAdmin from "assets/images/logo-admin.png";
import OnlineAvatar from "assets/images/online-avatar.png";

const MainHeader = () => {
  return (
    <div id="header">
      <nav class="header-navbar navbar-expand-md navbar navbar-with-menu fixed-top navbar-light navbar-border">
        <div class="navbar-wrapper w-100 d-md-flex">
          <div class="navbar-header d-flex">
            <ul class="nav navbar-nav flex-row flex-grow-1 d-flex">
              <li class="nav-item d-md-none align-self-center ps-3">
                <a class="nav-link menu-toggle hidden-xs p-0" href="#">
                  <i class="ft-menu font-large-1"></i>
                </a>
              </li>
              <li class="nav-item align-self-center flex-grow-1 text-center">
                <a class="navbar-brand p-0" href="dashboard.php">
                  <img
                    class="brand-logo img-fluid"
                    alt="stack admin logo"
                    src={LogoAdmin}
                  />
                </a>
              </li>
              <li class="nav-item d-md-none align-self-center pe-3">
                <a
                  class="nav-link open-navbar-container p-0"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbar-mobile"
                >
                  <i class="fa fa-ellipsis-v"></i>
                </a>
              </li>
            </ul>
          </div>

          <div class="navbar-container flex-grow-1 align-self-center">
            <div class="collapse navbar-collapse" id="navbar-mobile">
              <ul class="nav navbar-nav ms-auto justify-content-end">
                <li class="dropdown dropdown-notification nav-item d-flex">
                  <a
                    class="nav-link nav-link-label align-self-center mt-2"
                    href="#"
                    data-bs-toggle="dropdown"
                    aria-expanded="true"
                  >
                    <i class="far fa-bell"></i>{" "}
                    <span class="badge badge-pill badge-default badge-danger badge-default badge-up">
                      5
                    </span>{" "}
                  </a>
                  <ul class="dropdown-menu dropdown-menu-end me-3 me-md-0 ms-3 ms-md-0">
                    {/* <!-- <li class="dropdown-menu-header">
                                    <h6 class="dropdown-header">Notifications</h6>
                                    <span class="notification-tag badge badge-default badge-danger float-right m-0">5 New</span>
                                </li> --> */}
                    <li class="dropdown-menu-header">
                      <h6 class="dropdown-header fs-16 text-dark ff-helve fw-bold mb-2">
                        Notification
                      </h6>
                    </li>
                    <li class="scrollable-container media-list ps-container ps-theme-dark">
                      <a href="javascript:void(0)">
                        <div class="media d-flex">
                          <div class="media-left flex-shrink-0 align-self-top">
                            <i class="far fa-bell"></i>{" "}
                          </div>
                          <div class="media-body flex-grow-1">
                            <h6 class="media-heading">
                              You have a new user request
                            </h6>
                            <small>
                              <time
                                class="date-meta"
                                datetime="2015-06-11T18:29:20+08:00"
                              >
                                Jul 23, 2022 at 09:15 AM
                              </time>
                            </small>
                          </div>
                          <div class="media-left flex-shrink-0 align-self-top">
                            <i class="far fa-circle-dot"></i>{" "}
                          </div>
                        </div>
                      </a>
                      <a href="javascript:void(0)">
                        <div class="media d-flex">
                          <div class="media-left flex-shrink-0 align-self-top">
                            <i class="far fa-bell"></i>
                          </div>
                          <div class="media-body flex-grow-1">
                            <h6 class="media-heading">
                              You have a new user request
                            </h6>
                            <small>
                              <time
                                class="date-meta"
                                datetime="2015-06-11T18:29:20+08:00"
                              >
                                Jul 23, 2022 at 09:15 AM
                              </time>
                            </small>
                          </div>
                          <div class="media-left flex-shrink-0 align-self-top">
                            <i class="far fa-circle-dot"></i>{" "}
                          </div>
                        </div>
                      </a>
                      <a href="javascript:void(0)">
                        <div class="media d-flex">
                          <div class="media-left flex-shrink-0 align-self-top">
                            <i class="far fa-bell"></i>
                          </div>
                          <div class="media-body flex-grow-1">
                            <h6 class="media-heading">
                              You have a new user request
                            </h6>
                            <small>
                              <time
                                class="date-meta"
                                datetime="2015-06-11T18:29:20+08:00"
                              >
                                Jul 23, 2022 at 09:15 AM
                              </time>
                            </small>
                          </div>
                          <div class="media-left flex-shrink-0 align-self-top">
                            <i class="far fa-circle-dot"></i>{" "}
                          </div>
                        </div>
                      </a>
                      <a href="javascript:void(0)">
                        <div class="media d-flex">
                          <div class="media-left flex-shrink-0 align-self-top">
                            <i class="far fa-bell"></i>
                          </div>
                          <div class="media-body flex-grow-1">
                            <h6 class="media-heading">
                              You have a new user request
                            </h6>
                            <small>
                              <time
                                class="date-meta"
                                datetime="2015-06-11T18:29:20+08:00"
                              >
                                Jul 23, 2022 at 09:15 AM
                              </time>
                            </small>
                          </div>
                          <div class="media-left flex-shrink-0 align-self-top">
                            <i class="far fa-circle-dot"></i>{" "}
                          </div>
                        </div>
                      </a>
                      <a href="javascript:void(0)">
                        <div class="media d-flex">
                          <div class="media-left flex-shrink-0 align-self-top">
                            <i class="far fa-bell"></i>
                          </div>
                          <div class="media-body flex-grow-1">
                            <h6 class="media-heading">
                              You have a new user request
                            </h6>
                            <small>
                              <time
                                class="date-meta"
                                datetime="2015-06-11T18:29:20+08:00"
                              >
                                Jul 23, 2022 at 09:15 AM
                              </time>
                            </small>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li class="dropdown-menu-footer border-top mt-3">
                      <a class="dropdown-item" href="notifications.php">
                        View all notifications
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="dropdown dropdown-user nav-item">
                  <a
                    class="dropdown-toggle nav-link dropdown-user-link"
                    href="#"
                    data-bs-toggle="dropdown"
                  >
                    <span class="avatar avatar-online">
                      {" "}
                      <img src={OnlineAvatar} alt="avatar" />{" "}
                    </span>
                    <div>
                      <span class="user-name fw-medium">Denny Flex</span>
                      <br />
                      <span class="user-role fw-medium">admin</span>
                    </div>
                  </a>
                  <div class="dropdown-menu dropdown-menu-right me-3 me-md-0 ms-3 ms-md-0">
                    <a class="dropdown-item" href="profile.php">
                      <i class="fa fa-user"></i>Profile
                    </a>
                    <a
                      class="dropdown-item"
                      href="javascript:void(0);"
                      data-bs-toggle="modal"
                      data-bs-target=".profile-logout"
                    >
                      <i class="fa fa-power-off"></i>Logout
                    </a>
                  </div>
                </li>
                <li class="nav-item d-block d-lg-none align-self-center">
                  <a
                    class="nav-link nav-menu-main menu-toggle hidden-xs is-active"
                    href="#"
                  >
                    <i class="ft-menu"></i>
                  </a>
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
