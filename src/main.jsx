import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// import Lottie from "lottie-react";
// import devAnimation from "./animations/Playground Animation.json";

import App from './App.jsx'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <Lottie className="w-100 position-absolute top-0 start-0" animationData={devAnimation} loop style={{zIndex: "-10", height: "100vh"}}/> */}
    <App className="position-relative"/>
  </StrictMode>,
);
