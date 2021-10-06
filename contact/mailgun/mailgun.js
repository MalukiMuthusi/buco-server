const mailgun = require("mailgun-js");
require("dotenv").config();

const MAILGUN_API_KEY = process.env.MAILGUN_API_KEY;
const DOMAIN = process.env.DOMAIN;

function sendEmail(fromEmail, message) {
  const data = {
    from: fromEmail,
    to: `malukimuthusi@gmail.com, ${DOMAIN}`,
    subject: "Build Construct client consultation",
    text: message,
  };

  const mg = mailgun({ apiKey: MAILGUN_API_KEY, domain: DOMAIN });
  mg.messages().send(data, function (err, body) {
    if (err) {
      console.error(err);
      return;
    }
    console.log(body);
  });
}

module.exports = { sendEmail };
