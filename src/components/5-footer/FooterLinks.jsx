import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin, FaXTwitter } from 'react-icons/fa6';
import './footer.css'


function FooterLinks() {
  
  const socialLinks = [
    { href: "https://x.com/OMAR80942659", icon: <FaXTwitter /> },
    {
      href: "https://www.instagram.com/umarabdelwahabsayed/",
      icon: <FaInstagram />,
    },
    { href: "https://github.com/Umar1082003", icon: <FaGithub /> },
    {
      href: "https://www.linkedin.com/in/omar-abdelwahab-2a818236a/",
      icon: <FaLinkedin />,
    },
  ];
  return (
    <div className="social-links-footer my-4 p-3 rounded-3 d-flex justify-content-center gap-4 glass-card">
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="fs-5"
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
}

export default FooterLinks
