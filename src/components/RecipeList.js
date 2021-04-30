import * as React from 'react';

const recipes = [
  {
    id: 716429,
    calories: 584,
    carbs: '84g',
    fat: '20g',
    image: 'https://spoonacular.com/recipeImages/716429-312x231.jpg',
    imageType: 'jpg',
    protein: '19g',
    title: 'Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs',
  },
  {
    id: 715538,
    calories: 521,
    carbs: '69g',
    fat: '10g',
    image: 'https://spoonacular.com/recipeImages/715538-312x231.jpg',
    imageType: 'jpg',
    protein: '35g',
    title: 'What to make for dinner tonight?? Bruschetta Style Pork & Pasta',
  },
];

const RecipeList = ({ setSelectedRecipeID }) => {
  const viewRecipe = (recipe) => {
    setSelectedRecipeID(recipe.id);
  };
  const renderRecipes = () => {
    if (recipes != []) {
      return recipes.map((recipe) => {
        return (
          <li onClick={() => viewRecipe(recipe)} key={recipe.id}>
            {recipe.title}
          </li>
        );
      });
    }
  };
  return (
    <>
      <ul>{renderRecipes()}</ul>
    </>
  );
};

export default RecipeList;
