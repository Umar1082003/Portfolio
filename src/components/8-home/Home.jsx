import { Link } from "react-router-dom";
import { GrFormNextLink } from "react-icons/gr";

import "./home.css"; 

const links = [
  { name: "My Projects", path: "/projects" },
  { name: "My Skills", path: "/skills" },
  { name: "Contact Me", path: "/contact" },
];

function Home() {
  return (
    <div>
      {links.map((sk, index) => {
        return (
          <>
            <Link
              to={sk.path}
              key={index}
              className="linkPages glass-card p-3 d-flex align-items-center gap-3 text-decoration-underline"
            >
              <h1>{sk.name}</h1>
              <GrFormNextLink fontSize={"37px"} />
            </Link>
            <div className="tline"></div>
          </>
        );
      })}
    </div>
  );
}

export default Home;
