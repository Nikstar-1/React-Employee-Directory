import React, {Component} from 'react'; 
import API from "../utils/API";
import EmployeesDiplay from "./EmployeesDisplay"; 

export default class Main extends Component {
   state = {

       employees: [],
       filteredEmployees: [{}] 

   }
   componentDidMount(){
       API.getUsers().then(results => {
           console.log(results.data)
           this.setState({
               employees: results.data.results
           })
       })
   }

   render (){
       return (
           <>
           <div>
           <h1>Data section</h1>
           <EmployeesDiplay employees={this.state.employees}/>
           </div>
           </>
       )
   }
}