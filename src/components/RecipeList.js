import * as React from 'react';

const RecipeList = ({ recipes }) => {
  const renderRecipes = () => {
    if (recipes != []) {
      return recipes.map((recipe) => {
        return <li key={recipe.id}>{recipe.title}</li>;
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
