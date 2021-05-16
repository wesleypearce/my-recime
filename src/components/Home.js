import * as React from 'react';
import image from '../../public/meal-1200x800.jpg';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div className="columns mt-4">
        <div className="column">
          <h1 className="is-size-1 m-1">Welcome!</h1>
          <p className="is-family-secondary is-size-4 m-2">
            If you're looking for an easier way to meal plan, you have found it!
          </p>
          <p className="is-family-secondary is-size-4 m-2">
            Search for recipes, add them to your meal plan, and your shopping
            list is magically generated!
          </p>
          <p className="is-family-secondary is-size-4 m-2">
            Sign in to save your favorite recipes or meal plans!
          </p>
          <Link to="/signup" className="button is-primary m-2">
            Sign In
          </Link>
          <Link to="/login" className="button is-primary m-2">
            Log In
          </Link>
        </div>
        <div className="column">
          <figure className="image is-3by2">
            <img src={image} />
          </figure>
        </div>
      </div>
    </>
  );
};

export default Home;
