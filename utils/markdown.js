const badges = require("./badges");

// Function to generate README content
function generateAnswers(data) {
    data.badge = badges[data.license];
    return `
# ${data.title}

${data.badge}

## Description
${data.description}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributing}

## Tests
${data.tests}

## License
${data.license}

## Questions

If you have any questions, please contact me at [${data.email}](mailto:${data.email}).\n
Check out my GitHub [profile!](https://github.com/${data.username})\n
©2020 ${data.fullname}`
}

// Export answers
module.exports = generateAnswers;