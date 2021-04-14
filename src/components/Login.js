import * as React from 'react';
import { auth } from '../../firebase';

const Login = () => {
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();

  const handleChange = (e) => {
    if (e.target.name == 'password') setPassword(e.target.value);
    if (e.target.name == 'email') setEmail(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((cred) => console.log(cred))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h1>Login!</h1>
      <form>
        <div>
          <label htmlFor="email">
            <input type="text" name="email" onChange={(e) => handleChange(e)} />
          </label>
        </div>
        <div>
          <label htmlFor="password">
            <input
              type="password"
              name="password"
              onChange={(e) => handleChange(e)}
            />
          </label>
        </div>
        <button type="button" onClick={(e) => handleClick(e)}>
          Login!
        </button>
      </form>
    </div>
  );
};

export default Login;
