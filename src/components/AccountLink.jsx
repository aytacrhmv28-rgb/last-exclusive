

import "./AccountLink.css";
import { Link } from "react-router-dom";

function AccountLink() {
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

        <h4>My Orders</h4>
        <ul>
          <li>
            <Link to="/myreturns">My Returns</Link>
          </li>
          <li>
            <Link to="/mycancellations">My Cancellations</Link>
          </li>
        </ul>

        <h4>My Wishlist</h4>
      </div>

    </div>
  );
}
export default AccountLink;
