import React, { useEffect } from "react";
import style from "./style.module..css";
const Icon = ({ nameIcon, index }) => {
  useEffect(() => {
    console.log("Refereh");
  }, []);
  // const iconStyle = index == 0 ? style.icon : nameIcon;className={iconStyle}
  return <i className={nameIcon} style={{ color: "gray" }}></i>;
};

export default Icon;
