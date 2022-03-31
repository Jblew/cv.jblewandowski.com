const fs = require("fs")
const sass = require("sass")
const result = sass.compile("scss/index.scss", { style: "expanded" });
fs.writeFileSync("style.css", result.css)
const resultCompressed = sass.compile("scss/index.scss", { style: "compressed" });
fs.writeFileSync("style.min.css", resultCompressed.css)