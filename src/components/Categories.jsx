import "./Categories.css";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import i250 from "../assets/i250.jpg";
function Links() {
  const categories = [
    { name: "Women's Fashion", path: "/womensfashion" },
    { name: "Men's Fashion", path: "/mensfashion" },
    { name: "Electronics", path: "/electronics" },
    { name: "Home & Lifestyle", path: "/homelifestyle" },
    { name: "Medicine", path: "/medicine" },
    { name: "Baby's & Toys", path: "/babystoys" },
    { name: "Groceries & Pets", path: "/groceriespets" },
  ];
  return (
    <div className="categories">
      <div className="categories1">
        <ul>
          {categories.map((cat, index) => (
            <li key={index} className="category-item">
              <Link to={cat.path}>{cat.name}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="categories2">
        <img src={i250} className="i250"></img>
        <h4>iPhone 14 Series</h4>
        <p>Up to 10% <br/>off Voucher</p>
         <Link to="/electronics" className="banner-btn">
            Shop Now →
          </Link>
      </div>
      

    </div>
  );
}
export default Links;
