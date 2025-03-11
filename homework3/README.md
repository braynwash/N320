# Homework 3

## About

This project is a simple Node.js web server that serves HTML files dynamically based on incoming requests. It includes basic routing logic to serve static pages. The server determines file types and serves the requested content when it's found. The server listens on port `3000` (or a custom port via `process.env.PORT`). If a directory is requested (e.g., `/index`), it serves `index.html` inside that folder

## How to Set Up

Ensure node is installed with `npm init` OR `npm install`.

## How to Run

When you're ready to run, simply run `dev` or `start` in NPM Scripts OR type `node server.js` to load the server. You can load the content by typing "localhost:3000" in the search bar.

# Week recap

In N320 this week, we learned how to make an incredibly simple web server and dynamically server content. While it isn't serving it through the URL, it serves a similar purpose using the built-in `path` and `fs` modules to look for specific files and serve them. While this project doesn't use much in the way of APIs, JSON, or Async functions, we also learned how to use the `async` and `await` function calls to respond to and fulfill Promises, allowing operations to run in the background and load when ready instead of the operation refusing to load anything else except the requested assets/materials, keeping the rest of the site from loading properly.
