import * as React from 'react';

const Sidebar = ({ selectedRecipes, selectRecipe }) => {
  const renderSelectedRecipes = () => {
    return selectedRecipes.map((recipe) => {
      return (
        <li
          className="is-italic is-clickable cookbook-recipe m-1"
          onClick={() => selectRecipe(recipe)}
          key={recipe.id}
        >
          {recipe.title}
        </li>
      );
    });
  };
  return (
    <>
      <h3 className="is-size-2">Cookbook</h3>
      <p className="has-text-weight-bold">Add recipes to your shopping list!</p>
      <ul className="mt-4">{renderSelectedRecipes()}</ul>
      <button className="button is-success">Get Shopping List</button>
    </>
  );
};

export default Sidebar;
