import React from "react";

function Table({ employees }) {
  console.log(employees);
  return employees.map(({
    location: { city, state, country, postcode },
    picture: { thumbnail },
    name: {title, first, last},
     gender, email, cell, phone }) => {
    return (
        <>
      <div>
        <h3>{title}</h3>
        <h3>{first}</h3>
        <h3>{last}</h3>
        <h3>{cell}</h3>
        <h3>{phone}</h3>
        <h3>{gender}</h3>
        <h3>{email}</h3>
        <h3>{city}</h3>
        <h3>{state}</h3>
        <h3>{country}</h3>
        <h3>{postcode}</h3>

        <img src={thumbnail} />

      </div>
      </>
    );
  });
}

export default Table;
