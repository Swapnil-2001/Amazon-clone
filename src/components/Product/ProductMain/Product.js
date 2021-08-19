import React from "react";
import "./Product.css";
import { useStateValue } from "../../../StateProvider";
import { Link, useHistory } from "react-router-dom";

function Product({ id, title, image, price, rating, link }) {
  const history = useHistory();
  const [{ user }, dispatch] = useStateValue();
  const redirect = () => {
    history.push("/login");
  };
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        title,
        image,
        price,
        rating,
        link,
      },
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map(() => (
              <span class="fa fa-star checked"></span>
            ))}
          {Array(5 - rating)
            .fill()
            .map(() => (
              <span class="fa fa-star"></span>
            ))}
        </div>
      </div>
      <Link
        to={{
          pathname: `/${id}`,
          state: { title, image, price, rating, link },
        }}
      >
        <img src={image} className="product__image" alt="product" />
      </Link>
      <button onClick={user ? addToBasket : redirect}>Add to Cart</button>
    </div>
  );
}

export default Product;
