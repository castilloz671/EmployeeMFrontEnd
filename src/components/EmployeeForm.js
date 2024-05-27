import React, { useState, useEffect } from "react";
import employeeService from "./employeeService";
import { useParams, useNavigate } from "react-router-dom";
import { Form, Button, Container } from "react-bootstrap";

const EmployeeForm = () => {
  const [employee, setEmployee] = useState({
    name: "",
    lastName: "",
    phone: "",
    address: "",
    position: "",
    office: "",
    salary: "",
  });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const loadEmployee = async () => {
      const response = await employeeService.getEmployee(id);
      setEmployee(response.data);
    };

    if (id) {
      loadEmployee();
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id) {
      await employeeService.updateEmployee(id, employee);
    } else {
      await employeeService.createEmployee(employee);
    }
    navigate("/");
  };

  return (
    <Container>
      <h1 className="my-4">{id ? "Edit Employee" : "Add Employee"}</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            name="name"
            value={employee.name}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formLastName">
          <Form.Label>LastName</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter last name"
            name="lastName"
            value={employee.lastName}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPhone">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter phone number"
            name="phone"
            value={employee.phone}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formAddress">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter address"
            name="address"
            value={employee.address}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPosition">
          <Form.Label>Position</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter position"
            name="position"
            value={employee.position}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formOffice">
          <Form.Label>Office</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter office"
            name="office"
            value={employee.office}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formSalary">
          <Form.Label>Salary</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter salary"
            name="salary"
            value={employee.salary}
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="secondary" onClick={() => window.history.back()}>
          Back
        </Button>
        <Button variant="primary" type="submit">
          Save
        </Button>
      </Form>
    </Container>
  );
};

export default EmployeeForm;
