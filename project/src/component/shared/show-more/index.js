import style from "./style.module.css";
function ShowMore({ buttonTitle }) {
  return <button className={style.showMore}>{buttonTitle}</button>;
}
export default ShowMore;
