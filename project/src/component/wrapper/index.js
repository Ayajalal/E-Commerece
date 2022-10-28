import Title from "../shared/title";
import style from "./style.module.css";
import OrangeNew from "../shared/orangeNew";
import QuickNow from "../shared/quick-now";
import Modal from "react-modal";
import React, { useState } from "react";
import PopUp from "./pop-up";
import data from "./data.json";
function Wrapper() {
  let { products } = data;
  const [modelIsOpen, setModelIsOpen] = useState(false);
  const [product, setProducts] = useState([]);
  const handelProduct = (item, index) => {
    setProducts(item);
  };
  const updatePopUp = () => {
    setModelIsOpen(false);
  };

  console.log("products", { products });
  return (
    <div className={style.wrapper}>
      <Title headTitle={"Feature"} />
      <div className={style.wrapperCard}>
        {products.map((item, index) => {
          let { title, price, thumbnail, flagNew } = item;
          console.log("item", item);
          return index > 7 ? (
            ""
          ) : (
            <div className={style.card} style={{ border: "none" }}>
              {flagNew === "true" ? <OrangeNew /> : ""}
              <div className={style.mainImg}>
                <img src={thumbnail} class="card-img-top" alt="..."></img>
              </div>
              <button
                className={style["btn-view"]}
                onClick={() => {
                  setModelIsOpen(true);
                  handelProduct(item, index);
                }}
              >
                Quick Now
              </button>

              <PopUp
                modelIsOpen={modelIsOpen}
                updatePopUp={updatePopUp}
                item={product}
                title={title}
                index={index}
              />

              {/* <QuickNow st={style["btn-view"]} /> */}
              <div className={style["card-body"]}>
                <p className="card-text">{title}</p>
                <p className="card-text">{price}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Wrapper;
