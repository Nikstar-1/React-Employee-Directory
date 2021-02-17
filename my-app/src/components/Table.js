import React from "react";

function Table({ employees }) {
  console.log(employees);
  return employees.map(({ gender }) => {
    return (
        <>
      <div>
    
        <h3>{gender}</h3>
        
      </div>
      </>
    );
  });
}

export default Table;
