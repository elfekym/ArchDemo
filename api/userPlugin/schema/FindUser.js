'use strict'

const joi = require('joi');

module.exports = {
  params: joi.object({
    id: joi.string().required()
  }).required()
}