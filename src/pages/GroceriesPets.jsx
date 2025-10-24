import React from "react";
import products from "../data/MockData.jsx"; // mock data import
import "./WomensFashion.css"; // istəsən eyni css faylı istifadə et
import { Link } from "react-router-dom";
function Grocery() {
  // "Men's Fashion" kateqoriyasını tapırıq
  const petCategory = products.find(
    (category) => category.name === "Groceries & Pets"
  );

  return (
    <div className="womens-page">
      <h1>{petCategory.name}</h1>
      <div className="product-grid">
        {petCategory.products.map((item) => (
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

export default Grocery;
