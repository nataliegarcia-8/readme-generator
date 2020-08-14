// load modules
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

//command line prompt to fill in readme
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
            message: "Please select the license needed for your project",
            choices: ["MIT", "Mozilla", "Apache", "Eclipse"]
        },

        {
            type: "input",
            name: "contributing",
            message: "Please enter your guidelines for contributors:"
        },

        {
            type: "input",
            name: "tests",
            message: "Please enter test information for your project:"
        },

        {
            type: "input",
            name: "email",
            message: "Please enter the email you would like to be contacted for your project:"
        },

        {
            type: "input",
            name: "github",
            message: "Please enter your Github username:"
        }
    ])
};

//creates and writes readme using input provided
promptUser()
    .then(data => {
        //prints badges
        if(data.license === "MIT"){ licenseBadge = "[![MIT](https://img.shields.io/badge/NPM-MIT-green.svg)](https://opensource.org/licenses/MIT)"}
        if(data.license === "Mozilla"){ licenseBadge = "[![MPL-2.0](https://img.shields.io/badge/NPM-MPL-green.svg)](https://opensource.org/licenses/MPL-2.0)"}
        if(data.license === "Apache"){ licenseBadge = "[![Apache](https://img.shields.io/badge/NPM-Apache-green.svg)](https://opensource.org/licenses/Apache-2.0)"}
        if(data.license === "Eclipse"){ licenseBadge = "[![EPL](https://img.shields.io/badge/NPM-EPL-green.svg)](https://opensource.org/licenses/EPL-2.0)"}
        console.log(data)
        
    // })
    // .then(data => {
            fs.writeFile("README.md", generateMarkdown(data), "utf8", function (err) {
    
                if (err) {
                    console.log(err)
                }
    
            })
            console.log("readme created")
    })
    .catch(function (error) {
        console.log(error);
    });