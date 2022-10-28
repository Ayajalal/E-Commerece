import style from "./style.module.css";
import React, { useRef, useState } from "react";
const Image = ({ images, thumbnail }) => {
  const [img, setImg] = useState(thumbnail);
  const refs = useRef([]);
  refs.current = [];
  const addRefs = (index) => {
    if (index && !refs.current.includes(index)) {
      refs.current.push(index);
    }
  };
  const hoverHandler = (image, index) => {
    setImg(image);
    refs.current[index].classList.add(style.active);
    for (let j = 0; j < images.length; j++) {
      if (index !== j) {
        refs.current[j].classList.remove(style.active);
      }
    }
  };
  return (
    <div className={style.left}>
      {images && (
        <div className={style.imgLeft}>
          {images.map((image, index) => (
            <img
              src={image}
              ref={addRefs}
              alt="smallImg"
              className={index === 0 ? style.active : ""}
              key={index}
              // onMouseOver={}
              onMouseOver={() => hoverHandler(image, index)}
            ></img>
          ))}
        </div>
      )}

      <div className={style.imgRight}>
        <img src={img} alt="mainPic"></img>
      </div>
    </div>
  );
};

export default Image;
