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
      <div className="signUp">
        <div className="signUp1">
          <img src={i1} className="i1"></img>
        </div>
        <div className="signUp2">
          <h1>Create an account</h1>
          <p>Enter your details below</p>
          <div className="signUp3">
            <form>
            <Input
              
              value={emailOrPhone}
              onChange={(e) => setEmailOrPhone(e.target.value)}
              placeholder="Email or Phone number"
            />
            <Input
              
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            <Button className="buttonSignUp2">Log In</Button>
          </form>
          </div>
          
          <p>Forget Password?</p>
        </div>
      </div>
    );
}
export default LoginForm;