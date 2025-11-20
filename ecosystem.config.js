module.exports = {
  apps: [
    {
      name: 'e-dnevnik-poc-api',
      cwd: __dirname + '/Core.EDnevnik.API',
      script: 'server.js',
      interpreter: `${__dirname}/Core.EDnevnik.API/node_modules/.bin/babel-node`,
      watch: false,
      env: {
        NODE_ENV: 'production'
      }
    }
  ]
};

