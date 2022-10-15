import style from "./style.module.css";
let QuickNow = ({ st }) => {
  return <button className={style[{ st }]}>Quick Now</button>;
};
export default QuickNow;
