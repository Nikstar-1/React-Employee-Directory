import React, {Component} from 'react'; 
import API from '../utils/API';

export default class SearchForm extends Component {
  state = {
    search: "",
    employees: [],
    results: [],
    error: ""
  };

  handleInputChange = event => {
    event.preventDefault();
    API.getUsers(this.state.search)
      .then(res => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        this.setState({ results: res.data, error: "" });
        console.log('DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD',res.data.results);
      })
      .catch(err => this.setState({ error: err.message }));
  };

  handleFormSubmit = event => {
    event.preventDefault();
  };
  
    render(){
        return (
           <form className="search">
          <div className="form-group">
            <label htmlFor="employees">Employee Name:</label>
            <input
              value={this.search}
              onChange={this.handleInputChange}
              name="employees"
              list="employees"
              type="text"
              className="form-control"
              placeholder="Type in employee name to begin"
            />
             

          <div>{this.state.results}</div>

            <button type="submit" onClick={this.handleFormSubmit} className="btn btn-success">
              Search Directory
            </button>
          </div>
        </form> 
            
            
        )
    }
}
