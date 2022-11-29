import Title from "../shared/title";
import style from "./style.module.css";
import OrangeNew from "../shared/orangeNew";
import Grid from "@mui/material/Grid";

import React, { useState, useEffect } from "react";
import CardProduct from "../shared/card-product";
import axios from "axios";
import AxiosInstance from "../customHooks/axiosCustom";
function Wrapper() {
  const [data, setData] = useState([]);
  const getAllData = async () => {
    const res = await AxiosInstance.get("/products");
    setData(res.data.products);
    console.log(res.data, "all Data");
  };
  useEffect(() => {
    getAllData();
  }, []);
  return (
    <div className={style.wrapper}>
      <Title headTitle={"Feature"} />
      <div className={style.wrapperCard}>
        <Grid container spacing={2} display="flex">
          {data.map((item, index) => {
            console.log("item", item);
            return index > 7 ? (
              ""
            ) : (
              <Grid item xs={12} sm={6} md={3}>
                <CardProduct item={item}></CardProduct>
              </Grid>
            );
          })}
        </Grid>
      </div>
    </div>
  );
}
export default Wrapper;
