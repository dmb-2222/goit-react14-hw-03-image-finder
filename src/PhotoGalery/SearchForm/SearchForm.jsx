import React from "react";
import styles from './SearchForm.module.css'
const SearchForm = ({ handleInput, handeleSubmit, value }) => {
  return (
    <form className={styles.searchForm} onSubmit={handeleSubmit}>
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
