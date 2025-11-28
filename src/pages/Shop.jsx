// src/pages/Shop.jsx
import React from "react";
import categories from "../data/MockData.jsx"; // sən dediyin faylın yeri
import { Link } from "react-router-dom";
import "./Shop.css"; // stil üçün ayrıca fayl

function Shop() {
  // bütün məhsulları bir massivdə birləşdiririk
  const allProducts = categories.flatMap((category) =>
    category.products.map((product) => ({
      ...product,
      categoryName: category.name, // kateqoriya adını da əlavə edirik
    }))
  );

  return (
    <div className="shop-container">
      <h1 className="shop-title">All Products</h1>

      <div className="shop-grid">
        {allProducts.map((product) => (
          <div key={product.id} className="shop-card">
            <img src={product.images[0]} alt={product.name} />
            <h3>{product.name}</h3>
            <p className="price">${product.price}</p>
            <p className="category">{product.categoryName}</p>
            <Link to={`/product/${product.id}`} className="view-btn">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;
