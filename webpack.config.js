var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var extractStyles = new ExtractTextPlugin({
    filename: '/styles/[name].css'
});

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: {
        index: './index.js'
    },
    output: {
        path: path.resolve(__dirname, './wwwroot/dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: extractStyles.extract({
                    use: 'css-loader'
                })
            },
            {
                test: /\.scss$/,
                use: extractStyles.extract({
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?limit=10000&mimetype=application/font-woff&name=[name].[ext]&publicPath=/dist&outputPath=/fonts/'
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?limit=10000&mimetype=application/octet-stream&name=[name].[ext]&publicPath=/dist&outputPath=/fonts/'
            },
            {
                test: /\.(eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader?name=[name].[ext]&publicPath=/dist&outputPath=/fonts/'
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [
        extractStyles,
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })
    ],
    devtool: 'source-map'
};