import * as React from 'react';
import { auth } from '../../firebase';

const Signup = ({ setUser }) => {
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();

  const handleChange = (e) => {
    if (e.target.name == 'password') setPassword(e.target.value);
    if (e.target.name == 'email') setEmail(e.target.value);
  };

  const submit = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((cred) => setUser(cred.user))
      .catch((error) => console.log(error));
  };

  return (
    <>
      <h1 className="is-size-2">Sign Up!</h1>
      <div className="field">
        <label htmlFor="email" className="label">
          Email
        </label>
        <div className="control">
          <input
            onChange={(e) => handleChange(e)}
            type="text"
            name="email"
            className="input"
          />
        </div>
      </div>
      <div className="field">
        <label htmlFor="password" className="label">
          Password
        </label>
        <div className="control">
          <input
            onChange={(e) => handleChange(e)}
            type="password"
            name="password"
            className="input"
          />
        </div>
      </div>
      <div className="field">
        <div className="control">
          <button onClick={submit} className="button is-link">
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default Signup;
