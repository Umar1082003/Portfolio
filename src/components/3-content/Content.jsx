import React, { useState } from "react";
import "./content.css";
import projects from "./Projects";
import Card from "./Card";


// buttons for filtering projects by category
const categories = [
  { label: "All Projects", value: "all" },
  { label: "HTML & CSS", value: "CSS" },
  { label: "JavaScript", value: "JS" },
  { label: "ReactJS", value: "react" },
  { label: "Bootstrap", value: "bootstrap" },
];


function Content() {
  const [active, setActive] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState(projects);

  // Function to handle the click event for the "All Projects" button
  const handleClick = (buttonCategory) => {
    setActive(buttonCategory);

    const newArr = buttonCategory === "all" ? projects : projects.filter((item) => {
      return item.category === buttonCategory;
    });
    setFilteredProjects(newArr);
  };

  return (
    <main className="d-flex">
      <section className="slide-sec col-lg-3 col-md-5 border-end pe-sm-0 border-end-sm-0 pe-md-3 pe-5">
        {categories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => {
              handleClick(cat.value);
            }}
            className={`${
              active === cat.value ? "active" : ""
            } btn text-light bg-dark border-secondary my-3 w-100`}
          >
            {cat.label}
          </button>
        ))}
      </section>
      <section className="content-sec col-lg-9 col-md-7 ms-5 d-flex flex-wrap justify-content-center">
        <Card projects={filteredProjects} />
      </section>
    </main>
  );
}

export default Content;
