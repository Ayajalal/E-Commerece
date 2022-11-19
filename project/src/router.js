import axios from "axios";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./component/layout";
import { NotFound } from "./component/NotFound";
import Home from "./pages/home-page";
import ShopList from "./pages/shop-list";
const RouterPage = () => {
  const [data, setData] = useState([]);
  const getAllData = async () => {
    const res = await axios.get("https://dummyjson.com/products");
    setData(res.data.products);
    //   console.log(res.data);
  };
  useEffect(() => {
    getAllData();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home data={data} />}></Route>
          <Route path="/shopList" element={<ShopList data={data} />}></Route>
        </Route>
        <Route path="*" element={NotFound} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterPage;
