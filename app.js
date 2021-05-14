//This file handles the expresss middleware
const express = require("express");

const app = express();

app.use("", (req, res, next) => {
  //app running on any domain is alloweed to access the resource
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200");
  //to restrict the headers
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With, Content-Type, X-Auth-Token, Accept"
  );
  // to restrict which http words can be used in request
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.use("/api/posts", (req, res, next) => {
  return res.status(201).json({ message: "Response from server" });
});

module.exports = app;
