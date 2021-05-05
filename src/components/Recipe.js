import * as React from 'react';
import axios from 'axios';
import { apiKey } from '../../config';

const Recipe = ({ selectedRecipeID }) => {
  const [recipeInfo, setRecipeInfo] = React.useState(recipe);

  React.useEffect(() => console.log({ recipe }));

  // React.useEffect(() => {
  //   if (selectedRecipeID != null) {
  //     console.log(recipe);
  // test recipe to save db hits
  // axios
  //   .get(
  //     `https://api.spoonacular.com/recipes/${selectedRecipeID}/information?apiKey=${apiKey}&includeNutrition=true`,
  //   )
  //   .then(({ data }) => setRecipeInfo(data))
  //   .catch((error) => console.log(error));
  // }
  // }, []);

  // if (selectedRecipeID == null) return <></>;
  // else {
  return (
    <div className="recipe">
      <h1>{recipeInfo.title}</h1>
    </div>
  );
  // }
};

export default Recipe;
