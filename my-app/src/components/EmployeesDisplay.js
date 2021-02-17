import React from "react";
import Table from "./Table";

function EmployeesDisplay({ employees }) {
  return (
    <>
      <div>
        <Table employees={employees} />
      </div>
    </>
  );
}

export default EmployeesDisplay;
