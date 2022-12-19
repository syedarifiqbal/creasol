import { useState } from "react";
import { FaRegEnvelope, FaKey } from "react-icons/fa";

const PasswordRecovery = () => {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [step, setStep] = useState("email");

  const onContinueClick = (e) => {
    e.preventDefault();
    switch (step) {
      case "email":
        setStep("code");
        break;
      case "code":
        setStep("password");
        break;
      case "password":
        break;
      default:
        setStep("email");
        break;
    }
  };

  return (
    <div className="login-card bg-img p-0">
      <div className="right">
        <h1 className="ff-helve mb-5">
          {step === "email" &&
            "Administrator Portal Please type in your email address to receive the code"}
          {step === "code" &&
            "Administrator Portal Please Type In The Code Received In Your Email Address"}
          {step === "password" &&
            "Administrator Portal Please Type In New Password You Wish To Set"}
        </h1>
        <form>
          {step === "email" && (
            <div className="form-group position-relative">
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="inputIcon">
                <FaRegEnvelope />
              </div>
            </div>
          )}
          {step === "code" && (
            <div className="form-group position-relative">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Code"
                value={code}
                onChange={(e) => setCode(e.target.value)}
              />
              <div className="inputIcon">
                <FaKey />
              </div>
            </div>
          )}
          {step === "password" && (
            <>
              <div className="form-group">
                <div className="position-relative">
                  <input
                    type="password"
                    className="form-control pass-input"
                    placeholder="Enter New Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <div className="inputIcon">
                    <FaKey />
                  </div>
                  <button
                    className="btn view-btn position-absolute"
                    onclick="event.preventDefault()"
                  >
                    <i
                      className="fa fa-eye-slash show-pass-btn right-icon"
                      aria-hidden="true"
                    ></i>
                  </button>
                </div>
              </div>
              <div className="form-group">
                <div className="position-relative">
                  <input
                    type="password"
                    className="form-control cur-pass-input"
                    placeholder="Retype Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  <div className="inputIcon">
                    <FaKey />
                  </div>
                  <button
                    className="btn view-btn position-absolute"
                    onclick="event.preventDefault()"
                  >
                    <i
                      className="fa fa-eye-slash show-cur-pass-btn right-icon"
                      aria-hidden="true"
                    ></i>
                  </button>
                </div>
              </div>
            </>
          )}

          <div
            className={`form-group ${
              step === "password" ? "text-start" : "text-center"
            } mt-3 mb-0`}
          >
            <div
              className={`form-group ${
                step === "password" ? "text-start" : "text-center"
              } mb-0`}
            >
              <button
                className="btn btn-primary btn-login fw-bold"
                onClick={onContinueClick}
              >
                Continue
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PasswordRecovery;
