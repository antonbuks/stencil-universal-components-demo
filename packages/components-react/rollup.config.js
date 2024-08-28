const typescript = require("@rollup/plugin-typescript");
const commonJS = require("rollup-plugin-commonjs");

const plugins = [
  commonJS(), // Convert common js modules to es6.
  typescript(), // Transpiles our TypeScript code into JavaScript.
];

module.exports = {
  input: `./src/index.ts`,
  output: [
    {
      name: "index",
      file: `dist/index.js`,
      format: "cjs",
      sourcemap: true,
    },
    {
      name: "index",
      file: `dist/index.es.js`,
      format: "esm",
      sourcemap: true,
    },
    {
      name: "index",
      file: `dist/index.umd.js`,
      format: "umd",
      sourcemap: true,
    },
  ],
  plugins,
};
