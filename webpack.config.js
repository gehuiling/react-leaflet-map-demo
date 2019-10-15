const path = require('path')
const HtmlPlugin = require('html-webpack-plugin'); // 在内存中自动生成 index 页面的插件
const webpack = require('webpack');

module.exports = {

  mode: 'development',

  // bundle app.js and everything it imports, recursively.
  entry: {
    app: path.join(__dirname,'./src/index.js')
  },
  output: {
      filename: 'bundle.js',
      path: path.join(__dirname,'./dist')
  },
  devtool: 'inline-source-map',
  devServer: { 
      hot: true,
      contentBase: path.join(__dirname, 'dist/') 
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: path.join(__dirname,'node_modules'), //配置loder的时候一定要加排除项
        use: ['babel-loader']
      },
      {
        // The example has some JSON data
        test: /\.json$/,loader: 'json-loader',exclude: [/node_modules/]
      },
      {
          test: /\.css$/, use: ['style-loader' ,'css-loader']
      } // 打包处理 css 样式表的第三方 loader(从右往左调用) 添加?modules 表示为普通的css样式表启用模块化
    ]
  },

  node: {
    fs: 'empty'
  },

  plugins:[
    new HtmlPlugin({
      filename: 'index.html',
      template: path.join(__dirname,'src/index.html')
    }),
    new webpack.ProvidePlugin({
      $:"jquery",
      jQuery:"jquery",
      "window.jQuery":"jquery"
      })
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.json'], // 表示，这几个文件的后缀名，可以省略不写
    alias: {
        '@': path.join(__dirname, './src')
    }
  },

  plugins: [
    new webpack.EnvironmentPlugin([
      'MapboxAccessToken'
    ])
  ]

  //#region
    // Optional: Enables reading mapbox token from environment variable
    // plugins: [
      // new webpack.EnvironmentPlugin([
      //    'MapboxAccessToken'
      // ]
      // )  
  //     new webpack.EnvironmentPlugin({
  //       MapboxAccessToken:JSON.stringify('pk.eyJ1Ijoic2xlZXB5Z2dnIiwiYSI6ImNqd3c4azU2NDA0M3I0Ym16M2N1OXViN2kifQ.Giowiv0UlrHu7OWBG81e8Q')
  //     })
  // ]
  // :'pk.eyJ1Ijoic2xlZXB5Z2dnIiwiYSI6ImNqd3c4azU2NDA0M3I0Ym16M2N1OXViN2kifQ.Giowiv0UlrHu7OWBG81e8Q'
//#endregion
}

process.env.MapboxAccessToken = 'pk.eyJ1Ijoic2xlZXB5Z2dnIiwiYSI6ImNqd3c4azU2NDA0M3I0Ym16M2N1OXViN2kifQ.Giowiv0UlrHu7OWBG81e8Q';