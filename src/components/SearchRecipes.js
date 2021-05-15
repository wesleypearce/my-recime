import * as React from 'react';
import axios from 'axios';
import { apiKey } from '../../config';

const SearchRecipes = ({ setRecipes }) => {
  const [query, setQuery] = React.useState('');
  const [dropDown, setDropDown] = React.useState(false);

  const recipeSearch = (e) => {
    axios
      .get(
        `https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=${apiKey}`,
      )
      .then(({ data }) => setRecipes(data.results))
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

      <ul>
        <li className="add-cursor" onClick={() => setDropDown(!dropDown)}>
          Allergens
        </li>
        {dropDown === true && (
          <ul>
            <li>
              <label className="checkbox" htmlFor="gluten">
                <input type="checkbox" id="gluten" name="gluten" />
                Gluten
              </label>
            </li>
            <li>
              <label className="checkbox" htmlFor="dairy">
                <input type="checkbox" id="dairy" name="dairy" />
                Dairy
              </label>
            </li>
            <li>
              <label className="checkbox" htmlFor="egg">
                <input type="checkbox" id="egg" name="egg" />
                Egg
              </label>
            </li>
            <li>
              <label className="checkbox" htmlFor="grain">
                <input type="checkbox" id="grain" name="grain" />
                Grain
              </label>
            </li>
            <li>
              <label className="checkbox" htmlFor="peanut">
                <input type="checkbox" id="peanut" name="peanut" />
                Peanut
              </label>
            </li>
            <li>
              <label className="checkbox" htmlFor="seafood">
                <input type="checkbox" id="seafood" name="seafood" />
                Seafood
              </label>
            </li>
            <li>
              <label className="checkbox" htmlFor="sesame">
                <input type="checkbox" id="sesame" name="sesame" />
                Sesame
              </label>
            </li>
            <li>
              <input type="checkbox" id="shellfish" name="shellfish" />
              <label className="checkbox" htmlFor="shellfish">
                Shellfish
              </label>
            </li>
            <li>
              <label className="checkbox" htmlFor="soy">
                <input type="checkbox" id="soy" name="soy" />
                Soy
              </label>
            </li>
            <li>
              <label className="checkbox" htmlFor="tree-nut">
                <input type="checkbox" id="tree-nut" name="tree-nut" />
                Tree Nut
              </label>
            </li>
            <li>
              <label className="checkbox" htmlFor="wheat">
                <input type="checkbox" id="wheat" name="wheat" />
                Wheat
              </label>
            </li>
            <li>
              <label className="checkbox" htmlFor="sulfite">
                <input type="checkbox" id="sulfite" name="sulfite" />
                Sulfite
              </label>
            </li>
          </ul>
        )}

        <li>Cuisines</li>
        <li>Diet</li>
        <li>Calories</li>
        <li>Protein</li>
        <li>Carbs</li>
      </ul>
    </div>
  );
};

export default SearchRecipes;
