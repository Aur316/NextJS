"use client";
import { useState } from "react";
import Link from "next/link";
import "../../globals.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav>
      <div onClick={() => setIsOpen(!isOpen)} className="hamburger">
        ☰
      </div>
      <div className={`menu ${isOpen ? "open" : ""}`}>
        <Link href="/" className="home-link" onClick={handleLinkClick}>
          Home
        </Link>
        <Link href="/about" className="about-link" onClick={handleLinkClick}>
          About
        </Link>
        <Link
          href="/contact"
          className="contact-link"
          onClick={handleLinkClick}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
