const nodemailer = require("nodemailer");

async function sendEmail(email, name) {
  const transporter = nodemailer.createTransport({});
  const info = await transporter.sendMail({
    from: "source@email.com",
    to: email,
    subject: "Build Construct",
    html: `Thank you ${name} for contacting us. \nWe will get in touch with you`,
  });
}
