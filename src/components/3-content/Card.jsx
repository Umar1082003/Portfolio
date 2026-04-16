import { FaLink, FaGithub } from "react-icons/fa";
import { SiMui } from "react-icons/si";
// framer-motion for animations
import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router";

  function Card({ filteredProjects, projects }) {
    const location = useLocation()
    const filtered =
        location.pathname === '/' ? filteredProjects.slice(0, 2)
        : projects;
    return (
      <AnimatePresence>
        {filtered.map((item) => (
          <motion.div
            layout
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.7 }}
            key={item.id}
            className="card mb-3 glass-card"
          >
            <img
              src={item.img}
              className="card-img-top rounded"
              alt={item.title}
              lazy="loading"
            />
            <div className="card-body">
              <h5 className="card-title">
                {item.title === "Admin Dashboard" ? (
                  <>
                    Admin Dashboard{" "}
                    <SiMui size={25} className="ms-2 text-primary" />
                  </>
                ) : (
                  item.title
                )}
              </h5>
              <p className="card-text text-white-50">{item.description}</p>
              <div className="links d-flex justify-content-between">
                <a
                  href={item.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white-50"
                >
                  Demo
                  <FaLink className="ms-2" />
                </a>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white-50"
                >
                  Code
                  <FaGithub className="ms-2" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    );
  }

export default Card;
