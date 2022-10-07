import "./style.css";

function Slider() {
  const img = ["./images/headerImg1.png", "./images/headerImg4.png", "./images/headerImg3.png"];
  return (
    <>
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          {img.map((item) => {
            return (
              <div class="carousel-item active">
                <img src={item} class="d-block w-100" alt="..."></img>
                <div className="caption">
                  <h1>Perfume Tips Tricks</h1>
                 <div className="captionNext">
                  <a href="">SHOP NOW</a>
                  <hr ></hr>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
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
