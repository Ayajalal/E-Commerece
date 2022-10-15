import style from "./style.module.css";
import React, { useState } from "react";
import MenuList from "../menu-list";
import Icon from "../../../shared/icon";
function LeftList() {
  const [isShow, setIsShow] = useState(false); ///change name

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
            <div className={style.leftNav}>
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
                  <Icon nameIcon={item}></Icon>
                </li>
              );
            })}
          </ul>
        </div>
        <div
          className={style["mobile-menu-icon"]}
          onClick={() => {
            console.log("isMobile" + isShow);
            setIsShow(!isShow);
          }}
        >
          <Icon nameIcon={`fas ${!isShow ? "fa-bars" : "fa-times"}`} />
        </div>
      </nav>
      {isShow ? (
        <div className={style["nav-links-mobile"]}>
          <MenuList />
        </div>
      ) : null}
    </header>
  );
}
export default LeftList;
