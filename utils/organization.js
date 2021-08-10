const db = require("../db/connection");
const cTable = require("console.table");

const viewAllDepartments = () => {
    db.query(`SELECT * FROM departments`, (err,rows) => {
        if (err) {
            return err;
        }
        return console.table(rows);
    });
};

const viewAllRoles = () => {
    db.query(`SELECT * FROM roles`, (err,rows) => {
        if (err) {
            return err;
        }
        return console.table(rows);
    });
};

const viewAllEmployees = () => {
    db.query(`SELECT * FROM employees`, (err,rows) => {
        if (err) {
            return err;
        }
        return console.table(rows);
    });
};

const addDepartment = () => {

};

const addRole = () => {

};

const addEmployee = () => {

};

const updateEmployee = () => {

};

module.exports = {
    viewAllDepartments, 
    viewAllRoles, 
    viewAllEmployees, 
    addDepartment, 
    addRole, 
    addEmployee, 
    updateEmployee
}