import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./AuthScreens/Login";
import PasswordRecovery from "./AuthScreens/PasswordRecovery";
import AuthLayout from "./Layout/AuthLayout";
import $ from "jquery";

import "app-assets/css/app.css";
import "app-assets/css/plugins/menu/vertical-menu.css";
import "assets/css/style.css";
import "assets/fonts/stylesheet.css";
import { useEffect, useState } from "react";
import MainLayout from "./Layout/MainLayout/MainLayout";
import Dashboard from "./Pages/Dashboard/Dashboard";

function App() {
  const [isloggedIn, setIsloggedIn] = useState(true);
  useEffect(() => {
    document.body.classList.add(
      "vertical-layout",
      "vertical-menu",
      "2-columns",
      "menu-expanded",
      "fixed-navbar"
    );
  }, []);

  return (
    <Routes>
      <Route path="/" element={!isloggedIn ? <AuthLayout /> : <MainLayout />}>
        <Route index element={!isloggedIn ? <Login /> : <Dashboard />}></Route>
        <Route
          path="/password-recovery"
          element={!isloggedIn ? <PasswordRecovery /> : <Navigate to="/" />}
        ></Route>
      </Route>
    </Routes>
  );
}

export default App;
