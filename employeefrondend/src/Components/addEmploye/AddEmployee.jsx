import React, { useState } from 'react'
import "./AddEmployee.css"
import EmployeeService from '../../service/EmployeeService';
import {useNavigate,Link } from 'react-router-dom';

const AddEmployeeComponent = () => {
//variables and methods to save the inputs

const[firstName,setFirstName]=useState('');
const[lastName,setLastName]=useState('');
const[email,setEmail] = useState('');


const navigate = useNavigate();

const employeeData ={firstName,lastName,email}; //bundle the input from the user 

//send data to the databasee and navigate to homepage when it is sucessfull
function saveEmployee(e){
    if(employeeData.firstName !=="" && employeeData.lastName !== "" && employeeData.email !==""){
        e.preventDefault();
        EmployeeService.saveEmployee(employeeData)
        .then(navigate("/employee")).catch(e=>console.log(e));
    }else{
        alert("please fill all inputs!");
    }
    
  

}

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
                            <button className='btn-save' onClick={(e)=>saveEmployee(e)}>Save</button> {" "}
                           <button className='btn-cancel'> <Link  to={"/employee"}>Cancel</Link></button>
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