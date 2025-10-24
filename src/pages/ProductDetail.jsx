import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import { addToWishlist } from "../features/cart/wishlistSlice";
import products from "../data/MockData";
import "./ProductDetail.css";
import { Link } from "react-router-dom";
function ProductDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();

  let product;
  for (let category of products) {
    product = category.products.find(p => p.id === parseInt(id));
    if (product) break;
  }

  if (!product) return <p>Product not found</p>;

  return (
    <div className="productdetail1" >
      <div className="productdetail2">
        <img src={product.images[0]} alt={product.name} style={{ width: "300px" }} />
      </div>
      <div className="productdetail3">
        <h1>{product.name}</h1>
      <p>${product.price}</p>
      <Link to="/cart">
      <button className="detailbutton"   onClick={() => dispatch(addToCart(product))}>Add to Cart</button></Link>
      <Link to="/wishlist">
      <button className="detailbutton"   onClick={() => dispatch(addToWishlist(product))}>❤️ Add to Wishlist</button></Link>
      
      </div>
      

    </div>
  );
}

export default ProductDetail;
