import { IoLogoCss3, IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { TbBrandFramerMotion } from "react-icons/tb";
import {
  FaHtml5,
  FaReact,
  FaBootstrap,
  FaGithub,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiMui,
  SiRedux,
  SiTypescript,
  SiReactrouter,
  SiAxios,
} from "react-icons/si";


const iconSize = 85.45;
export const icons = [
  { icon: <IoLogoJavascript size={iconSize} />, name: "JavaScript" },
  { icon: <SiTypescript size={iconSize} />, name: "TypeScript" },
  { icon: <FaReact size={iconSize} />, name: "ReactJS" },
  { icon: <RiNextjsFill size={iconSize} />, name: "Next.js" },
  { icon: <FaHtml5 size={iconSize} />, name: "HTML5" },
  { icon: <IoLogoCss3 size={iconSize} />, name: "CSS3" },
  { icon: <SiRedux size={iconSize} />, name: "Redux" },
  { icon: <SiReactrouter size={iconSize} />, name: "React Router" },
  { icon: <RiTailwindCssFill size={iconSize} />, name: "TailwindCSS" },
  { icon: <FaBootstrap size={iconSize} />, name: "Bootstrap" },
  { icon: <SiMui size={iconSize} />, name: "Material-UI" },
  { icon: <TbBrandFramerMotion size={iconSize} />, name: "Framer Motion" },
  { icon: <FaGitAlt size={iconSize} />, name: "Git" },
  { icon: <FaGithub size={iconSize} />, name: "GitHub" },
  { icon: <SiAxios size={iconSize} />, name: "Axios" },
];
