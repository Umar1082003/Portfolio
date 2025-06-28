import React, { useState } from "react";
import "./content.css";
import Card from "./Card";

const projects = [
  { id: 1, title: "CSS 1", img: "/assets/1.jpg", category: "CSS" },
  { id: 2, title: "JS 1", img: "/assets/2.jpg", category: "JS" },
  { id: 3, title: "react 1", img: "/assets/3.jpg", category: "react" },
  { id: 4, title: "react 2", img: "/assets/4.jpg", category: "react" },
];

function Content() {
  const [active, setActive] = useState("all");
  const [arr, setArr] = useState(projects);

  // Function to handle the click event for the "All Projects" button
  const handleClick = (buttonCategory) => {
    setActive(buttonCategory);

    const newArr = projects.filter((item) => {
      return item.category === buttonCategory;
    });
    setArr(newArr);
  };

  return (
    <main className="d-flex">
      <section className="slide-sec col-lg-3 col-md-5 border-end pe-sm-0 border-end-sm-0 pe-md-3 pe-5">
        <button
          onClick={() => {
            setActive("all");
            setArr(projects);
          }}
          className={`${
            active === "all" ? "active" : null
          } btn text-light bg-dark border-secondary my-3 mt-0 w-100`}
        >
          All Projects
        </button>
        <button
          onClick={() => {
            handleClick("CSS");
          }}
          className={`${
            active === "CSS" ? "active" : null
          } btn text-light bg-dark border-secondary my-3 w-100`}
        >
          HTML & CSS
        </button>
        <button
          onClick={() => {
            handleClick("JS");
          }}
          className={`${
            active === "JS" ? "active" : null
          } btn text-light bg-dark border-secondary my-3 w-100`}
        >
          JavaScript
        </button>
        <button
          onClick={() => {
            handleClick("react");
          }}
          className={`${
            active === "react" ? "active" : null
          } btn text-light bg-dark border-secondary my-3 w-100`}
        >
          ReactJS
        </button>
      </section>
      <section className="content-sec col-lg-9 col-md-7 ms-5 d-flex flex-wrap justify-content-center">
        <Card projects={arr} />
      </section>
    </main>
  );
}

export default Content;
