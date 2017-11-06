const Joi             = require('joi');
const baseQuerystring = require('./baseQuerystring');

let schema = baseQuerystring.keys({
    id       : Joi.string().optional(),
    custom_id: Joi.string().optional(),
    username : Joi.string().optional(),
});

module.exports = schema;