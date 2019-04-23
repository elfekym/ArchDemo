'use strict';

const Inert = require('inert');
const Vision = require('vision');
const HapiSwagger = require('hapi-swagger');
const Pack = require('./package.json');


module.exports = [
  Inert,
  Vision,
  {
    plugin: HapiSwagger,
    options: {
      info: {
        title: 'HapiArch Example Documentation',
        version: Pack.version,
        description: Pack.description,
        contact: {
          name: 'NodeArch Team',
          url: 'http://nodearch.io',
          email: 'support@nodearch.io'
        }
      },
      securityDefinitions: {
        apiKey: {
          type: 'apiKey',
          name: 'api_key',
          in: 'header',
          description: 'client api key'
        }
      },
      jsonEditor: false
    }
  }
];