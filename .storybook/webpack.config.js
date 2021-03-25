const path = require("path");

module.exports = {
  resolve: {
    alias: {
      "@": path.dirname(path.resolve(__dirname)),
    },
  },
  module: {
    rules: [
      {
        test: /\.(svg|ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\?.*)?$/,
        loader: "file-loader",
      },
      /* PostCSS Support */
      {
        test: /\.s?css$/,
        // loaders: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
        loaders: [
          "style-loader",
          "css-loader",
          // Loader for webpack to process CSS with PostCSS
          {
            loader: "postcss-loader",
            options: {
              sourceMap: true,
              config: {
                path: "./.storybook/",
              },
            },
          },
          "sass-loader",
        ],
      },
    ],
  },
};
