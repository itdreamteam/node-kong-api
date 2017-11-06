const Joi             = require('joi');
const baseQuerystring = require('./baseQuerystring');

let schema = baseQuerystring.keys({
    id   : Joi.string().optional(),
    name : Joi.string().optional(),
    slots: Joi.array().optional()
});

module.exports = schema;