import * as React from 'react';
import { useHistory } from 'react-router-dom';

const Sidebar = ({ selectedRecipes, selectRecipe }) => {
  const history = useHistory();

  const renderShoppingList = () => {
    history.push('/shoppinglist', { beer: 'ale bruh' });
  };

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
    <div className="m-2">
      <h3 className="is-size-2">Cookbook</h3>
      <p className="has-text-weight-bold">Add recipes to your shopping list!</p>
      <ul className="mt-4">{renderSelectedRecipes()}</ul>
      <button className="button is-success" onClick={renderShoppingList}>
        Get Shopping List
      </button>
    </div>
  );
};

export default Sidebar;
