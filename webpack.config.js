module.exports = {
    entry: './client/main.js',
    output: {
        path: './dist',
        filename: 'build.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/
            },
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            {
                test: /\.css$/,
                loader: 'style!css'
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg|jpg|jpeg|gif)$/,
                loader: 'url-loader'
            }
        ]
    },
    vue: {
        loaders: {
            js: 'babel'
        }
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.common.js'
        }
    }
};