import babel from "rollup-plugin-babel";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import replace from "rollup-plugin-replace";

export default {
  // input file
  input: "src/index.js",
  // output file
  output: {
    file: "dist/bundle.js",
    format: "cjs",
    compact: true
  },
  plugins: [
    babel({
      exclude: "node_modules/**"
    }),
    resolve(),
    commonjs(),
    replace({
      "process.env.NODE_ENV": process.env.NODE_ENV
    })
  ]
};
