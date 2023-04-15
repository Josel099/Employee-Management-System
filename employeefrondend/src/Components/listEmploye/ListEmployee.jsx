import React from 'react'
import "./ListEmployee.css"

const ListEmployeeComponent = () => {
  return (
    <div className='container'>
        <button className='btn'><a>Add Employee</a></button>
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