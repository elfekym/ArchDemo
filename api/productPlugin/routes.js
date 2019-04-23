'use strict';

const { controllers, schema } = require('nodearch').deps.productPlugin;
const { ProductController } = controllers;

module.exports = [
  {
    method: 'POST',
    path: '/product',
    handler: ProductController.create,
    config: {
      tags: ['api'],
      validate: schema.CreateProduct
    }
  },
  {
    method: 'GET',
    path: '/product',
    handler: ProductController.find,
    config: {
      tags: ['api'],
      validate: schema.SearchProduct
    }
  },
  {
    method: 'GET',
    path: '/product/{id}',
    handler: ProductController.findOne,
    config: {
      tags: ['api'],
      validate: schema.FindProduct
    }
  }
];