import DashboardIcon from "assets/images/nav-icon-1.png";
import UsersIcon from "assets/images/nav-icon-2.png";
import PackagesIcon from "assets/images/nav-icon-3.png";
import OrderIcon from "assets/images/nav-icon-4.png";
import PaymentLogIcon from "assets/images/nav-icon-5.png";
import ContactAdminIcon from "assets/images/nav-icon-6.png";

const Sidebar = () => {
  return (
    <div id="sidebar-wrapper">
      <div
        class="main-menu menu-fixed menu-light menu-accordion"
        data-scroll-to-active="true"
      >
        <div class="main-menu-content">
          <ul
            class="navigation navigation-main"
            id="main-menu-navigation"
            data-menu="menu-navigation"
          >
            <li class="nav-item active">
              <a href="dashboard.php" class="mm-next">
                <img src={DashboardIcon} alt="" class="img-fluid me-2" />
                <span class="menu-title" data-i18n="">
                  Dashboard
                </span>
              </a>
            </li>
            <li class="nav-item">
              <a href="users.php">
                <img src={UsersIcon} alt="" class="img-fluid me-2" />
                <span class="menu-title">Users</span>
              </a>
            </li>
            <li class="nav-item">
              <a href="packages.php" class="mm-next">
                <img src={PackagesIcon} alt="" class="img-fluid me-2" />
                <span class="menu-title" data-i18n="">
                  Packages
                </span>
              </a>
            </li>
            <li class="nav-item">
              <a href="order.php" class="mm-next">
                <img src={OrderIcon} alt="" class="img-fluid me-2" />
                <span class="menu-title">Order</span>
              </a>
            </li>
            <li class="nav-item">
              <a href="payment-log.php" class="mm-next">
                <img src={PaymentLogIcon} alt="" class="img-fluid me-2" />
                <span class="menu-title" data-i18n="">
                  Payment Log
                </span>
              </a>
            </li>
            <li class="nav-item">
              <a href="customer-feedback.php" class="mm-next">
                <img src={ContactAdminIcon} alt="" class="img-fluid me-2" />
                <span class="menu-title" data-i18n="">
                  Contact Admin
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
