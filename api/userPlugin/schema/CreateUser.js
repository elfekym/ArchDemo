'use strict';

const joi = require('joi');

module.exports = {
  payload: joi.object({
    name: joi.string(),
    age: joi.number()
  }).required()
}