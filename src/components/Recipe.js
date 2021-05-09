import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { recipe } from '../../recipe';
import axios from 'axios';
import { apiKey } from '../../config';

const Recipe = () => {
  const history = useHistory();
  const ingredients = recipe.extendedIngredients;

  // const recipe = history.location.state.recipe;
  // const ingredients = recipe.extendedIngredients

  const navigateBack = () => {
    history.push('/dashboard');
  };

  const renderIngredients = () => {
    return ingredients.map((ingredient) => {
      return (
        <li className="is-capitalized" key={ingredient.id}>
          {ingredient.original}
        </li>
      );
    });
  };

  const addToCookbook = () => {
    //TODO: Need to implement this with auth routes and adding to real db

    console.log(recipe.id);
  };

  React.useEffect(() => {
    // get recipe details
    console.log(recipe);
  });

  return (
    <div className="column is-three-quarters is-flex is-justify-content-center">
      <div className="recipe is-flex is-flex-direction-column is-flex-wrap-nowrap">
        <h1 className="is-size-1">{recipe.title}</h1>
        <figure className="image is-4by3 m-5">
          <img src={recipe.image} alt={recipe.title} />
        </figure>
        <h3 className="is-size-3 is-align-self-center">Instructions</h3>
        <p className="summarySection m-5">{recipe.instructions}</p>
        <h3 className="is-size-3 is-align-self-center">Ingredients</h3>

        <ul className="m-5">{renderIngredients()}</ul>
        <a href={recipe.sourceUrl}>Link to Recipe</a>
        <button onClick={addToCookbook} className="button">
          Add to Cookbook
        </button>
        <button onClick={navigateBack} className="button">
          Go Back
        </button>
      </div>
    </div>
  );
  // }
};

export default Recipe;
