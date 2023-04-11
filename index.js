const express = require("express");
const { connection } = require("./db");

require("dotenv").config();
const cors = require("cors");


const app = express();
app.use(express.json());
app.use(cors());


app.listen(8080, async () => {
  try {
    await connection;
    console.log("connected to db");
  } catch (err) {
    console.log(err);
  }
  console.log("server is running at 8080");
});