import * as React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Cookbook from './components/Cookbook';
import { auth } from '../firebase';

// should be removed
import Recipe from './components/Recipe';

const App = () => {
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  }, []);

  return (
    <Router>
      <div className="container">
        <Navbar />
        <Switch>
          <Route path="/dashboard">
            <Dashboard user={user} />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          // should be removed
          <Route path="/recipe">
            <Recipe />
          </Route>
          <Route path="/cookbook">
            <Cookbook />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
