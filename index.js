// Initial variables needed
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const createMarkdown = require("./utils/markdown.js");

// Array of questins to be used in prompt function
const questions = [
    {
        type: "input",
        name: "fullname",
        message: "What is your full name?"
    },
    {
        type: "input",
        name: "username",
        message: "What is your GitHub username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    },
    {
        type: "input",
        name: "title",
        message: "What is the name of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Describe your project."
    },
    {
        type: "input",
        name: "installation",
        message: "What are the steps to install your project?"
    },
    {
        type: "input",
        name: "usage",
        message: "What are the instructions for use?"
    },
    {
        type: "input",
        name: "contributing",
        message: "List any contributing parties involved."
    },
    {
        type: "input",
        name: "tests",
        message: "List any tests for your project."
    },
    {
        type: "list",
        name: "license",
        message: "Which license do you want to use?",
        choices: [
            "MIT",
            "Apache 2.0",
            "Unlicense",
            "Mozilla Publice 2.0"
        ]
    },
]

// Function to prompt user for questions
const promptQuestions = () => {
    return inquirer.prompt(questions);
}

promptQuestions();
