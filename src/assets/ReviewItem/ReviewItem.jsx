import React from "react";
import "./ReviewItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import { faTrash } from "@fortawesome/free-solid-svg-icons";


const ReviewItem = (props) => {
  const { img, price, quantity, shipping } = props.item;
  return (
    <div className="review-item">
      <div className="logo">
        <img src={img} alt="" />
      </div>
      <div className="item-des">
        <p>price:${price}</p>
        <p>Quantity:{quantity}</p>
        <p>Shipping Charge:${shipping}</p>
      </div>
      <div>
        <button style={{background:"white",border:"0", marginRight:"10px"}}>  
          <FontAwesomeIcon icon={faTrash} style={{color:"red", fontSize:"22px",cursor:"pointer"}} />
        </button>
      </div>
    </div>
  );
};

export default ReviewItem;
