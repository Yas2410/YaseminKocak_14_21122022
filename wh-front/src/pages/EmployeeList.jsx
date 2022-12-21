import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getEmployees } from "../_store/actions";
import Table from "../components/Table";
import { Link } from "react-router-dom";
import "../styles/employees.css";
import logo from "../assets/wh-logo.png";

const EmployeeList = () => {
  const employeeList = useSelector((state) => state.employeeList);
  const { loading, employees, error } = employeeList;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEmployees());
    return () => {
      //
    };
  }, []);

  const columns = React.useMemo(
    () => [
      {
        Header: "Employees",
        columns: [
          {
            Header: "N°",
            id: "id",
            Cell: ({ row, flatRows }) => {
              return flatRows.indexOf(row) + 1;
            },
          },
          {
            Header: "Lastname",
            accessor: "lastName",
          },
          {
            Header: "Firstname",
            accessor: "firstName",
          },
          {
            Header: "Birthdate",
            accessor: "birthDate",
          },
        ],
      },
      {
        Header: "Address",

        columns: [
          {
            Header: "Street",
            accessor: "street",
          },
          {
            Header: "City",
            accessor: "city",
          },
          {
            Header: "Zipcode",
            accessor: "zipCode",
          },
          {
            Header: "State",
            accessor: "state",
          },
        ],
      },
      {
        Header: "Company",

        columns: [
          {
            Header: "Department",
            accessor: "department",
          },
          {
            Header: "Startdate",
            accessor: "startDate",
          },
        ],
      },
    ],

    []
  );

  return (
    <section>
      <div className="flexend-btn">
        <Link to="/employees/add">
          <button className="current-employees-btn">ADD EMPLOYEE</button>
        </Link>
      </div>
      <div className="employee-list-title">
        <h1 className="employee-list-h1">EMPLOYEE LIST</h1>
      </div>
      <h2 className="employees-nb">{` - ${employees.length} EMPLOYEES - `}</h2>

      <div className="employees-table">
        <Table columns={columns} data={employees} />
      </div>
      <div className="homepage-redirect">
        <Link to="/" className="redirect-link">
          HOME PAGE
        </Link>
        <img className="redirect-logo" src={logo} alt="Wealth Health Logo" />
      </div>
    </section>
  );
};

export default EmployeeList;
