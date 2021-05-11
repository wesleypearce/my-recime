import * as React from 'react';
import { recipe } from '../../recipe';
import { recipe1 } from '../../recipe1';

const Cookbook = () => {
  const [recipes, setRecipes] = React.useState([recipe, recipe1]);

  const renderShoppingList = () => {
    return recipes.map((recipe) => {
      let ingredients = {};
      return recipe.extendedIngredients.map((ingredient) => {
        let { name, measures } = ingredient;

        // if this ingredient has not been added to combined ingredients add it to combined ingredients
        // else check the measurements to see if they match
        // if they do, add the amounts and return
        // if they do not, make a string that explains what measurements are needed

        if (!ingredients[name]) {
          ingredients[name] = measures;
          ingredients[
            name
          ].ingredientString = `${ingredient.amount} ${ingredient.measures.us.unitLong} ${ingredient.name}`;
        } else if (
          ingredients[name].measures.us.unitShort ===
          ingredient.measures.us.unitShort
        ) {
          ingredients[name].measures.us.amount =
            ingredient.measures.us.amount +
            ingredients[name].measures.us.amount;
        } else {
          ingredients[
            name
          ].ingredientString = `${ingredients[name].measures.us.amount} ${ingredients[name].measures.us.unitLong} and ${ingredients[name].measures.us.amount} ${ingredient.measures.us.unitLong}`;
        }

        return (
          <li key={ingredient.id}>{ingredients[name].ingredientString}</li>
        );
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
