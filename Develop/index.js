// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of the project?',
        name: 'title',
      },

      {
        type: 'input',
        message: 'What is the description of the project?',
        name: 'description',
      },

      {
        type: 'input',
        message: 'What are the installation instructions for the project?',
        name: 'installation',
      },

      {
        type: 'input',
        message: 'How is your project used?',
        name: 'usage',
      },

      {
        type: 'input',
        message: 'What are your project contribution guidelines?',
        name: 'contribution',
      },

      {
        type: 'input',
        message: 'What are the testing instructions for the project?',
        name: 'test',
      },

      {
        type: 'list',
        message: 'What licenses are need for this project?',
        name: 'license',
        choices: ['MIT', 'ISC', 'None of the above']
      },

      {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username',
      },

      {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
      },



];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}