import axios from "axios";

const BASE_URL = "http://localhost:8080/employee";
class EmployeeService{

    //method to get all employee from  our database 

    getAllEmployee(){
        return axios.get(BASE_URL);
    }


}
export default new EmployeeService();