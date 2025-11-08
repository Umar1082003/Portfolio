import Content from '../components/3-content/Content'
import FooterLinks from "../components/5-footer/FooterLinks";
import { FaDiagramProject } from "react-icons/fa6";

function Projects() {
  return (
    <div>
      <div className="tline my-5"></div>
      <h1 className="mb-5 text-center text-lg-start fw-bold"><FaDiagramProject size={30}/> My Projects</h1>

      <Content/>
      <div className="tline"></div>
      <FooterLinks />
    </div>
  );
}

export default Projects
