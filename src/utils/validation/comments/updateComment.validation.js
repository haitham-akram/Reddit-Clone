const Joi = require('joi');

const updateSchema = Joi.object({
  content: Joi.string().required(),
});
module.exports = updateSchema;
