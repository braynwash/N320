# CLI Tool

## About

This module includes a Command Line Interface tool that creates a project file for you after you input a project name.

## How to set up

After installing node with `npm init`, you can install this module with `npm install sp25-jerblac-cli`. This tool is ran in the terminal and requires no extra set up.

## How to run

This tool can be ran using the `index` npm script in Visual Studio Code OR typing `node index.js` in the terminal in the project directory. The terminal will prompt you for a project name- once you finish typing and press the enter key, a new file will be created in an `output` folder in the directory.

## Module link

https://www.npmjs.com/package/sp25-jereblac-cli

# Week recap

In N320 this week, we got deeper insight into Node basics from publically publishing/updating modules to OOP practices uing Node.js.

## Node Modules

Node offers many built-in and user made modules developers can install and use at anytime. Some important built-in modules are `path`, `fs`, and `readline.`

- Path: Dynamically pulls file paths across directories.
- fs: Allows devs to work with/edit files dynamically in a different file within a directory.
- readline: Prompts users to input information in the terminal.

All of these modules _can_ be used to create a Command Line Interface (CLI), a tool that allows users/devs the ability to use the terminal to create or edit information without creating it themselves.

## OOP principles

Object-Oriented program is HUGE across all programming languages, and learning how to utilize it in Node can help your project be optimized and organized. OOP relies on classes in JS which holds information that can be abstracted, edited, and/or inherited by another class. OOP classes can help ensure information isn't accidentally changed by having private variables, functions only get the information they need and aren't reading heaps of code just for 1-2 variables, and variables meant to be accessed widely can with a simple keyword `(static/super).`
