import React from "react";
import "./ReviewItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import { faTrash } from "@fortawesome/free-solid-svg-icons";


const ReviewItem = (props) => {
    const { id, img, price, quantity, shipping } = props.item;
    const deleteItem = props.deleteItem;
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
        <button  className="button-delete"  onClick={()=>deleteItem(id)}>  
          <FontAwesomeIcon icon={faTrash} style={{color:"white", fontSize:"18px",cursor:"pointer"}} />
        </button>
      </div>
    </div>
  );
};

export default ReviewItem;
