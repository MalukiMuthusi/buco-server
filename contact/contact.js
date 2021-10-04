const express = require("express");
const router = express.Router();

router.post("/", function (req, res) {
  // TODO: send email address to the provided email of the client
  console.log(req.body);

  res.send(req.body);
});

module.exports = router;
