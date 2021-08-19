import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "../../../StateProvider";

function CheckoutProduct({ id, title, price, image, rating }) {
  const [, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="checkoutProduct">
      <img src={image} alt="" className="checkoutProduct__image" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map(() => (
              <span role="img" aria-label="stars">
                ⭐
              </span>
            ))}
        </div>
        <div className="button__div">
          <button className="removeButton" onClick={removeFromBasket}>
            Remove Item
          </button>
        </div>
      </div>
    </div>
  );
}

export default CheckoutProduct;
