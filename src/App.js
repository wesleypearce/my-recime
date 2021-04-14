import * as React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Signup from './components/Signup';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
        </Switch>
      </BrowserRouter>
      <h1>Hello!</h1>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
