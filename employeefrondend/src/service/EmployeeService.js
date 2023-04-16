import axios from "axios";

const BASE_URL = "http://localhost:8080/employee";
class EmployeeService{

    //method to get all employee from  our database 

    getAllEmployee(){
        return axios.get(BASE_URL);
    }
   // method to save an employee

   saveEmployee(employeeData){
       return axios.post(BASE_URL,employeeData);
   }


   updateEmployee(id , employeeData){
    return axios.put(`BASE_URL/${id}`,employeeData)
   }
}

export default new EmployeeService();