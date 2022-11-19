import React from "react";
import Grid from "@mui/material/Grid";
import Product from "../shared/card-product";
const ProductFilter = ({ filterData }) => {
  return (
    <Grid container display="flex" justify="center" spacing={{ xs: 2, md: 3 }}>
      {filterData &&
        filterData.map((filterItem, index) => (
          <Grid item xs={12} sm={6} md={4} key={filterItem.id}>
            <Product item={filterItem} />{" "}
          </Grid>
        ))}
    </Grid>
  );
};

export default ProductFilter;
