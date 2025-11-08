import React from 'react'
import './footer.css'
import { Link } from 'react-router';

const navLinks = [
  { name: "About", path: "/" },
  { name: "Projects", path: "/projects" },
  { name: "Skills", path: "/skills" },
  { name: "Contact", path: "/contact" },
];

function Footer() {
  return (
    <footer className="footer d-flex justify-content-between mb-3 align-items-center glass-card w-100 px-4">
      <ul className="d-flex gap-4 mb-0 p-0 m-0">
        {navLinks.map((obj) => (
        <li key={obj.name}>
          <Link to={obj.path}>{obj.name}</Link>
        </li>
        ))}
      </ul>
      <p className="text-white-50 mb-0 p-3">
        © 2023 Spencer Sharp. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer
