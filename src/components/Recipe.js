import * as React from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { apiKey } from '../../config';
import { auth, addRecipeToUserCookbook } from '../../firebase';

//TODO: Dashboard does not work from this component?

const Recipe = (user) => {
  const history = useHistory();
  const initialState = {
    extendedIngredients: [],
    analyzedInstructions: [
      {
        steps: [],
      },
    ],
    ...history.location.state.recipe,
  };
  const [recipe, setRecipe] = React.useState(initialState);

  React.useEffect(() => {
    axios
      .get(
        `https://api.spoonacular.com/recipes/${recipe.id}/information?apiKey=${apiKey}`,
      )
      .then(({ data }) => setRecipe(data))
      .catch((error) => console.log(error));
  }, []);

  const navigateBack = () => {
    history.push('/dashboard');
  };

  const renderIngredients = () => {
    let ingredients = recipe.extendedIngredients;
    return ingredients.map((ingredient) => {
      return (
        <li className="is-capitalized is-family-secondary" key={ingredient.id}>
          {ingredient.original}
        </li>
      );
    });
  };

  const renderInstructions = () => {
    let instructions = recipe.analyzedInstructions[0].steps;
    return instructions.map((instruction) => {
      return (
        <li className="mt-2" key={instruction}>
          {instruction.step}
        </li>
      );
    });
  };

  const addToCookbook = () => {
    //TODO: Need to implement this with auth routes and adding to real db

    addRecipeToUserCookbook(auth.currentUser.uid, recipe);
  };

  return (
    <div className="column is-three-quarters is-flex is-justify-content-center">
      <div className="recipe is-flex is-flex-direction-column is-flex-wrap-nowrap">
        <h1 className="is-size-1">{recipe.title}</h1>
        <figure className="image is-4by3 m-5">
          <img src={recipe.image} alt={recipe.title} />
        </figure>

        <h3 className="is-size-3 is-align-self-center">Ingredients</h3>

        <ul className="m-5">{renderIngredients()}</ul>
        <h3 className="is-size-3 is-align-self-center">Instructions</h3>
        <ul>{renderInstructions()}</ul>
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
