import * as React from 'react';
import { useHistory } from 'react-router';
import { auth } from '../../firebase';

const Navbar = ({ user, setUser }) => {
  const history = useHistory();

  const handleClick = (id) => {
    if (id == 'logout') {
      auth.signOut().catch((error) => console.log(error));
    } else {
      history.push(`/${id}`);
    }
  };

  return (
    <>
      <div className="brand">Recime</div>
      <div className="navbar">
        <ul>
          <li className="nav-link">Sign Up</li>
          <li className="nav-link">Login</li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
