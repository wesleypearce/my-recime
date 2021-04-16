import * as React from 'react';

const RecipeList = (recipes) => {
  return (
    <>
      <ul>
        {recipes.map((recipe) => {
          return <div>{recipe.name}</div>;
        })}
      </ul>
    </>
  );
};

export default RecipeList;
