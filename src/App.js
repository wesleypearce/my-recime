import * as React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Signup from './components/Signup';
import Profile from './components/Profile';
import SearchRecipes from './components/SearchRecipes';
import Dashboard from './components/Dashboard';
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
        <Navbar user={user} setUser={setUser} />
        <Switch>
          <Route path="/login">
            <Login setUser={setUser} />
          </Route>
          <Route path="/signup">
            <Signup setUser={setUser} />
          </Route>
          <Route path="/profile">
            <Profile user={user} />
          </Route>
          <Route path="/search">
            <SearchRecipes />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
