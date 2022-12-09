const webpack = require("webpack");

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      fallback: {
        crypto: false,
        stream: require.resolve("stream-browserify"),
        path: require.resolve("path-browserify"),
        assert: false,
        util: false,
        http: false,
        https: false,
        os: false,
      },
    },
  });
};