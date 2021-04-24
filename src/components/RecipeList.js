import * as React from 'react';

const RecipeList = ({ recipes, setSelectedRecipeID }) => {
  const viewRecipe = (recipe) => {
    setSelectedRecipeID(recipe.id);
  };
  const renderRecipes = () => {
    if (recipes != []) {
      return recipes.map((recipe) => {
        return (
          <li onClick={() => viewRecipe(recipe)} key={recipe.id}>
            {recipe.title}
          </li>
        );
      });
    }
  };
  return (
    <>
      <ul>{renderRecipes()}</ul>
    </>
  );
};

export default RecipeList;
