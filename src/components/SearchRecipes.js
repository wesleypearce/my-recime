import * as React from 'react';
import RecipeList from 'react';
import axios from 'axios';
import { apiKey } from '../../config';

const SearchRecipes = () => {
  const [query, setQuery] = React.useState('');
  const [recipes, setRecipes] = React.useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}`)
      .then(({ data }) => setRecipes(data.results))
      .catch((error) => console.log(error));
  };

  const renderRecipes = () => {
    if (recipes != []) {
      return recipes.map((recipe) => {
        return <li key={recipe.id}>{recipe.title}</li>;
      });
    }
  };

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" onChange={(e) => setQuery(e.target.value)} />
        <button type="submit">Search</button>
      </form>
      {renderRecipes()}
    </>
  );
};

export default SearchRecipes;
