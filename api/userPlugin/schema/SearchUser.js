'use strict';

const joi = require('joi');

module.exports = {
  query: joi.object({
    name: joi.string(),
    age: joi.number()
  }).required()
}