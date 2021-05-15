import * as React from 'react';

const Sidebar = ({ selectedRecipes }) => {
  const renderSelectedRecipes = () => {
    return selectedRecipes.map((recipe) => {
      return <li key={recipe.id}>{recipe.title}</li>;
    });
  };
  return (
    <>
      <h3 className="is-size-1">Sidebar</h3>
      <ul>{renderSelectedRecipes()}</ul>
    </>
  );
};

export default Sidebar;
