# Config Resolver #

[![Build Status](https://travis-ci.org/MadaraUchiha/config-resolver.svg?branch=master)](https://travis-ci.org/MadaraUchiha/config-resolver)

A small, unopinionated library for resolving configuration variables in various levels.

## Installation ##

```
npm install --save config-resolve
```

## Usage ##
Without any sort of configuration, config-resolver will look at your environment variables and your command line arguments
and construct a resolved object of configuration, where the command line arguments override the environment ones.

So:

```javascript
var conf = require('config-resolver')();
console.log(conf);
```

And run with
```
PORT=8080; NAME=MY_APP; node index.js --PORT=3000 --HOST=localhost
```

Will result in
```
{
    PORT: 3000
    NAME: 'MY_APP'
    HOST: 'localhost'
}
```

### Resolvers ###
Config resolver comes with 3 (for now) configuration resolvers. A resolver is a function that reads/resolves configuration,
and returns an object. The currently supported resolvers are `CommandLineArgumentsResolver`, `EnvironmentVariablesResolver`
and `JSONResolver`.

You can override the default resolver chain by providing them as arguments to the `resolve` function:

```
var resolver = require('config-resolver');
var conf = resolver.resolve(resolver.JSONResolver('./config.json'), resolver.CommandLineArgumentsResolver);
console.log(conf);
```

In this example, resolver will take what's in `config.json` as the default configuration, and override properties
with the same name from the command line arguments.