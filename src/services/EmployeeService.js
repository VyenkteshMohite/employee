import axios from 'axios'
import { Component, useDebugValue } from 'react';
import ListEmployeeComponent from '../components/ListEmployeeComponent';

const EMPLOYEE_BASE_REST_API_URL="http://localhost:9090/api/v1/employees"

class EmployeeService{
    getAllEmployees(){
        return axios.get(EMPLOYEE_BASE_REST_API_URL)
        // The .get will call the backend GET METHOD 
    }
}

export default new EmployeeService();

// the axios internally gives the RESTAPI call and provides
// Promise Object to respective Component and this service will be used IN THE 
// ListEmployeeComponent