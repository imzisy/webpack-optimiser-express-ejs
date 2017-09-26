var baseConfig = require("./webpack.base.config.js");
var webpack = require('webpack');

baseConfig.devtool = "cheap-module-source-map";

baseConfig.plugins = [  
    new webpack.DefinePlugin({
        "process.env": {
            "NODE_ENV": JSON.stringify("production")
        }
    })
];