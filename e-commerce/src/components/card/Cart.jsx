import React, { useEffect, useState } from "react";
import "./cart.css";
import {
  removeCartItem,
  updateQuantityItem,
} from "../../redux/actions/cartActions";
import { useDispatch, useSelector } from "react-redux";
const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartItems.items);


  console.log(cartItems);

  const handleQuantityAdd = (id, quant) => {
    dispatch(updateQuantityItem(id, quant));
  };
  const handleRemove = (id) => {
    dispatch(removeCartItem(id));
  };

  let subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="cart_container">
      <div className="cart">
        <div className="cart-items">
          <div className="cart-items-title">
            <p>Items</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
          </div>
          <br />
          <hr />
          {cartItems.map((item, idx) => {
            return (
              <div key={idx}>
                <div className="cart-items-title cart-item-item">
                  <img src={item.images[0]} alt="" />
                  <p>{item.title}</p>
                  <p>${item.price}</p>
                  <input
                    type="number"
                    name="quantity"
                    value={item.quantity}
                    onChange={(e) =>
                      handleQuantityAdd(item.id, parseInt(e.target.value))
                    }
                  />
                  <p>${subtotal.toFixed()}</p>
                  <p onClick={() => handleRemove(item.id)} className="cross">
                    x
                  </p>
                </div>
                <hr />
              </div>
            );
          })}
        </div>
        <div className="cart-bottom">
          <div className="cart-total">
            <h2>Cart Totals</h2>
            <div>
              <div className="cart-totals-details">
                <p>Sub Total</p>
                <p>${subtotal.toFixed()}</p>
              </div>
              <hr />
              <div className="cart-totals-details">
                <p>Delivery Fee</p>
                <p>${subtotal === 0 ? 0 : 2}</p>
              </div>
              <hr />
              <div className="cart-totals-details">
                <b>Total</b>
                <b>${subtotal === 0 ? 0 : parseInt(subtotal.toFixed()) + 2}</b>
              </div>
            </div>
            <button>PROCEED TO CHECKOUT</button>
          </div>
          <div className="cart-promocode">
            <div>
              <p>If you have a promo code, Enter it here</p>
              <div className="cart-promocode-input">
                <input type="text" placeholder="promo code" />
                <button>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
