#!/usr/bin/env node 

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.redBright("\n\t WeLcome to Todo LisT\n"));

let todos: string[] = [];

let condition = true;

while (condition) {
    let todoList: { todos: string } = await inquirer.prompt([
        {
            name: "todos",
            message: "Select one What you want to do in your todo list ",
            type: "list",
            choices: ["Add Task", "View Task", "Update Task", "Exit"]
        },
    ]);
    if (todoList.todos === "Add Task") {
        let addTask: { add: string } = await inquirer.prompt(
            {
                name: "add",
                message: "Write your task you want to add",
                type: "input"
            }
        );
        todos.push(addTask.add);

        console.log(chalk.blueBright(`Tasks: ${todos}\n`));

    }else if (todoList.todos === "View Task") {
        console.log(chalk.bgGray(`Task: ${todos}\n`));

    }else if (todoList.todos === "Update Task") {
        let updateTask: { update: string } = await inquirer.prompt([
            {
                name: "delete",
                message: "Choose the task you want to Update in your todo list",
                type: "list",
                choices: todos,
            }
        ]);
        let writeUpdate: { writeUpdate: string } = await inquirer.prompt({
            name: "writeUpdate",
            message: "write updated Task in your todo list",
            type: "input"
        });
        let newTodo = todos.filter((todo) => todo !== updateTask.update);
        todos = [...newTodo, writeUpdate.writeUpdate];

    }else if (todoList.todos === "Exit") {
        console.log(chalk.whiteBright("Exiting ***"));
        condition = false;
        console.log("Thank you")
    }
}