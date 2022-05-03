// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    return `![Badge](https://https://img.shields.io/badge/License-ISC-yellow)`
  }
   


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}
// Use for license link? https://choosealicense.com/


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}



// TODO: Create a function to generate markdown for README 
const generateMarkdown = data => {
  return `# ${data.title}
  ![License](https://img.shields.io/badge/License-ISC-yellow)

  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributors](#contribution)
  * [Tests](#test)
  * [License](#license)
  * [Questions](#questions)
  
  ## Description 
  ${data.description}
  
  ## Installation 
  ${data.installation}

  ## Usage 
  ${data.usage}

  ## Contributors
  ${data.contribution}

  ## Tests
  ${data.test}

  ## License 
  The application is covered under the ${data.license} license.
 

  ## Questions
  Should there be any comments and/or inquiry's, please feel free to contact me at ${data.email}. Also, you can search for my repo on GitHub by entering ${data.username} or you can view my projects at https://github.com/${data.username}you .

`;
} 

module.exports = generateMarkdown
