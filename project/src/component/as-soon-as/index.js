import style from "./style.module.css";
import Title from "../shared/title";
function AsSoonAs() {
  return (
    <div className={style.soonWrapper}>
      <Title headTitle={"As Seen On"}></Title>
      <img src="./images/soon.png" alt="soon"></img>
    </div>
  );
}
export default AsSoonAs;
