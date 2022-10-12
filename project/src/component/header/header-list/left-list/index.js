import style from "./style.module.css";
import React, { useState } from "react";
import MenuList from "../menu-list";
import Icon from "../../../shared/icon";
function LeftList() {
  const [isMobile, setIsMobile] = useState(false);

  let listRight = ["fal fa-heart", "fal fa-search", "fal fa-shopping-bag"];
  return (
    <header>
      <nav className={style["main-nav"]}>
        {/* 1st logo part  */}
        <div className={style["menu-link"]}>
          {/* 2nd menu part  */}

          <ul>
            <li>
              <h2 className={style.logo}>matter</h2>
            </li>
            <div className={style.leftNav} onClick={() => setIsMobile(false)}>
              <MenuList></MenuList>
            </div>
          </ul>
        </div>
        {/* 3rd Icons links */}
        <div className={style["social-media"]}>
          <ul className={style["icon-desktop"]}>
            <li>
              <a href="">Login</a>
            </li>
            {listRight.map((item) => {
              return (
                <li>
                  <i className={item}></i>
                </li>
              );
            })}
          </ul>
        </div>
        <button
          className={style["mobile-menu-icon"]}
          onClick={() => setIsMobile(!isMobile)}
        >
          {isMobile ? (
            <i className="fas fa-times"></i>
          ) : (
            <i className="fas fa-bars"></i>
          )}
        </button>
        {isMobile ? (
          <div
            className={style["nav-links-mobile"]}
            onClick={() => setIsMobile(false)}
          >
            <MenuList />
          </div>
        ) : (
          ""
        )}
      </nav>
    </header>
  );
}
export default LeftList;
