import React from "react";

const SearchForm = ({ handleInput, handeleSubmit, value }) => {
  return (
    <form className="search-form" onSubmit={handeleSubmit}>
      <input
        type="text"
        autoComplete="off"
        placeholder="Search images..."
        onChange={handleInput}
        value={value}
      />
    </form>
  );
};
export default SearchForm;
