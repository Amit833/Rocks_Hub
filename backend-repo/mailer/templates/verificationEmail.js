const env = require("../../config/config");

exports.verificationEmailTemplate = (user) => {
  return `<h2>Welcome to  finrocks hub Corporation</h2>
    <p>Congratulations! You had completed the first Step</p>
    <a target="_blank" href="${env.frontendOrigin}/users/verify/${user.emailVerificationToken}">Dear ${user.firstName} please verify your email</a>`;
  // <a target="_blank" href="${env.frontendOrigin}">Go to Our Home page</a>`;
};
