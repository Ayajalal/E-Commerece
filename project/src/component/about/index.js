import style from "./style.module.css";
import Title from "../shared/title";
function About() {
  return (
    <div className={style.aboutWrapper}>
      <Title headTitle={"About Matter"} />

      <div className={style.aboutRow}>
        <div className={style.AboutLeft}>
          <img src="./images/about.png" alt="About"></img>
        </div>
        <div className={style.AboutRight}>
          <p className="p1">
            Our mission is threefold - to foster designer-artisan
            collaborations, inspire consumers to value provenance and process,
            and pioneer industry change and sustainability for rural textile
            communities.{" "}
          </p>
          <p className={style.p2}>Artisan Employment Days Created</p>
          <p className={style.p3}>123456</p>
          <p className={style.p4}>Countries Involved To Date</p>
          <p className={style.p5}> India China Sri Lanka</p>
          <p className={style.p6}>#MatterTribe </p>
          <p className={style.p7}>12 designers 12 Factories</p>
        </div>
      </div>
    </div>
  );
}
export default About;
