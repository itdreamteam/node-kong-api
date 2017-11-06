const Joi             = require('joi');
const baseQuerystring = require('./baseQuerystring');

let schema = baseQuerystring.keys({
    id    : Joi.string().optional(),
    target: Joi.string().optional(),
    weight: Joi.number().integer().min(0).max(1000).optional()
});

module.exports = schema;