import { useEffect, useState } from "react";
// components
import Header from "./components/1-header/Header";
// icons
import { GoArrowUp } from "react-icons/go";
import { BrowserRouter, Route, Routes } from "react-router";
// pages
import Projects from "./Pages/Projects";
import Education from "./Pages/Education";
import ContactUs from "./Pages/ContactUs";
import Main from "./Pages/Main";
import Skills from "./Pages/Skills";

function App() {
  const [showScrollBtn, setShowScrollBtn] = useState(false);
  // Function to scroll to the top of the page
  const scrollToUpFn = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  // Effect to show/hide the scroll button based on scroll position
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setShowScrollBtn(true);
      } else {
        setShowScrollBtn(false);
      }
    });
  }, []);

  return (
    <BrowserRouter basename={"/Portfolio/"}>
      <div className="backdrop"></div>
      <div className="main mx-auto">
        <Header />

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>

        <div
          style={{
            opacity: showScrollBtn ? 1 : 0,
            pointerEvents: showScrollBtn ? "auto" : "none",
          }}
          onClick={scrollToUpFn}
          className="scrollToUp rounded-pill position-fixed glass-card"
        >
          <GoArrowUp />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
