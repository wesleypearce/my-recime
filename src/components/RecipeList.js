import * as React from 'react';

const RecipeList = ({ recipes, setSelectedRecipeID }) => {
  const viewRecipe = (recipe) => {
    setSelectedRecipeID(recipe.id);
  };
  const renderRecipes = () => {
    if (recipes != []) {
      return recipes.map((recipe) => {
        return (
          <div
            className="recipe-card"
            onClick={() => viewRecipe(recipe)}
            key={recipe.id}
          >
            {recipe.title}
          </div>
        );
      });
    }
  };
  return (
    <div className="column">
      <ul>{renderRecipes()}</ul>
    </div>
  );
};

export default RecipeList;
