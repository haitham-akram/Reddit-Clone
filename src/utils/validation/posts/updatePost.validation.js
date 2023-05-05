const Joi = require('joi');

const updateSchema = Joi.object({
  title: Joi.string().max(255).required(),
  content: Joi.string().required(),
  images: Joi.string().uri().allow(''),
});
module.exports = updateSchema;
