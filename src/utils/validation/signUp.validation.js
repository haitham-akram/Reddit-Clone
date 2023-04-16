const Joi = require('joi');

const signUpSchema = Joi.object({
  username: Joi.string()
    .pattern(/^[a-zA-Z0-9 ._#?!-@]/)
    .max(50)
    .required(),
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
  confirmPassword: Joi.ref('password'),
});
module.exports = signUpSchema;
