const inquirer = require("inquirer");
const db = require("./db/connection");
const actions = require("./utils/actions");
const mainQuestions = require("./utils/questionsMain");
const crudQuestions = require("./utils/questionsCrud");
const consoleTable = require("console.table");

const startApp = async () => {
  const input = await inquirer.prompt(mainQuestions);
  if(input) {
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
  const input = await inquirer.prompt(questions);
  if (type == "department") {
    if (input.id) {
      departmentId = (input.id.charAt(0) + input.id.charAt(1)).trim();
      params = [departmentId];
    } else {
      params = [input.name];
    }
  } else if (type == "role") {
    if (input.id) {
      roleId = (input.id.charAt(0) + input.id.charAt(1)).trim();
      params = [roleId];
    } else {
      departmentId = (
        input.department.charAt(0) + input.department.charAt(1)
      ).trim();
      params = [input.title, input.salary, departmentId];
    }
  } else if (type == "employee") {
    params = [input.name];
  }
  sqlQueryParams(sql, title, params, type);
};

const sqlQueryParams = (sql, title, params, type) => {
  let id = 0;
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
  return startApp();
};

startApp();
