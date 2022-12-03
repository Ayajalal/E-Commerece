import React, { useState } from "react";
import style from "./style.module.css";
import Icon from "../../../shared/icon";
import StarRating from "../../star";
const ProductDetails = ({ updatePopUp, modelIsOpen, item, index }) => {
  const [counter, setCounter] = useState(0);

  const {
    title,
    price,

    brand,

    description,
    category,
    rating,
    stock,
    discountPercentage,
  } = item;
  console.log("on popup", { item });
  const counterUp = () => {
    setCounter(counter + 1);
  };
  const counterDown = () => {
    if (counter < 0) {
      setCounter(0);
    } else {
      setCounter(counter - 1);
    }
  };
  // const [ratings, setRating] = useState(Math.floor(rating));

  // const handleChange = (value) => {
  //   setRating(value);
  // };
  return (
    <div className={style.right}>
      <h5>{title}</h5>
      <div className={style.heading}>
        <h6>${price}</h6>
        <div class={style.rating}>
          <StarRating value={rating} />
          <span> {rating} of 5</span>
        </div>
      </div>
      <hr></hr>
      <h5>Description</h5>
      <p>{description}</p>
      <hr></hr>
      <div className={style.features}>
        <h5>Brand</h5>
        <p>{brand}</p>
        <h5>Category</h5>
        <p>{category}</p>
        <h5>Discount Percentage</h5>
        <p>{discountPercentage}</p>
        <h5>Stock</h5>
        <p>{stock}</p>
      </div>
      <hr></hr>
      <div className={style.counter}>
        <h5>Quantity</h5>
        <div className="input-group w-25">
          <button className="input-group-text" onClick={counterDown}>
            -
          </button>
          <div className="form-control text-center">{counter}</div>
          <button className="input-group-text" onClick={counterUp}>
            +
          </button>
        </div>
        <button>
          <Icon nameIcon={"fal fa-shopping-bag"} />
          Add to wishlist
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
