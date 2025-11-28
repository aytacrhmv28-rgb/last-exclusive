import "./Footer.css";
import { Link } from "react-router-dom";
import i251 from "../assets/i251.png";

function Footer() {
  return (
    <footer className="footer-container">
      {/* === ABOUT / SUBSCRIBE === */}
      <div className="footer-section footer-about">
        <h4 className="footer-title">Exclusive</h4>
        <p className="footer-subtitle">Subscribe</p>
        <p className="footer-text">Get 10% off your first order</p>
        <input
          type="email"
          placeholder="Enter your email"
          className="footer-input"
        />
      </div>

      {/* === SUPPORT INFO === */}
      <div className="footer-section footer-support">
        <h4 className="footer-title">Support</h4>
        <p className="footer-text">
          111 Bijoy Sarani, Dhaka, DH 1515, Bangladesh.
        </p>
        <p className="footer-text">exclusive@gmail.com</p>
        <p className="footer-text">+88015-88888-9999</p>
      </div>

      {/* === ACCOUNT LINKS === */}
      <div className="footer-section footer-account">
        <h4 className="footer-title">Account</h4>
        <ul className="footer-list">
          <li>
            <Link to="/account" className="footer-link">
              My Account
            </Link>
          </li>
          <li>
            <Link to="/login" className="footer-link">
              Login/Register
            </Link>
          </li>
          <li>
            <Link to="/cart" className="footer-link">
              Cart
            </Link>
          </li>
          <li>
            <Link to="/wishlist" className="footer-link">
              Wishlist
            </Link>
          </li>
          <li>
            <Link to="/shop" className="footer-link">
              Shop
            </Link>
          </li>
        </ul>
      </div>

      {/* === QUICK LINKS === */}
      <div className="footer-section footer-quick-links">
        <h4 className="footer-title">Quick Links</h4>
        <ul className="footer-list">
          <li>
            <Link to="/contact" className="footer-link">
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* === DOWNLOAD APP === */}
      <div className="footer-section footer-download">
        <h4 className="footer-title">Download App</h4>
        <img src={i251} alt="QR code" className="footer-qr" />
      </div>

      {/* === COPYRIGHT === */}
      <div className="footer-bottom">
        <p>© 2025 Rimel. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
