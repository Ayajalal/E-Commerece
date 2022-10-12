import style from "./style.module.css";
import VedioPlay from "../../shared/playVedio";
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
              <img src={image} alt="..."></img>
            </div>
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default CardVedio;
