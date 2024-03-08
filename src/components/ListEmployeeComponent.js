import React, { useEffect, useState } from 'react'
import EmployeeService from '../services/EmployeeService'
import { Link } from 'react-router-dom'

const ListEmployeeComponent = () => {

    const [employees, setEmployees] = useState([])  

    useEffect(() => {

      getAllEmployees();
     
    }, [])

    const getAllEmployees=()=>{
      
      EmployeeService.getAllEmployees().then((Response)=>{
        setEmployees(Response.data)
        console.log(Response.data);
      }).catch((error)=>{
        console.log(error); 
      })

    }


    const deleteEmployee = (employeeId) => {
      console.log(employeeId);//it will show the deleted id in the console
      EmployeeService.deleteEmployee(employeeId).then((response) =>{

          getAllEmployees();

      }).catch(error=>{
          console.log(error);
      });

    }

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
            <th>Actions</th>
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
                  <td>
                    <Link className="btn btn-info"  to={`/edit-employee/${employee.id}`}>Update</Link>
                    <button className='btn btn-danger' onClick={() => deleteEmployee(employee.id)}
                    style={{marginLeft:10}}>Delete</button>
                  </td>

                </tr>
              )
            }
          </tbody>
        </table>
    </div>
  )
}

export default ListEmployeeComponent