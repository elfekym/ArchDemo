"use strict";

const { services } = require('nodearch').deps.productPlugin;
const { ProductService } = services;

module.exports = {

  create: (request, h) => {
    return ProductService
      .create({
        name: request.payload.name,
        price: request.payload.price
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  },

  find: (request, h) => {
    return ProductService
      .find(request.query)
      .catch((err) => {
        console.log(err);
        return err;
      });
  },

  findOne: (request, h) => {
    return ProductService
      .findOne(request.params.id)
      .catch((err) => {
        console.log(err);
        return err;
      });
  }

};
