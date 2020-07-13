// const path = require('path');
const withSass = require('@zeit/next-sass');

module.exports = 
    withSass({
        // distDir: 'export',
        distDir: '_next',
        //Serverless deployment
        compress: false,
        env: {
            domain: process.env.ENV_DOMAIN
        },
        // exportPathMap: function() {
        //     return {
        //         '/': { page: '/' },
        //         '/about': { page: '/about' },
        //         '/project': { page: '/about'},
        //         '/contact': { page: '/contact' },
        //         '/team': { page: '/team' }
        //     };
        // },
       
        webpack (config, options) {

           
            return config
        }
    });
