const fs = require("fs");
const path = require("path");

const rootPackage = require("../package.json");

const buildDir = path.resolve(__dirname, "../build");

const packageJson = {
  name: rootPackage.name,
  version: rootPackage.version,
  description: rootPackage.description,

  main: "./cjs/index.js",
  module: "./esm/index.js",
  types: "./src/index.d.ts",

  files: [
    "cjs",
    "esm",
    "src"
  ],

  dependencies: rootPackage.dependencies,
  peerDependencies: rootPackage.peerDependencies,

  publishConfig: {
    registry: "https://npm.pkg.github.com"
  }
};

fs.mkdirSync(buildDir, { recursive: true });

fs.writeFileSync(
  path.join(buildDir, "package.json"),
  JSON.stringify(packageJson, null, 2)
);

// console.log("✅ build/package.json created");