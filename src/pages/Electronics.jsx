import React from "react";
import products from "../data/MockData.jsx"; // mock data import
import "./WomensFashion.css";
import {Link} from "react-router-dom"
function Electronics() {
  // "Men's Fashion" kateqoriyasını tapırıq
  const electronicsCategory = products.find(
    (category) => category.name === "Electronics"
  );

  return (
    <div className="womens-page">
      <h1>{electronicsCategory.name}</h1>
      <div className="product-grid">
        {electronicsCategory.products.map((item) => (
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

export default Electronics;
