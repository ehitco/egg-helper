# egg-helper

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-helper.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-helper
[travis-image]: https://img.shields.io/travis/eggjs/egg-helper.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-helper
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-helper.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-helper?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-helper.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-helper
[snyk-image]: https://snyk.io/test/npm/egg-helper/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-helper
[download-image]: https://img.shields.io/npm/dm/egg-helper.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-helper

[README.zh_CN 中文文档](README.zh_CN.md)
<!--
Description here.
-->

Utils tools plugin for eggjs

## Install

```bash
npm i @ehitco/egg-helper --save
```

## 开启插件

```js
// config/plugin.js
exports.helper = {
  enable: true,
  package: 'egg-helper',
};
```

## APIs

API | Param | Description
---|---|---
`isInt` |  | check integer
`isIP` |  | check IP
`isIPv4`   |  | check IPv4
`isIPv6`   |  | check IPv6
`isMaster`   | |cluster.isMaster
`isArray`   | `arg`{mix}<br>`return`{Boolean} | check if a variable is an Array
`isBoolean`   | `arg`{mix}<br>`return`{Boolean} | check if a variable is an Boolean
`isNull`   | `arg`{mix}<br>`return`{Boolean} | check if a variable is an null
`isNullOrUndefined`   | `arg`{mix}<br>`return`{Boolean} | check if a variable is null or undefined
`isNumber`   | `arg`{mix}<br>`return`{Boolean} | check if a variable is an Number
`isString`   | `arg`{mix}<br>`return`{Boolean} | check if a variable is an String
`isSymbol`   | `arg`{mix}<br>`return`{Boolean} | check if a variable is an Symbol
`isUndefined`   | `arg`{mix}<br>`return`{Boolean} | check if a variable is an undefined
`isRegExp`   | `arg`{mix}<br>`return`{Boolean} | check if a variable is an RegExp
`isObject`   | `arg`{mix}<br>`return`{Boolean} | check if a variable is an Object
`isDate`   | `arg`{mix}<br>`return`{Boolean} | check if a variable is an Date
`isError`   | `arg`{mix}<br>`return`{Boolean} | check if a variable is an Error
`isFunction`   | `arg`{mix}<br>`return`{Boolean} | check if a variable is an Function
`isPrimitive`   | `arg`{mix}<br>`return`{Boolean} | check if a variable is an Primitive
`isBuffer`   | `arg`{mix}<br>`return`{Boolean} | check if a variable is an Buffer
`promisify`   |  `function`{function}<br>`receiver`{object}<br>`return` Promise  | make callback function to promise
`extend`   | `target`{object\|array}<br> `args`{Object\|Array}<br>`return`{Object} | extend object
`camelCase`   | `str`{string}<br>`return`{String} | make indexAction to index_action
`isNumberString`   | `str`{string} <br> `return`{Boolean} | check object is number string
`isTrueEmpty`   | `obj`{mixed} <br> `return`{Boolean}| truely
`isEmpty`   | `obj`{object}  <br> `return`{Boolean}| check object is mepty
`defer`   | `return` defer | get deferred object
`md5`   | `str`{string} <br> `return`{string} | get content md5
`timeout`   | `time`{Number} <br> `return` Promise | get timeout Promise
`escapeHtml`   | `str`{String}<br> `return` {string} | escape html
`datetime`   | `date`{Date\|String}<br>`format`{String}<br>`return`{String} | get datetime
`uuid`   | `version`{String} v1 or v4 | generate uuid
`isExist`   | `dir`{String} | check path is exist
`isFile`   | `filePath`{String} | check filepath is file
`isDirectory`   | `filePath`{String}  | check path is directory
`chmod`   | `path`{String}<br> `mode`{String}  | change path mode
`mkdir`   | `dir`{String}<br> `mode`{String} | make dir
`getdirFiles`   | `dir`{String}<br> `prefix`{String} | get files in path
`rmdir`   | `path`{String}<br> `reserve`{Boolean}<br>`return`{Promise} | remove dir async
`parseAdapterConfig` | `config`{Object}<br> `extConfig`{Object\|String} | parse adapter config
`ms` | `time`{String} | transform humanize time to ms
`omit` | `obj`{obj} <br> `prop` {String|Array} | omit object props

## issues

[egg issues](https://github.com/ehitco/egg-helper/issues)

## License

[MIT](LICENSE)
