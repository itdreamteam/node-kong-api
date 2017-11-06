const Joi = require('joi');

let schema = Joi.object().keys({
    name                    : Joi.string().required(),
    hosts                   : Joi.string(),
    uris                    : Joi.string(),
    methods                 : Joi.string(),
    upstream_url            : Joi.string().required(),
    strip_uri               : Joi.boolean().optional(),
    preserve_host           : Joi.boolean().optional(),
    retries                 : Joi.number().integer().min(0).optional(),
    upstream_connect_timeout: Joi.number().integer().min(0).optional(),
    upstream_send_timeout   : Joi.number().integer().min(0).optional(),
    upstream_read_timeout   : Joi.number().integer().min(0).optional(),
    https_only              : Joi.boolean().optional(),
    http_if_terminated      : Joi.boolean().optional()
}).or('hosts', 'uris', 'methods');


module.exports = schema;