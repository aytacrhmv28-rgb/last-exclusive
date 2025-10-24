import React from "react";
import products from "../data/MockData.jsx";
import "./WomensFashion.css"; 
import { Link } from "react-router-dom";
function Baby() {
  const babyCategory = products.find(
    (category) => category.name === "Baby's & Toys"
  );

  return (
    <div className="womens-page">
      <h1>{babyCategory.name}</h1>
      <div className="product-grid">
        {babyCategory.products.map((item) => (
          <Link to={`/product/${item.id}`} key={item.id} className="product-card">
            <img src={item.images[0]} alt={item.name} className="product-img" />
            <p className="product-name">{item.name || "Product"}</p>
            <p className="product-price">${item.price}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Baby;
