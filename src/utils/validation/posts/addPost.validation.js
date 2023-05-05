const Joi = require('joi');

const addSchema = Joi.object({
  title: Joi.string().max(255).required(),
  content: Joi.string().required(),
  images: Joi.string().uri().allow(''),
  user_id: Joi.number().integer().required(),
});
module.exports = addSchema;
