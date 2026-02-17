import { FaInstagram, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { VscVerifiedFilled } from "react-icons/vsc";
import { HiOutlineDownload } from "react-icons/hi";
// animation
import Lottie from "lottie-react";
import devAnimation from "../../animations/Playground Animation.json";
// framer-motion for animations
import { motion } from "framer-motion";

import CV from "/public/assets/Omar-Abdelwahab-Sayed-CV.pdf";


import "./hero.css";

const socialLinks = [
  { href: "https://wa.me/01009175260", icon: <FaWhatsapp /> },
  {
    href: "https://www.instagram.com/umarabdelwahabsayed/",
    icon: <FaInstagram />,
  },
  { href: "https://github.com/Umar1082003", icon: <FaGithub /> },
  {
    href: "https://www.linkedin.com/in/omar-abdelwahab-2a818236a/",
    icon: <FaLinkedin />,
  },
];

function Hero() {
  return (
    <section className="row align-items-center mt-5">
      <div className="left-sec col-lg-7">
        <div className="image mt-4 position-relative">
          <motion.img
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            src="/Portfolio/assets/omar1.jpg"
            alt="#"
            className="w-100 rounded-pill glass-card p-1"
          />
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="verified-icon-container position-absolute"
          >
            <VscVerifiedFilled className="verified-icon m-3 fs-5 position-absolute" />
          </motion.span>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text mt-4"
        >
          <h1 className="my-4 fw-bold">
            <span>Front-End Developer</span>, Focused on Performance,
            Scalability & User Experience
          </h1>
          <p className="my-4">
            Front-End Developer with hands-on experience building scalable and
            user-focused web applications using modern technologies. I
            specialize in creating clean, maintainable code and responsive
            interfaces that deliver smooth user experiences. Passionate about
            continuous growth, problem-solving, and contributing to impactful
            projects in global tech environments. Fast learner. Detail-oriented.
            Always ready for new challenges.
          </p>
          <div className="d-flex gap-3 flex-column flex-md-row align-items-md-center flex-wrap">
            <div className="social-links my-4 glass-card p-2 px-md-5 px-5">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mb-1"
                >
                  {link.icon}
                </a>
              ))}
            </div>
            <a
              className="px-3 py-2 rounded-pill cvBtn mt-2 mt-md-0 me-0 glass-card"
              rel="stylesheet"
              href={CV}
              download={true}
            >
              Download CV
              <HiOutlineDownload className="ms-1 mb-1" />
            </a>
          </div>
        </motion.div>
      </div>
      {/* animation section */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="animation-sec col-lg-5"
      >
        <Lottie className="w-100 h-100" animationData={devAnimation} loop />
      </motion.div>
    </section>
  );
}

export default Hero;
