import axios from 'axios';

const API_URL = 'https://localhost:44307/api/employees';

const getEmployees = () => {
    return axios.get(API_URL);
};

const getEmployee = (id) => {
    return axios.get(`${API_URL}/${id}`);
};

const createEmployee = (employee) => {
    return axios.post(API_URL, employee);
};

const updateEmployee = (id, employee) => {
    return axios.put(`${API_URL}/${id}`, employee);
};

const deleteEmployee = (id) => {
    return axios.delete(`${API_URL}/${id}`);
};

const employeeService = {
    getEmployees,
    getEmployee,
    createEmployee,
    updateEmployee,
    deleteEmployee
};

export default employeeService;