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
        <div className="wrapper">
          <Navbar user={user} setUser={setUser} />

          <div className="sidebar">
            <p>
              <h1>Test Font</h1>
              My money's in that office, right? If she start giving me some
              bullshit about it ain't there, and we got to go someplace else and
              get it, I'm gonna shoot you in the head then and there. Then I'm
              gonna shoot that bitch in the kneecaps, find out where my goddamn
              money is. She gonna tell me too. Hey, look at me when I'm talking
              to you, motherfucker. You listen: we go in there, and that nigga
              Winston or anybody else is in there, you the first motherfucker to
              get shot. You understand?
            </p>
          </div>
          <div className="hero">
            <p>
              Now that we know who you are, I know who I am. I'm not a mistake!
              It all makes sense! In a comic, you know how you can tell who the
              arch-villain's going to be? He's the exact opposite of the hero.
              And most times they're friends, like you and me! I should've known
              way back when... You know why, David? Because of the kids. They
              called me Mr Glass.
            </p>
          </div>
        </div>
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
