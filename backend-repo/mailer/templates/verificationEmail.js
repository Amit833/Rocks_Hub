const env = require("../../config/config");

exports.verificationEmailTemplate = (user) => {
  return `<h4>Welcome to the Whatever finrocks hub Corporation</h4>
    <p>Please verify you account using the following lonk link</p>
    <a target="_blank" href="${env.frontendOrigin}/users/">${env.frontendOrigin}/users/</a>`;
};
