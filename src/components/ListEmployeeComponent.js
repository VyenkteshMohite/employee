import React, { useEffect, useState } from 'react'
import EmployeeService from '../services/EmployeeService'
import { Link } from 'react-router-dom'

const ListEmployeeComponent = () => {

    const [employees, setEmployees] = useState([])  

    useEffect(() => {

      EmployeeService.getAllEmployees().then((Response)=>{
        setEmployees(Response.data)
        console.log(Response.data);
      }).catch((error)=>{
        console.log(error); 
      })
     
    }, [])
    



  return (
    <div className="container">
        <h2 className='text-center'>List Employees</h2>
          <Link to={"/add-employee"} className="btn btn-primary mb=2"> Add Employee</Link>
        <table className='table table-bordered table-stripped'>
          <thead>
            <th>Employees Id</th>
            <th>Employees FirstName</th>
            <th>Employee LastName</th>
            <th>Employee Emailid</th>
          </thead>
          <tbody>
            {
              employees.map(
                employee =>
                <tr key={employee.id}>
                  <td>{employee.id}</td>
                  <td>{employee.firstName}</td>
                  <td>{employee.lastName}</td>
                  <td>{employee.emailId}</td>

                </tr>
              )
            }
          </tbody>




        </table>

    </div>
  )
}

export default ListEmployeeComponent