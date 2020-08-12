console.log("Hellooo, Node!")

const inquirer = require("inquirer");
const fs = require("fs");
var generateMarkdown = require("./utils/generateMarkdown.js");

console.log(generateMarkdown);

// fs.writeFile("README.md", answers, function(err) {})
function promptUser() {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Please enter the name for your project:"

        },

        {
            type: "input",
            name: "description",
            message: "Please enter the description for your project:"
        },

        {
            type: "input",
            name: "table of contents",
            message: "Please enter the table of contents for your project:"
        },

        {
            type: "input",
            name: "installation",
            message: "Please enter the installation instructions for your project:"
        },

        {
            type: "input",
            name: "usage",
            message: "Please enter the usage information for your project:"
        },

        {
            type: "list",
            name: "license",
            message: "Please choose a licensing for your project:", 
            choices: ["license1", "license2", "license3"]
        },

        {
            type: "list",
            name: "contributing",
            message: "Would you like contribution?",
            choices: ["yes", "no"],
        },

        {
            type: "input",
            name: "tests",
            message: "Please enter test information for your project:"
        },

        {
            type: "input",
            name: "questions",
            message: "Please enter your contact information for your project:"
        }
    ])};


    promptUser()
    .then(answer => {

    })

    .catch(error => {
        if(error.isTtyError) {
        }else {

        }
    });

    //function to write README file 
    function writeToFile(fileName, data) {

    }

    //function to initialize program 
    function init() {

    }

    //function call to initialize program 
    init();