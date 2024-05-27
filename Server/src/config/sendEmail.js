const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, 
    auth: {
      user: "aryghz.software@gmail.com",
      pass: "lhbo ouzz nigf ntxm",
    },
    tls: { rejectUnauthorized: false }
  });

  module.exports = transporter;