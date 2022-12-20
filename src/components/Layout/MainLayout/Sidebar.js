import DashboardIcon from "assets/images/nav-icon-1.png";
import UsersIcon from "assets/images/nav-icon-2.png";
import PackagesIcon from "assets/images/nav-icon-3.png";
import OrderIcon from "assets/images/nav-icon-4.png";
import PaymentLogIcon from "assets/images/nav-icon-5.png";
import ContactAdminIcon from "assets/images/nav-icon-6.png";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div id="sidebar-wrapper">
      <div
        className="main-menu menu-fixed menu-light menu-accordion"
        data-scroll-to-active="true"
      >
        <div className="main-menu-content">
          <ul
            className="navigation navigation-main"
            id="main-menu-navigation"
            data-menu="menu-navigation"
          >
            <li className="nav-item active">
              <Link to="/" className="mm-next">
                <img src={DashboardIcon} alt="" className="img-fluid me-2" />
                <span className="menu-title">Dashboard</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/users">
                <img src={UsersIcon} alt="" className="img-fluid me-2" />
                <span className="menu-title">Users</span>
              </Link>
            </li>
            <li className="nav-item">
              <a href="packages.php" className="mm-next">
                <img src={PackagesIcon} alt="" className="img-fluid me-2" />
                <span className="menu-title">Packages</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="order.php" className="mm-next">
                <img src={OrderIcon} alt="" className="img-fluid me-2" />
                <span className="menu-title">Order</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="payment-log.php" className="mm-next">
                <img src={PaymentLogIcon} alt="" className="img-fluid me-2" />
                <span className="menu-title">Payment Log</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="customer-feedback.php" className="mm-next">
                <img src={ContactAdminIcon} alt="" className="img-fluid me-2" />
                <span className="menu-title">Contact Admin</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
