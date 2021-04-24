import * as React from 'react';
import axios from 'axios';
import { apiKey } from '../../config';

const Recipe = ({ selectedRecipeID }) => {
  const [recipeInfo, setRecipeInfo] = React.useState({});

  React.useEffect(() => {
    if (selectedRecipeID != null) {
      axios
        .get(
          `https://api.spoonacular.com/recipes/${selectedRecipeID}/information?includeNutrition=true?apiKey=${apiKey}`,
        )
        .then(({ data }) => setRecipeInfo(data))
        .catch((error) => console.log(error));
    }
  }, []);

  if (selectedRecipeID == null) return <></>;
  else {
    return (
      <div>
        <h1>{recipeInfo.title}</h1>
      </div>
    );
  }
};

export default Recipe;
