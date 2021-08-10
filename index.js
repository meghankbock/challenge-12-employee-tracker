const inquirer = require("inquirer");
const db = require("./db/connection");
const actions = require("./utils/actions");
const mainQuestions = require("./utils/questionsMain");
const crudQuestions = require("./utils/questionsCrud");
const cTable = require("console.table");

let actionsArray = [];

actions.forEach((action) => {
  actionsArray.push(action.name);
});

console.log("actionsArray: " + actionsArray);

const startApp = async () => {
  const input = await inquirer.prompt(mainQuestions);
  menuHandler(input.action);
};

const menuHandler = (action) => {
  console.log("action id" + action);
  const id = action.charAt(0) + action.charAt(1).trim();
  let sql = ``;
  let title = "";
  let question = "";
  let type = "";

  actions.forEach((item) => {
    if (item.id == id) {
      sql = item.query;
      title = item.title;
      question = item.questions;
      console.log("question: " + question);
      //questions.push(item.questions);
      type = item.type;
      console.log("type: " + type);
      console.log("title: " + title);
    }
  });

  if (!question) {
    console.log("sql no params");
    sqlQueryNoParams(sql, title, type);
  } else {
    console.log("sql params");
    console.log("sql: " + sql);
    console.log("title: " + title);
    console.log("type: " + type);
    userPrompt(sql, title, question, type);
  }
};

const userPrompt = async (sql, title, questions, type) => {
  let params = [];
  const input = await inquirer.prompt(questions);
  if (type == "department") {
    params = [input.name];
    sqlQueryParams(sql, title, params, type);
  } else if (type == "role") {
    if (input.id) {
      let roleId = (input.id.charAt(0) + input.id.charAt(1)).trim();
      params = [roleId];
    } else {
      let departmentId = (
        input.department.charAt(0) + input.department.charAt(1)
      ).trim();
      params = [input.title, input.salary, departmentId];
    }
    sqlQueryParams(sql, title, params, type);
  } else if (type == "employee") {
    params = [input.name];
    sqlQueryParams(sql, title, params, type);
  }
};

const sqlQueryParams = (sql, title, params, type) => {
    let id = 0;
  db.query(sql, params, (err, result) => {
    if (err) {
      console.log(err);
    } else if(result.insertId > 0) {
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
  console.log("\n");
  return startApp();
};

const printResult = (id, title, type) => {
    console.log("\n");
    console.log(type.toUpperCase() + " with ID " + id + " " + title);
    console.log("\n");
  return startApp();
};

db.connect((err) => {
  if (err) {
    console.log(err);
    throw err;
  }
  console.log("Database connected");
});

startApp();
