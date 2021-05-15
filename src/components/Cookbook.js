import * as React from 'react';
import RecipeList from '../components/RecipeList';
import Sidebar from '../components/Sidebar';
import { testRecipes as recipes } from '../../recipes';

const Cookbook = () => {
  const [selectedRecipes, setSelectedRecipes] = React.useState([]);

  const handleClick = (recipe) => {
    const recipeCard = document.getElementById(`${recipe.id}`);
    const recipeP = document.getElementById(`${recipe.title}`);

    if (
      selectedRecipes.some((selectedRecipe) => selectedRecipe.id === recipe.id)
    ) {
      recipeCard.style.backgroundColor = '';
      recipeP.style.color = '';
      setSelectedRecipes(
        selectedRecipes.filter(
          (selectedRecipe) => selectedRecipe.id !== recipe.id,
        ),
      );
    } else {
      setSelectedRecipes([recipe, ...selectedRecipes]);
      recipeCard.style.backgroundColor = 'hsl(166, 100%, 28%)';
      recipeP.style.color = 'white';
    }
  };

  const renderRecipes = () => {
    if (recipes != []) {
      return recipes.map((recipe) => {
        return (
          <div
            onClick={() => handleClick(recipe)}
            key={recipe.id}
            id={recipe.id}
            className="card card-sized is-clickable m-1"
          >
            <div className="card-image">
              <figure className="image is-4by3">
                <img src={recipe.image} alt={recipe.title} />
              </figure>
            </div>
            <div className="card-content">
              <div className="media">
                <div className="media-content">
                  <p id={recipe.title} className="title is-4">
                    {recipe.title}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      });
    }
  };

  return (
    <div className="columns mt-4">
      <div className="column is-one-fifth">
        <Sidebar selectedRecipes={selectedRecipes} />
      </div>
      <div className="column">
        <div className="is-flex is-flex-wrap-wrap">{renderRecipes()}</div>
      </div>
    </div>
  );
};

export default Cookbook;
