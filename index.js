'use strict';

const ERROR_CODE = 1;

const Hapi = require('hapi');
const arch = require('nodearch');
const _ = require('lodash');
const hapiPlugins = require('./thirdParties');
const path = require('path');

async function serverHandler () {

  const server = Hapi.server(arch.config.server);
  arch.server = server;

  await server.register(hapiPlugins);

  // serve static files from view folder
  server.route({
    method: 'GET',
    path: '/{param*}',
    handler: {
      directory: {
        path: path.join(__dirname, 'public'),
        redirectToSlash: true,
        index: true
      }
    }
  });

  const routes = arch.getList('module', 'routes');
  server.route(routes);

  process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
  });


  await server.start();
  arch.logger.info(`Server running on: ${server.info.uri}`);
  return server;
  
} 

arch.start(serverHandler);
