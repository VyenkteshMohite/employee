import React, { useState } from 'react'

const ListEmployeeComponent = () => {

    const [employees, setEmployees] = useState([])
  return (
    <div className="container">
        <h1 className='text-center'>List Employees</h1>
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