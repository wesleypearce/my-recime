import * as React from 'react';
import SearchRecipes from '../components/SearchRecipes';
import RecipeList from '../components/RecipeList';
import Recipe from '../components/Recipe';
import { testRecipes } from '../../recipes';

const Dashboard = ({ user }) => {
  const [recipes, setRecipes] = React.useState(testRecipes);
  const [selectedRecipeID, setSelectedRecipeID] = React.useState(null);

  React.useEffect(() => console.log(testRecipes), []);

  return (
    <div className="columns">
      <SearchRecipes setRecipes={setRecipes} />
      {/* <RecipeList recipes={recipes} setSelectedRecipeID={setSelectedRecipeID} /> */}
      {/* {selectedRecipeID != null && (
        <Recipe selectedRecipeID={selectedRecipeID} />
      )} */}
    </div>
  );
};

export default Dashboard;
