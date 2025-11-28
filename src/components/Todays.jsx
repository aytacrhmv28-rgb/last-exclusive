import React from "react";
import categories from "../data/MockData.jsx";
import "../components/Todays.css";
import { Link } from "react-router-dom";
function Todays() {
  const allProducts = categories.flatMap((category) => category.products);

  const randomProducts = allProducts
    .sort(() => Math.random() - 0.5) // qarışdırır
    .slice(0, 4);

  return (
    <div className="todays-section">
      <div className="todays-header">
        <h2 className="todays-title">Today's</h2>
      </div>

      <div className="todays-grid">
        {randomProducts.map((product) => (
          <div key={product.id} className="todays-card">
            <img
              src={product.images[0]}
              alt={product.name}
              className="todays-image"
            />
            <h4 className="todaysname">{product.name}</h4>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
      <Link to="/shop">
        <button className="todays-button">View All Products</button>
      </Link>
    </div>
  );
}

export default Todays;
