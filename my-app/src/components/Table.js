import React from "react";
const [sortedField, setSortedField] = React.useState(null);


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

const useSortableData = (items, config = null) => {
  const [sortConfig, setSortConfig] = React.useState(config);
  
  const sortedItems = React.useMemo(() => {
    let sortableItems = [...items];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [items, sortConfig]);

  const requestSort = key => {
    let direction = 'ascending';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  }

  return { items: sortedItems, requestSort };
}

export default Table;
