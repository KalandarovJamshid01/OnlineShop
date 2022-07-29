const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config({ path: "./../.env" });

const mail = async (options) => {
  const transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });
  const mailOptions = {
    from: options.from,
    to: options.to,
    subject: options.subject,
    text: options.text,
    html: options.html,
  };
  try {
    await transport.sendMail(mailOptions);
  } catch (error) {
    console.log(error);
  }
};
module.exports = mail;
