const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env) => {
  const isProduction = (env==='production');
  const MiniCSSExtract = new MiniCssExtractPlugin({ filename: 'styles.css' });
  return {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'public'),
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.s?css$/i,
          use: [MiniCssExtractPlugin.loader, 'css-loader','sass-loader'],
        }
      ]
    },
    plugins: [MiniCSSExtract],
    devtool: isProduction?'source-map':'inline-source-map',
    devServer: {
      contentBase: path.resolve(__dirname, 'public')
    }
  };
}