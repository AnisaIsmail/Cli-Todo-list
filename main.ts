#! /usr/bin/env node
import inquirer from "inquirer"
import chalk from "chalk";
let todos = [];
let condition = true;

while(condition)
{
let todoquestions = await  inquirer.prompt(
    [
        {
            name: "firstQuestion",
            type: "input",
            message:chalk.green("what would you like to add in your todos?"),
            transformer: (input) => {
                return chalk.red(input.toString());
            },
        },
        {
            name: "secondQuestion",
            type: "confirm",
            message: chalk.green("would you like to add more in your todos?"),
            defualt: "false"
        
        },
    ]
);
if(todoquestions.firstQuestion.trim() !== "") {
    todos.push(todoquestions.firstQuestion);
}
   console.log(chalk.blue(todos.join(' , '))); 

   condition = todoquestions.secondQuestion;
};

console.log(chalk.gray(`\n\tHere is your final todo list\n\t`));

todos.forEach((todos, index) =>{

    console.log(chalk.yellow(`${index + 1}. ${todos}`));
});







