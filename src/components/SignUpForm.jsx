import "./SignUpForm.css";
import Input from "../shared/input/Input";
import Button from "../shared/button/Button";
import { Link } from "react-router-dom";
import i1 from "../assets/i1.jpg";
import { useState } from "react";
function SignUpForm() {
  const [name, setName] = useState("");
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="signUp">
      <div className="signUp1">
        <img src={i1} className="i1"></img>
      </div>
      <div className="signUp2">
        <div className="signUp5">
          <h1>Create An Account</h1>
          <p>Enter your details below</p>
        </div>

        <div className="signUp3">
          <form>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
            />
            <Input
              value={emailOrPhone}
              onChange={(e) => setEmailOrPhone(e.target.value)}
              placeholder="Email or Phone number"
            />
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            <Button className="buttonSignUp">Create Account</Button>
          </form>
        </div>
        <div className="signUp4">
          <p>Already have account?</p>
          <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
}
export default SignUpForm;
