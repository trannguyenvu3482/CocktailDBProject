import React from 'react';
import { useGlobalContext } from '../context';

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();

  const searchValue = React.useRef('');

  React.useEffect(() => {
    searchValue.current.focus();
  }, []);

  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="section search">
      <form className="search-form" onSubmit={(e) => handleSubmit(e)}>
        <div className="form-control">
          <label htmlFor="name">Search for your favorite cocktail</label>
          <input
            type="text"
            id="name"
            ref={searchValue}
            onChange={searchCocktail}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
