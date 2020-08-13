const inquirer = require("inquirer");
const fs = require("fs");
var generateMarkdown = require("./utils/generateMarkdown.js");

console.log(generateMarkdown);

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
        {
            type: "input",
            name: "license",
            message: "Please list all npm packages used separated by commas",
        },

        {
            type: "input",
            name: "contributing",
            message: "Please enter any contributions to your site, such as collaborators or third-party assets:",
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
            message: "Please enter your github username:"
        }
    ])
};


promptUser()
    .then(data => {

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
    // //function to write README file
    // function writeToFile(fileName, data) {

    // }

    // //function to initialize program 
    // function init() {

    // }

    // //function call to initialize program 
    // init();