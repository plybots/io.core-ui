const path = require("path");
const deps = require("./package.json").dependencies;
const createConfigTargets = ({ clean = false, target = "umd" }) => {
  const libraryTarget = target == "esm" ? "commonjs-module" : target;
  const fileExt = target == "umd" ? "" : `.${target}`;

  return {
    entry: "./src/index.ts",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: `index${fileExt}.js`,
      libraryTarget,
      clean,
    },
    externals: [...Object.keys(deps)],
    
    resolve: {
      extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
    },
    module: {
      rules: [
        {
          test: /\.m?js/,
          type: "javascript/auto",
          resolve: {
            fullySpecified: false,
          },
        },
        {
          test: /\.(css|s[ac]ss)$/i,
          use: ["style-loader", "css-loader", "postcss-loader"],
        },
        {
          test: /\.(ts|tsx|js|jsx|.json)$/,
          exclude: /node_modules/,
          use: {
            loader: "ts-loader",
            options: {
              experimentalFileCaching: true,
              // // using lib because we do not want webpack to compile declarations we will use tsc
              configFile: "tsconfig.lib.json"
            },
          },
        },
      ],
    },
    plugins: [],
  };
};

module.exports = [
  createConfigTargets({ clean: true }),
  createConfigTargets({ target: "esm" }),
];
