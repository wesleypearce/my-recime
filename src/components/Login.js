import * as React from 'react';
import { auth } from '../../firebase';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();
  const history = useHistory();

  const handleChange = (e) => {
    if (e.target.name == 'password') setPassword(e.target.value);
    if (e.target.name == 'email') setEmail(e.target.value);
  };

  const submit = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        history.push('/dashboard');
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <h1 className="is-size-2">Login</h1>
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

  // return (
  //   <div className="form-container">
  //     <h1>Login!</h1>
  //     <form onSubmit={() => console.log('submitted')}>
  //       <div>
  //         <label htmlFor="email">Email</label>
  //         <input type="text" name="email" onChange={(e) => handleChange(e)} />
  //       </div>
  //       <div>
  //         <label htmlFor="password">Password</label>
  //         <input
  //           type="password"
  //           name="password"
  //           onChange={(e) => handleChange(e)}
  //         />
  //       </div>
  //       <button type="submit" onClick={(e) => handleClick(e)}>
  //         Login!
  //       </button>
  //     </form>
  //   </div>
  // );
};

export default Login;
