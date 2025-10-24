import "./Footer.css";
import {Link} from "react-router-dom";
import i251 from "../assets/i251.png";
function Footer() {
    return(
      <div className="footer">
        <div className="footer1">
            <h4>Exclusive</h4>
            <p>Subscribe</p>
            <p>Get 10% off your first order</p>
            <input type="email" placeholder="Enter your email"/>
        </div>
        <div className="footer1">
            <h4>Support</h4>
            <p>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
            <p>exclusive@gmail.com</p>
            <p>+88015-88888-9999</p>
        </div>
        <div className="footer1">
            <h4>Account</h4>
            <ul>
                <li><Link to="/account">My Account</Link></li>
                <li><Link to="/login">Login/Register</Link></li>
                <li><Link to="/cart">Cart</Link></li>
                <li><Link to="/wishlist">Wishlist</Link></li>
                <li><Link to="/shop">Shop</Link></li>
            </ul>
        </div>
        <div className="footer1">
            <h4>Quick Link</h4>
            <ul>
                <li><Link to="/privacy">Privacy Policy</Link></li>
                <li><Link to="/terms">Terms Of Use</Link></li>
                <li><Link to="/faq">FAQ</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </div>
        <div className="footer1">
           <h4>Download App</h4>
           <img src={i251} alt="QR code"/>

        </div>
        <div className="footer2">
            <p>Copyright Rimel 2025. All right reserved</p>
        </div>
      </div>
    );
}
export default Footer;
