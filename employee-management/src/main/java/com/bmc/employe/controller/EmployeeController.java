package com.bmc.employe.controller;


import com.bmc.employe.model.Employee;
import com.bmc.employe.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/Employee")
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService; // we are bringing in EmployeService instance

//    here is a postrequest .we  gonna be saving an employee
    @PostMapping
    public Employee saveEmployee(@RequestBody Employee employee) {
        return employeeService.saveEmployee(employee);
    }
// here we are getting alll employee
    @GetMapping
    public List<Employee> getAllEmployee(){
        return employeeService.getAllEmployee();
    }
   /* here are two "@Getmapping " so how should it will go to the correct one :
   so we will give an parameter specification with the annotation .*/
//    here we getting one employee by Id
    @GetMapping("/{id}")
    public Optional<Employee> getEmployeeById(@PathVariable int id){
        return employeeService.getEmployeeById(id);
    }
//    we gonna updating an employee
    @PutMapping
    public Employee UpdateEmployee(@PathVariable int id ,@RequestBody Employee employee){
        return employeeService.updateEmployee(id, employee);
    }

//      we gonna deleting an employee
    @DeleteMapping
    public void deleteEmployee(@PathVariable int id){
        employeeService.deleteEmployee(id);
    }
}
