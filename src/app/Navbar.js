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
          <h1 className="title">Cat-lender</h1>
        </Link>
        <div className="menu" onClick={toggleMenu}>
          Menu
        </div>
      </div>
      <nav className="nav nav-pills nav-fill">
        <div className="nav-item">
          <Link to="/" className="nav-link">
            Pets Profiles
          </Link>
        </div>
        <div className="nav-item">
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
