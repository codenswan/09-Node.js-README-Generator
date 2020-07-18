// const inquirer = require("inquirer");
// const fs = require("fs");

// inquirer
//   .prompt([
//     {
//       type: "input",
//       name: "title",
//       message: "Enter the title of your project:",
//     },
//     {
//       type: "input",
//       name: "description",
//       message: "Describe your project:",
//     },
//     {
//       type: "input",
//       name: "installation",
//       message: "What are the installation instructions?"
//     },
//     {
//       type: "input",
//       name: "GitHub",
//       message: "What is your GitHub username?:",
//     },
//     {
//       type: "input",
//       name: "email",
//       message: "What is your email address?:",
//     },
//   ])
//   .then(function (data) {
    
//     fs.writeFile(
//       "README.md",
//       `# Project Title: ${data.title}
// ## Description
// ${data.description}
// ---
// ## Questions
// ### GitHub profile: ${data.GitHub}
// ### Email: [mailto:${data.email}]
// `,
//       function (err) {
//         if (err) {
//           return console.log(err);
//         }

//         console.log("Success!");
//       }
//     );
//   });


