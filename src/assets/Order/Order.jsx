import React from "react";
import './Order.css'
import Cart from "../Cart/Cart";
import { useLoaderData } from "react-router-dom";
import ReviewItem from "../ReviewItem/ReviewItem";

const Order = () => {
  const cart = useLoaderData();
  console.log(cart);
  return (
    <div className="container">
      <div className="item-container">
        {cart.map((item) => (
            <ReviewItem item={item} key={item.id}></ReviewItem>
        ))}
      </div>
      <div className="cart">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Order;
