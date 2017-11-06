# Kong Node Client

A NodeJS Kong Api Client using Promises

## Installation

```
 npm i -s node-kong-api
```

## Usage


```node
    const Kong = require('node-kong-api');


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

```node
kong.getNodeInformation()
```

```node
kong.getNodeStatus()
```

```node
kong.addApi(api)
```

```node
kong.getApi(nameOrId)
```

```node
kong.listApis(query)
```

```node
kong.updateApi(nameOrId, api)
```

```node
kong.updateOrCreateApi(api)
```

```node
kong.deleteApi(nameOrId)
```

```node
kong.addConsumer(consumer)
```

```node
kong.getConsumer(nameOrId)
```

```node
kong.listConsumers(query)
```

```node
kong.updateConsumer(usernameOrId, consumer)
```

```node
kong.updateOrCreateConsumer(consumer)
```

```node
kong.deleteConsumer(usernameOrId)
```

```node
kong.addPluginToApi(apiNameOrId, plugin)
```

```node
kong.addPluginToAllApis(plugin)
```

```node
kong.getPlugin(id)
```

```node
kong.listPlugins(query)
```

```node
kong.listPluginsForApi(nameOrId, query)
```

```node
kong.updatePlugin(apiNameOrId, pluginNameOrId, plugin)
```

```node
kong.updateOrCreatePlugin(apiNameOrId, plugin)
```

```node
kong.deletePlugin(apiNameOrId, pluginNameOrId)
```

```node
kong.getEnabledPlugins()
```

```node
kong.getPluginSchema(pluginName)
```

```node
kong.addCertificate(certificate)
```

```node
kong.getCertificate(sniOrId)
```

```node
kong.listCertificates()
```

```node
kong.updateCertificate(sniOrId, certificate)
```

```node
kong.updateOrCreateCertificate(certificate)
```

```node
kong.deleteCertificate(sniOrId)
```

```node
kong.addSNI(sni)
```

```node
kong.getSNI(name)
```

```node
kong.listSNIs()
```

```node
kong.updateSNI(name, sni)
```

```node
kong.updateOrCreateSNI(sni)
```

```node
kong.deleteSNI(name)
```

```node
kong.addUpstream(upstream)
```

```node
kong.getUpstream(nameOrId)
```

```node
kong.listUpstreams(query)
```

```node
kong.updateUpstream(nameOrId, upstream)
```

```node
kong.updateOrCreateUpstream(upstream)
```

```node
kong.deleteUpstream(nameOrId)
```

```node
kong.addTarget(upstreamNameOrId, target)
```

```node
kong.listTargets(upstreamNameOrId, query)
```

```node
kong.listActiveTargets(upstreamNameOrId)
```

```node
kong.deleteTarget(upstreamNameOrId, targetOrId)
```