import axios from 'axios'

const EMPLOYEE_BASE_REST_API_URL="http://localhost:9090/api/v1/employees"

class EmployeeService{
    getAllEmployees(){
        return axios.get(EMPLOYEE_BASE_REST_API_URL)
    }
}

export default new EmployeeService();