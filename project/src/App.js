import logo from "./logo.svg";
import "./App.css";
import HeaderComponent from "./component/header";
import Slider from "./component/slider";
import Wrapper from "./component/wrapper";
import About from "./component/about";
import Explore from "./component/explore";
import ContentText from "./component/explore/text";
import Shop from "./component/shop";
import RecommendedVideos from "./component/recommeded-vedio";
import AsSoonAs from "./component/as-soon-as";
import Footer from "./component/footor";
import OrangeNew from "./component/shared/orangeNew";
// import QuickNow from './component/shared/quick-now';
function App() {
  return (
    <div className="body">
      <HeaderComponent></HeaderComponent>
      <Slider></Slider>
      <Wrapper></Wrapper>
      <About></About>
      <Explore></Explore>
      <Shop />
      <RecommendedVideos />
      <AsSoonAs />
      <Footer></Footer>
    </div>
  );
}

export default App;
