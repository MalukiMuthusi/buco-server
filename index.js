require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT;
const contact = require("./contact/contact");

const urlEncodedParser = express.urlencoded({ extended: false });
app.use(urlEncodedParser);

app.use(express.json());
app.use("/contact", contact);

app.use(function (err, req, res, next) {
  res.status(500);
  res.render("error", { error: err });
  next();
});

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
