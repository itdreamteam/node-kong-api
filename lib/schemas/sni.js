const Joi = require('joi');

let schema = Joi.object().keys({
    name              : Joi.string().required(),
    ssl_certificate_id: Joi.string().required()
});

module.exports = schema;