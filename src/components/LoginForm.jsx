import "./SignUpForm.css";
import "./LoginForm.css";
import Input from "../shared/input/Input";
import Button from "../shared/button/Button";
import i1 from "../assets/i1.jpg";
import { useState } from "react";

function LoginForm() {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login-container">
      {/* === IMAGE SECTION === */}
      <div className="login-image-section">
        <img src={i1} alt="Login" className="login-image" />
      </div>

      {/* === FORM SECTION === */}
      <div className="login-form-section">
        <div className="login-header">
          <h1 className="login-title">Log In</h1>
          <p className="login-subtitle">Enter your details below</p>
        </div>

        <form className="login-form">
          <div className="login-input-group">
            <Input
              value={emailOrPhone}
              onChange={(e) => setEmailOrPhone(e.target.value)}
              placeholder="Email or Phone number"
              className="login-input"
            />
          </div>

          <div className="login-input-group">
            <Input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="login-input"
            />
          </div>

          <Button className="login-button">Log In</Button>
        </form>

        <p className="login-forgot-text">Forgot Password?</p>
      </div>
    </div>
  );
}

export default LoginForm;
