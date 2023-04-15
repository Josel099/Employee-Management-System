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

            </tbody>
        </table>
    </div>
  )
}

export default ListEmployeeComponent