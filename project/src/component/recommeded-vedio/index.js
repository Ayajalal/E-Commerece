import style from "./style.module.css";
import Title from "../shared/title";
import CardVedio from "./card";
import ShowMore from "../shared/show-more";
function RecommendedVideos() {
  return (
    <div className={style.all}>
      <Title headTitle={"Recommended Videos"}></Title>
      <div className={style.wrapper}>
        <CardVedio></CardVedio>
        <div className={style.centerButt}>
          <ShowMore buttonTitle={"Show More"} />
        </div>
      </div>
    </div>
  );
}
export default RecommendedVideos;
