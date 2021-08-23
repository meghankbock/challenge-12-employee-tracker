const inquirer = require("inquirer");
const db = require("./db/connection");
const actions = require("./utils/actions");
const mainQuestions = require("./utils/questionsMain");
const crudQuestions = require("./utils/questionsCrud");
const consoleTable = require("console.table");

const startApp = async () => {
  const input = await inquirer.prompt(mainQuestions);
  if (input) {
    menuHandler(input.action);
  } else {
    alert("promise error");
  }
};

const menuHandler = (action) => {
  const id = action.charAt(0) + action.charAt(1).trim();
  let sql = ``;
  let title = "";
  let question = "";
  let type = "";

  actions.forEach((item) => {
    if (item.id == id) {
      sql = item.query;
      title = item.title;
      question = item.question;
      type = item.type;
    }
  });

  if (!question && sql) {
    sqlQueryNoParams(sql, title, type);
  } else if (question && sql) {
    userPrompt(sql, title, question, type);
  } else {
    process.exit();
  }
};

const userPrompt = async (sql, title, questions, type) => {
  let params = [];
  let roleId;
  let departmentId;
  let managerId;
  let employeeId;
  const input = await inquirer.prompt(questions);
  if (type == "department") {
    if (input.id) {
      departmentId = (input.id.charAt(0) + input.id.charAt(1)).trim();
      params = [departmentId]; // delete department
    } else {
      params = [input.name]; // add department
    }
  } else if (type == "role") {
    if (input.id) {
      roleId = (input.id.charAt(0) + input.id.charAt(1)).trim();
      params = [roleId]; // delete role
    } else {
      departmentId = (
        input.department.charAt(0) + input.department.charAt(1)
      ).trim();
      params = [input.title, input.salary, departmentId]; // add role
    }
  } else if (type == "employee") {
    if (input.manager_id && !input.first_name && !input.last_name && !input.role_id && !input.id) {
      managerId = (input.manager_id.charAt(0) + input.manager_id.charAt(1)).trim();
      params = [managerId]; // search by manager
    } else if (input.department_id && !input.id) {
      departmentId = (input.department_id.charAt(0) + input.department_id.charAt(1)).trim();
      params = [departmentId]; // search by department
    } else if (input.role_id && input.id) {
      employeeId = (input.id.charAt(0) + input.id.charAt(1)).trim();
      roleId = (input.role_id.charAt(0) + input.role_id.charAt(1)).trim();
      params = [roleId, employeeId]; // update role
    } else if (input.manager_id && input.id) {
      employeeId = (input.id.charAt(0) + input.id.charAt(1)).trim();
      managerId = (input.manager_id.charAt(0) + input.manager_id.charAt(1)).trim();
      params = [managerId, employeeId]; // update manager
    } else if (input.id) {
        employeeId = (input.id.charAt(0) + input.id.charAt(1)).trim();
        params = [employeeId]; // delete employee
    } else {
      managerId = (input.manager_id.charAt(0) + input.manager_id.charAt(1)).trim();
      roleId = (input.role_id.charAt(0) + input.role_id.charAt(1)).trim();
      params = [
        input.first_name,
        input.last_name,
        roleId,
        managerId,
      ]; // add employee
    }
  }
  sqlQueryParams(sql, title, params, type);
};

const sqlQueryParams = (sql, title, params, type) => {
  let id = 0;
  if (sql.includes("SELECT")) {
    db.query(sql, params, (err, rows) => {
      if (err) {
        console.log(err);
      }
      if (rows.length == 0) {
        console.log("\nNo results founds\n");
        return startApp();
      } else {
      printTable(rows, title);
      }
    });
  } else {
    db.query(sql, params, (err, result) => {
      if (err) {
        console.log(err);
      } else if (result.insertId > 0) {
        id = result.insertId;
      } else {
        id = params[0];
      }
      printResult(id, title, type);
    });
  }
};

const sqlQueryNoParams = (sql, title, type) => {
  db.query(sql, (err, rows) => {
    if (err) {
      console.log(err);
    }
    printTable(rows, title);
  });
};

const printTable = (rows, title, type) => {
  console.log("\n");
  console.table(title, rows);
  return startApp();
};

const printResult = (id, title, type) => {
  console.log("\n");
  console.log(type.toUpperCase() + " with ID " + id + " was " + title);
  console.log("\n");
  return startApp();
};

startApp();
