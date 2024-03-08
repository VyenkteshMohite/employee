import '../App.css';
import React, { useState,useEffect } from 'react'
import { Link ,useParams} from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import EmployeeService from '../services/EmployeeService';


const AddEmployeeComponent = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [emailId, setEmailId] = useState('')
    const history = useNavigate();
    const params = useParams();

    // const saveEmployee = (e) => {
    //     e.preventDefault();

    //     const employee = {firstName,lastName,emailId}        
       
    //     //here we are calling the employeeservice with createEmployee Method and we are passing the employee object 
    //     //then is the iterator promise
    //     EmployeeService.createEmployee(employee).then((response) => {
            
    //         console.log(response.data)

    //         history.push('/employees');

    //     }).catch(error => {
    //         console.log(error)
    //     })
    // } 
    // this is also correct the below one is the changes and correction of this code
    
    const saveOrUpdateEmployee = (e) => {
        e.preventDefault();

        const employee = {firstName, lastName, emailId}

        if(params.id){
            EmployeeService.updateEmployee(params.id, employee).then((response) => {
                history.push('/employees')
            }).catch(error => {
                console.log(error)
            })

        }else{
            EmployeeService.createEmployee(employee).then((response) =>{

                console.log(response.data)
    
                history.push('/employees');
    
            }).catch(error => {
                console.log(error)
            })
        }
        
    }




    useEffect(() => {
        // console.log("id "+params.id)
        EmployeeService.getEmployeeById(params.id).then((response)=>{
            console.log(response.data)
            setFirstName(response.data.firstName)
            setLastName(response.data.lastName)
            setEmailId(response.data.emailId)
        }).catch(error =>{
            console.log(error)
        })
      
    }, [params.id])

    useEffect(() => {
        if (params.id) {
          EmployeeService.getEmployeeById(params.id)
            .then((response) => {
              console.log('API Response:', response); // Log the entire response
              const { firstName, lastName, emailId } = response.data;
              setFirstName(firstName);
              setLastName(lastName);
              setEmailId(emailId);
            })
            .catch((error) => {
              console.error('Error fetching employee details:', error);
            });
        }
      }, [params.id]);





    
    const title = () => {

        if(params.id){
            return <h2 className="text-center">Update Employee</h2>
        }
        else{
            return <h2 className="text-center">Add Employee</h2>
        }
    }

    return (
        <div>
            <br></br>
            <br></br>
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        {
                            title()
                        }
                        <div className="card-body">
                            <form>
                                 <div className="form-group mb-2">
                                        <label className="form-label">First Name:</label>
                                            <input
                                                type="text" 
                                                placeholder="Enter the Name"
                                                name="firstName"
                                                className="form-control"
                                                value={firstName}
                                                onChange={(e) => setFirstName(e.target.value)}
                                            >
                                            </input>
                                 </div>

                                 <div className="form-group mb-2">
                                    <label className="form-label">Last Name:</label>
                                        <input
                                            type="text"
                                            placeholder="Enter the Last Name"
                                            name="lastName"
                                            className="form-control"
                                            value={lastName}
                                            onChange={(e) => setLastName(e.target.value)}                                        
                                        >
                                        </input>
                                 </div>

                                 <div className="form-group mb-2">
                                        <label className="form-label">EmailID:</label>
                                            <input
                                                type="email"
                                                placeholder="Enter the EmailId"
                                                name="emailId"
                                                className="form-control"
                                                value={emailId}
                                                onChange={ (e) => setEmailId(e.target.value)}                                      
                                            >
                                            </input>
                                </div>     

                                     <button className="btn btn-success center-button" onClick={ (e) => saveOrUpdateEmployee(e)}>Submit</button>   
                                 
                                     <Link to="/employee" className='btn btn-danger' >Cancel</Link>                    
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddEmployeeComponent


// here the "e" stands for event which is used inthe onClick event and this "e" has scope within the lambda function


// import React, {useState, useEffect} from 'react'
// import {Link,  useParams } from 'react-router-dom';
// import { useNavigate } from "react-router-dom";
// import EmployeeService from '../services/EmployeeService'

// const AddEmployeeComponent = () => {

//     const [firstName, setFirstName] = useState('')
//     const [lastName, setLastName] = useState('')
//     const [emailId, setEmailId] = useState('')
//     const history = useNavigate();
//     const {id} = useParams();

//     const saveOrUpdateEmployee = (e) => {
//         e.preventDefault();

//         const employee = {firstName, lastName, emailId}

//         if(id){
//             EmployeeService.updateEmployee(id, employee).then((response) => {
//                 history.push('/employees')
//             }).catch(error => {
//                 console.log(error)
//             })

//         }else{
//             EmployeeService.createEmployee(employee).then((response) =>{

//                 console.log(response.data)
    
//                 history.push('/employees');
    
//             }).catch(error => {
//                 console.log(error)
//             })
//         }
        
//     }

//     useEffect(() => {

//         EmployeeService.getEmployeeById(id).then((response) =>{
//             setFirstName(response.data.firstName)
//             setLastName(response.data.lastName)
//             setEmailId(response.data.emailId)
//         }).catch(error => {
//             console.log(error)
//         })
//     }, [])

//     const title = () => {

//         if(id){
//             return <h2 className = "text-center">Update Employee</h2>
//         }else{
//             return <h2 className = "text-center">Add Employee</h2>
//         }
//     }

//     return (
//         <div>
//            <br /><br />
//            <div className = "container">
//                 <div className = "row">
//                     <div className = "card col-md-6 offset-md-3 offset-md-3">
//                        {
//                            title()
//                        }
//                         <div className = "card-body">
//                             <form>
//                                 <div className = "form-group mb-2">
//                                     <label className = "form-label"> First Name :</label>
//                                     <input
//                                         type = "text"
//                                         placeholder = "Enter first name"
//                                         name = "firstName"
//                                         className = "form-control"
//                                         value = {firstName}
//                                         onChange = {(e) => setFirstName(e.target.value)}
//                                     >
//                                     </input>
//                                 </div>

//                                 <div className = "form-group mb-2">
//                                     <label className = "form-label"> Last Name :</label>
//                                     <input
//                                         type = "text"
//                                         placeholder = "Enter last name"
//                                         name = "lastName"
//                                         className = "form-control"
//                                         value = {lastName}
//                                         onChange = {(e) => setLastName(e.target.value)}
//                                     >
//                                     </input>
//                                 </div>

//                                 <div className = "form-group mb-2">
//                                     <label className = "form-label"> Email Id :</label>
//                                     <input
//                                         type = "email"
//                                         placeholder = "Enter email Id"
//                                         name = "emailId"
//                                         className = "form-control"
//                                         value = {emailId}
//                                         onChange = {(e) => setEmailId(e.target.value)}
//                                     >
//                                     </input>
//                                 </div>

//                                 <button className = "btn btn-success" onClick = {(e) => saveOrUpdateEmployee(e)} >Submit </button>
//                                 <Link to="/employees" className="btn btn-danger"> Cancel </Link>
//                             </form>

//                         </div>
//                     </div>
//                 </div>

//            </div>

//         </div>
//     )
// }

// export default AddEmployeeComponent


