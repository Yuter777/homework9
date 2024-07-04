import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="head">
        {" "}
        <a href="#" className="logo">
          Home
        </a>
        <nav className="nav">
          <a href="#">Business</a>
          <a href="#">Entertainment</a>
          <a href="#">General</a>
          <a href="#">Health</a>
          <a href="#">Science</a>
          <a href="#">Sports</a>
          <a href="#">Technology</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
