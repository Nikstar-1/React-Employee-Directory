import axios from "axios";

export default { 
    getUsers: function () {
  let employees = axios.get("https://randomuser.me/api/?results=25");
return employees
    }
};
