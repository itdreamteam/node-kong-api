const Joi = require('joi');

let schema = Joi.object().keys({
    cert: Joi.string().required(),
    key : Joi.string().required(),
    snis: Joi.string().optional()
});

module.exports = schema;