import { TbPointFilled } from "react-icons/tb";
import "./aboutMe.css";

function AboutMe() {
  return (
    <>
      <h1 style={{ lineHeight: "1.5" }}>👋Hi, I`m Omar Abdelwahab</h1>
      <div className="aboutMe d-flex align-items-center gap-4">
        <div className="col-lg-6">
          <ul
            className="p-0 text-dark-50 my-3"
            style={{ fontWeight: "400", lineHeight: "2" }}
          >
            <li>
              <TbPointFilled className="mb-1" size={25} />I recently graduated
              from the Abbasia Institute with a degree in Managment Information
              Systems with grade a very good.
            </li>
            <li>
              <TbPointFilled className="mb-1" size={25} />I specialize in
              building responsive and modern web application using HTML, CSS,
              JavaScript, and React I`m passionate about writing clean
              maintainable code and creating smooth user experiences that bring
              to life
            </li>
            <li>
              <TbPointFilled className="mb-1" size={25} />
              I`m looking for internship or junior developer.
            </li>
          </ul>
          <div className="d-flex flex-column">
            {/* <p className="text-secondary">👇you can see here my email and phone number:</p> */}
            <span className="glass-card p-2 mb-3 rounded">
              Gmail: omarabdelwahabsaid@gmail.com
            </span>
            <span className="glass-card p-2 mb-3 rounded">
              Phone: 01009175260
            </span>
            <span className="glass-card p-2 mb-3 rounded">
              Location: Giza, Egypt
            </span>
          </div>
        </div>
        <div className="img glass-card p-2">
          <img
            src="/Portfolio/assets/omar1.jpg"
            className=""
            style={{ width: "100%", borderRadius: "15px" }}
            alt="###"
          />
        </div>
      </div>
    </>
  );
}

export default AboutMe;
