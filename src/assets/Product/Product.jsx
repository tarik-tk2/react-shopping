import React from 'react';
import './Product.css'
const Product = (props) => {
    const { id, img, price } = props.product;
    const handleCart=props.handleCart;
    
    return (
      <div className="single-product">
        <img src={img} alt="" />
        <p>Price:{price}</p>
        <p>id:{id}</p>
        <button className="pd-btn" onClick={()=>handleCart(props.product)}>
          Buy Now
        </button>
      </div>
    );
};

export default Product;