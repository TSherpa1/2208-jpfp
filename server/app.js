const express = require("express");
const path = require("path");
const cors = require("cors");
const volleyball = require("volleyball");
const app = express();
const index = require("./api");

//* added body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// static middleware
app.use(express.static(path.join(__dirname, "..", "public")));

app.use(cors());
app.use(volleyball);

//this is where some things should go
app.use("/api", index);

//* added to send index.html file (the single page which serves as the foundation of your app) to the server (without this you just hit the 404 route below regardless of your react routes)
//the server never runs your client side js code if it doesn't hit this route
app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "/public/index.html"));
});

app.use("*", (req, res, next) => {
  res.status(404).send("Page Not Found!");
});

app.use((err, req, res, next) => {
  res.status(err.status || 500).send(`Internal Server Error!`);
});

module.exports = app;
