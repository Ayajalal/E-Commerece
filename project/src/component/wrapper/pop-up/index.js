import Modal from "react-modal";
import React, { useState } from "react";
import style from "./style.module.css";
import Icon from "../../shared/icon";
import Image from "./image";
import RightSide from "./right-side";
const PopUp = ({ updatePopUp, modelIsOpen, item, index }) => {
  const [counter, setCounter] = useState(0);

  const {
    title,

    thumbnail,

    images,
  } = item;
  console.log("on popup", { item });

  return (
    <Modal
      style={{
        overlay: {
          backgroundColor: "gray",
        },
        content: {
          color: "#030303",
        },
      }}
      isOpen={modelIsOpen}
      onClick={updatePopUp}

      // onRequestClose={updatePopUp}
    >
      <div className={style.wrapper}>
        <div className={style.title}>
          <h5>{title}</h5>
          <div className={style.icon} onClick={updatePopUp}>
            <Icon nameIcon={"fal fa-times fa-2x"} />
          </div>
        </div>
        <div className={style.main}>
          <Image images={images} thumbnail={thumbnail} />
          <RightSide item={item} />
        </div>
      </div>
    </Modal>
  );
};

export default PopUp;
