"use strict";

const { services } = require('nodearch').deps.userPlugin;
const { UserService } = services;

module.exports = {

  create: (request, h) => {
    return UserService
      .create({
        name: request.payload.name,
        age: request.payload.age
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  },

  find: (request, h) => {
    return UserService
      .find(request.query)
      .catch((err) => {
        console.log(err);
        return err;
      });
  },

  findOne: (request, h) => {
    return UserService
      .findOne(request.params.id)
      .catch((err) => {
        console.log(err);
        return err;
      });
  }

};
