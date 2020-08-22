// Initial variables needed
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const createMarkdown = require("./utils/markdown");

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
            "Mozilla Public 2.0"
        ]
    },
]

// Function to prompt user for questions
const promptQuestions = () => {
    return inquirer.prompt(questions);
}

// Write the file asynchronously and append
const writeFileAsync = util.promisify(fs.appendFile);

// Function to write the README
const writeReadme = (fileName, data) => {
    return writeFileAsync(fileName, data);
}

// Function to initialize asynchronously
const init = async () => {
    console.log("Welcome to the README Generator! Answer the questions to create yours.");
    try {
        // Get user answers for questions
        const answers = await promptQuestions();
        console.log(answers);

        const readmeContent = createMarkdown(answers);
        
        await writeReadme("./output/README.md", readmeContent);

        console.log("README.md successfully created!");

    } catch (err) {
        console.log("Error in creating README.md file.");
        console.log(err);
    }
}

init();