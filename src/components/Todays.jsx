import React from "react";
import categories from "../data/MockData.jsx";
import "../components/Todays.css"

function Todays() {
  const allProducts = categories.flatMap(category => category.products);

  const randomProducts = allProducts
    .sort(() => Math.random() - 0.5)  // qarışdırır
    .slice(0, 4);                    

  return (
    <div className="todays1">
        <div className="todays2">
            <h2>Today's</h2>
        </div>
      
      <div className="todays3">
        {randomProducts.map(product => (
          <div key={product.id} className="todays4">
            <img src={product.images[0]} alt={product.name} />
            <h4>{product.name}</h4>
            <p>${product.price}</p>
          </div>
        ))}
        
      </div>
    </div>
  );
}

export default Todays;
