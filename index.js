const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "Enter the title of your project:",
    },
    {
      type: "input",
      name: "description",
      message: "Describe your project:",
    },
    {
      type: "input",
      name: "installation",
      message: "What are the installation instructions?"
    },
    {
     type: "input",
     name: "usage",
     message: "Enter information about the usage", 
    },
    {
      type: "input",
      name: "contribution",
      message: "What is the contribution information?"
    },
    {
      type: "input",
      name: "test",
      message: "What are the test instructions?"
    },
    {
      type: "list",
      name: "license",
      message: "What license are you using?",
      choices: 
      [
        "MIT", 
        "Mozilla Public 2.0", 
        "Apache 2.0", 
        "Boost Software 1.0",
        "GNU GPLv3",
      ]
    },
    {
      type: "input",
      name: "GitHub",
      message: "What is your GitHub username?:",
    },
    {
      type: "input",
      name: "email",
      message: "What is your email address?:",
    },  
  ]);
};

function generateREADME(answers) {
  return `# Project Title: ${answers.title}
![${answers.license}](https://img.shields.io/github/license/codenswan/09-Node.js-README-Generator?style=flat)

### Table of Contents
*[Description](# Project Description:)
*[Install Instructions](# Installation:)
*[Usage]()
*[License]()
*[Contributing]()
*[Tests]()
*[Questions](### Questions:)

### Project Description:
${answers.description}

### Installation:
    ${answers.installation}
    
### Usage:

---
### Questions:
Developed by ${answers.GitHub}. Please contact me via email [${answers.email}](mailto:${answers.email}) if you have any questions about this project.
`;
}

async function init() {
  console.log("hi")
  try {
    const answers = await promptUser();

    const readme = generateREADME(answers);

    await writeFileAsync("README.md", readme);

    console.log("Successfully wrote your README file");
  } catch(err) {
    console.log(err);
  }
}

init();
