const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');

const transporter = nodemailer.createTransport(
  smtpTransport({
    service: 'gmail',
    auth: {
      user: 'mauriciodelgado1300@gmail.com',
      pass: 'ithqujgpukrxicxp',
    },
  })
);

function sendMail(formData) {
  const mailOptions = {
    from: 'mauriciodelgado1300@gmail.com',
    to: 'mikedeeptroath@gmail.com',
    subject: 'New message from your website',
    html: `
      <h2>New message from your website:</h2>
      <p><strong>Name:</strong> ${formData.name}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Message:</strong> ${formData.message}</p>
    `,
  };

  return transporter.sendMail(mailOptions);
}

module.exports = { sendMail };
