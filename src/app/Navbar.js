import React from 'react';
import {Link} from 'react-router-dom'


export const Navbar= ()=>{
    return (
      <nav>
        <section>
          <h1>Cat-lender</h1>
          <div className="navContent">
            <div className="navLink">
              <Link to="/">Pets Profiles</Link>
              <Link to="/calender">Pets Calender</Link>
            </div>
          </div>
        </section>
      </nav>
    );
}