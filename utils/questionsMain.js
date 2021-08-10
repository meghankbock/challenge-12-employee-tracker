const actions = require("./actions");

let actionsArray = [];

actions.forEach((action) => {
  actionsArray.push(action.name);
});

const mainQuestions = {
    type: "list",
    name: "action",
    message: "What would you like to do?",
    choices: actionsArray
  };

module.exports = mainQuestions;