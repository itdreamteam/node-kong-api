const rp          = require('request-promise');
const Joi         = require('joi');
const querystring = require('querystring');
const _           = require('lodash');

const apiSchema           = require('./schemas/api');
const apiQuerySchema      = require('./schemas/apiQuerystring');
const consumerSchema      = require('./schemas/consumer');
const consumerQuerySchema = require('./schemas/consumerQuerystring');
const pluginSchema        = require('./schemas/plugin');
const pluginQuerySchema   = require('./schemas/pluginQuerystring');
const certificateSchema   = require('./schemas/certificate');
const sniSchema           = require('./schemas/sni');
const upstreamSchema      = require('./schemas/upstream');
const upstreamQuerySchema = require('./schemas/upstreamQuerystring');
const targetSchema        = require('./schemas/target');
const targetQuerySchema   = require('./schemas/targetQuerystring');

class KongApi {

    constructor(config) {
        this.query = (path, method, body) => {
            let options = {
                uri   : config.url + path,
                method: method,
                body  : body,
                json  : true
            };

            return rp(options);
        };
    }

    /**
     * Retrieve generic details about the node.
     */
    getNodeInformation() {
        return this.query('/', 'GET');
    }

    /**
     * Get the status of the Kong Node
     *
     */
    getNodeStatus() {
        return this.query('/status', 'GET')
    }

    /**
     * Add an API
     *
     * @param api
     */
    addApi(api) {
        Joi.assert(api, apiSchema);
        return this.query('/apis/', 'POST', api);
    }

    /**
     * Get Api
     *
     * @param nameOrId
     */
    getApi(nameOrId) {
        Joi.assert(nameOrId, Joi.string());
        return this.query(`/apis/${nameOrId}`, 'GET');
    }

    /**
     * List API's
     *
     * @param query
     */
    listApis(query) {
        Joi.assert(query, apiQuerySchema);
        return this.query(`/apis/${querystring.stringify(query)}`, 'GET');
    }

    updateApi(nameOrId, api) {
        Joi.assert(nameOrId, Joi.string());
        Joi.assert(api, apiSchema);

        return this.query(`/apis/${nameOrId}`, 'PATCH', api);
    }

    updateOrCreateApi(api) {
        Joi.assert(api, apiSchema.keys({id: Joi.string().optional()}));
        return this.query('/apis/', 'PUT', api);
    }

    deleteApi(nameOrId) {
        Joi.assert(nameOrId, Joi.string());
        return this.query(`/apis/${nameOrId}`, 'DELETE');
    }

    addConsumer(consumer) {
        Joi.assert(consumer, consumerSchema);
        return this.query('/consumers/', 'POST', consumer);
    }

    getConsumer(usernameOrId) {
        Joi.assert(usernameOrId, Joi.string());
        return this.query(`/consumers/${usernameOrId}`, 'GET');
    }

    listConsumers(query) {
        Joi.assert(query, consumerQuerySchema);
        return this.query(`/consumers/${querystring.stringify(query)}`, 'GET');
    }

    updateConsumer(usernameOrId, consumer) {
        Joi.assert(usernameOrId, Joi.string());
        Joi.assert(consumer, consumerSchema);

        return this.query(`/consumers/${usernameOrId}`, 'PATCH', consumer);
    }

    updateOrCreateConsumer(consumer) {
        Joi.assert(consumer, consumerSchema.keys({id: Joi.string().optional()}));

        return this.query('/consumers/', 'PUT', consumer);
    }

    deleteConsumer(usernameOrId) {
        Joi.assert(usernameOrId, Joi.string());

        return this.query(`/consumers/${usernameOrId}`, 'DELETE');
    }

    addPluginToApi(apiNameOrId, plugin) {
        Joi.assert(apiNameOrId, Joi.string());
        Joi.assert(plugin, pluginSchema);

        return this.query(`/apis/${apiNameOrId}/plugins/`, 'POST', plugin);
    }

    addPluginToAllApis(plugin) {
        Joi.assert(plugin, pluginSchema);

        return this.query('/plugins/', 'POST', plugin);
    }

    getPlugin(id) {
        Joi.assert(id, Joi.string());

        return this.query(`/plugins/${id}`, 'GET');
    }

    listPlugins(query) {
        Joi.assert(query, pluginQuerySchema);

        return this.query(`/plugins/${querystring.stringify(query)}`, 'GET');
    }

    listPluginsForApi(nameOrId, query) {
        Joi.assert(nameOrId, Joi.string());
        Joi.assert(query, pluginQuerySchema);

        return this.query(`/apis/${nameOrId}/plugins/${querystring.stringify(query)}`, 'GET');
    }

    updatePlugin(apiNameOrId, pluginNameOrId, plugin) {
        Joi.assert(apiNameOrId, Joi.string());
        Joi.assert(pluginNameOrId, Joi.string());
        Joi.assert(plugin, pluginSchema);

        return this.query(`/apis/${apiNameOrId}/plugins/${pluginNameOrId}`, 'PATCH', plugin);

    }

    updateOrCreatePlugin(apiNameOrId, plugin) {
        Joi.assert(apiNameOrId, Joi.string());
        Joi.assert(plugin, pluginSchema.keys({id: Joi.string().optional()}));

        return this.query(`/apis/${apiNameOrId}/plugins/`, 'PUT', plugin);
    }

    deletePlugin(apiNameOrId, pluginNameOrId) {
        Joi.assert(apiNameOrId, Joi.string());
        Joi.assert(pluginNameOrId, Joi.string());

        return this.query(`/apis/${apiNameOrId}/plugins/${pluginNameOrId}`, 'DELETE');
    }

    getEnabledPlugins() {
        return this.query('/plugins/enabled', 'GET');
    }

    getPluginSchema(pluginName) {
        Joi.assert(pluginName, Joi.string());

        return this.query(`/plugins/schema/${pluginName}`, 'GET')
    }

    addCertificate(certificate) {
        Joi.assert(certificate, certificateSchema);

        return this.query('/certificates/', 'POST', certificate);
    }

    getCertificate(sniOrId) {
        Joi.assert(sniOrId, Joi.string());

        return this.query(`/certificates/${sniOrId}`, 'GET');
    }

    listCertificates() {
        return this.query('/certificates/', 'GET');
    }

    updateCertificate(sniOrId, certificate) {
        Joi.assert(sniOrId, Joi.string());
        Joi.assert(certificate, certificateSchema);

        return this.query(`/certificates/${sniOrId}`, 'PATCH', certificate);
    }

    updateOrCreateCertificate(certificate) {
        Joi.assert(certificate, certificateSchema);

        return this.query('/certificates/', 'PUT', certificate)
    }

    deleteCertificate(sniOrId) {
        Joi.assert(sniOrId, Joi.string());

        return this.query(`/certificates/${sniOrId}`, 'DELETE');
    }

    addSNI(sni) {
        Joi.assert(sni, sniSchema);

        return this.query('/snis/', 'POST', sni);
    }

    getSNI(name) {
        Joi.assert(name, Joi.string());

        return this.query(`/snis/${name}`, 'GET');
    }

    listSNIs() {
        return this.query('/snis/', 'GET');
    }

    updateSNI(name, sni) {
        Joi.assert(name, Joi.string());
        Joi.assert(sni, sniSchema);

        return this.query(`/snis/${name}`, 'PATCH', sni);
    }

    updateOrCreateSNI(sni) {
        Joi.assert(sni, sniSchema);

        return this.query('/snis/', 'PATCH', sni);
    }

    deleteSNI(name) {
        Joi.assert(name, Joi.string());

        return this.query(`/snis/${name}`, 'DELETE');
    }

    addUpstream(upstream) {
        Joi.assert(upstream, upstreamSchema);

        return this.query('/upstreams/', 'POST', upstream);
    }

    getUpstream(nameOrId) {
        Joi.assert(nameOrId, Joi.string());

        return this.query(`/upstreams/${nameOrId}`, 'GET');
    }

    listUpstreams(query) {
        Joi.assert(query, upstreamQuerySchema);

        return this.query(`/upstreams/${querystring.stringify(query)}`, 'GET');
    }

    updateUpstream(nameOrId, upstream) {
        Joi.assert(nameOrId, Joi.string());
        Joi.assert(upstream, upstreamSchema);

        return this.query(`/upstreams/${nameOrId}`, 'PATCH', upstream);
    }

    updateOrCreateUpstream(upstream) {
        Joi.assert(upstream, upstreamSchema.keys({id: Joi.string().optional()}));

        return this.query('/upstreams/', 'PATCH', upstream);
    }

    deleteUpstream(nameOrId) {
        Joi.assert(nameOrId, Joi.string());

        return this.query(`/upstreams/${nameOrId}`, 'DELETE');
    }

    addTarget(upstreamNameOrId, target) {
        Joi.assert(upstreamNameOrId, Joi.string());
        Joi.assert(target, targetSchema);

        return this.query('/upstreams/' + upstreamNameOrId + '/targets', 'POST', target);
    }

    listTargets(upstreamNameOrId, query) {
        Joi.assert(upstreamNameOrId, Joi.string());
        Joi.assert(query, targetQuerySchema);

        return this.query(`/upstreams/${upstreamNameOrId}/targets${querystring.stringify(query)}`, 'GET');
    }

    listActiveTargets(upstreamNameOrId) {
        Joi.assert(upstreamNameOrId, Joi.string());

        return this.query('/upstreams/' + upstreamNameOrId + '/targets/active/', 'GET');
    }

    deleteTarget(upstreamNameOrId, targetOrId) {
        Joi.assert(upstreamNameOrId, Joi.string());
        Joi.assert(targetOrId, Joi.string());

        return this.query('/upstreams/' + upstreamNameOrId + '/targets/' + targetOrId, 'DELETE');
    }

}

module.exports = KongApi;