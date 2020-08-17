const express = require("express");
const mongoose = require('mongoose');
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
app.use(express.static(path.join(_dirname, 'client /build')));

// Define API routes here

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

mongoose.connect(process.env.MONGODB_URI || 'mongodb://<googlebooks>:<Ak174037!>@ds137271.mlab.com:37271/heroku_vzjw4zx7');


app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
