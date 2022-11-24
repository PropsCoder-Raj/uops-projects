const nodemailer = require("nodemailer");

const emailHelper = async (option) => {
  const transporter = nodemailer.createTransport({
    service: process.env.SMTP_SERVICE,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const message = {
    from: "conatact@gratustech.com",
    to: option.email,
    subject: option.subject,
    text: option.message,
  };

  await transporter.sendMail(message);
};

module.exports = emailHelper;