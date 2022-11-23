import React, { useEffect } from "react";
import Banner from "../component/shopList/banner";
import SortFeature from "../component/shopList/sort-feature";
import CategoryFeature from "../component/shopList/categry-feature";
const ShopList = () => {
  return (
    <>
      <Banner />
      <CategoryFeature />
    </>
  );
};

export default ShopList;
