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
  return `# Project Title:
${answers.title}
## Project Description:
${answers.description}
---
## Table of Contents

## Installation:
    ${answers.installation}    
---
## Questions:
Please contact me via email [mailto:${answers.email}] if you have any questions about this project.
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
