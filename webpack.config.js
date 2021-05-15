const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
    entry: './src/js/index.js',
    module: {
        rules: [{
                test: /\.scss$|css$/,
                use: [{
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../'
                        },
                    },
                    { loader: 'css-loader', options: { sourceMap: true } },
                    { loader: 'sass-loader', options: { sourceMap: true } },
                ],
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: [{
                    loader: 'file-loader',
                    options: { name: "[name].[ext]", outputPath: "images/", useRelativePaths: true }
                }],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [{
                    loader: "file-loader",
                    options: { name: "[name].[ext]", outputPath: "fonts/" }
                }]
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/style.css'
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/pages/index.html',
            minify: false
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: './src/fonts', to: 'fonts' },
                { from: './src/images/', to: 'images' },
            ]
        }),
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "js/bundle.js",
    },
    optimization: {
        minimizer: [
            new OptimizeCssAssetsPlugin({}),
            new UglifyJsPlugin({}),
            new CssMinimizerPlugin({
                minimizerOptions: {
                    preset: [
                        'default',
                        {
                            discardComments: { removeAll: true },
                        },
                    ],
                },
            }),
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        port: 4200
    },
}