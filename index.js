#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todo = [];
let condition = true;
console.log(chalk.hex('#00CCCC')("\n\t---------- WELCOME TO TO-DO LIST ----------\n"));
while (condition) {
    let question = await inquirer.prompt([
        {
            name: "select",
            message: chalk.hex('#FFDD00')("Would you like to: "),
            type: "list",
            choices: [chalk.hex('FF7D00')("Add Task"), chalk.hex('FF006D')("Remove Task"), chalk.hex('ADFF02')("Show My To-do List"), chalk.hex('8F00FF')("Exit")]
        }
    ]);
    if (question.select === chalk.hex('FF7D00')("Add Task")) {
        let addTask = await inquirer.prompt([
            {
                name: "question1",
                message: chalk.hex('#EB5828')("What do you want to add in your to-do list?"),
                type: "input"
            },
            {
                name: "question2",
                message: chalk.hex('#EB5828')("Are you sure you want to add more items in your to-do list?"),
                type: "confirm",
                default: "true"
            }
        ]);
        if (addTask.question2 === true) {
            todo.push(addTask.question1);
            console.log(chalk.hex('#7CFC00')("Task added successfully!!! \n"));
        }
        else {
            console.log(chalk.hex('#CC3399')("Did not added any task! \n"));
        }
    }
    else if (question.select === chalk.hex('FF006D')("Remove Task")) {
        let removeTask = await inquirer.prompt([
            {
                name: "remove",
                message: chalk.hex('#CCFF33')("Do you want to remove the last item in your list?"),
                type: "list",
                choices: [chalk.greenBright("Yes"), chalk.redBright("No")]
            }
        ]);
        if (removeTask.remove === chalk.greenBright("Yes")) {
            todo.pop();
            console.log(chalk.hex('#F2003C')("Task removed successfully!!! \n"));
        }
        else {
            console.log(chalk.hex('#45147E')("Did not remove any item on your list. \n"));
        }
    }
    else if (question.select === chalk.hex('ADFF02')("Show My To-do List")) {
        console.log(chalk.hex('#800080')("\n------ My To-do List ------\n"));
        todo.forEach((todo, index) => console.log(chalk.hex('#DDA0DD')(` ${index + 1}. ${todo} \n`)));
        console.log(chalk.hex('#800080')("---------------------------\n"));
    }
    else {
        condition = false;
    }
}
