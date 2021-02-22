/*const SearchBar = () => (
    <form action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden">Search Directory</span>
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="Search Employees"
            name="s" 
        />
        <button type="submit">Search</button>
    </form>
);



export default SearchBar;
*/

import React, { Component } from "react";

function SearchForm(input) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="employees">Employee Name:</label>
        <input
          value={input.search}
          onChange={input.handleInputChange}
          name="employees"
          list="employees"
          type="text"
          className="form-control"
          placeholder="Type in employee name to begin"
          id="employees"
        />
          <datalist id="employees">
          {input.employees.map(employees => (
            <option value={employees} key={employees} />
          ))}
        </datalist>
        <button type="submit" onClick={input.handleFormSubmit} className="btn btn-success">
          Search Directory
        </button>
      </div>
    </form>
  );
}

export default SearchForm;