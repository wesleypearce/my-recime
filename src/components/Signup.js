import * as React from 'react';
import { auth } from '../../firebase';

const Signup = ({ setUser }) => {
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();

  const handleChange = (e) => {
    if (e.target.name == 'password') setPassword(e.target.value);
    if (e.target.name == 'email') setEmail(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((cred) => setUser(cred.user))
      .catch((error) => console.log(error));
  };

  return (
    <div className="form-container">
      <h1>Sign Up!</h1>
      <form>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="text" name="email" onChange={(e) => handleChange(e)} />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <button type="submit" onClick={(e) => handleClick(e)}>
          Sign Up!
        </button>
      </form>
    </div>
  );
};

export default Signup;
