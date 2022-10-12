import style from "./style.module.css";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className={style.footer}>
      <div className={style["footer-wrapper"]}>
        <div className={style["footer-links"]}>
          <h4>Categories</h4>
          <a href="#"> About us</a>
          <a href="#"> Testimonials</a>
          <a href="#"> Contact </a>
          <a href="#"> Journal </a>
          <a href="#"> Privacy Policy</a>
        </div>
        <div className={style["footer-links"]}>
          <h4>Partners</h4>
          <a href="#"> Support</a>
          <a href="#"> Shipping & Returns</a>
          <a href="#">Size Guide </a>
          <a href="#"> Product Care </a>
        </div>
        <div className={style["footer-links"]}>
          <h4> Contact us</h4>
          <a href="#">26A Pagoda St, TANGS, </a>
          <a href="#"> Singapore, 058187</a>

          <a href="#" style={{ marginTop: "18px" }}>
            {" "}
            +65 6221 5462
          </a>
        </div>
        <div className={style["footer-links"]}>
          <h4> Subscribe to newsletter</h4>
          <div className="col ">
            <input
              placeholder="Enter your email"
              className={style.email}
            ></input>
            <button className="ms-4">Subscribe</button>
            <div class="col mt-4">
              <a href="" className="me-2">
                <i class="fab fa-facebook fa-lg"></i>
              </a>
              <a href="">
                <i class="fab fa-twitter fa-lg"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <p>© Copyright Matter PTE LTD 2017</p>
    </div>
  );
}
export default Footer;
//how to align all text in start
