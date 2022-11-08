import style from "./style.module.css";
import VedioPlay from "../../shared/playVedio";
import ShowMore from "../../shared/show-more";
function CardVedio() {
  let vedio = [
    { name: "Jamdani", image: "./images/v1.png" },

    { name: "Lorem ipsum dolor sit amet", image: "./images/v2.png" },
    { name: "Lorem ipsum dolor sit amet", image: "./images/v3.png" },
  ];
  return (
    <div className={style.cardWrap}>
      {vedio.map((item) => {
        let { name, image } = item;
        return (
          <div className={style.card}>
            <div className={style.img}>
              <VedioPlay />
              <img
                src={image}
                alt="..."
                // style={{ width: "22%", height: "15%" }}
              ></img>
            </div>
            <div className={style["card-body"]}>
              <h6 className={style["card-title"]}>{name}</h6>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default CardVedio;
