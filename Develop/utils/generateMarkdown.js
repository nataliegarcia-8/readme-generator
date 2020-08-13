// function to generate markdown for README
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
${data.license.name}


## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions 
### If you have any questions please contact me at:
Email: ${data.email}
Github: ${data.github}

${printLicenses(data.license)}
`
    ;
}

function printLicenses(str) {
  const arr = str.split(",").map(x => x.trim()).map(x => x.replace("-", '&#45;'))
  const markdown = []
  for (let i = 0; i < arr.length; i++) {
    const link = `[![Generic badge](https://img.shields.io/badge/NPM-${arr[i]}-green.svg)](https://www.npmjs.com/package/${arr[i]})`;
    markdown.push(link)
  }
  return markdown.join(" ")
}
module.exports = generateMarkdown;

