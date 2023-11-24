const path = require("path");
// const SriPlugin = require("webpack-subresource-integrity");
// const HtmlWebpackPlugin = require("html-webpack-plugin");

const { override, addLessLoader } = require("customize-cra");

const overrideProcessEnv = (value) => (config) => {
  config.resolve.modules = [path.join(__dirname, "src")].concat(config.resolve.modules);
  return config;
};

// const addSRIPlugin = (config) => {
//   config.output.crossOriginLoading = "use-credentials";
//   config.plugins.push(
//     new SriPlugin({
//       hashFuncNames: ["sha256", "sha384"],
//       enabled: true
//     })
//   );
//   return config;
// };

// const hmltWebpackPlugin = (config) => {
//   config.entry = "./src/index.tsx";
//   config.output.filename = "./index.js";
//   config.output.path = "./";
//   config.plugins.push = new HtmlWebpackPlugin({
//     hash: true,
//     template: "index.html"
//   });
//   return config;
// };

module.exports = override(
  addLessLoader({
    javascriptEnabled: true
  }),
  overrideProcessEnv({
    VERSION: JSON.stringify(require("./package.json").version)
  })
  // addSRIPlugin
  // hmltWebpackPlugin
);
