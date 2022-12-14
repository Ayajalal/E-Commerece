import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./component/layout";
import { NotFound } from "./component/NotFound";
import Home from "./pages/home-page";
import ShopList from "./pages/shop-list";
import PDP from "./pages/PDP.jsx";
const RouterPage = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="/shopList" element={<ShopList />}></Route>
          <Route path="/pdp" element={<PDP />}></Route>
        </Route>
        <Route path="*" element={NotFound} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterPage;
