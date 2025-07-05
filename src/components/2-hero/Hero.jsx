import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { VscVerifiedFilled } from "react-icons/vsc";
import { IoIosArrowRoundDown } from "react-icons/io";
// animation
import Lottie from "lottie-react";
import devAnimation from "../../animations/dev.json";
// framer-motion for animations
import { motion } from "framer-motion";

import "./hero.css";

const socialLinks = [
  { href: "https://x.com/OMAR80942659", icon: <FaXTwitter /> },
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
            className="w-100 rounded-pill"
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
            Self-Taught <span>Front-End Developer</span>, with a passion for
            growth and innovation
          </h1>
          <p className="my-4">
            I’m a self-taught front-end developer who learned everything from
            scratch at home through YouTube. I’ve already built several projects
            including an e-commerce site, a to-do list app, and multiple landing
            pages. I’m deeply passionate about learning and constantly improving
            myself — not just as a developer, but as a person. My dream is to
            work in global tech environments, where I can grow, contribute, and
            make an impact. Fast learner. Highly motivated. Always ready for the
            next challenge.
          </p>
          <div className="social-links my-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </motion.div>
      </div>

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
