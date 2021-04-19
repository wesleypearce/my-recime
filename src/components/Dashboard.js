import * as React from 'react';
import SearchRecipes from '../components/SearchRecipes';
import RecipeList from '../components/RecipeList';

const Dashboard = () => {
  const [recipes, setRecipes] = React.useState([]);

  return (
    <>
      <SearchRecipes setRecipes={setRecipes} />
      <RecipeList recipes={recipes} />
    </>
  );
};

export default Dashboard;
