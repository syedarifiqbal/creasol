import axios from "axios";
import { API_PATH } from "constants";

const fetchClient = () => {
  const defaultOptions = {
    baseURL: API_PATH,
    method: "get",
    headers: {
      "Content-Type": "application/json",
    },
  };

  // Create instance
  let instance = axios.create(defaultOptions);

  // Set the AUTH token for any request
  instance.interceptors.request.use(function (config) {
    const token = localStorage.getItem("token");
    config.headers["x-access-token"] = token ? `${token}` : "";
    return config;
  });

  return instance;
};
export const client = fetchClient();
