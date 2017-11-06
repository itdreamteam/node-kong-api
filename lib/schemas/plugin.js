const Joi = require('joi');

let schema = Joi.object().keys({
    name       : Joi.string().required(),
    consumer_id: Joi.string().optional(),
    config     : Joi.object().unknown(true).required()
});

module.exports = schema;