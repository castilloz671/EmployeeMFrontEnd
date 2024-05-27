import React, { useState, useEffect } from "react";
import employeeService from "./employeeService";
import { Table, Button, Container } from 'react-bootstrap';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
      loadEmployees();
  }, []);

  const loadEmployees = async () => {
      const response = await employeeService.getEmployees();
      setEmployees(response.data);
  };

  const handleDelete = async (id) => {
      await employeeService.deleteEmployee(id);
      loadEmployees();
  };

  return (
      <Container>
          <h1 className="my-4">Employee List</h1>
          <Table striped bordered hover>
              <thead>
                  <tr>
                      <th>Name</th>
                      <th>LastName</th>
                      <th>Phone</th>
                      <th>Address</th>
                      <th>Position</th>
                      <th>Office</th>
                      <th>Salary</th>
                      <th>Actions</th>
                  </tr>
              </thead>
              <tbody>
                  {employees.map((employee) => (
                      <tr key={employee.employeeId}>
                          <td>{employee.name}</td>
                          <td>{employee.lastName}</td>
                          <td>{employee.phone}</td>
                          <td>{employee.address}</td>
                          <td>{employee.position}</td>
                          <td>{employee.office}</td>
                          <td>{employee.salary}</td>
                          <td>
                              <Button
                                  variant="primary"
                                  className="me-2"
                                  onClick={() => (window.location.href = `/edit/${employee.employeeId}`)}
                              >
                                  Edit
                              </Button>
                              <Button
                                  variant="danger"
                                  className="me-2"
                                  onClick={() => handleDelete(employee.employeeId)}
                              >
                                  Delete
                              </Button>
                              <Button
                                  variant="secondary"
                                  onClick={() => (window.location.href = `/details/${employee.employeeId}`)}
                              >
                                  View
                              </Button>
                          </td>
                      </tr>
                  ))}
              </tbody>
          </Table>
          <Button variant="primary" onClick={() => (window.location.href = "/create")}>
              Add Employee
          </Button>
      </Container>
  );
};

export default EmployeeList;
