package com.luv2code.cruddemo.service;

import com.luv2code.cruddemo.entity.Employee;

import java.util.List;

public interface EmployeeService {

    List<Employee> findAll();

    Employee findById(Integer id);

    Employee save(Employee employee);

    void deleteById(int id);

}
