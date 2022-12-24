import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
// import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { store } from "store";
import { Provider } from "react-redux";
// import utils from "utils/utils";

async function checkLogin() {
  // const token = localStorage.getItem("token");
  // try {
  //   const res = await fetch("/check-auth", {
  //     method: "POST",
  //     body: JSON.stringify({
  //       token,
  //     }),
  //   });
  // } catch (error) {}

  let authUser = null;

  // if (res.ok) {
  if (true) {
    // authUser = await res.json();
    authUser = {};
  }

  document.querySelector(".lds-ripple").classList.add("hide");

  const root = ReactDOM.createRoot(document.getElementById("root"));

  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <App authUser={authUser} />
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  );
}

checkLogin();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
