import * as React from 'react';

const RecipeList = ({ recipes, setSelectedRecipeID }) => {
  const viewRecipe = (recipe) => {
    setSelectedRecipeID(recipe.id);
  };
  const renderRecipes = () => {
    if (recipes != []) {
      return recipes.map((recipe) => {
        return (
          <div key={recipe.id} className="card card-sized is-clickable m-1">
            <div className="card-image">
              <figure className="image is-4by3">
                <img src={recipe.image} alt={recipe.title} />
              </figure>
            </div>
            <div className="card-content">
              <div className="media">
                <div className="media-content">
                  <p className="title is-4">{recipe.title}</p>
                </div>
              </div>
            </div>
          </div>
        );
      });
    }
  };
  return <div className="is-flex is-flex-wrap-wrap">{renderRecipes()}</div>;
};

export default RecipeList;
