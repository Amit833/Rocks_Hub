const nodemailer = require("nodemailer");
const env = require("../config/config");
const { verificationEmailTemplate } = require("./templates/verificationEmail");

// Create a connection to your gmail account
let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: env.email,
    pass: env.email_pass,
  },
});

exports.sendVerificationEmail = async (user) => {
  const mailOptions = {
    from: env.email,
    to: user.email,
    subject: "Account Verification - WHATEVER finrocks CORP",
    text: `Heyyyyy`,
    html: verificationEmailTemplate(user),
  };

  try {
    // Shoot the email
    await transporter.sendMail(mailOptions);
    console.log(`Send verification email to user ${user.firstName}`);
  } catch (error) {
    console.log(error);
  }
};
