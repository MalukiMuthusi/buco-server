const nodemailer = require("nodemailer");

async function sendEmail(email, name) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "source.email.com",
      // TODO: set up email password
      pass: "********",
    },
  });

  try {
    const info = await transporter.sendMail({
      // TODO: use the correct email source
      from: "source@email.com",
      to: email,
      subject: "Build Construct",
      html: `Thank you ${name} for contacting us. \nWe will get in touch with you`,
    });
  } catch (e) {
    console.error(e);
  }
}
