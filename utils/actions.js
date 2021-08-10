const departments = require("./departments");
const roles = require("./roles");
const employees = require("./employees");
const questions = require("./questions");

const actions = [
    {
        id: 1,
        name: "1 - View all Departments",
        query: departments.viewAllDepartments,
        title: 'All Departments',
        questions: ''
    },
    {
        id: 2,
        name: "2 - View all Roles",
        query: roles.viewAllRoles,
        title: 'All Roles',
        questions: ''
    },
    {
        id: 3,
        name: "3 - View all Employees",
        query: employees.viewAllEmployees,
        title: 'All Employees',
        questions: ''
    },
    {
        id: 4,
        name: "4 - View Employees by Manager",
        query: employees.viewAllEmployeesByManager,
        title: 'All Employees by Manager',
        questions: ''
    },
    {
        id: 5,
        name: "5 - View Employees by Department",
        query: employees.viewAllEmployeesByDepartment,
        title: 'All Employees by Department',
        questions: ''
    },
    {
        id: 6,
        name: "6 - Add a Department",
        query: departments.addDepartment,
        title: 'Updated Department List',
        questions: questions.addDepartment
    },
    {
        id: 7,
        name: "7 - Add a Role",
        query: roles.addRole,
        title: 'Updated Role List',
        questions: questions.addRole
    },
    {
        id: 8,
        name: "8 - Add an Employee",
        query: employees.addEmployee,
        title: 'Updated Employee List',
        questions: questions.addEmployee
    },
    {
        id: 9,
        name: "9 - Update an Employee",
        query: employees.updateEmployee,
        title: 'Updated Employee List',
        questions: questions.updateEmployee
    },
    {
        id: 10,
        name: "10 - Delete Department",
        query: departments.deleteDepartment,
        title: 'Updated Department List',
        questions: questions.deleteDeparment
    },
    {
        id: 11,
        name: "11 - Delete Role",
        query: roles.deleteRole,
        title: 'Updated Role List',
        questions: questions.deleteRole
    },
    {
        id: 12,
        name: "12 - Delete Employee",
        query: employees.deleteEmployee,
        title: 'Updated Employee List',
        questions: questions.deleteEmployee
    },
];

module.exports =  actions;