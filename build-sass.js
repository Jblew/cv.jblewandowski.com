const fs = require("fs")
const sass = require("sass")
const result = sass.compile("scss/index.scss", { style: "compressed" });
const outCss = result.css
fs.writeFileSync("style.css", outCss)