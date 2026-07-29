const dns = require("node:dns");
dns.setServers(["1.1.1.1", "8.8.8.8"]);

require("dotenv").config();
const mongoose = require("mongoose");

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_user}:${process.env.DB_password}@cluster0.zyt0fsy.mongodb.net/youtube?retryWrites=true&w=majority&appName=Cluster0`
  )
  .then(() => console.log("Connected"))
  .catch((err) => console.log(err));