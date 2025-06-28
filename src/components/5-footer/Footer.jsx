import React from 'react'
import './footer.css'
function Footer() {
  return (
    <footer className="footer d-flex justify-content-between mb-3 align-items-center">
      <ul className="d-flex gap-4 mb-3 p-0 m-0">
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Articles</a>
        </li>
        <li>
          <a href="#">Projects</a>
        </li>
        <li>
          <a href="#">Speaking</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
      <p className='text-white-50'>© 2023 Spencer Sharp. All rights reserved.</p>
    </footer>
  );
}

export default Footer
