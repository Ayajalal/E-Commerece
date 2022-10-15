import style from "./style.module.css";
function ImageShop({ image, name }) {
  return (
    <div className={style.ContainerShop}>
      <img src={image} className={style.shopImg}></img>
      <p className={style.nameImg}>{name}</p>
    </div>
  );
}
export default ImageShop;
