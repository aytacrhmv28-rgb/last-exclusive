import "./SignUpForm.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import i1 from "../assets/i1.jpg";

function SignUpForm() {
  const [name, setName] = useState("");
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="signup-container">
      <div className="signup-image-section">
        <img src={i1} alt="Sign Up" className="signup-image" />
      </div>

      <div className="signup-form-section">
        <div className="signup-header">
          <h1 className="signup-title">Create An Account</h1>
          <p className="signup-subtitle">Enter your details below</p>
        </div>

        <form className="signup-form">
          <div className="signup-input-group">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="signup-input"
            />
          </div>
          <div className="signup-input-group">
            <input
              type="text"
              placeholder="Email or Phone"
              value={emailOrPhone}
              onChange={(e) => setEmailOrPhone(e.target.value)}
              className="signup-input"
            />
          </div>
          <div className="signup-input-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="signup-input"
            />
          </div>

          <button type="submit" className="signup-button">
            Create Account
          </button>
        </form>

        <p className="signup-login-text">
          Already have an account?{" "}
          <Link to="/login" className="signup-login-link">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignUpForm;
