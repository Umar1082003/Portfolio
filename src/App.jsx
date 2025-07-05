import { useEffect, useState } from "react";
// components
import Header from "./components/1-header/Header";
import Hero from "./components/2-hero/Hero";
import Content from "./components/3-content/Content";
import Contact from "./components/4-contact/Contact";
import Footer from "./components/5-footer/Footer";
// icons
import { IoIosArrowUp } from "react-icons/io";

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
      if (window.scrollY > 400) {
        setShowScrollBtn(true);
      } else {
        setShowScrollBtn(false);
      }
    });
  }, []);

  return (
    <div className="main mx-auto">
      <Header />
      <Hero />
      <div className="tline"></div>
      <Content />
      <div className="tline"></div>
      <Contact />
      <div className="tline"></div>
      <Footer />
      <div
        style={{
          opacity: showScrollBtn ? 1 : 0,
          pointerEvents: showScrollBtn ? "auto" : "none",
        }}
        onClick={scrollToUpFn}
        className="scrollToUp rounded-pill position-fixed"
      >
        <IoIosArrowUp />
      </div>
    </div>
  );
}

export default App;
