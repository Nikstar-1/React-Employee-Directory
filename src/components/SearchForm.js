import React  from 'react'; 

function SearchForm({handleFilter}) {
  return (
   <div>
     <form>
       <input
       className="form-control"
       type="search"
       placeholder="Search Employees...."
       aria-label="Search"
       onChange={e => handleFilter(e)}>
       </input>
     </form>
   </div>
  )
}

export default SearchForm; 