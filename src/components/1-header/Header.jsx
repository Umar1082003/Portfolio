import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { TiThMenu } from "react-icons/ti";
import { MdOutlineLightMode } from "react-icons/md";
import { IoMoon } from "react-icons/io5";
import "./header.css";

import {motion} from "framer-motion";

function Header() {
  const [popUp, setPopUp] = useState(false);
  const [theme, setTheme] = useState("light");

  const handleDarkLight = () => {
    setTheme(localStorage.getItem("currentTheme"));
  };
  
  useEffect(() => {
    localStorage.setItem("currentTheme", theme === "dark" ? "light" : "dark");
    document.body.className = localStorage.getItem("currentTheme") || "dark";

  },[theme])

  return (
    <motion.header
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="pt-3 d-flex align-items-center justify-content-between">
      {/* menu icon */}
      <div
        className="menu p-2 lh-1 rounded-pill"
        onClick={() => {
          setPopUp(true);
        }}
      >
        <TiThMenu className="fs-5" />
      </div>

      {/* navlist */}
      <nav>
        <ul className="d-flex gap-4 py-1 px-3 m-0">
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Articles</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Speaking</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>

      {/* light&dark button */}
      <button
        onClick={handleDarkLight}
        className="text-light p-2 lh-1 rounded-pill"
      >
      {theme === "light" ? (
        <IoMoon className="fs-5" />
      ) : (
        <MdOutlineLightMode className="fs-5" />
      )}
      </button>

      {/* pop up menu */}
      {popUp ? (
        <div className="pop-up w-100 h-100 position-fixed top-0 start-0">
          <ul className="bg-dark container my-5 py-3 px-4 rounded">
            <li
              className="close text-danger ms-auto border-0"
              onClick={() => {
                setPopUp(false);
              }}
            >
              <IoClose className="fs-1 rounded-pill icon-hover" />
            </li>
            <li className="py-3">
              <a href="#">About</a>
            </li>
            <li className="py-3">
              <a href="#">Articles</a>
            </li>
            <li className="py-3">
              <a href="#">Projects</a>
            </li>
            <li className="py-3">
              <a href="#">Speaking</a>
            </li>
            <li className="py-3">
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      ) : (
        ""
      )}
    </motion.header>
  );
}

export default Header;
