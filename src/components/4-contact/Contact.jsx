import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { useForm, ValidationError } from "@formspree/react";
import "./contact.css";
// animation
import Lottie from "lottie-react";
import doneAnimation from "../../animations/done.json";
import contactAnimation from "../../animations/contact.json";
// Contact component
// This component allows users to send messages via a contact form.
// It uses Formspree for form handling and includes animations for better user experience.
function Contact() {
  const [state, handleSubmit] = useForm("mpwroere");

  return (
    <div className="contact">
      <h1 className="fw-bold">
        <MdOutlineEmail className="text-white-50 mb-2 me-3" />
        Contact Us
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
            className="bg-dark border-0 p-2 rounded text-white"
            type="email"
            name="email"
            id="email"
            placeholder="Email Address"
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <label className="text-white-50 py-2" htmlFor="message">
            Your Message:
          </label>
          <textarea
            className="bg-dark border-0 p-2 rounded text-white"
            name="message"
            id="message"
            placeholder="Type your message here..."
            required
          ></textarea>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button
            className="btn btn-outline-dark text-light border-secondary my-3"
            type="submit"
            disabled={state.submitting}
            value="Submit"
          >
            Submit
          </button>
        </form>
        <div className="animation">
          <Lottie
            style={{ height: "350px" }}
            animationData={contactAnimation}
          />
        </div>
      </div>
      {state.succeeded && (
        <div className="alert alert-success mt-3 d-flex align-items-center gap-2">
          <Lottie
            loop={false}
            style={{ height: "33px" }}
            animationData={doneAnimation}
          />
          Thank you for your message.
        </div>
      )}
    </div>
  );
}

export default Contact;
