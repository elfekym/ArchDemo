'use strict';

const { controllers, schema } = require('nodearch').deps.userPlugin;
const { UserController } = controllers;

module.exports = [
  {
    method: 'POST',
    path: '/user',
    handler: UserController.create,
    config: {
      tags: ['api'],
      validate: schema.CreateUser
    }
  },
  {
    method: 'GET',
    path: '/user',
    handler: UserController.find,
    config: {
      tags: ['api'],
      validate: schema.SearchUser
    }
  },
  {
    method: 'GET',
    path: '/user/{id}',
    handler: UserController.findOne,
    config: {
      tags: ['api'],
      validate: schema.FindUser
    }
  }
];
