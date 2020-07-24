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

<!--
Description here.
-->

eggjs Utils 工具扩展helper 插件

## 安装

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

## API 文档

#### ctx.helper.isArray(array)

* `array` {any} 判断输入是否是数组
* `return` {Boolean}

判断是否是数组，等同于 `Array.isArray`。

```
ctx.helper.isArray([]); // true
ctx.helper.isArray({}); // false
```

#### ctx.helper.isBoolean(boolean)

* `boolean` {any}

判断输入是否是布尔值

```
ctx.helper.isBoolean(false); // true
```

#### ctx.helper.isInt(any)

* `any` {any}

判断输入的是否是整数

#### ctx.helper.isNull(any)

* `any` {any}

判断输入是 `null`，也可以直接通过 `xxx === null` 来判断。

#### ctx.helper.isNullOrUndefined(any)

* `any` {any}

判断输入是 `null` 或者 `undefined`

#### ctx.helper.isNumber(number)

* `number` {any}

判断输入是否是数字

```
ctx.helper.isNumber(1); // true
```

#### ctx.helper.isString(str)

* `str` {any}

判断输入是否是字符串

#### ctx.helper.isSymbol(any)

* `any` {any}

判断输入是否是 Symbol 类型

#### ctx.helper.isUndefined(any)

* `any` {any}

判断输入是否是 undefined，也可以直接通过 `xxx === undefined` 来判断。

#### ctx.helper.isRegExp(reg)

* `reg` {any}

判断输入是否是正则对象

#### ctx.helper.isDate(date)

* `date` {any}

判断输入是否是日期对象

#### ctx.helper.isError(error)

* `error` {any}

判断输入是否是Error类型

#### ctx.helper.isFunction(any)

* `any` {any}

判断输入是否是函数类型

#### ctx.helper.isPrimitive(any)

* `any` {any}

判断输入是否是原始类型，包含：`null`、`string`、`boolean`、`number`、`symbol`、`undefined`。

#### ctx.helper.isIP(ip)

* `ip` {String}

判断一个字符串是否是 ip 地址，IP v4 或者 IP v6，等同于 `net.isIP`。

#### ctx.helper.isBuffer(buffer)

* `buffer` {any}

判断输入是否是一个Buffer对象，等同于 `Buffer.isBuffer`。

#### ctx.helper.isIPv4(ip)

* `ip` {String}

判断一个字符串是否是 IP v4 地址，等同于 `net.isIPv4`。

#### ctx.helper.isIPv6(ip)

* `ip` {String}

判断一个字符串是否是 IP v6 地址，等同于 `net.isIPv6`

#### ctx.helper.isMaster

判断当前进程是否为主进程，等同于 `cluster.isMaster`

#### ctx.helper.isObject(obj)

* `obj` {any}

判断一个输入是否为 Object，通过 `Object.prototype.toString.call(obj)` 是否为 `[object Object]` 判断

```
ctx.helper.isObject({}); // true
ctx.helper.isObject([]); // false
ctx.helper.isObject(null); // false
```

#### ctx.helper.promisify(fn, receiver)

* `fn` {Function} 要包装的函数
* `receiver` {Object} 要绑定作用域的对象

此方法把一个 callback 函数包装 成Promise

```
let fn = ctx.helper.promisify(fs.readFile, fs);
let data = await fn(__filename);
```

#### ctx.helper.extend(target,...any)

* `target` {Object} 要extend的目标对象
* `...any` {Object} 可以有任意多个对象

深拷贝对象，如果 key 相同，那么后面的值会覆盖前面的值。

```
ctx.helper.extend({a: 1}, {b: 2});
// return {a:1,b:2};

ctx.helper.extend({a: 1}, {a: 2});
// return {a: 2}
```

#### ctx.helper.camelCase(str)

* `str` {String}

把字符串转成驼峰表示法

```
ctx.helper.camelCase('index_index');
// return 'indexIndex'
```

#### ctx.helper.snakeCase(str)

* `str` {String}

把驼峰写法转化为蛇形写法

```
ctx.helper.snakeCase('indexIndex');
// return 'index_index'
```

#### ctx.helper.isNumberString(str)

* `str` {String}

判断输入是不是一个字符串类型的数字

```
ctx.helper.isNumberString('419');
// return true
```

#### ctx.helper.isTrueEmpty(any)

* `any` {any}

判断是否是真正的空，`undefined`、`null`、`''`、`NaN` 为 true，其他为 false。

```
ctx.helper.isTrueEmpty(null);
// return true
```

#### ctx.helper.isEmpty(any)

* `any` {any}

判断对象是否为空， `undefined`, `null` ,`''`, `NaN`, `[]`, `{}`, `0`, `false` 为 true，其他为 false。

```
ctx.helper.isEmpty(null);
// return true
```

#### ctx.helper.defer()

生成一个 Deferred 对象。

```
function test() {
  const defer = ctx.helper.defer();
  setTimeout(function() {
    defer.reslove('1');
  },1000)
  return defer.promise
}

test().then((result)=>{
  result === '1'
})
```

#### ctx.helper.omit(obj, props)

* `obj` {Object} 要操作的对象
* `props` {String | Array} 要忽略的属性，如果是字符串，多个值用逗号隔开

忽略对象中的某些属性，返回新的对象

```
const value = ctx.helper.omit({a: 1, b: 2, c: 3}, 'a,b');
// value is {c: 3}
```

#### ctx.helper.md5(str)

* `str` {String}

计算字符串的 md5 值。

#### ctx.helper.timeout(num)

* `num`{Number} 时间，单位为毫秒

将 setTimeout 包装为 Promise

```
ctx.helper.timeout(1000).then(()=>{
  ...
})
```

#### ctx.helper.escapeHtml(str)

* `str` {String}

对字符串进行 HTML 转义，转义 `<`、`>`、`"`、`'` 字符。

#### ctx.helper.datetime(date, format)

* `data` {Date}
* `format` {String} default 'YYYY-MM-DD HH:mm:ss'

返回一个格式化日期

```
ctx.helper.datetime(1501406894849)
// return "2017-07-30 17:28:14"
```

#### ctx.helper.uuid(version)

* `version` {String} v1|v4
* `return` {String}

生成 uuid 字符串，符合 [RFC4122](http://www.ietf.org/rfc/rfc4122.txt) 规范，基于 [uuid](https://github.com/kelektiv/node-uuid) 模块。

#### ctx.helper.ms(str)

* `str` {String}
* `return` {Number}

把一个语义化的时间转成毫秒，如果转换失败则抛异常，使用 [ms](https://github.com/zeit/ms) 库转换。

```
ctx.helper.ms('2 days')  // 1d,10h,1y
// return 172800000
```

#### ctx.helper.isExist(path)

* `path` {String}

检测路径是否存在

```
ctx.helper.isExist('/usr/local/bin/node')
// return true
```

#### ctx.helper.isFile(filepath)

* `filepath` {String}

检测是否是一个文件路径

```
ctx.helper.isFile('/usr/local/bin/node')
// return true
```

#### ctx.helper.isDirectory(filepath)

* `filepath` {String}

检测是否是一个文件夹路径

```
ctx.helper.isDirectory('/usr/local/bin')
// return true
```

#### ctx.helper.chmod(path, mode)

* `path` {String}
* `mode` {String} default '0777'

改变文件或文件夹的权限

```
ctx.helper.chmod('/usr/local/bin', '0775')
```

#### ctx.helper.mkdir(path, mode)

* `path` {String} 要创建的目录
* `mode` {String} 文件夹权限，默认为 `0777`
* `return` {Boolean}

创建文件夹。创建成功返回 true, 失败返回 false。

```
ctx.helper.mkdir('/usr/local/bin/ctx.helperjs', '0775')
```

#### ctx.helper.getdirFiles(dir, prefix)

* `dir` {String} 文件夹路径
* `prefix` {String} 路径前缀
* `return` {Array} 包含所有文件的数组

获取文件夹下的所有文件。

```
ctx.helper.getdirFiles('/usr/local/bin')
// return []
```

#### ctx.helper.rmdir(path, reserve)

* `path` {String}
* `reserve` {Boolean} 是否保留当前的文件夹，只删除文件夹下的文件

删除文件夹和文件夹下的文件，异步操作。

```
ctx.helper.rmdir('/usr/local/bin/ctx.helperjs', true).then(()=>{
  console.log('删除完成')
})
```

### 常见问题

## 详细配置

请到 [config/config.default.js](config/config.default.js) 查看详细配置项说明。

## 单元测试

<!-- 描述如何在单元测试中使用此插件，例如 schedule 如何触发。无则省略。-->

## 提问交流

请到 [egg issues](https://github.com/ehitco/egg-helper/issues) 异步交流。

## License

[MIT](LICENSE)
