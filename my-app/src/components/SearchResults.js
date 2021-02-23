import API from "../utils/API.js"
import React, { Component } from "react";
import SearchResults from "./SearchResults"
import axios from "axios";
//import SearchResults from "./modules/components/";
/*var myVariable = "string";
let myVariable2 = "string";
const myVariable3 = "string";

// referencing different files
var myVariable = require("/path/to/myVariableExport.js");
import myVariable from "/path/to/myVariableExport.js"
*/

export default { 
    getUsers: function () {
  return axios.get("https://randomuser.me/api/?results=25");

    }
};

class SearchForm extends Component {
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
              employees={this.state.employees}
            />
            <SearchResults results={this.state.results} />
         
        </div>
      );
    }
  }
  
  