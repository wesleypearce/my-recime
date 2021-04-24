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
    <div>
      <h1>Navbar</h1>
    </div>
  );
};

export default Navbar;
