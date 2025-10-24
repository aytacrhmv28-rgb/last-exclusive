import React from "react";
import products from "../data/MockData.jsx"; // mock data import
import "./WomensFashion.css"; // istəsən eyni css faylı istifadə et
import { Link } from "react-router-dom"; 
function Medicine() {
  // "Men's Fashion" kateqoriyasını tapırıq
  const medicineCategory = products.find(
    (category) => category.name === "Medicine"
  );

  return (
    <div className="womens-page">
      <h1>{medicineCategory.name}</h1>
      <div className="product-grid">
        {medicineCategory.products.map((item) => (
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

export default Medicine;





