import React from "react";

function Table({ employees }) {
  console.log(employees);
  return employees.map(({
    location: { city, state, country, postcode },
    picture: { thumbnail },
    name: {title, first, last},
     gender, email, cell, phone }) => {
    return (
      <table>
       <thead>
        <tr>
         <th>title</th>
         <th>first</th>
         <th>last</th>
         <th>cell</th>
         <th>phone</th>
         <th>gender</th>
         <th>email</th>
         <th>city</th>
         <th>state</th>
         <th>country</th>
         <th>postcode</th>
        </tr>
        </thead>   
        <tbody>
        <tr>
          <td>{title}</td>
          <td>{first}</td>
          <td>{last}</td>
          <td>{cell}</td>
          <td>{phone}</td>
          <td>{gender}</td>
          <td>{email}</td>
          <td>{city}</td>
          <td>{state}</td>
          <td>{country}</td>
          <td>{postcode}</td>
         <td><img src={thumbnail} /></td>
         </tr>
        </tbody>
      </table>
      
    );
  });
}

export default Table;
