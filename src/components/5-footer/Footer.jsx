import React from 'react'
import './footer.css'

const navLinks = ["About", "Articles", "Projects", "Speaking", "Contact"];

function Footer() {
  return (
    <footer className="footer d-flex justify-content-between mb-3 align-items-center">
      <ul className="d-flex gap-4 mb-3 p-0 m-0">
        {navLinks.map((text, index) => (
        <li key={index}>
          <a href="#">{text}</a>
        </li>
        ))}
      </ul>
      <p className="text-white-50">
        © 2023 Spencer Sharp. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer
