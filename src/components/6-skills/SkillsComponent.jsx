import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";

import { TbPointFilled } from "react-icons/tb";
import { GrFormNextLink } from "react-icons/gr";
import { motion } from "framer-motion";
import { Tooltip } from "bootstrap";

import HeaderPage from "../8-HeaderPage/HeaderPage";

import { icons } from "./Icons";

import "./skills.css";
function SkillsComponent() {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    const tooltipTriggerList = document.querySelectorAll(
      '[data-bs-toggle="tooltip"]',
    );
    [...tooltipTriggerList].map((el) => new Tooltip(el));
  }, []);

  const filteredIcons = location.pathname === "/" ? icons.slice(0, 3) : icons;

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="tline"></div>
      <HeaderPage title={"My Skills"} icon={<TbPointFilled size={30} />} />
      <ul className="d-flex flex-wrap justify-content-center gap-4 row-gap-5 list-unstyled mt-4">
        {filteredIcons.map((item, index) => (
          <li className="glass-card customHover" key={index}>
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
        {location.pathname === "/" && (
          <li
            className="d-flex align-items-center px-2 glass-card customHover"
            onClick={() => navigate("/Skills")}
          >
            <button>Show All</button>
            <GrFormNextLink />
          </li>
        )}
      </ul>
    </motion.div>
  );
}

export default SkillsComponent;
