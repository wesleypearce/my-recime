import * as React from 'react';
import Sidebar from '../components/Sidebar';
import { testRecipes as recipes } from '../../recipes';

const Cookbook = () => {
  const [selectedRecipes, setSelectedRecipes] = React.useState([]);

  const selectRecipe = (recipe) => {
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
            onClick={() => selectRecipe(recipe)}
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
                  <p id={recipe.title} className="title is-5 has-text-centered">
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
    <div className="columns has-text-centered-mobile mt-4">
      <div className="column mr-4 is-one-fifth">
        <Sidebar
          selectedRecipes={selectedRecipes}
          selectRecipe={selectRecipe}
        />
      </div>
      <div className="column">
        <div className="is-flex is-flex-wrap-wrap is-justify-content-center">
          {renderRecipes()}
        </div>
      </div>
    </div>
  );
};

export default Cookbook;
