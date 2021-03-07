import React, { Component } from "react";
import API from "../utils/API";
import EmployeesDiplay from "./EmployeesDisplay";
import SearchForm from "./SearchForm";

export default class Main extends Component {
  state = {
    employees: [],
    sortingOrder: "des",
    filteredEmployees: [],
  };

  handleSort = (category) => {
      console.log("Sorting attempted for", category)
    if (this.state.sortingOrder === "des") {
      this.setState({ sortingOrder: "asc" });
    } else {
      this.setState({ sortingOrder: "des" });
    }

    const compareEmployees = (a, b) => {
      if (this.state.sortingOrder === "asc") {

         if (category === "name") {
          return a[category].first.localeCompare(b[category].first);
        } 
         
      } else {
       
         if (category === "name") {
          return b[category].first.localeCompare(a[category].first);
        } 
        }
      
    };
    const sortedUsers = this.state.filteredEmployees.sort(compareEmployees);
    this.setState({ filteredEmployees: sortedUsers });
  };

  handleFilter = (e) => {
    const filter = e.target.value;
    const filteredEmployeesList = this.state.employees.filter((employee) => {
      let employeeValues = Object.values(employee).join("").toLowerCase();
      return employeeValues.indexOf(filter.toLowerCase()) !== -1;
    });
    this.setState({ filteredEmployees: filteredEmployeesList });
  };

  componentDidMount() {
    API.getUsers().then((results) => {
      console.log(results.data);
      this.setState({
        employees: results.data.results,
        filteredEmployees: results.data.results,
      });
    });
  }

  render() {
    return (
      <>
        <SearchForm handleFilter={this.handleFilter} />

        <div>
          <EmployeesDiplay employees={this.state.filteredEmployees} handleSort={this.handleSort} />
        </div>
      </>
    );
  }
}
