import React from 'react';
import {Link} from 'react-router-dom'


export const Navbar= ()=>{
    return (
      <section className="navbar-section">
        <Link to="/" className="nav-link ">
          <h1 className="title">Cat-lender</h1>
        </Link>
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
            <Link to="/calender" className="nav-link nav-item">
              Records
            </Link>
          </div>
        </nav>
      </section>
    );
}