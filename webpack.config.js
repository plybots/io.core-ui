const path = require("path");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

const deps = require("./package.json").dependencies;

const createConfigTargets = (target = "umd") => {
  const libraryTarget = target == "esm" ? "commonjs-module" : target;
  const fileExt = target == "umd" ? "" : `.${target}`;

  return {
    entry: "./src/index.ts",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: `index${fileExt}.js`,
      libraryTarget,
      // library: 'core_ui',
      // library: {
      //   type: "commonjs-module",
      // },
    },
    externals: [...Object.keys(deps)],
    resolve: {
      extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
      plugins: [new TsconfigPathsPlugin({ configFile: "./tsconfig.json" })],
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
          test: /\.(ts|tsx|js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "ts-loader",
            options: {
              experimentalFileCaching: true,
            }
          },
        },
      ],
    },
    plugins: [
      // new DeclarationBundlerPlugin({moduleName:'CoreUI'})
    ]
  };
};

module.exports = [createConfigTargets(), createConfigTargets("esm")];
