import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import style from "./style.module.css";
function Slider() {
  const slider = [
    {
      image: "./images/headerImg1.png",
      caption: "Perfume Tips Tricks",
      subCaption: "Shop Now",
    },
    {
      image: "./images/headerImg1.png",
      caption: "Perfume Tips Tricks",
      subCaption: "Shop Now",
    },
    {
      image: "./images/headerImg1.png",
      caption: "Perfume Tips Tricks",
      subCaption: "Shop Now",
    },
  ];
  return (
    <div>
      <Carousel infiniteLoop showThumbs={false}>
        {slider.map((data, index) => {
          let { image, caption, subCaption } = data;
          return (
            <div>
              {" "}
              <img key={index} src={image} alt="slider" />
              <div className={style.caption}>
                <h1>{caption}</h1>
                <div className={style.captionNext}>
                  <a href="">{subCaption}</a>
                  <center>
                    <hr />
                  </center>
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

export default Slider;
