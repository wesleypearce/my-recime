import * as React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="brand">Recime</div>
        <ul>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
