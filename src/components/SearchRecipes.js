import * as React from 'react';
import axios from 'axios';
import { apiKey } from '../../config';

//TODO: Search should fire off from hitting enter in the search box

const SearchRecipes = ({ setRecipes }) => {
  const [query, setQuery] = React.useState('');

  const recipeSearch = (e) => {
    axios
      .get(
        `https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=${apiKey}`,
      )
      .then(({ data }) => {
        setRecipes(data.results);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="column is-one-fifth">
      <div className="field">
        <label htmlFor="search">Search</label>
        <div className="control">
          <input
            type="text"
            name="search"
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>
      <div className="field">
        <div className="control">
          <button onClick={recipeSearch} className="button">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchRecipes;
