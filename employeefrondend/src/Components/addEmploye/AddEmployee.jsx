import React, { useState } from 'react'
import "./AddEmployee.css"
const AddEmployeeComponent = () => {
//variables and methods to save the inputs

const[firstName,setFirstName]=useState('');
const[lastName,setLastName]=useState('');
const[email,setEmail] = useState('');

const employeeData ={firstName,lastName,email};


  return (
    <div>
        <div className='container1'>
            <div className='row'>
                <div className='card'>
                    <h2 className='text-center1'>Add Employee</h2>
                    <div className='card-body'>
                        <form>
                            <div className='form-group'>
                                <input className='form-control' value={firstName}
                                onChange={(e)=>setFirstName(e.target.value)}
                                type="text" placeholder='Enter First Name' />
                            </div>
                            <div className='form-group'>
                                <input className='form-control' value={lastName}
                                onChange={(e)=>setLastName(e.target.value)}
                                type="text" placeholder='Enter Last Name' />
                            </div>
                            <div className='form-group'>
                                <input className='form-control' value={email}
                                onChange={(e)=>setEmail(e.target.value)}
                                type="email" placeholder='Enter Email' />
                            </div>
                            <div className='buttons'>
                            <button className='btn-save'>Save</button> {" "}
                           <button className='btn-cancel'> <a href="">Cancel</a></button>
                           </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddEmployeeComponent