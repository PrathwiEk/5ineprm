module.exports = {
      devServer: {
        proxy: 'http://localhost/project-management/',
        host: 'localhost'
        // proxy: {
        //   '/': {
        //     target: 'http://localhost/project-management/',
        //     ws: false,
        //   }
        // }
    },
   
    publicPath: process.env.NODE_ENV === 'production' ? '/project-management/' : '/'
  }