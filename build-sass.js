const fs = require("fs")
const path = require("path")
const fetch = require("node-fetch")
const sass = require("sass")

async function fetchSCSSVendor(url, modulename) {
    const vendorDir = path.join(__dirname, "scss", "vendor")
    fs.mkdirSync(vendorDir, { recursive: true })
    const filename = "_" + modulename + ".scss"
    const resp = await fetch(url)
    const contents = await resp.text()
    fs.writeFileSync(path.join(vendorDir, filename), contents)
}

function compileSASS(scrfile, outfile, options) {
    const srcpath = path.join(__dirname, "scss", scrfile)
    const dstpath = path.join(__dirname, outfile)
    const result = sass.compile(srcpath, options);
    fs.writeFileSync(dstpath, result.css)
}

async function main() {
    await fetchSCSSVendor("https://raw.githubusercontent.com/Jblew/gridlover-mixin/master/rhythm.scss", "rhythm")
    compileSASS("index.scss", "style.css", { style: "expanded" })
    compileSASS("index.scss", "style.min.css", { style: "compressed" })
}

main().catch(console.error)