import HeaderPage from "../components/8-HeaderPage/HeaderPage";
import Hero from "../components/2-hero/Hero";
import Content from "../components/3-content/Content";
import Footer from "../components/5-footer/Footer";
import SkillsComponent from "../components/6-skills/SkillsComponent";
import AboutMe from "../components/7-aboutMe/AboutMe";
import { MdRoundaboutRight } from "react-icons/md";
import { FaDiagramProject } from "react-icons/fa6";
import Contact from "../components/4-contact/Contact";

function Main() {
  return (
    <div>
      <Hero />
      <div className="tline"></div>
      <HeaderPage title={"About Me"} icon={<MdRoundaboutRight size={30} />} />
      <AboutMe />
      <div className="tline"></div>
      <HeaderPage title={"My Projects"} icon={<FaDiagramProject size={30} />} />
      <Content />
      <SkillsComponent />
      <div className="tline"></div>
      <Contact />
      <div className="tline"></div>
      <Footer />
    </div>
  );
}

export default Main;
