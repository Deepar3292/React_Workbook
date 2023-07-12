const path = require('path'); // pre-defined Node Module
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// _env is process.ENV
module.exports = function(_env, argv) {
    const  isProduction = argv.mode === "production";
    const devToolOption = isProduction ? false : "cheap-module-source-map"
    return {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.[contenthash:8].js',
    },
    devtool: devToolOption,
    module: {
        rules: [
            {
                test: /.js(x)?$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /.css$/,
                use: [isProduction ? MiniCssExtractPlugin : "style-loader", "css-loader"]
            }
        ]
    },
    resolve: {
        extensions: [".js", ".jsx"]
    },
    devServer: {
        port: 3000
    },
    performance: {
        hints: false
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all'
                }
            }
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src", "index.html")
        }),
        new BundleAnalyzerPlugin(),
        new MiniCssExtractPlugin()
    ]
}
}