import { auto } from "@popperjs/core";
import Title from "../shared/title";
import Grid from "./grid";

import style from "./style.module.css";
function Explore() {
  let headTitle = "Explore";
  let index = 0;
  let items = [
    {
      id: 1,
      date: "FIELDTESTED.JANUARY 19, 2017",
      title: "Connected Clothing: Raye Padit",
      text:
        "As a voice for conscious fashion, Raye Padit is motivated by the belief that one person’s actions, no matter how small, holds great impact. This core ideal has driven him to start his three passion projects: Connected Threads Asia, PeyaR, and Swagalls. ",
      img: "./images/imgex.png",
    },
    {
      id: 2,
      date: "FIELDTESTED.JANUARY 19, 2017",
      title: "Kérastase: A Collaboration",
      text: "",
      img: "./images/imgex2.png",
    },
    {
      id: 3,
      date: "FIELDTESTED.JANUARY 19, 2017",
      title: "Remarkable Resilience: Grace Kim",
      text:
        "A woman in my life who has shown remarkable resilience is my best friend Grace. Since she was a kid, she struggled with general anxiety disorder and panic disorder.",
      img: "",
    },
    {
      id: 4,
      date: "FIELDTESTED.JANUARY 19, 2017",
      title: "Jaclynn Seah",
      text:
        "Jaclynn’s wandering spirit has brought her from the lush greenery of South America to the craters of Indonesia.",
      img: "",
    },
    {
      id: 5,
      date: "FIELDTESTED.JANUARY 19, 2017",
      title: "How To Wear The Lounge Lunghi",
      text: "",
      img: "./images/imgex3.png",
    },
  ];
  return (
    <div className={style.exploreWrapper}>
      <Title headTitle={headTitle} />
      <div className="row" style={{ width: "85%", margin: auto }}>
        <div className="col" style={{ width: "555px", height: "560px" }}>
          <Grid items={items[0]} index={1} />
        </div>
        <div className="col">
          <div className="row">
            <div
              className="col"
              style={{ width: "263px", height: "280px", paddingRight: "30px" }}
            >
              <Grid items={items[1]} index={0} />
            </div>
            <div className="col" style={{ width: "263px", height: "280px" }}>
              <Grid items={items[2]} index={index} />
            </div>
          </div>
          <div className="row">
            <div className="col" style={{ width: "263px", height: "280px" }}>
              <Grid items={items[3]} index={index} />
            </div>
            <div className="col" style={{ width: "263px", height: "280px" }}>
              <Grid items={items[4]} index={index} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Explore;
