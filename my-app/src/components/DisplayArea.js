import React, { Component } from "react";
import API from "../utils/API";
import EmployeesDiplay from "./EmployeesDisplay";
import SearchForm  from "./SearchForm";

export default class Main extends Component {
  state = {
    employees: [],
    filteredEmployees: [{}],
  };
  componentDidMount() {
    API.getUsers().then((results) => {
      console.log(results.data);
      this.setState({
        employees: results.data.results,
      });
    });
  }

  render() {
    return (
      <>
        <SearchForm handleFilter={this.handleFilter} />
        <div>
          <h1>Data section</h1>
          <EmployeesDiplay employees={this.state.employees} />
        </div>
      </>
    );
  }

  handleFilter = (event) => {
    console.log(event.target.value);
    ///// and add the code for filter here
    const list = this.state.users.filter((d) => this.state.input === "" || d.includes(this.state.input)).map((d, index) => <li key={index}>{d}</li>);

    return (
      <div>
        <input value={this.state.input} type="text" onChange={this.onChangeHandler.bind(this)} />
        <div>
          <h1>Data section</h1>
          <EmployeesDiplay employees={this.state.employees} />
        </div>
      </div>
    );
  };
}
