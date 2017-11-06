const Joi             = require('joi');
const baseQuerystring = require('./baseQuerystring');

let schema = baseQuerystring.keys({
    id         : Joi.string().optional(),
    name       : Joi.string().optional(),
    api_id     : Joi.string().optional(),
    consumer_id: Joi.string().optional()
});

module.exports = schema;