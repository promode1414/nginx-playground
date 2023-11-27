// app.js
const express = require("express");
const app = express();

const port = process.env.PORT || 9999;
const appId = process.env.APPID || "No APPID provided";

app.get("/", (req, res) => {
  res.send(`The APPID is: ${appId}`);
});

app.get("/app1", (req, res) => {
  res.send(`The APPID is: ${appId}, and you accessed /app1`);
});

app.get("/app2", (req, res) => {
  res.send(`The APPID is: ${appId}, and you accessed /app2`);
});

app.get("/admin", (req, res) => {
  res.send(`The APPID is: ${appId}, and you accessed /admin`);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
