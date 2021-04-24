import * as React from 'react';
import SearchRecipes from '../components/SearchRecipes';
import RecipeList from '../components/RecipeList';
import Recipe from '../components/Recipe';

const Dashboard = () => {
  const [recipes, setRecipes] = React.useState([]);
  const [selectedRecipeID, setSelectedRecipeID] = React.useState(null);

  return (
    <>
      <SearchRecipes setRecipes={setRecipes} />
      <RecipeList recipes={recipes} setSelectedRecipeID={setSelectedRecipeID} />
      <Recipe selectedRecipeID={selectedRecipeID} />
    </>
  );
};

export default Dashboard;
