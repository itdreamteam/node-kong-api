const Joi = require('joi');

let schema = Joi.object().keys({
    size  : Joi.number().integer().min(1).optional(),
    offset: Joi.number().integer().min(0).optional()
});

module.exports = schema;