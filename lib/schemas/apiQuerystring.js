const Joi             = require('joi');
const baseQuerystring = require('./baseQuerystring');

let schema = baseQuerystring.keys({
    id          : Joi.string().optional(),
    name        : Joi.string().optional(),
    upstream_url: Joi.string().optional(),
    retries     : Joi.number().integer().min(0).optional()
});

module.exports = schema;