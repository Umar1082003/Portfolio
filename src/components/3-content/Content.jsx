import React, { useState } from "react";
import "./content.css";
import Card from "./Card";

const projects = [
  {
    id: 1,
    title: "landing page",
    img: "/Portfolio/assets/landingPageReact.png",
    category: "CSS",
    link: "https://github.com/Umar1082003/Landing-Page-With-React",
    demo: "https://umar1082003.github.io/Landing-Page-With-React/",
    description:
      "A simple landing page built using HTML and CSS. It features a responsive design with a clean layout and modern styling and some animations.",
  },
  {
    id: 2,
    title: "To-Do-List",
    img: "/Portfolio/assets/todo.png",
    category: "JS",
    link: "https://github.com/Umar1082003/To-Do-List",
    demo: "https://umar1082003.github.io/To-Do-List/",
    description:
      "To-Do List app built with JavaScript. It allows users to add, delete, edit, and mark tasks as completed. The app uses local storage to save tasks. The user interface is clean and intuitive.",
  },
  {
    id: 3,
    title: "landing page",
    img: "/Portfolio/assets/landingPageJs.png",
    category: "JS",
    link: "https://github.com/Umar1082003/Landing-Page",
    demo: "https://umar1082003.github.io/Landing-Page/",
    description:
      "landing page built using HTML, CSS, and JavaScript. It features a responsive design. JavaScript adds some interactivity.",
  },
  {
    id: 4,
    title: "recipe app",
    img: "/Portfolio/assets/recipeApp.png",
    category: "JS",
    link: "https://github.com/Umar1082003/Recipe-App",
    demo: "https://umar1082003.github.io/Recipe-App/",
    description:
      "A simple recipe app built with JavaScript. It allows users to search for recipes by ingredients. The app uses the Edamam API to fetch recipes and display them in a user-friendly interface. The app is responsive and works well on mobile devices.",
  },
  {
    id: 5,
    title: "E-commerce",
    img: "/Portfolio/assets/e-commerce.png",
    category: "react",
    link: "https://github.com/Umar1082003/E-commerce",
    demo: "https://umar1082003.github.io/E-commerce",
    description:
      "E-commerce website built with ReactJS. It features a product listing, product details, and a shopping cart. The app uses React Router for navigation and local storage to save the cart items. The user interface is responsive and user-friendly.",
  },
  {
    id: 6,
    title: "Landing Page",
    img: "/Portfolio/assets/landingPageBootstrap.png",
    category: "react",
    link: "https://github.com/Umar1082003/Landing-Page-Bootstrap",
    demo: "https://umar1082003.github.io/Landing-Page-Bootstrap/",
    description:
      "landing page built with Bootstrap. It features a responsive design with a clean layout and modern styling. The app uses Bootstrap components for the layout and styling.",
  },
  {
    id: 7,
    title: "Prayer Times",
    img: "/Portfolio/assets/prayerTimes.png",
    category: "react",
    link: "https://github.com/Umar1082003/Prayer-App",
    demo: "https://umar1082003.github.io/Prayer-App/",
    description: "A simple prayer times app built with ReactJS. It allows users to view prayer times for their location. The app uses the Aladhan API to fetch prayer times and display them in a user-friendly interface.",
  },
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
