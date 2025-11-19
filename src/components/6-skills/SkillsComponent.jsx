import React, { useEffect } from "react";
import { FaHtml5, FaReact, FaBootstrap, FaGithub } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { SiMui, SiRedux } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { TbBrandFramerMotion } from "react-icons/tb";
import { SiReactrouter, SiAxios } from "react-icons/si";
import { TbPointFilled } from "react-icons/tb";
import { motion } from "framer-motion";
import { Tooltip } from "bootstrap";

import "./skills.css";

const iconSize = 85.45;
const icons = [
  { icon: <FaHtml5 size={iconSize} />, name: "HTML5" },
  { icon: <IoLogoCss3 size={iconSize} />, name: "CSS3" },
  { icon: <IoLogoJavascript size={iconSize} />, name: "JavaScript" },
  { icon: <FaReact size={iconSize} />, name: "ReactJS" },
  { icon: <SiRedux size={iconSize} />, name: "Redux" },
  { icon: <SiReactrouter size={iconSize} />, name: "React Router" },
  { icon: <SiMui size={iconSize} />, name: "Material-UI" },
  { icon: <FaBootstrap size={iconSize} />, name: "Bootstrap" },
  { icon: <TbBrandFramerMotion size={iconSize} />, name: "Framer Motion" },
  { icon: <FaGithub size={iconSize} />, name: "GitHub" },
  { icon: <SiAxios size={iconSize} />, name: "Axios" },
];

function SkillsComponent() {
  useEffect(() => {
    const tooltipTriggerList = document.querySelectorAll(
      '[data-bs-toggle="tooltip"]'
    );
    [...tooltipTriggerList].map((el) => new Tooltip(el));
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="tline"></div>
      <h1 className="mb-5 text-center text-lg-start fw-bold">
        <TbPointFilled className="mb-2" size={30} /> My Skills
      </h1>
      <ul className="d-flex flex-wrap justify-content-center gap-4 row-gap-5 list-unstyled mt-4">
        {icons.map((item, index) => (
          <li className="glass-card" key={index}>
            <button
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              data-bs-custom-class="custom-tooltip"
              data-bs-title={item.name}
              className="p-5"
            >
              {item.icon}
            </button>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default SkillsComponent;
