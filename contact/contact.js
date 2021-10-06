const express = require("express");
const { sendEmail } = require("./mailgun/mailgun");
const router = express.Router();

router.post("/", function (req, res) {
  sendEmail(req.body.email, req.body.message);

  res.send({ status: "success" });
});

module.exports = router;
