import * as React from 'react';
import { recipe } from '../../recipe';
import { recipe1 } from '../../recipe1';

const Cookbook = () => {
  const [recipes, setRecipes] = React.useState([recipe, recipe1]);

  const renderShoppingList = () => {
    return recipes.map((recipe) => {
      return recipe.extendedIngredients.map((ingredient) => {
        return <li key={ingredient.id}>{ingredient.name}</li>;
      });
    });
  };

  return (
    <div>
      <h1>Shopping List</h1>
      <ul>{renderShoppingList()}</ul>
    </div>
  );
};

export default Cookbook;
