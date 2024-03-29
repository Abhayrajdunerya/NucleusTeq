package com.luv2code.cruddemo.dao;

import com.luv2code.cruddemo.entity.Employee;
import jakarta.persistence.EntityManager;
import jakarta.persistence.TypedQuery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class EmployeeDAOImpl implements EmployeeDAO {

//    define field for entityManager
    private EntityManager entityManager;

//    set up constructor injection
    @Autowired
    public  EmployeeDAOImpl(EntityManager entityManager) {
        this.entityManager = entityManager;
    }

    @Override
    public List<Employee> findAll() {

//        create a query
        TypedQuery<Employee> theQuery = entityManager.createQuery("from Employee", Employee.class);

//        execute query and get result list
        List<Employee> employees = theQuery.getResultList();

//        return the result
        return employees;

    }

    @Override
    public Employee findById(int id) {
        Employee employee = entityManager.find(Employee.class, id);
        return employee;
    }

    @Override
    public Employee save(Employee employee) {

//        if id == 0 then insert/save else update
        Employee dbEmployee = entityManager.merge(employee);

//        it has updated id from the database (in the case of insert)
        return dbEmployee;
    }

    @Override
    public void deleteById(int id) {
        Employee employee = entityManager.find(Employee.class, id);
        entityManager.remove(employee);
    }

}
