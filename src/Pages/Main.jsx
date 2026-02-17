import { TbPointFilled } from "react-icons/tb";
import Hero from "../components/2-hero/Hero";
import Footer from "../components/5-footer/Footer";
import AboutMe from "../components/7-aboutMe/AboutMe";
// import Home from "../components/8-home/Home";

function Main() {
  return (
    <div>
      <Hero />
      <div className="tline"></div>
      <AboutMe />
      {/* <div className="tline"></div>
      <Home /> */}
      <div className="tline"></div>
      <Footer />
    </div>
  );
}

export default Main;
