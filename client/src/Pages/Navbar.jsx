import React from 'react';
import '../index.css'

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark custom-purple flex-column">
        <h1 className='text-white font-weight-bold'>Social Media Dashboard</h1>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link font-weight-bold" href="/">
                Home <span className="sr-only"></span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link font-weight-bold" href="/facebook">
                Facebook
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link font-weight-bold" href="/linkedin">
                LinkedIn
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link font-weight-bold" href="/instagram">
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
