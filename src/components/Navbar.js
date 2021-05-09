import * as React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar mt-2" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a href="/" className="navbar-item">
          Recime
        </a>
      </div>
      <div className="navbar-menu">
        <div className="navbar-start">
          <Link to="/" className="navbar-item">
            Home
          </Link>
          <Link to="/dashboard" className="navbar-item">
            Dashboard
          </Link>
        </div>

        <div className="navbar-end">
          <Link to="/signup" className="navbar-item button">
            Sign Up!
          </Link>
          <Link to="/login" className="navbar-item button">
            Log In
          </Link>
          <Link to="/cookbook" className="navbar-item button">
            Cookbook
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
