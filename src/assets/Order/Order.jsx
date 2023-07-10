import React, { useState } from "react";
import './Order.css'
import Cart from "../Cart/Cart";
import { useLoaderData } from "react-router-dom";
import ReviewItem from "../ReviewItem/ReviewItem";
import { removeFromDb } from "../../Utilities/Utilities";

const Order = () => {
  const savedCart = useLoaderData();
    const [cart, setCart] = useState(savedCart) 
    const deleteItem = (id) => {
      const remainItem = cart.filter(item => item.id !== id);
      console.log(remainItem)
      setCart(remainItem);
      removeFromDb(id);
    };
  return (
    <div className="container">
      <div className="item-container">
        {cart.map((item) => (
          <ReviewItem
            item={item}
            key={item.id}
            deleteItem={deleteItem}
          ></ReviewItem>
        ))}
      </div>
      <div className="cart">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Order;
