import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SearchRecipes from '../components/SearchRecipes';
import RecipeList from '../components/RecipeList';
import Recipe from '../components/Recipe';

const Dashboard = ({ user }) => {
  const [recipes, setRecipes] = React.useState([]);
  const [selectedRecipeID, setSelectedRecipeID] = React.useState(null);

  return (
    <div className="columns mt-4">
      <SearchRecipes setRecipes={setRecipes} />
      <Router>
        <Switch>
          <Route path="/dashboard">
            <RecipeList
              recipes={recipes}
              setSelectedRecipeID={setSelectedRecipeID}
            />
          </Route>
          <Route path="/recipe">
            <Recipe />
          </Route>
        </Switch>
      </Router>
      {/* {selectedRecipeID != null && (
        <Recipe selectedRecipeID={selectedRecipeID} />
      )} */}
    </div>
  );
};

export default Dashboard;
