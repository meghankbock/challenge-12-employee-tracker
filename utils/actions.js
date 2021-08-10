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
        questions: '',
        type: 'department'
    },
    {
        id: 2,
        name: "2 - View all Roles",
        query: roles.viewAllRoles,
        title: 'All Roles',
        questions: '',
        type: 'role'
    },
    {
        id: 3,
        name: "3 - View all Employees",
        query: employees.viewAllEmployees,
        title: 'All Employees',
        questions: '',
        type: 'employee'
    },
    {
        id: 4,
        name: "4 - View Employees by Manager",
        query: employees.viewAllEmployeesByManager,
        title: 'All Employees by Manager',
        questions: '',
        type: 'employee'
    },
    {
        id: 5,
        name: "5 - View Employees by Department",
        query: employees.viewAllEmployeesByDepartment,
        title: 'All Employees by Department',
        questions: '',
        type: 'employee'
    },
    {
        id: 6,
        name: "6 - Add a Department",
        query: departments.addDepartment,
        title: 'successfully created.',
        questions: questions.addDepartment,
        type: 'department'
    },
    {
        id: 7,
        name: "7 - Add a Role",
        query: roles.addRole,
        title: 'successfully created.',
        questions: questions.addRole,
        type: 'role'
    },
    {
        id: 8,
        name: "8 - Add an Employee",
        query: employees.addEmployee,
        title: 'successfully created.',
        questions: questions.addEmployee,
        type: 'employee'
    },
    {
        id: 9,
        name: "9 - Update an Employee",
        query: employees.updateEmployee,
        title: 'successfully updated.',
        questions: questions.updateEmployee,
        type: 'employee'
    },
    {
        id: 10,
        name: "10 - Delete Department",
        query: departments.deleteDepartment,
        title: 'successfully deleted.',
        questions: questions.deleteDeparment,
        type: 'department'
    },
    {
        id: 11,
        name: "11 - Delete Role",
        query: roles.deleteRole,
        title: 'successfully deleted.',
        questions: questions.deleteRole,
        type: 'role'
    },
    {
        id: 12,
        name: "12 - Delete Employee",
        query: employees.deleteEmployee,
        title: 'successfully deleted.',
        questions: questions.deleteEmployee,
        type: 'employee'
    },
];

module.exports =  actions;