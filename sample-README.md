# Professional README Generator

  <a href="https://img.shields.io/badge/License-MIT-brightgreen"><img src="https://img.shields.io/badge/License-MIT-brightgreen"></a>

  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contribution](#contribution)
  * [Test Instructions](#test-instructions)
  * [Contact Information](#contact-information)
  * [License](#license)
  
  
  ## Description
  When creating an open source project, it's important to have a high quality README that explains the purpose and process of the project. For this project, the aim is to create a README generator that helps the user to create a professional README template to be used in any project. This generator will allow the user to devote more time to working on the project.
  ## Installation
  In order to install the README generator app, the user must install the [`inquirer npm`](https://www.npmjs.com/package/inquirer) that will enable prompts of input on the command line. In order to install the inquirer npm, the user must run `npm install` on the command line and that will install the npm package and it's dependencies. Once that is installed, the app itself will start once `node index` is run on the command line.
  ## Usage
  When the user runs `node index`, the inquirer package prompts you in the command line with a series of questions that were created to help build out the README. These questions ask for general information about the user's contact information, licenses choices, projects names etc. All the information needed to create a good README. Once this information is entered `fs.writeFile` is used to asynchronously write data to the file created.Please see the demo below:
  ## Contribution
  Contributions are welcomed. If a Developer would like to contribute to this app, they are welcome to fork this repo or create a pull request to provide fixes or other contributions to this projects.
  ## Test-Instructions
  Currently there are no tests for this application but will update the repo once one is available.
  ## Contact-Information
  * GitHub: [crystal-g-b](https://github.com/crystal-g-b)
  * Email: crystal.barnett1@gmail.com
  ## License: MIT
