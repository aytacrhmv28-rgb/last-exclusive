import AccountForm from "../components/AccountForm";
import AccountLink from "../components/AccountLink";
import "./Account.css";

function Account() {
    return(
        <div className="account-container">
            <AccountLink/>
            <AccountForm/>
            
        </div>
    );
}
export default Account;