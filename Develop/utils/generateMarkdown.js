// function to generate markdown template for README
function generateMarkdown(data) {
  return `# ${data.name}

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Description
${data.description}

## Installation 
${data.installation}

## Usage
${data.usage}

## License
${licenseBadge}


## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions 
### If you have any questions please contact me at:
Email: ${data.email}

Github: https://github.com/${data.github}

`
;
}

module.exports = generateMarkdown;

