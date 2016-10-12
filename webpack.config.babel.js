import path from 'path'
import webpack from 'webpack';

module.exports = {
  entry: {
    app: [

      /*****************************************************************

        ACHTUNG! If you reverse the order of the following entry point
        it will break the `libraryTarget` things at line 33.
        Webpack dev server must be first.

      *****************************************************************/

      'webpack-dev-server/client?/', // Inlines auto-refresh code
      'webpack/hot/dev-server',      // Hot Module Replacement

      './src/index.js',
    ],
  },
  loaders: [
    {
      test: /\.js$/,
      loader: ['babel-loader'],
      exclude: [path.resolve('./node_modules')],
      include: [path.resolve('./')],
    },
  ],
  output: {
    path: path.resolve('./dist'),
    filename: '[name].js',
    libraryTarget: 'var',
    library: 'EntryPoint'
  },
  devServer: {
    hot: true,
    contentBase: path.resolve('./static'),
    host: '0.0.0.0',
  },
  devtool: '#eval-source-map',
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  resolve: {
    moduleDirectories: [path.resolve('./node_modules')],
  },
};
