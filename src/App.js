import * as React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Profile from './components/Profile';
import SearchRecipes from './components/SearchRecipes';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { auth } from '../firebase';

const App = () => {
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  });

  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/dashboard">
            <Dashboard user={user} />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signin">
            <Signup />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
