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
    <div className="form-container">
      <h1>Login!</h1>
      <form onSubmit={() => console.log('submitted')}>
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
          Login!
        </button>
      </form>
    </div>
  );
};

export default Login;
