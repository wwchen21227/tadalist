var path = require('path');

module.exports = {
    entry: "./app/app.module.js",
    output: {
        path: path.resolve(__dirname, "assets"),    
        publicPath: "/assets/",
        filename: "bundle.js"
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
            {
                test: /\.css$/,
                use: [ "style-loader", 'css-loader']
            }
        ],
        loaders: [
            { test: /\.html$/, loader: "html" },
            {
                test: /\.css/,
                loaders: ['style', 'css']
              }
        ]
    }
};  