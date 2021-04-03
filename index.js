// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs'); 
const util = require('utils');

const generateMarkdown = require('./utils/generateMarkdown.js');

const writeFileAsync = util.promisify(fs.writeToFile);

// Create an array of questions for user input
const questions = () => {
    return inquirer
        .prompt([
            {
                type:'input',
                message: 'GitHub username:',
                name: 'git',
                //validate: (value) =>{ if(value){return true} else {return 'I need a value to continue'}}
            },
            {
                type:'input',
                message: 'Email:',
                name: 'email',
                //validate: (value) =>{ if(value){return true} else {return 'I need a value to continue'}},
            },
            {
                type: 'input',
                message: "what is the title of your project?" ,
                name: 'title',
                //validate: (value) =>{ if (value){return true} else {return 'I need a value to continue'}},
            },
            {
                type: 'input',
                message: 'What is your project description?',
                name: 'description',
                //validate: (value) =>{ if(value){return true} else {return 'I need a value to continue'}}
            },
            {
                type:'input',
                message: 'Please provide Installation instructions',
                name: 'installation',
                //validate: (value) =>{ if(value){return true} else {return 'I need a value to continue'}}
            },
            {
                type:'input',
                message: 'Enter App usage information',
                name: 'usage',
                //validate: (value) =>{ if(value){return true} else {return 'I need a value to continue'}}
            },
            {
                type:'input',
                message: 'Please provide contribution guidelines',
                name: 'contribution',
                //validate: (value) =>{ if(value){return true} else {return 'I need a value to continue'}}
            },
            {
                type:'input',
                message: 'If applicable, please provide any test written for this application',
                name: 'tests',
                //validate: (value) =>{ if(value){return true} else {return 'I need a value to continue'}}
            },
            {
                type:'list',
                message: 'What license did you use?',
                name: 'license',
                choices: ['The MIT License', 'Mozilla Public License 2.0', 'IBM Public License Version 1.0', 'GNU GPL v3', 'Apache 2.0 License'],
                //validate: (value) =>{ if(value){return true} else {return 'I need a value to continue'}}
            },    
        ])
}; 
       

    
   

// Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data), (err) => {
        if (err) {
            return console.log(err);
        }
    }
}

