const Joi = require('joi');

let schema = Joi.object().keys({
    name     : Joi.string().required(),
    slots    : Joi.number().integer().min(10).max(65536),
    orderList: Joi.array()
});

module.exports = schema;