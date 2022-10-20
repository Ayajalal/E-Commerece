import style from "./style.module.css";
import { Link } from "react-router-dom";
import Icon from "../shared/icon";
function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.container}>
        <div className={style.row}>
          <div className={style["footer-col"]}>
            <h5>Categories</h5>
            <ul>
              <li>
                <a href="#"> About us</a>
              </li>
              <li>
                <a href="#"> Testimonials</a>
              </li>
              <li>
                <a href="#"> Contact </a>
              </li>
              <li>
                <a href="#"> Journal </a>
              </li>
              <li>
                <a href="#"> Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div className={style["footer-col"]}>
            <h5>Partners</h5>
            <ul>
              <li>
                <a href="#"> Support</a>
              </li>
              <li>
                <a href="#"> Shipping & Returns</a>
              </li>
              <li>
                <a href="#">Size Guide </a>
              </li>
              <li>
                <a href="#"> Product Care </a>
              </li>
            </ul>
          </div>
          <div className={style["footer-col"]}>
            <h5> Contact us</h5>
            <ul>
              <li>
                <a href="#">26A Pagoda St, TANGS, </a>
              </li>
              <li>
                <a href="#"> Singapore, 058187</a>
              </li>

              <li>
                <a href="#" style={{ marginTop: "18px" }}>
                  +65 6221 5462
                </a>
              </li>
            </ul>
          </div>
          <div className={style["footer-col"]}>
            <h5> Subscribe to newsletter</h5>

            <input
              placeholder="Enter your email"
              className={style.email}
            ></input>

            <div class="col mt-4">
              <a href="" className="me-2">
                <Icon nameIcon={"fab fa-facebook fa-lg"} />
              </a>
              <a href="">
                <Icon nameIcon={"fab fa-twitter fa-lg"} />
              </a>
            </div>
          </div>
          <div className={style["footer-col"]}>
            <button>Subscribe</button>
          </div>
        </div>
        <p className={style.copyright}>© Copyright Matter PTE LTD 2017</p>
      </div>
    </footer>
  );
}
export default Footer;
//how to align all text in start
