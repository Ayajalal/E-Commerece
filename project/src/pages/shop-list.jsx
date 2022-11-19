import React from "react";
import Banner from "../component/shopList/banner";
import SortFeature from "../component/shopList/sort-feature";
import CategoryFeature from "../component/shopList/categry-feature";
const ShopList = ({ data }) => {
  return (
    <>
      <Banner />

      <CategoryFeature data={data} />
    </>
  );
};

export default ShopList;
