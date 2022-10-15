import Title from "../shared/title";
import style from "./style.module.css";
import OrangeNew from "../shared/orangeNew";
import QuickNow from "../shared/quick-now";
function Wrapper() {
  const cards = [
    {
      id: 1,
      name: "Pueraria Mirifica And Study Phyto Estrogens",
      salary: "$599.00",
      image: "./images/img1.png",
      flagNew: "true",
    },
    {
      id: 2,
      name: "Pueraria Mirifica And Study Phyto Estrogens",
      salary: "$599.00",
      image: "./images/img2.png",
      flagNew: "true",
    },
    {
      id: 3,
      name: "Pueraria Mirifica And Study Phyto Estrogens",
      salary: "$599.00",
      image: "./images/img3.png",
      flagNew: "true",
    },
    {
      id: 4,
      name: "Pueraria Mirifica And Study Phyto Estrogens",
      salary: "$599.00",
      image: "./images/img4.png",
    },
    {
      id: 5,
      name: "Pueraria Mirifica And Study Phyto Estrogens",
      salary: "$599.00",
      image: "./images/img5.png",
      flagNew: "true",
    },
    {
      id: 6,
      name: "Pueraria Mirifica And Study Phyto Estrogens",
      salary: "$599.00",
      image: "./images/img6.png",
    },
    {
      id: 7,
      name: "Pueraria Mirifica And Study Phyto Estrogens",
      salary: "$599.00",
      image: "./images/img7.png",
      flagNew: "true",
    },
    {
      id: 8,
      name: "Pueraria Mirifica And Study Phyto Estrogens",
      salary: "$599.00",
      image: "./images/img8.png",
    },
  ];
  return (
    <div className={style.wrapper}>
      <Title headTitle={"Feature"} />
      <div className={style.wrapperCard}>
        {cards.map((item) => {
          let { name, salary, image, flagNew } = item;
          return (
            <div className={style.card} style={{ border: "none" }}>
              {flagNew === "true" ? <OrangeNew /> : ""}

              <img src={image} class="card-img-top" alt="..."></img>
              <button className={style["btn-view"]}>Quick Now</button>
              {/* <QuickNow st={style["btn-view"]} /> */}
              <div className={style["card-body"]}>
                <p className="card-text">{name}</p>
                <p className="card-text">{salary}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Wrapper;
