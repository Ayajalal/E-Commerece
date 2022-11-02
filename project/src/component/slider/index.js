import style from "./style.module.css";

function Slider() {
  const slider = [
    {
      image: "./images/headerImg1.png",
      caption: "Perfume Tips Tricks",
      subCaption: "Shop Now",
    },
    {
      image: "./images/headerImg4.png",
      caption: "Perfume Tips Tricks",
      subCaption: "Shop Now",
    },
    {
      image: "./images/headerImg3.png",
      caption: "Perfume Tips Tricks",
      subCaption: "Shop Now",
    },
  ];
  return (
    <>
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-bs-touch="false"
      >
        <div class="carousel-inner">
          {slider.map((item, index) => {
            let { image, caption, subCaption } = item;
            return (
              <div className={`carousel-item ${index === 0 ? "active" : "no"}`}>
                <img src={image} class="d-block w-100" alt="..."></img>
                <div className={style.caption}>
                  <h1>{caption}</h1>
                  <div className={style.captionNext}>
                    <a href="">{subCaption}</a>
                    <hr></hr>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <button
          class="carousel-control-prev"
          style={{ top: "300px" }}
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          style={{ top: "300px" }}
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}
export default Slider;
