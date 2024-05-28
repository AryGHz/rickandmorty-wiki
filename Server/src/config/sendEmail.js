const nodemailer = require("nodemailer");

const {NODEMAILER_HOST, NODEMAILER_PORT, NODEMAILER_EMAIL, NODEMAILER_PASSWORD}= process.env

const transporter = nodemailer.createTransport({

    host: `${NODEMAILER_HOST}`,
    port: NODEMAILER_PORT,
    secure: true, 
    auth: {
      user: `${NODEMAILER_EMAIL}`,
      pass: `${NODEMAILER_PASSWORD}`,
    },
    tls: { rejectUnauthorized: false }
  });

  module.exports = transporter;