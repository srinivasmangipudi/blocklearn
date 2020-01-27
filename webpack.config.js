module.exports = {
    entry: [
        './src/main.js'
    ],
    output: {
        filename: 'build.js'
    },
    module : {
        rules : [
          {
            test: /.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['@babel/react'],
                plugins: ['@babel/plugin-proposal-class-properties']
            }
          }
        ]
      }
};