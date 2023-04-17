import React, { useEffect, useState } from 'react'
import "./ListEmployee.css"
import { Link } from 'react-router-dom'
import EmployeeService from '../../service/EmployeeService';




const ListEmployeeComponent = () => {

  const [employeeArray,setEmployeeArray] =useState([]);


useEffect(()=>{
  getAllEmployee();
},[]);

function getAllEmployee(){
  EmployeeService.getAllEmployee()
  .then(res=>{setEmployeeArray(res.data);console.log(res)})
  .catch(e => console.log(e));
}

function deleteEmployee(e , id){
  e.preventDefault();
EmployeeService.deleteEmployee(id).then(()=>{getAllEmployee()})
.catch(e=>console.log(e));
}

  return (
    <div className='container'>
        <button className='btn'><Link to={"/add-employee"}>Add Employee</Link></button>
        <h2 className='text'>List Employee</h2> 
        <table className='table'>
            <thead>
                <th>Employee ID</th>
                <th>Employee First Name</th>
                <th>Employee Last Name</th>
                <th>Employee Email</th>
                <th>Actions</th>
            </thead>
            <tbody>
            {employeeArray.map(employee=>
              <tr  id = {employee.id}>
                <td>{employee.id}</td>
                <td>{employee.firstname}</td>
                <td>{employee.lastname}</td>
                <td>{employee.email}</td>
                <td>
                 <button className='updateB'> <Link to={`/add-employee/${employee.id}`}> Update</Link></button>{" "}
                 <button onClick={(e) => {deleteEmployee(e , employee.id)}} className='deleteB'><a href='' >Delete</a></button>
                </td>
              </tr>) }
            </tbody>
        </table>
    </div>
  )
}

export default ListEmployeeComponent