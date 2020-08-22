const badges = require("./badges");

// Function to generate README content
function generateAnswers(data) {
    data.badge = badges[data.license];
    return `
    # ${data.title}

    ${data.badge}

    ## Description

    ${data.description}
    `
}

module.exports = generateAnswers;