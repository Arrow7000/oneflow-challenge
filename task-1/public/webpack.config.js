const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'public', 'dist'),
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    devServer: {
        compress: true,
        port: 9000,
        open: true,
        openPage: '',
        contentBase: path.join(__dirname, "/public"),
        publicPath: '/dist/',
        filename: 'bundle.js'
    },
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js'
        }
    }
}
