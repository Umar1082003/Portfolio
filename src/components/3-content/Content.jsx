import { useState } from "react";
import { useLocation } from "react-router";

import Card from "./Card";
import SlideSec from "./SlideSec";
import projects from "../../data/Projects";

import "./content.css";
// buttons for filtering projects by category
const categories = [
  { label: "ReactJS & MUI", value: "react&MUI" },
  { label: "JavaScript", value: "JS" },
  { label: "HTML & CSS", value: "CSS" },
  { label: "View All Projects", value: "all" },
];

function Content() {
  const location = useLocation();
  const [active, setActive] = useState("react&MUI");
  const [filteredProjects, setFilteredProjects] = useState(projects);
  console.log(filteredProjects);

  // Function to handle the click event for the "All Projects" button
  const handleClick = (buttonCategory) => {
    setActive(buttonCategory);

    const newArr =
      buttonCategory === "all"
        ? projects
        : projects.filter((item) => {
            const newItem = item.category.find((myItem) => {
              return myItem === buttonCategory;
            });
            return newItem === buttonCategory;
          });
    console.log(projects);

    setFilteredProjects(newArr);
  };

  return (
    <main className="d-flex justify-content-center">
      {location.pathname === "/" && (
        <SlideSec
          categories={categories}
          active={active}
          handleClick={handleClick}
        />
      )}
      <section className="content-sec col-lg-9 col-md-7 d-flex flex-wrap justify-content-center">
        <Card filteredProjects={filteredProjects} projects={projects} />
      </section>
    </main>
  );
}

export default Content;
