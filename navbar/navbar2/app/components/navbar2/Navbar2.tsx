"use client";
import { useState } from "react";
import "./navbar2.css";

export default function Navbar2() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav>
      <div className="overlay"></div>
      <div onClick={() => setIsOpen(!isOpen)} className="hamburger">
        ☰
      </div>
      <div className={`menu ${isOpen ? "open" : ""}`}>
        <a href="/" className="link home-link" onClick={handleLinkClick}>
          Home
        </a>
        <a href="/about" className="link about-link" onClick={handleLinkClick}>
          About
        </a>
        <a
          href="/contact"
          className="link contact-link"
          onClick={handleLinkClick}
        >
          Contact
        </a>
      </div>
    </nav>
  );
}
