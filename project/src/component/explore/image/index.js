import style from "./style.module.css"
function Image({ img, index }) {
  const imgStyle = index === 0 ? style.image1 : style.img1;
  return <img src={img} alt="explore" className={imgStyle}></img>;
}
export default Image;
