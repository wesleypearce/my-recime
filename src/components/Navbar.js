import * as React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav
      className="navbar mt-2 p-3 is-primary"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a href="/" className="navbar-item">
          Recime
        </a>
        <Link to="/signup" className="navbar-item">
          Sign Up!
        </Link>
        <Link to="/login" className="navbar-item">
          Log In
        </Link>
      </div>
      <div className="navbar-menu">
        <div className="navbar-end">
          <Link to="/cookbook" className="navbar-item">
            Cookbook
          </Link>
          <Link to="/dashboard" className="navbar-item">
            Dashboard
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
