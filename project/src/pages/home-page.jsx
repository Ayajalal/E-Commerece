import React from "react";
import Slider from "../component/slider";
import Wrapper from "../component/wrapper";
import About from "../component/about";
import Explore from "../component/explore";
import Shop from "../component/shop";
import RecommendedVideos from "../component/recommeded-vedio";
import AsSoonAs from "../component/as-soon-as";

const Home = () => {
  return (
    <>
      <Slider></Slider>
      <Wrapper></Wrapper>
      <About></About>
      <Explore></Explore>
      <Shop />
      <RecommendedVideos />
      <AsSoonAs />
    </>
  );
};

export default Home;
