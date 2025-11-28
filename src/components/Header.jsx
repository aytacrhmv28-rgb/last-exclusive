import "./Header.css";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { Heart } from "lucide-react";
import { User } from "lucide-react";
import { Menu } from "lucide-react";
import { X } from "lucide-react";
import { useState } from "react";
function Header() {
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="header">
      <div className="header1">
        <h3>
          <Link to="/">Exclusive</Link>
        </h3>
      </div>
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X size={30} /> : <Menu size={30} />}
      </div>
      <div className={`header2 ${menuOpen ? "active" : ""}`}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
        </ul>
      </div>
      <div className="header3">
        <input type="text" placeholder="What are you looking for?" />
        <Link to="/wishlist" className="cart-icon">
          <Heart size={30} strokeWidth={1} />
        </Link>
        <Link to="/cart" className="cart-icon">
          <ShoppingCart size={30} strokeWidth={1} />
        </Link>
        <User
          className="user"
          size={30}
          strokeWidth={1}
          onClick={() => setOpen((prev) => !prev)}
          style={{ cursor: "pointer" }}
        />
        {open && (
          <div className="dropdown-menu">
            {" "}
            <Link to="/account">Manage My Account</Link>{" "}
          </div>
        )}
      </div>
    </div>
  );
}
export default Header;
