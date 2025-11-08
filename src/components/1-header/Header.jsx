import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { TiThMenu } from "react-icons/ti";
import { MdOutlineLightMode } from "react-icons/md";
import { IoMoon } from "react-icons/io5";
import "./header.css";
// framer-motion for animations
import { motion } from "framer-motion";
import { Link, NavLink, useLocation } from "react-router-dom";

const navLinks = [
  { name: "About", path: "/" },
  { name: "Projects", path: "/projects" },
  { name: "Skills", path: "/skills" },
  { name: "Contact", path: "/contact" },
];

function Header() {
  const location = useLocation();
  const [popUp, setPopUp] = useState(false);
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("currentTheme") || "dark";
  });

  const handleDarkLight = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    localStorage.setItem("currentTheme", theme);
    document.body.className = theme; // Apply the theme to the body class
  }, [theme]);

  useEffect(() => {
      setPopUp(false);
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
  }, [location]);

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-3 d-flex align-items-center justify-content-between"
    >
      {/* menu icon */}
      <div
        className="menu p-2 lh-1 rounded-pill glass-card"
        onClick={() => {
          setPopUp(true);
        }}
      >
        <TiThMenu className="fs-5" />
      </div>

      {/* navlist */}
      <nav className="glass-card">
        <ul className="d-flex gap-4 py-1 px-3 m-0">
          {navLinks.map((obj) => (
            <li key={obj.name}>
              <NavLink to={obj.path}>{obj.name}</NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* light&dark button */}
      <button
        onClick={handleDarkLight}
        className="text-light p-2 lh-1 rounded-pill glass-card"
      >
        {theme === "dark" ? (
          <IoMoon className="fs-5" />
        ) : (
          <MdOutlineLightMode className="fs-5" />
        )}
      </button>

      {/* pop up menu */}
      {popUp && (
        <div className="pop-up w-100 h-100 position-fixed top-0 start-0">
          <ul className="container my-5 py-3 px-4 rounded glass-card">
            <li
              className="close text-danger ms-auto border-0"
              onClick={() => {
                setPopUp(false);
              }}
            >
              <IoClose className="fs-1 rounded-pill close-icon" />
            </li>
            {navLinks.map((text, index) => (
              <li className="py-3" key={index}>
                <Link to={text.path}>{text.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </motion.header>
  );
}

export default Header;
