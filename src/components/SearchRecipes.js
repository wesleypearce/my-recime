import * as React from 'react';
import RecipeList from 'react';
import axios from 'axios';
import { apiKey } from '../../config';

const SearchRecipes = ({ setRecipes }) => {
  const [query, setQuery] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}`)
      .then(({ data }) => setRecipes(data.results))
      .catch((error) => console.log(error));
  };

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" onChange={(e) => setQuery(e.target.value)} />
        <button type="submit">Search</button>
      </form>
    </>
  );
};

export default SearchRecipes;
