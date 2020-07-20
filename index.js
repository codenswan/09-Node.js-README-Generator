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
      message: "What are the installation instructions?:",
    },
    {
      type: "input",
      name: "usage",
      message: "Enter information about the usage:",
    },
    {
      type: "input",
      name: "contribution",
      message: "What is the contribution information?:",
    },
    {
      type: "input",
      name: "test",
      message: "What are the test instructions?:",
    },
    {
      type: "list",
      name: "license",
      message: "What license are you using?:",
      choices: ["MIT", "MPL2.0", "Apache2.0", "ODbL", "ISC"],
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
}

function generateREADME(answers) {
  return `# Project Title: ${answers.title}
![License](https://img.shields.io/badge/License-${answers.license}-green)

This project was developed by ${answers.GitHub}.

### Table of Contents
* [Description](#Description)
* [Install Instructions](#Installation)
* [Usage](#Usage)
* [License](#License)
* [Contribution](#Contribution)
* [Tests](#Tests)
* [Questions](#Questions)

## Description:
${answers.description}

## Installation:
    ${answers.installation}
    
## Usage:
${answers.usage}

## License:
This application is licensed under ${answers.license}.

## Contribution:
${answers.contribution}

## Tests:
    ${answers.test}
---
## Questions:
Developed by ${answers.GitHub}. 
If you have any further questions please contact me at [rodger.swan@gmail.com](mailto:${answers.email}).
`;
}

async function init() {
  console.log("hi");
  try {
    const answers = await promptUser();

    const readme = generateREADME(answers);

    await writeFileAsync("README.md", readme);

    console.log("Successfully wrote your README file");
  } catch (err) {
    console.log(err);
  }
}

init();
