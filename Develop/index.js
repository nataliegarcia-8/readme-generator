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

        // {
        //     type: "checkbox",
        //     name: "license",
        //     message: "Please choose a licensing for your project:",
        //     choices: [
        //         {
        //             name: "Express",
        //             value: {
        //                 title: "Express",
        //                 link: "express"
        //             }
        //         },
        //         {
        //             name: "Inquirer",
        //             value: {
        //                 title: "Inquirer",
        //                 link: "inquirer"
        //             }
        //         },
        //     ]
        // },
        // {
        //     type: "input",
        //     name: "license",
        //     message: "Please list all npm packages used separated by commas",
        // },
        {
            type: "list",
            name: "license",
            message: "Please list all npm packages used separated by commas",
            choices: ["MIT", "Mozilla", "Github", "Eclipse", "Boost"]
        },

        {
            type: "input",
            name: "contributing",
            message: "Please enter your guidelines for contributions:"
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
        if(data.license === "MIT"){ licenseBadge = "`[![MIT](https://img.shields.io/badge/NPM-MIT-green.svg)](https://opensource.org/licenses/MIT)`"}
        console.log(data)

        fs.writeFile("README.md", generateMarkdown(data), "utf8", function (err) {

            if (err) {
                console.log(err)
            }

        })
        console.log("readme created")

    })
    .catch(function (error) {
        console.log("error");
    });