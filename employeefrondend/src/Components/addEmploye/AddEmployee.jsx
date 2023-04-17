import React, { useEffect, useState } from 'react'
import "./AddEmployee.css"
import EmployeeService from '../../service/EmployeeService';
import {useNavigate,Link ,useParams} from 'react-router-dom';

const AddEmployeeComponent = () => {
//variables and methods to save the inputs

const[firstName,setFirstName]=useState('');
const[lastName,setLastName]=useState('');
const[email,setEmail] = useState('');

const {id} = useParams();//this is used to update the addemploye title when update navigation .

const navigate = useNavigate();

const employeeData ={firstname: firstName,
    lastname: lastName,
    email: email}; //bundle the input from the user 



    function title(){ //used to update the addemploye title when update navigation .

        if(id){
            return "Update Employee"
        }
        else{
             return "Add Employee"
            } 
    }


        useEffect(()=>{
            if(id){
            EmployeeService.getEmployeeById(id).then(res=>{
                setFirstName(res.data.firstName);
                setLastName(res.data.lastName);
                setEmail(res.data.email)
            }).catch(e=>console.log(e));
        }
        },[]);


//send data to the databasee and navigate to homepage when it is sucessfull
function saveEmployee(e){
    if(employeeData.firstName !=="" && employeeData.lastName !== "" && employeeData.email !==""){
        e.preventDefault();
        EmployeeService.saveEmployee(employeeData)
        .then(navigate("/employee")).catch(e=>console.log(e));
        console.log(employeeData);
        
    }else{
        alert("please fill all inputs!");
    }
    
}

  return (
    <div>
        <div className='container1'>
            <div className='row'>
                <div className='card'>
                    <h2 className='text-center1'>{title()}</h2>
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
                            <Link  to={"/employee"}> <button className='btn-cancel'>Cancel</button></Link>
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