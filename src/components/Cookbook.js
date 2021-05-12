import * as React from 'react';
import { recipe } from '../../recipe';
import { recipe1 } from '../../recipe1';

const Cookbook = () => {
  const [recipes, setRecipes] = React.useState([recipe, recipe1]);
  let sortedIngredients = [];

  const sortIngredientsByAisle = (ingredients) => {
    const newIngredients = Object.values(ingredients).sort((a, b) =>
      a.aisle > b.aisle ? 1 : b.aisle > a.aisle ? -1 : 0,
    );
    return newIngredients;
  };

  const renderAisleList = (sortedIngredients) => {
    return sortedIngredients.map((ingredient) => {
      return <div key={ingredient.id}>{ingredient.aisle}</div>;
    });
  };

  // renderIngredientList MUST be called BEFORE renderAisleList

  const renderIngredientList = () => {
    let ingredients = {};

    recipes.map((recipe) => {
      return recipe.extendedIngredients.map((ingredient) => {
        let { name, aisle, amount, unit, id } = ingredient;

        if (ingredient.id === 11215) console.log(ingredient);

        // if this ingredient has not been added to combined ingredients add it to combined ingredients
        // else check the measurements to see if they match
        // if they do, add the amounts
        // if they do not, make a string that explains what measurements are needed

        if (!ingredients[name]) {
          ingredients[name] = { aisle, id };
          ingredients[name].ingredientString = `${amount} ${unit} ${name}`;
        } else if (ingredients[name].unit === unit) {
          ingredients[name].amount = amount + ingredients[name].amount;
        } else {
          ingredients[
            name
          ].ingredientString = `${ingredients[name].amount} ${ingredients[name].unit} and ${ingredients[name].amount} ${ingredient.unit}`;
        }
        sortedIngredients = sortIngredientsByAisle(ingredients);
      });
    });
    return sortedIngredients.map((ingredient) => (
      <div key={ingredient.id}>{ingredient.ingredientString}</div>
    ));
  };

  return (
    <div>
      <h1>Shopping List</h1>
      <div className="columns cookbook">
        <div className="column">{renderIngredientList()}</div>
        <div className="column aisle has-text-left">
          {renderAisleList(sortedIngredients)}
        </div>
      </div>
    </div>
  );
};

export default Cookbook;
