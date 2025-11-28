import "./Accountunicindeolanlar.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import TextField from "../shared/textfield/TextField.jsx";
import Input from "../shared/input/Input.jsx";
import Button from "../shared/button/Button.jsx";
function Accountunicindeolanlar() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [passwordChanges, setPasswordChanges] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  return (
    <div className="account-page">
      <div className="account1">
        <h4>Manage My Account</h4>
        <ul>
          <li>
            <Link to="/myprofile">My Profile</Link>
          </li>
          <li>
            <Link to="/addressbook">Address Book</Link>
          </li>
          <li>
            <Link to="/mypaymentoptions">My Payment Options</Link>
          </li>
        </ul>
      </div>
      <form className="accountform-form">
        <div className="textfield-container">
          <TextField
            label="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="firstName"
          />
        </div>

        <div className="textfield-container">
          <TextField
            label="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="lastName"
          />
        </div>

        <div className="textfield-container">
          <TextField
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
          />
        </div>

        <div className="textfield-container">
          <TextField
            label="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="address"
          />
        </div>

        <div className="textfield-container">
          <TextField
            label="Password Changes"
            value={passwordChanges}
            onChange={(e) => setPasswordChanges(e.target.value)}
            placeholder="passwordChanges"
          />
        </div>

        <div className="textfield-container">
          <Input
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="newPassword"
            className="textfield-input"
          />
        </div>

        <div className="textfield-container">
          <Input
            value={confirmNewPassword}
            onChange={(e) => setConfirmNewPassword(e.target.value)}
            placeholder="confirmNewPassword"
            className="textfield-input"
          />
        </div>

        <div className="textfield-container">
          <Button className="textfield-input-button">Save Changes</Button>
        </div>
      </form>
    </div>
  );
}
export default Accountunicindeolanlar;
