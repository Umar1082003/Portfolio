import React, { useState } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { useForm, ValidationError } from "@formspree/react";
import { FaCheck } from "react-icons/fa";
import { FaRegCopy } from "react-icons/fa6";
// animation
import Lottie from "lottie-react";
import doneAnimation from "../../animations/done.json";
import contactAnimation from "../../animations/contact.json";
// framer-motion for animations
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

import "./contact.css";
function Contact() {
  const location = useLocation();
  const FORM_ID = "mpwroere";
  const [state, handleSubmit] = useForm(FORM_ID);
  const [copiedItem, setCopiedItem] = useState("");

  if (state.succeeded) {
    return (
      <div className="alert alert-success mt-3 d-flex align-items-center gap-2">
        <Lottie loop style={{ height: "33px" }} animationData={doneAnimation} />
        Thank you for your message.
      </div>
    );
  }

  const handleCopy = async (value, type) => {
    await navigator.clipboard.writeText(value);
    setCopiedItem(type);

    setTimeout(() => {
      setCopiedItem("");
    }, 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.2 }}
      className="contact"
    >
      <h1 className="fw-bold text-white">
        <MdOutlineEmail className="text-white-50 mb-2 me-3" />
        Contact Me
      </h1>
      <p className="text-white-50">
        If you have any questions or feedback, feel free to reach out to me!
      </p>

      <div className="contact-info d-flex justify-content-between align-items-center">
        <form className="d-flex flex-column" onSubmit={handleSubmit}>
          <label className="text-white-50 py-2" htmlFor="email">
            Email Address:
          </label>
          <input
            className="border-0 p-2 rounded text-white"
            type="email"
            name="email"
            id="email"
            placeholder="Email Address"
            aria-label="Email Address"
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <label className="text-white-50 py-2" htmlFor="message">
            Your Message:
          </label>
          <textarea
            className="border-0 p-2 rounded text-white"
            name="message"
            id="message"
            placeholder="Write your message (question, feedback, etc)..."
            aria-label="Your Message"
            required
          ></textarea>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button
            className="btn my-3 glass-card rounded-pill"
            type="submit"
            disabled={state.submitting}
            value="Submit"
          >
            {state.submitting ? "Sending..." : "Submit"}
          </button>
        </form>
        <div className="animation">
          <Lottie
            style={{ height: "320px" }}
            animationData={contactAnimation}
          />
        </div>
      </div>
      {location.pathname === "/contact" && (
        <>
          <p className="text-secondary">
            👇 you can see here my email and phone number:
          </p>
          <div className="d-flex flex-wrap gap-3">
            <span className="glass-card p-2 mb-3 rounded text-white-50">
              Gmail:{" "}
              <span className="text-white">omarabdelwahabsaid@gmail.com</span>
              <button
                onClick={() =>
                  handleCopy("omarabdelwahabsaid@gmail.com", "email")
                }
              >
                {copiedItem === "email" ? (
                  <FaCheck size={18} color="green" className="ms-2" />
                ) : (
                  <FaRegCopy size={18} className="ms-2" />
                )}
              </button>
            </span>
            <span className="glass-card p-2 mb-3 rounded text-white-50">
              Phone: <span className="text-white">01009175260</span>
              <button onClick={() => handleCopy("01009175260", "phone")}>
                {copiedItem === "phone" ? (
                  <FaCheck size={18} color="green" className="ms-2" />
                ) : (
                  <FaRegCopy size={18} className="ms-2" />
                )}
              </button>
            </span>
            <span className="glass-card p-2 mb-3 rounded text-white-50">
              Location: <span className="text-white">Giza, Egypt</span>
            </span>
          </div>
        </>
      )}
    </motion.div>
  );
}

export default Contact;
