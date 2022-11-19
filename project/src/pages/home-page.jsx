import React from "react";
import Slider from "../component/slider";
import Wrapper from "../component/wrapper";
import About from "../component/about";
import Explore from "../component/explore";
import ContentText from "../component/explore/text";
import Shop from "../component/shop";
import RecommendedVideos from "../component/recommeded-vedio";
import AsSoonAs from "../component/as-soon-as";
import Footer from "../component/footor";
import OrangeNew from "../component/shared/orangeNew";
const Home = ({ data }) => {
  return (
    <>
      <Slider></Slider>
      <Wrapper data={data}></Wrapper>
      <About></About>
      <Explore></Explore>
      <Shop />
      <RecommendedVideos />
      <AsSoonAs />)
    </>
  );
};

export default Home;
