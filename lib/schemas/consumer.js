const Joi = require('joi');

let schema = Joi.object().keys({
    username : Joi.string(),
    custom_id: Joi.string()
}).or('username', 'custom_id');

module.exports = schema;