import { useState } from "react";
import { FaRegEnvelope, FaKey, FaEyeSlash, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";
import { API_PATH } from "constants";

const Login = () => {
  const [email, setEmail] = useState("farazfayyaz2163@gmail.com");
  const [password, setPassword] = useState("123456");
  const [showPassword, setShowPassword] = useState(false);

  const onLoginSubmit = async (e) => {
    e.preventDefault();
    axios
      .post(`${API_PATH}/api/login`, {
        email,
        password,
      })
      .then(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
    // const user = await axios.post("/api/login", {
    //   method: "POST",
    //   body: JSON.stringify({ email, password }),
    // });
    // console.log(user);
  };
  return (
    <div className="login-card bg-img p-0">
      <div className="right">
        <h1 className="ff-helve mb-5">Administrator Portal</h1>
        <form onSubmit={onLoginSubmit}>
          <div className="form-group position-relative">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail((prevState) => e.target.value)}
            />
            <div className="inputIcon">
              <FaRegEnvelope />
            </div>
          </div>
          <div className="form-group mb-1">
            <div className="position-relative">
              <input
                type={showPassword ? "text" : "password"}
                className="form-control pass-input"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword((prevState) => e.target.value)}
              />
              <div className="inputIcon">
                <FaKey />
              </div>
              <button
                className="btn view-btn position-absolute"
                onClick={(e) => {
                  e.preventDefault();
                  setShowPassword((prevState) => !prevState);
                }}
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </button>
            </div>
          </div>
          <div className="form-group mt-3 mb-0">
            <div className="d-flex align-items-center justify-content-between">
              <div className="form-group text-center mb-0">
                <button
                  type="sumit"
                  className="btn btn-primary btn-login fw-bold"
                >
                  Login
                </button>
              </div>
              <div className="forgot-pass">
                <h6 class="ff-helve fs-14 fw-medium text-dark mb-0 d-flex justify-content-end">
                  <Link
                    className="ff-helve fs-14 fw-medium text-purple"
                    to="/register"
                  >
                    Register Here
                  </Link>
                </h6>
                <h6 className="ff-helve fs-14 fw-medium text-dark mb-0">
                  forgot your password?{" "}
                  <Link
                    to="/password-recovery"
                    className="ff-helve fs-14 fw-medium text-purple"
                  >
                    click here
                  </Link>
                </h6>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
