const Joi = require('joi');

let schema = Joi.object().keys({
   target: Joi.string().required(),
   weight: Joi.number().integer().min(0).max(1000).optional()
});

module.exports = schema;