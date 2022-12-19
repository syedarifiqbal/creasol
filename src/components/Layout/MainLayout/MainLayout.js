import { Outlet } from "react-router-dom";
import MainHeader from "./MainHeader";
import Sidebar from "./Sidebar";
const MainLayout = () => {
  return (
    <>
      <MainHeader />
      <div class="app-content content">
        <Sidebar />
        <div class="content-wrapper">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default MainLayout;
