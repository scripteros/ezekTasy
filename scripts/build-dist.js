const fs = require("node:fs");
const path = require("node:path");
const JavaScriptObfuscator = require("javascript-obfuscator");

const root = path.resolve(__dirname, "..");
const dist = path.join(root, "dist");

const jsOptions = {
  compact: true,
  controlFlowFlattening: true,
  controlFlowFlatteningThreshold: 0.45,
  deadCodeInjection: true,
  deadCodeInjectionThreshold: 0.12,
  disableConsoleOutput: true,
  identifierNamesGenerator: "hexadecimal",
  numbersToExpressions: true,
  renameGlobals: false,
  selfDefending: true,
  simplify: true,
  splitStrings: true,
  splitStringsChunkLength: 8,
  stringArray: true,
  stringArrayCallsTransform: true,
  stringArrayEncoding: ["base64"],
  stringArrayIndexShift: true,
  stringArrayRotate: true,
  stringArrayShuffle: true,
  stringArrayWrappersCount: 2,
  stringArrayWrappersType: "function",
  stringArrayThreshold: 0.76,
  transformObjectKeys: true,
  unicodeEscapeSequence: false
};

function cleanDir(dir) {
  fs.rmSync(dir, { force: true, recursive: true });
  fs.mkdirSync(dir, { recursive: true });
}

function ensureDir(filePath) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
}

function copyFile(from, to) {
  const target = path.join(dist, to);
  ensureDir(target);
  fs.copyFileSync(path.join(root, from), target);
}

function writeFile(to, content) {
  const target = path.join(dist, to);
  ensureDir(target);
  fs.writeFileSync(target, content);
}

function obfuscateFile(from, to) {
  const source = fs.readFileSync(path.join(root, from), "utf8");
  const result = JavaScriptObfuscator.obfuscate(source, jsOptions).getObfuscatedCode();
  writeFile(to, result);
}

function minifyCssFile(from, to) {
  const source = fs.readFileSync(path.join(root, from), "utf8");
  const minified = source
    .replace(/\/\*[\s\S]*?\*\//g, "")
    .replace(/\s+/g, " ")
    .replace(/\s*([{}:;,>])\s*/g, "$1")
    .replace(/;}/g, "}")
    .trim();
  writeFile(to, minified);
}

cleanDir(dist);

copyFile("manifest.json", "manifest.json");
copyFile("popup/popup.html", "popup/popup.html");
minifyCssFile("popup/popup.css", "popup/popup.css");
minifyCssFile("src/styles.css", "src/styles.css");
obfuscateFile("popup/popup.js", "popup/popup.js");
obfuscateFile("src/content.js", "src/content.js");

for (const file of fs.readdirSync(path.join(root, "assets"))) {
  copyFile(`assets/${file}`, `assets/${file}`);
}

console.log(`Versao ofuscada gerada em: ${dist}`);
