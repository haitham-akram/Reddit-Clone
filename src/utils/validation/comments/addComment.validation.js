const Joi = require('joi');

const addSchema = Joi.object({
  content: Joi.string().required(),
  post_id: Joi.number().integer().required(),
  user_id: Joi.number().integer().required(),
});
module.exports = addSchema;
