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

const startApp = async () => {
  const input = await inquirer.prompt(mainQuestions);
  menuHandler(input.action);
};

const menuHandler = (action) => {
  const id = action.charAt(0);
  let sql = ``;
  let title = "";
  let questions = [];
  let type = "";

  actions.forEach((item) => {
    if (item.id == id) {
      sql = item.query;
      title = item.title;
      questions = item.questions;
      type = item.type;
    }
  });

  if (!questions) {
    sqlQueryNoParams(sql, title);
  } else if (questions) {
    userPrompt(sql, title, questions);
  }
};

const userPrompt = async (sql, title, questions, type) => {
  const input = await inquirer.prompt(questions);
  if (type == "department") {
    const params = [input.name];
    sqlQueryParams(sql, title, params);
  } else if (type == "role") {
    const params = [input.name];
    sqlQueryParams(sql, title, params);
  } else if (type == "employee") {
    const params = [input.name];
    sqlQueryParams(sql, title, params);
  }

};

const sqlQueryParams = (sql, title, params) => {
    db.query(sql, params, (err, result) => {
      if (err) {
        console.log(err);
      }
      printResult(result, title);
    });
};

const sqlQueryNoParams = (sql, title) => {
      db.query(sql, (err, rows) => {
        if (err) {
          console.log(err);
        }
        printTable(rows, title);
      });
  };

const printTable = (rows, title) => {
  console.log("\n");
  console.table(title, rows);
  console.log("\n");
  return startApp();
};

const printResult = (result, title) => {
  console.log("\n");
  console.log(result);
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
