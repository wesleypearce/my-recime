import * as React from 'react';

const SearchRecipes = () => {
  const [query, setQuery] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(query);
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
