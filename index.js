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
  // TODO: use the appropriate url, for prod show the prod url, for staging show the staging url
  const url = process.env.URL;
  console.log(`app listening at ${url}:${port}`);
});
