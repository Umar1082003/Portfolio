import { useEffect, useState } from "react";
import Header from "./components/1-header/Header";
import Hero from "./components/2-hero/Hero";
import Content from "./components/3-content/Content";
import Contact from "./components/4-contact/Contact";
import Footer from "./components/5-footer/Footer";

import { IoIosArrowUp } from "react-icons/io";

function App() {
  const [showScrollBtn, setShowScrollBtn] = useState(false);
  const scroll2UpFn = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  // Scroll to top when the page loads
  // window.addEventListener("load", () => {
  //   window.scrollTo(0, 0);
  // });
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowScrollBtn(true);
        // alert("You have scrolled down the page!");
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
      {/* {showScrollBtn && (
        <div
          onClick={scroll2UpFn}
          className="scroll2Up bg-primary rounded-pill position-fixed"
        >
          <IoIosArrowUp />
        </div>
      )} */}
      <div
        style={{opacity: showScrollBtn ? 1 : 0}}
        onClick={scroll2UpFn}
        className="scroll2Up rounded-pill position-fixed"
      >
        <IoIosArrowUp />
      </div>
    </div>
  );
}

export default App;
