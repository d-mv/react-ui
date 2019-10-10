const path = require("path");
// const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

// module.exports = ({ config, mode }) => {
//   config.resolve.plugins = [
//     new TsconfigPathsPlugin({
//       configFile: path.resolve(__dirname, "../tsconfig.json"),
//       baseUrl: path.resolve(__dirname, "../")
//     })
//   ];
//   config.module.rules.push({
//     test: /\.(ts|tsx)$/,
//     loader: require.resolve("babel-loader"),
//     options: {
//       presets: [["react-app", { flow: false, typescript: true }]]
//     }
//   });
//   config.resolve.extensions.push(".ts", ".tsx");
//   return config;
// };
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

module.exports = ({ config, mode }) => {
  // module.exports = (baseConfig, env, config) => {
  // To get tsconfig baseUrl working
  // There is likely a better way to extract the baseUrl from tsconfig.
  config.resolve.modules.push(path.resolve(__dirname, "../src"));

  // // To dramatically increase the build speed.
  // let rule = config.module.rules.find(rule => {
  //   const { loader } = rule.use[0];
  //   return loader && loader.includes("ts-loader");
  // });
  // rule.use[0].options.transpileOnly = true;
   config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve("babel-loader"),
    options: {
      presets: [["react-app", { flow: false, typescript: true }]]
    }
  });
    config.resolve.extensions.push(".ts", ".tsx");

  config.plugins.push(
    new ForkTsCheckerWebpackPlugin({
      // tslint: path.resolve(__dirname, "../tslint.json"),
      tsconfig: path.resolve(__dirname, "../tsconfig.json")
    })
  );
  return config;
};
