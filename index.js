const inquirer = require('inquirer');
const fs = require('fs'); 
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

//Create an array of questions for user input
    inquirer
        .prompt([
            {
                type:'input',
                message: 'GitHub username:',
                name: 'git',
            },
            {
                type:'input',
                message: 'Email:',
                name: 'email',
               
            },
            {
                type: 'input',
                message: "what is the title of your project?" ,
                name: 'title',
            },
            {
                type: 'input',
                message: 'What is your project description?',
                name: 'description',
            },
            {
                type:'input',
                message: 'Please provide Installation instructions',
                name: 'installation',
            },
            {
                type:'input',
                message: 'Enter App usage information',
                name: 'usage',
            },
            {
                type:'input',
                message: 'Please provide contribution guidelines',
                name: 'contribution',
            },
            {
                type:'input',
                message: 'If applicable, please provide any test written for this application',
                name: 'tests',
            },
            {
                type:'list',
                message: 'What license did you use?',
                name: 'license',
                choices: ['The MIT License', 'Mozilla Public License 2.0', 'IBM Public License Version 1.0', 'GNU GPL v3', 'Apache 2.0 License'],
            },    
        ])
        .then (data =>{
            const writeToFile = generateMarkdown(data);
            fs.writeFile(`README.md`, writeToFile, (err) =>
                err? console.log(err) : console.log('Created your Readme'));
        })

    const generateMarkdown = (data) =>
  `# ${data.title}
  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contribution](#contribution)
  * [Test Instructions](#test-instructions)
  * [Contact Information](#contact-information)
  
  ### Description
  ${data.description}
  ### Installation
  ${data.installation}
  ### Usage
  ${data.usage}
  ### Contribution
  ${data.contribution}
  ### Test-Instructions
  ${data.tests}
  ### Contact-Information
  [Github Profile](https://github.com/${data.git})
  ${data.email}
`;


  
