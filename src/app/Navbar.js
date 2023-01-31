import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  let count = 0;
  const toggleMenu = () => {
    if (count % 2 === 0) {
      document.querySelector("nav").style = "display:block";
      count++;
    } else {
      document.querySelector("nav").style = "display:none";
      count--;
    }
  };

  return (
    <section className="navbar-section">
      <div className="title">
        <Link to="/" className="nav-link main">
          <h1 className="h1Title">
            Cat-lender
            <i className="fa-solid fa-paw"></i>
          </h1>
          <p> A caring housekeeper for Your furry fiends' health </p>
        </Link>
        <div className="menu" onClick={toggleMenu}>
          Menu
        </div>
        <a
          href="https://github.com/WenyiSun520/cat-lender2.0"
          className="about"
          rel="noreferrer"
          target="_blank"
        >
          About This Project
          <i className="fa-solid fa-person-running"></i>
        </a>
      </div>
      <nav className="nav nav-pills nav-fill">
        <div className="nav-item">
          <img
            className="nav-cat"
            src="./img/orgCat-1.jpeg"
            alt="a cartoon orange cat"
          ></img>

          <Link to="/" className="nav-link">
            Pets Profiles
          </Link>
        </div>
        <div className="nav-item">
          <img
            className="nav-cat"
            src="./img/orgCat-2.jpeg"
            alt="a cartoon orange cat"
          ></img>
          <Link to="/calender" className="nav-link nav-item">
            Pets Calender
          </Link>
        </div>
        <div className="nav-item">
          <Link to="/records" className="nav-link nav-item">
            Records(pending)
          </Link>
        </div>
      </nav>
    </section>
  );
};
