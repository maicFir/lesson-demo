let defaults = require('./defaults');
let ExtractTextPlugin = require('extract-text-webpack-plugin');

let moduleConfig = {

    rules: [
        {
            test: /\.css$/,
            exclude: /src\/libs/,
            loader: 'style-loader!css-loader'
        },
        {
            test: /\.sass/,
            loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded&indentedSyntax'
        },
        {
            test: /\.scss/,
            loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded'
        },
        {
            test: /\.less/,
            loader: 'style-loader!css-loader!less-loader'
        },
        {
            test: /\.(png|jpg|gif|woff|woff2)$/,
            loader: 'url-loader?limit=1000&name=images/[name]-[hash:6].[ext]'
        },
        {
            test: /\.(mp4|ogg|svg)$/,
            loader: 'file-loader?name=lib/[name]-[hash:6].[ext]?'
        },
        {
            test: /\.(js)$/,
            loader: 'babel-loader',
            exclude: /mock|node_modules/
        },
        {
            test: /\.styl$/,
            loader: ExtractTextPlugin.extract({
                fallback: 'style-loader', 
                use: 'css-loader?!stylus-loader'
            })
        },
        {
            test: /\.vue$/,
            loader: 'vue-loader',
            options: {
                loaders: {
                    css: ExtractTextPlugin.extract({
                        use: 'css-loader?!stylus-loader',
                        fallback: 'vue-style-loader'
                    })
                }
            }
        }
    ]
}

module.exports = moduleConfig