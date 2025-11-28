import React from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import { addToWishlist } from "../features/cart/wishlistSlice";
import products from "../data/MockData";
import "./ProductDetail.css";

function ProductDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();

  // Məhsulu tapmaq
  let product;
  for (let category of products) {
    product = category.products.find((p) => p.id === parseInt(id));
    if (product) break;
  }

  if (!product) return <p>Product not found</p>;

  return (
    <div className="product-detail">
      <div className="product-detail__image-wrapper">
        <img
          src={product.images[0]}
          alt={product.name}
          className="product-detail__image"
        />
      </div>

      <div className="product-detail__info">
        <h1 className="product-detail__title">{product.name}</h1>
        <p className="product-detail__price">${product.price}</p>

        <div className="product-detail__buttons">
          <Link to="/cart">
            <button
              className="product-detail__button product-detail__button--cart"
              onClick={() => dispatch(addToCart(product))}
            >
              Add to Cart
            </button>
          </Link>
          <Link to="/wishlist">
            <button
              className="product-detail__button product-detail__button--wishlist"
              onClick={() => dispatch(addToWishlist(product))}
            >
              Add to Wishlist
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
