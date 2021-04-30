import * as React from 'react';
import SearchRecipes from '../components/SearchRecipes';
import RecipeList from '../components/RecipeList';
import Recipe from '../components/Recipe';

const Dashboard = ({ user }) => {
  const [recipes, setRecipes] = React.useState([]);
  const [selectedRecipeID, setSelectedRecipeID] = React.useState(null);

  React.useEffect(() => console.log(user), []);

  return (
    <div className="dashboard">
      <SearchRecipes setRecipes={setRecipes} />
      <RecipeList recipes={recipes} setSelectedRecipeID={setSelectedRecipeID} />
      {/* {selectedRecipeID != null && (
        <Recipe selectedRecipeID={selectedRecipeID} />
      )} */}
      <Recipe selectedRecipeID={selectedRecipeID} />
    </div>
  );
};

export default Dashboard;
