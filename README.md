# Kong Node Client

A Node Kong Api Client using Promises

## Installation

```
 npm i -s javascript-kong-api
```

## Usage


```javascript
    const Kong = require('javascript-kong-api');


    let kong = new Kong({
        url: 'http://10.42.79.233:8001'
    });


    kong.listApis({}).then(data => {
        // do Something with the data
    }).catch(err => {
        // do something with the error
    });

```

## Available methods

```javascript
kong.getjavascriptInformation()
```

```javascript
kong.getjavascriptStatus()
```

```javascript
kong.addApi(api)
```

```javascript
kong.getApi(nameOrId)
```

```javascript
kong.listApis(query)
```

```javascript
kong.updateApi(nameOrId, api)
```

```javascript
kong.updateOrCreateApi(api)
```

```javascript
kong.deleteApi(nameOrId)
```

```javascript
kong.addConsumer(consumer)
```

```javascript
kong.getConsumer(nameOrId)
```

```javascript
kong.listConsumers(query)
```

```javascript
kong.updateConsumer(usernameOrId, consumer)
```

```javascript
kong.updateOrCreateConsumer(consumer)
```

```javascript
kong.deleteConsumer(usernameOrId)
```

```javascript
kong.addPluginToApi(apiNameOrId, plugin)
```

```javascript
kong.addPluginToAllApis(plugin)
```

```javascript
kong.getPlugin(id)
```

```javascript
kong.listPlugins(query)
```

```javascript
kong.listPluginsForApi(nameOrId, query)
```

```javascript
kong.updatePlugin(apiNameOrId, pluginNameOrId, plugin)
```

```javascript
kong.updateOrCreatePlugin(apiNameOrId, plugin)
```

```javascript
kong.deletePlugin(apiNameOrId, pluginNameOrId)
```

```javascript
kong.getEnabledPlugins()
```

```javascript
kong.getPluginSchema(pluginName)
```

```javascript
kong.addCertificate(certificate)
```

```javascript
kong.getCertificate(sniOrId)
```

```javascript
kong.listCertificates()
```

```javascript
kong.updateCertificate(sniOrId, certificate)
```

```javascript
kong.updateOrCreateCertificate(certificate)
```

```javascript
kong.deleteCertificate(sniOrId)
```

```javascript
kong.addSNI(sni)
```

```javascript
kong.getSNI(name)
```

```javascript
kong.listSNIs()
```

```javascript
kong.updateSNI(name, sni)
```

```javascript
kong.updateOrCreateSNI(sni)
```

```javascript
kong.deleteSNI(name)
```

```javascript
kong.addUpstream(upstream)
```

```javascript
kong.getUpstream(nameOrId)
```

```javascript
kong.listUpstreams(query)
```

```javascript
kong.updateUpstream(nameOrId, upstream)
```

```javascript
kong.updateOrCreateUpstream(upstream)
```

```javascript
kong.deleteUpstream(nameOrId)
```

```javascript
kong.addTarget(upstreamNameOrId, target)
```

```javascript
kong.listTargets(upstreamNameOrId, query)
```

```javascript
kong.listActiveTargets(upstreamNameOrId)
```

```javascript
kong.deleteTarget(upstreamNameOrId, targetOrId)
```