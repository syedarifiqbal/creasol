import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./AuthScreens/Login";
import PasswordRecovery from "./AuthScreens/PasswordRecovery";
import AuthLayout from "./Layout/AuthLayout";

import { useState } from "react";
import MainLayout from "./Layout/MainLayout/MainLayout";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Users from "./Pages/Users/Users";

import "app-assets/css/app.css";
import "app-assets/css/plugins/menu/vertical-menu.css";
import "assets/css/style.css";
import "assets/fonts/stylesheet.css";
import "react-perfect-scrollbar/dist/css/styles.css";
import Packages from "./Pages/Packages/Packages";
import Orders from "./Pages/Orders/Orders";
import PaymentLog from "./Pages/PaymentLog/PaymentLog";
import ContactAdmin from "./Pages/ContactAdmin/ContactAdmin";

function App() {
  const [isloggedIn, setIsloggedIn] = useState(true);

  return (
    <>
      <Routes>
        <Route path="/" element={!isloggedIn ? <AuthLayout /> : <MainLayout />}>
          <Route
            index
            element={!isloggedIn ? <Login /> : <Dashboard />}
          ></Route>
          <Route
            path="/password-recovery"
            element={!isloggedIn ? <PasswordRecovery /> : <Navigate to="/" />}
          />
          <Route
            path="/users"
            element={!isloggedIn ? <Navigate to="/" /> : <Users />}
          />
          <Route
            path="/packages"
            element={!isloggedIn ? <Navigate to="/" /> : <Packages />}
          />
          <Route
            path="/orders"
            element={!isloggedIn ? <Navigate to="/" /> : <Orders />}
          />
          <Route
            path="/payment-log"
            element={!isloggedIn ? <Navigate to="/" /> : <PaymentLog />}
          />
          <Route
            path="/customer-feedback"
            element={!isloggedIn ? <Navigate to="/" /> : <ContactAdmin />}
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
