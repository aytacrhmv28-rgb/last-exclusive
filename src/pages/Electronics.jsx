import React from "react";
import products from "../data/MockData.jsx";
import { Link } from "react-router-dom";
import BackButton from "../shared/backbutton/BackButton.jsx";
import "./WomensFashion.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import { addToWishlist } from "../features/cart/wishlistSlice";
import { Heart } from "lucide-react";
import { ShoppingCart } from "lucide-react";
function Electronics() {
  const dispatch = useDispatch();

  const electronics = products.find(
    (category) => category.name === "Electronics"
  );

  return (
    <div className="womens">
      <BackButton />
      <h1 className="womens__title">{electronics.name}</h1>

      <div className="womens__grid">
        {electronics.products.map((item) => (
          <div key={item.id} className="womens__card">
            {/* ❤️🛒 Hover ikonları */}
            <div className="womens__icons">
              <Heart
                className="womens__icon"
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(addToWishlist(item));
                }}
              />
            </div>
            <Link
              to={`/product/${item.id}`}
              key={item.id}
              className="womens__card"
            >
              <img
                src={item.images[0]}
                alt={item.name}
                className="womens__image"
              />
              <p className="womens__name">{item.name}</p>
              <p className="womens__price">${item.price}</p>
            </Link>
            <button
              className="add-to-cart-btn"
              onClick={() => dispatch(addToCart(item))}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Electronics;
