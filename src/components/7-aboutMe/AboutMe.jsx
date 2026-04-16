import { TbPointFilled } from "react-icons/tb";

import "./aboutMe.css";
function AboutMe() {
  const text = `Hi, I'm Omar, Front-End Developer with hands-on experience building
            scalable and user-focused web applications using modern
            technologies. I work with JavaScript, React, Next.js, TypeScript, Tailwind CSS, and modern
            web tools. I specialize in creating clean, maintainable code and
            responsive interfaces that deliver smooth user experiences.
            Passionate about continuous growth, problem-solving, and
            contributing to impactful projects in global tech environments. A
            fast learner, Detail-oriented, and always ready for new challenges.`;

  return (
    <>
      <div className="aboutMe d-flex align-items-center gap-4">
        <div className="col-lg-6">
          <p className="my-4 fs-6 fw-bold text-white">
              <span className="d-block mb-2">
                {text}
              </span>
          </p>
        </div>
        <div className="img glass-card p-3">
          <img
            src="/Portfolio/assets/omar1.jpg"
            style={{ width: "100%", borderRadius: "15px" }}
            alt="###"
          />
        </div>
      </div>
    </>
  );
}

export default AboutMe;
