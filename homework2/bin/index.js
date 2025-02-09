#!/usr/bin/env node

const fs = require("fs");
const readline = require("readline");
const path = require("path");

const app = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Your project is ready to be created!");

app.question("What is the name of your project? ", (projectName) => {
  const filePath = path.resolve("output", `${projectName}.txt`);

  if (!fs.existsSync("output")) {
    fs.mkdirSync("output");
  }

  fs.writeFileSync(filePath, projectName);

  console.log(`Project created: ${filePath}`);
  app.close();
});
