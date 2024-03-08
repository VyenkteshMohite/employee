import axios from 'axios'
import { Component, useDebugValue } from 'react';
import ListEmployeeComponent from '../components/ListEmployeeComponent';

const EMPLOYEE_BASE_REST_API_URL="http://localhost:9090/api/v1/employees/"

class EmployeeService{
    getAllEmployees(){
        return axios.get(EMPLOYEE_BASE_REST_API_URL)
        // The .get will call the backend GET METHOD 
    }
    createEmployee(employee){
        return axios.post(EMPLOYEE_BASE_REST_API_URL, employee)
        //employee contains form data like firstname,lastname,emailid
        //and then its sent to axios which is promise object ogf axios method with the post method
    }
    getEmployeeById(employeeId){
        return axios.get(EMPLOYEE_BASE_REST_API_URL + employeeId);
    }
    updateEmployee(employeeId,employee){
        return axios.put(EMPLOYEE_BASE_REST_API_URL + employeeId,employee)
    }
    deleteEmployee(employeeId){
        return axios.delete(EMPLOYEE_BASE_REST_API_URL + employeeId);
    }
}

export default new EmployeeService();

// the axios internally gives the RESTAPI call and provides
// Promise Object to respective Component and this service will be used IN THE 
// ListEmployeeComponent