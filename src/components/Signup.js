import * as React from 'react';
import { auth, createUserProfileDocument } from '../../firebase';
import { useHistory } from 'react-router-dom';

const Signup = ({ setUser }) => {
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();
  const history = useHistory();

  console.log(setUser);

  const handleChange = (e) => {
    if (e.target.name == 'password') setPassword(e.target.value);
    if (e.target.name == 'email') setEmail(e.target.value);
  };

  const submit = async () => {
    try {
      const user = await auth.createUserWithEmailAndPassword(email, password);

      setUser(user);
      createUserProfileDocument(user);
    } catch (error) {
      console.error(error);
    }
    // auth
    //   .createUserWithEmailAndPassword(email, password)
    //   .then((cred) => {
    //     setUser(cred.user);
    //     history.pushState('/dashboard');
    //   })
    //   .catch((error) => console.log(error));
  };

  return (
    <div className="my-form">
      <h1 className="is-size-2 mt-4">Sign Up!</h1>
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
          <button onClick={submit} className="button is-primary">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
