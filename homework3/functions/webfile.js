const path = require("path");

class WebFile {
  filename = "";

  static mimeTypes = {
    ".html": "text/html",
    ".css": "text/css",
    ".js": "text/javascript",
  };

  constructor(filename) {
    this.filename = filename;
  }

  getExtension() {
    return path.extname(this.filename);
  }

  getMimeType() {
    const fileExtension = this.getExtension();
    return WebFile.mimeTypes[fileExtension] || "text/plain";
  }
}

module.exports = WebFile;
