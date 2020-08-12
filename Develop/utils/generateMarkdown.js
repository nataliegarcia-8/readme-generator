// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.name}

## Table of Contents
1. [Description] 
2. [Installation] 

## Description
${data.description}

## Installation 
${data.installation}

## Usage
${data.usage}

## License
${data.license}

## Contributing 
${data.contributing}

## Tests
${data.tests}

## Questions 
# If you have any questions please contact me at:
${data.questions}
`
;
}
module.exports = generateMarkdown;

