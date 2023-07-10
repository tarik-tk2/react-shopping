import React, { useEffect, useState } from "react";

import "./Container.css";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import { addToDb, getShoppingCart } from "../../Utilities/Utilities";

const Container = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json"
    )
      .then((res) => res.json())
      .then((result) => setProducts(result));
  }, []);

  const handleCart = (product) => { 
    let newCart = []

    const exists = cart.find(pd => pd.id === product.id);
    if (!exists) { 
      product.quantity = 1;
      newCart=[...cart,product]
    }
    else {
      exists.quantity = exists.quantity + 1;
      const remain = products.filter(pd => pd.id !== product.id)
      newCart = [...remain, exists];
    }
    setCart(newCart)
    addToDb(product.id);
    
  }
  useEffect(() => {
    let shoppingCart = [];
    const storeCart = getShoppingCart();
    for (let id in storeCart) {
      const findCart = products.find(pd => pd.id === id)
      if (findCart) {
        const newQuantity = storeCart[id];
        findCart.quantity = newQuantity;
        shoppingCart.push(findCart);
      }    
    }
    setCart(shoppingCart)  
  },[products])

  return (
    <div className="container">
      <div className="products">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleCart={handleCart}
          ></Product>
        ))}
      </div>
      <div className="cart">
        <h2>Order summary</h2>
        <Cart cart={ cart}></Cart>
      </div>
    </div>
  );
};

export default Container;
