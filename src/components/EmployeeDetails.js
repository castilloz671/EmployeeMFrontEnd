import React, { useState, useEffect } from "react";
import employeeService from "./employeeService"; // Asegúrate de que la ruta sea correcta
import { useParams } from "react-router-dom";
import { Container, Button, Card } from "react-bootstrap";

const EmployeeDetails = () => {
  const [employee, setEmployee] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const loadEmployee = async () => {
      const response = await employeeService.getEmployee(id);
      setEmployee(response.data);
    };

    if (id) {
      loadEmployee();
    }
  }, [id]);

  if (!employee) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <h1 className="my-4">Employee Details</h1>
      <Card>
        <Card.Body>
          <Card.Title>
            {employee.name} {employee.lastName}
          </Card.Title>
          <Card.Text>
            <strong>Phone:</strong> {employee.phone} <br />
            <strong>Address:</strong> {employee.address} <br />
            <strong>Position:</strong> {employee.position} <br />
            <strong>Office:</strong> {employee.office} <br />
            <strong>Salary:</strong> {employee.salary} <br />
          </Card.Text>
          <Button variant="secondary" onClick={() => window.history.back()}>
            Back
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default EmployeeDetails;
