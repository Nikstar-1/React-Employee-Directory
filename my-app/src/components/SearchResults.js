import React, { Component } from "react";

class Search extends Component {
    state = {
      search: "",
      employees: [],
      results: [],
      error: ""
    };
  
    // When the component mounts, get a list of all available employees and update this.state.breeds
    componentDidMount() {
      API.getRandomUsersList()
        .then(res => this.setState({ employees: res.data.message }))
        .catch(err => console.log(err));
    }
  
    handleInputChange = event => {
      this.setState({ search: event.target.value });
    };
  
    handleFormSubmit = event => {
      event.preventDefault();
      API.getRandomUsers(this.state.search)
        .then(res => {
          if (res.data.status === "error") {
            throw new Error(res.data.message);
          }
          this.setState({ results: res.data.message, error: "" });
        })
        .catch(err => this.setState({ error: err.message }));
    };
    render() {
      return (
        <div>
            <h1 className="text-center">Search By Name</h1>
            <SearchForm
              handleFormSubmit={this.handleFormSubmit}
              handleInputChange={this.handleInputChange}
              breeds={this.state.employees}
            />
            <SearchResults results={this.state.results} />
         
        </div>
      );
    }
  }
  
  export default Search;