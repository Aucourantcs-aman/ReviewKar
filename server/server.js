// Imports
import express from "express";
import { configDotenv } from "dotenv";








// Variables
configDotenv();
const port = process.env.PORT || 3000;
const app = express();




app
  .get("/", (req, res) => {
    res.send("Hello world");
  })
  .listen(port, () => {
    console.log(`server is running at ${port}`);
  });
