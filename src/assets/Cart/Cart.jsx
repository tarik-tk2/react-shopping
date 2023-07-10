import React from "react";
import "./Cart.css";

const Cart = ({cart}) => {
  let total = 0;
  let shipping = 0;
  let tax = 0;
  let quantity = 0;
  for (let product of cart) {
    total = total + product.price * product.quantity;
    shipping = parseInt((shipping + product.shipping).toFixed(2));
    tax = parseInt((tax + total * 0.01).toFixed(2));
    quantity = quantity + product.quantity;

  }
  let grand = total + tax + shipping;

  return (
    <div className="cart-style">
      <h5>
        item Count : <span>{quantity}</span>
      </h5>
      <h5>
        price : $ <span>{total}</span>
      </h5>
      <h5>
        Delivery charge : $ <span>{shipping}</span>
      </h5>
      <h5>
        Tax charge : $ <span>{tax}</span>
      </h5>
      <h5>
        Grand Total : $ <span>{grand}</span>
      </h5>
      <button className="order-btn">Order Processed</button>
    </div>
  );
};

export default Cart;
