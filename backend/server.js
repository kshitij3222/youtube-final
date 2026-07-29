const express = require("express");
require("./Database/database");
const router = require("./Router/router");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");

const port = process.env.PORT || 3000;

// CORS
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://YOUR-VERCEL-APP.vercel.app",
    ],
    credentials: true,
  })
);

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

app.use(router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});