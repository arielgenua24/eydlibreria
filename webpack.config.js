module.exports = {
    mode: 'production',
    entry: './src/searchBooks.ts', 
    devtool: 'inline-source-map',

    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    output: {
        filename: 'bundle.js',
    }
}