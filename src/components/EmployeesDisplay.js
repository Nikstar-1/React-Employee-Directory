import React from "react";
import Table from "./Table";

function EmployeesDisplay({ employees, handleSort }) {
  return (
    <>
      <div>
        <Table employees={employees}
        handleSort={handleSort} />
      </div>
    </>
  );
}

export default EmployeesDisplay;
