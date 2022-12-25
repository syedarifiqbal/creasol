import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
// import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { store } from "store";
import { Provider } from "react-redux";
import { client } from "utils/utils";
import { toast } from "react-toastify";
// import utils from "utils/utils";

import "react-toastify/dist/ReactToastify.css";

async function checkLogin() {
  let authUser = null;

  try {
    const res = await client.get("/api/profile");

    const { data, status } = res;
    if (status === 200) {
      authUser = data;
    }
  } catch (error) {}
  const root = ReactDOM.createRoot(document.getElementById("root"));
  setTimeout(() => {
    document.querySelector(".loader").classList.remove("show");
  }, 200);
  root.render(
    // <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App authUser={authUser} />
      </BrowserRouter>
    </Provider>
    // </React.StrictMode>
  );
}

checkLogin();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
