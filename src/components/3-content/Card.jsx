import React from "react";
import { FaArrowRight, FaLink, FaGithub } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
function Card({ projects }) {
  return (
    <AnimatePresence>
      {projects.map((item) => (
        <motion.div
          layout
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
          key={item.id}
          className="card mb-3 me-3"
          style={{ width: "15rem" }}
        >
          <img
            src={item.img}
            className="card-img-top rounded"
            alt="..."
            style={{ height: "140px" }}
          />
          <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <p className="card-text text-white-50">
              Some quick example text to build on the card title and make up the
              bulk of the card’s content.
            </p>
            <div className="links d-flex justify-content-between">
              <div>
                <a href="#" className="text-white-50">
                  <FaLink className="ms-2" />
                </a>
                <a href="#" className="text-white-50">
                  <FaGithub className="ms-2" />
                </a>
              </div>
              <a href="#" className="text-primary">
                more
                <FaArrowRight className="ms-2" />
              </a>
            </div>
          </div>
        </motion.div>
      ))}
    </AnimatePresence>
  );
}

export default Card;
