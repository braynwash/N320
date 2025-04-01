const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "views")));

const port = process.env.PORT || 14755;

app.listen(port);

console.log(`Server running! http://localhost:${port}`);
