import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromWishlist, clearWishlist } from "../features/cart/wishlistSlice";
import "./Wishlist.css"
function WishList() {
  const items = useSelector(state => state.wishlist.items);
  const dispatch = useDispatch();

  return (
    <div className="wishlist-container">
      <h1 className="wishlist-title">Wishlist</h1>
      {items.length === 0 && <p className="empty-wishlist">Your wishlist is empty</p>}
      {items.map(item => (
        <div key={item.id} className="wishlist-item">
          <img src={item.images[0]} alt={item.name} className="wishlist-item-img" />
          <div className="wishlist-item-details">
            <p className="wishlist-item-name">{item.name}</p>
            <p className="wishlist-item-price">${item.price}</p>
            <button className="remove-btn" onClick={() => dispatch(removeFromWishlist(item.id))}>Remove</button>
          </div>
        </div>
      ))}
      {items.length > 0 && (
        <button className="clear-wishlist-btn" onClick={() => dispatch(clearWishlist())}>Clear Wishlist</button>
      )}
    </div>
  );
}

export default WishList;
