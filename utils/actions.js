const departments = require("./departments");
const roles = require("./roles");
const employees = require("./employees");
const questions = require("./questionsCrud");

const actions = [
    {
        id: 1,
        name: "1 - View all Departments",
        query: departments.viewAllDepartments,
        title: 'All Departments',
        question: '',
        type: 'department'
    },
    {
        id: 2,
        name: "2 - View all Roles",
        query: roles.viewAllRoles,
        title: 'All Roles',
        question: '',
        type: 'role'
    },
    {
        id: 3,
        name: "3 - View all Employees",
        query: employees.viewAllEmployees,
        title: 'All Employees',
        question: '',
        type: 'employee'
    },
    {
        id: 4,
        name: "4 - View Employees by Manager",
        query: employees.viewAllEmployeesByManager,
        title: 'All Employees by Manager',
        question: '',
        type: 'employee'
    },
    {
        id: 5,
        name: "5 - View Employees by Department",
        query: employees.viewAllEmployeesByDepartment,
        title: 'All Employees by Department',
        question: '',
        type: 'employee'
    },
    {
        id: 6,
        name: "6 - Add a Department",
        query: departments.addDepartment,
        title: 'successfully created.',
        question: questions.addDepartmentQuestion,
        type: 'department'
    },
    {
        id: 7,
        name: "7 - Add a Role",
        query: roles.addRole,
        title: 'successfully created.',
        question: questions.addRoleQuestion,
        type: 'role'
    },
    {
        id: 8,
        name: "8 - Add an Employee",
        query: employees.addEmployee,
        title: 'successfully created.',
        question: questions.addEmployeeQuestion,
        type: 'employee'
    },
    {
        id: 9,
        name: "9 - Update Employee's Role",
        query: employees.updateEmployeeRole,
        title: 'successfully updated.',
        question: questions.updateEmployeeRoleQuestion,
        type: 'employee'
    },
    {
        id: 10,
        name: "10 - Update Employee's Manager",
        query: employees.updateEmployeeManager,
        title: 'successfully updated.',
        question: questions.updateEmployeeManagerQuestion,
        type: 'employee'
    },
    {
        id: 11,
        name: "11 - Delete Department",
        query: departments.deleteDepartment,
        title: 'successfully deleted.',
        question: questions.deleteDepartmentQuestion,
        type: 'department'
    },
    {
        id: 12,
        name: "12 - Delete Role",
        query: roles.deleteRole,
        title: 'successfully deleted.',
        question: questions.deleteRoleQuestion,
        type: 'role'
    },
    {
        id: 13,
        name: "13 - Delete Employee",
        query: employees.deleteEmployee,
        title: 'successfully deleted.',
        question: questions.deleteEmployeeQuestion,
        type: 'employee'
    },
    {
        id: 14,
        name: "14 - Quit",
        query: '',
        title: 'You have successfully closed the program',
        question: '',
        type: ''
    },
];

module.exports =  actions;