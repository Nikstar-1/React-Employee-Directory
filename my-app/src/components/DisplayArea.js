import React, { Component } from "react";
import API from "../utils/API";
import EmployeesDiplay from "./EmployeesDisplay";
import SearchForm  from "./SearchForm";

export default class Main extends Component {
  state = {
    employees: [],
    soretingOrder: "descend",
    filteredEmployees: [],
  };

  handleFilter = e => {
    const filter = e.target.value; 
    const filteredEmployeesList = this.state.employees.filter(employee => {
        let employeeValues = Object.values(employee).join("").toLowerCase();
        return employeeValues.indexOf(filter.toLowerCase()) !== -1; 
    })
    this.setState({filteredEmployees: filteredEmployeesList})
  }

  componentDidMount() {
    API.getUsers().then((results) => {
        
      console.log(results.data);
      this.setState({
        employees: results.data.results,
        filteredEmployees: results.data.results
      });
    });
  }

  render() {
    return (
      <>
        <SearchForm handleFilter={this.handleFilter} />
    
        <div>
          
          <EmployeesDiplay employees={this.state.filteredEmployees} />
        </div>
      </>
    );
  }

 
}
