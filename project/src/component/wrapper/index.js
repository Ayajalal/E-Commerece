import Title from "../shared/title";
import style from "./style.module.css";
import OrangeNew from "../shared/orangeNew";
import Grid from "@mui/material/Grid";

import React, { useState } from "react";
import CardProduct from "../shared/card-product";

function Wrapper({ data }) {
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
