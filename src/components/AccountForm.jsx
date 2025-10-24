import TextField from "../shared/textfield/TextField";
import Button from "../shared/button/Button";
import Input from "../shared/input/Input";
import { useState } from "react";

function AccountForm() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [passwordChanges, setPasswordChanges] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmNewPassword, setConfirmNewPassword] = useState("");
  return (
    <div className="accountform1">
      <form>
        <TextField
          label="First Name" 
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="firstName"
        />
        <TextField
        label="Last Name" 
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="lastName"
        />
        <TextField
        label="Email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
        />
        <TextField
        label="Address" 
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="address"
        />
        <TextField
        label="Password Changes" 
          value={passwordChanges}
          onChange={(e) => setPasswordChanges(e.target.value)}
          placeholder="passwordChanges"
        />
        <Input
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          placeholder="newPassword"
        />
        <Input
          value={confirmNewPassword}
          onChange={(e) => setConfirmNewPassword(e.target.value)}
          placeholder="confirmNewPassword"
        />
        <Button>Save Changes</Button>
      </form>
    </div>
  );
}
export default AccountForm;
