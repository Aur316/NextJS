"use client";
import "./navbar.css";

export default function Navbar() {
  return (
    <div>
      <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <div className="animation start-homes"></div>
      </nav>
    </div>
  );
}
