import HeaderPage from "../components/8-HeaderPage/HeaderPage";
import Content from "../components/3-content/Content";
import FooterLinks from "../components/5-footer/FooterLinks";
import { FaDiagramProject } from "react-icons/fa6";

function Projects() {
  return (
    <div>
      <div className="tline my-5"></div>
      <HeaderPage title={"My Projects"} icon={<FaDiagramProject size={30} />} />
      <Content />
      <div className="tline"></div>
      <FooterLinks />
    </div>
  );
}

export default Projects;
