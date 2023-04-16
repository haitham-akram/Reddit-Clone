const Joi = require('joi');

const logInSchema = Joi.object({
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ['com', 'net', 'org'] },
    })
    .max(50)
    .required(),
  password: Joi.string()
    .min(8)
    .max(100)
    .pattern(/^[a-zA-Z0-9 ._#?!-@]/),
});
module.exports = logInSchema;
