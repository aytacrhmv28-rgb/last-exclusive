import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Cart.css";
import {
  removeFromCart,
  decreaseQuantity,
  addToCart,
  clearCart,
} from "../features/cart/cartSlice";

function Cart() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <h1 className="cart-title">Cart</h1>
      {items.length === 0 && <p className="empty-cart">Your cart is empty</p>}
      {items.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.images[0]} alt={item.name} className="cart-item-img" />
          <div className="cart-item-details">
            <p className="cart-item-name">{item.name}</p>
            <p className="cart-item-price">${item.price}</p>
            <p className="cart-item-quantity">Quantity: {item.quantity}</p>
            <div className="cart-item-buttons">
              <button onClick={() => dispatch(decreaseQuantity(item.id))}>
                -
              </button>
              <button onClick={() => dispatch(addToCart(item))}>+</button>
              <button onClick={() => dispatch(removeFromCart(item.id))}>
                Remove
              </button>
            </div>
          </div>
        </div>
      ))}
      {items.length > 0 && (
        <div className="cart-total">
          <h2>Total: ${total.toFixed(2)}</h2>
          <button className="clear-cart-btn" onClick={() => dispatch(clearCart())}>Clear Cart</button>
        </div>
      )}
    </div>
  );
}

export default Cart;
